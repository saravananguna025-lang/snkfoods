/* ============================================================
   SNK Foods - Orders UPDATE (adds Email + Postcode columns,
   and email status notifications)

   This REPLACES your existing getOrdersSheet, handleNewOrder,
   and handleListOrders functions (same names — just paste over
   the old versions). Also ADD the new handleSendStatusEmail
   function, and ADD one line to your doPost(e).
   ============================================================ */

// REPLACE your existing getOrdersSheet with this:
function getOrdersSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Orders');
  if (!sheet) {
    sheet = ss.insertSheet('Orders');
    sheet.appendRow(['Date','OrderID','Status','MemberCode','Phone','Email','Name','Address','Postcode','Location','Items','Subtotal','Discount','Tax','DeliveryFee','Total','Notes']);
  }
  return sheet;
}

// REPLACE your existing handleNewOrder with this:
function handleNewOrder(data) {
  const sheet = getOrdersSheet();
  sheet.appendRow([
    new Date(), data.orderId || '', data.status || 'Pending',
    data.memberCode || '', data.phone || '', data.email || '', data.name || '',
    data.address || '', data.postcode || '', data.location || '', data.items || '',
    data.subtotal || '', data.discount || '', data.tax || '',
    data.deliveryFee || '', data.total || '', data.notes || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// REPLACE your existing handleListOrders with this:
function handleListOrders() {
  const sheet = getOrdersSheet();
  const rows = sheet.getDataRange().getValues();
  const orders = [];
  for (let i = rows.length - 1; i >= 1 && orders.length < 25; i--) {
    orders.push({
      orderId: rows[i][1], status: rows[i][2], phone: rows[i][4], email: rows[i][5],
      name: rows[i][6], items: rows[i][10], total: rows[i][15]
    });
  }
  return ContentService.createTextOutput(JSON.stringify({ success: true, orders: orders }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ADD this new function (wasn't there before):
function handleSendStatusEmail(data) {
  if (!data.email) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: "No email provided." }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  const subject = "SNK Foods — Order " + data.orderId + " update";
  let body;
  if (data.status === 'Ready for Delivery') {
    body = "Hello " + (data.name || '') + ",\n\nGreat news — your SNK Foods order (" + data.orderId + ") is ready and on its way to you!\n\nThank you for shopping with us.\n\nSNK Foods";
  } else {
    body = "Hello " + (data.name || '') + ",\n\nUpdate on your SNK Foods order (" + data.orderId + "): status is now \"" + (data.status || 'being processed') + "\".\n\nThank you for your patience.\n\nSNK Foods";
  }
  MailApp.sendEmail(data.email, subject, body);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ADD this ONE line inside your existing doPost(e), alongside the other action checks:
//
//   if (data.action === 'sendStatusEmail') return handleSendStatusEmail(data);
