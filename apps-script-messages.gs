/* ============================================================
   SNK Foods - Customer Messages Inbox additions
   Add to your EXISTING Google Apps Script.
   ============================================================ */

// 1) In your doPost(e), add this line alongside the other checks
//    (note: this one checks data.type, not data.action):
//
//    if (data.type === 'customer_message') return handleCustomerMessage(data);
//
// 2) In your doGet(e), add this line alongside listOrders:
//
//    if (e.parameter.action === 'listMessages') return handleListMessages();

function getMessagesSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Messages');
  if (!sheet) {
    sheet = ss.insertSheet('Messages');
    sheet.appendRow(['Date', 'Message']);
  }
  return sheet;
}

function handleCustomerMessage(data) {
  const sheet = getMessagesSheet();
  sheet.appendRow([data.dateTime || new Date().toLocaleString(), data.message || '']);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleListMessages() {
  const sheet = getMessagesSheet();
  const rows = sheet.getDataRange().getValues();
  const messages = [];
  for (let i = rows.length - 1; i >= 1 && messages.length < 30; i--) {
    messages.push({ dateTime: rows[i][0], message: rows[i][1] });
  }
  return ContentService.createTextOutput(JSON.stringify({ success: true, messages: messages }))
    .setMimeType(ContentService.MimeType.JSON);
}
