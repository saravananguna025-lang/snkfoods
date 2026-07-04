<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SNK Foods — Indian Grocery, Delivered</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,600&family=Work+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --turmeric:#C8860D; --turmeric-dark:#9C6708;
    --leaf:#3C5A3E; --leaf-dark:#2A3F2C;
    --vermilion:#A63A2E; --rice:#FBF4E4; --rice-2:#F3E9D2;
    --charcoal:#241C15; --brass:#B8863B; --paper:#FFFDF7;
  }
  *{box-sizing:border-box;}
  body{margin:0;background:var(--rice);color:var(--charcoal);font-family:'Work Sans',sans-serif;padding-bottom:90px;}
  h1,h2,h3{font-family:'Fraunces',serif;margin:0;}
  .mono{font-family:'IBM Plex Mono',monospace;}

  header{position:sticky;top:0;z-index:40;background:var(--charcoal);color:var(--rice);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 10px rgba(0,0,0,.15);}
  .logo{display:flex;align-items:center;gap:10px;}
  .logo-mark{width:38px;height:38px;border-radius:8px;background:linear-gradient(135deg,var(--turmeric),var(--vermilion));display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-weight:900;color:var(--rice);font-size:16px;flex-shrink:0;}
  .logo-text h1{font-size:20px;letter-spacing:.5px;color:var(--rice);}
  .logo-text span{font-size:11px;opacity:.75;display:block;letter-spacing:1px;text-transform:uppercase;}
  .wa-quick{background:var(--leaf);color:#fff;border:none;padding:9px 14px;border-radius:20px;font-size:13px;font-weight:600;text-decoration:none;display:flex;align-items:center;gap:6px;}

  .hero{position:relative;min-height:60vh;display:flex;flex-direction:column;justify-content:flex-end;padding:0;text-align:left;color:var(--rice);
    background:
      linear-gradient(180deg, rgba(36,28,21,.05) 0%, rgba(36,28,21,.35) 45%, rgba(36,28,21,.94) 100%),
      url('https://images.unsplash.com/photo-1775433205046-86e060feff06?auto=format&fit=crop&w=1600&q=75') center/cover no-repeat;
  }
  .hero-kicker{padding:18px 20px 0;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--turmeric);}
  .hero-inner{padding:24px 20px 44px;max-width:600px;}
  .hero h2{font-size:clamp(30px,7vw,50px);line-height:1.08;font-weight:900;color:var(--rice);text-shadow:0 4px 20px rgba(0,0,0,.35);}
  .hero h2 em{color:var(--turmeric);}
  .hero p{max-width:520px;margin:16px 0 0;font-size:15px;line-height:1.6;color:rgba(255,253,247,.88);}
  .pills{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-start;margin-top:20px;}
  .pill{background:rgba(255,253,247,.12);border:1px solid rgba(255,253,247,.4);color:var(--rice);padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;backdrop-filter:blur(3px);}
  .hero-cta{margin-top:26px;display:inline-block;background:var(--vermilion);color:#fff;padding:14px 28px;border-radius:8px;font-weight:700;text-decoration:none;font-size:15px;box-shadow:0 6px 0 var(--turmeric-dark);}
  .delivery-note{margin-top:12px;font-size:12px;font-weight:600;color:var(--rice);opacity:.9;letter-spacing:.3px;}

  .catnav{position:sticky;top:66px;z-index:30;background:var(--rice);border-bottom:1px solid var(--rice-2);overflow-x:auto;white-space:nowrap;padding:10px 16px;display:flex;gap:8px;scroll-behavior:smooth;}
  .catnav a{flex-shrink:0;background:var(--paper);border:1px solid var(--rice-2);padding:7px 14px;border-radius:16px;font-size:13px;font-weight:600;color:var(--charcoal);text-decoration:none;}
  .catnav a:hover{border-color:var(--turmeric);}

  main { max-width: 920px; margin: 0 auto; padding: 10px 16px 120px; }
  .cat-section { margin-top: 30px; }
  .cat-head h3 { font-size: 22px; font-weight: 700; color: var(--charcoal); }
  .cat-rule { height: 2px; background: repeating-linear-gradient(90deg,var(--brass) 0 8px,transparent 8px 14px); margin: 8px 0 12px; }
  
  .table-container { background: var(--paper); border: 1px solid var(--rice-2); border-radius: 8px; padding: 0 8px; overflow: hidden; }
  
  /* FIXED WIDTH FOR STABILITY AND ACCESSIBILITY */
  .table-header {
    display: grid;
    grid-template-columns: 1fr 85px 65px 105px;
    padding: 10px 0;
    border-bottom: 2px solid var(--turmeric);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: #666;
    gap: 4px;
    align-items: center;
  }
  .item-row { 
    display: grid; 
    grid-template-columns: 1fr 85px 65px 105px; 
    align-items: center; 
    padding: 12px 0; 
    border-bottom: 1px solid var(--rice-2);
    gap: 4px;
  }
  .item-row:last-child { border-bottom: none; }
  
  .item-row .pname { font-weight: 600; font-size: 13.5px; line-height: 1.3; color: var(--charcoal); word-break: break-word; }
  .item-row .punit-select { padding: 4px 2px; border: 1px solid var(--rice-2); border-radius: 4px; font-size: 12px; font-family: 'Work Sans', sans-serif; background: #fff; width: 100%; text-align: center; }
  .item-row .price { font-family: 'IBM Plex Mono',monospace; font-weight: 600; color: var(--vermilion); font-size: 13.5px; text-align: right; padding-right: 2px; }
  
  /* FIXED STEPPER CUTOUT ISSUE */
  .stepper { display: flex; align-items: center; border: 1px solid var(--leaf); border-radius: 4px; overflow: hidden; background: white; justify-content: space-between; height: 32px; width: 100%; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
  .stepper button { width: 32px; height: 100%; border: none; background: var(--leaf); font-size: 16px; cursor: pointer; font-weight: 700; color: #ffffff; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
  .stepper button:active { background: var(--leaf-dark); }
  .stepper .qty { flex: 1; text-align: center; font-size: 13px; font-family: 'IBM Plex Mono',monospace; font-weight: 700; color: var(--charcoal); }
  
  .addbtn { background: var(--leaf); color: #fff; border: none; height: 32px; border-radius: 4px; font-weight: 600; font-size: 12.5px; cursor: pointer; width: 100%; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .addbtn:active { background: var(--leaf-dark); }

  .float-cart{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);background:var(--charcoal);color:var(--rice);padding:12px 22px;border-radius:30px;display:none;align-items:center;gap:10px;box-shadow:0 6px 20px rgba(0,0,0,.3);z-index:50;cursor:pointer;font-weight:600;font-size:14px;width:90%;max-width:340px;justify-content:space-between;}
  .float-cart .badge{background:var(--vermilion);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:12px;font-family:'IBM Plex Mono',monospace;}

  .overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:60;display:none;}
  .overlay.show{display:block;}
  .drawer{position:fixed;top:0;right:0;bottom:0;width:min(400px,92vw);background:var(--paper);z-index:61;transform:translateX(100%);transition:transform .23s ease-out;display:flex;flex-direction:column;box-shadow:-4px 0 20px rgba(0,0,0,.2);}
  .drawer.open{transform:translateX(0);}
  .drawer-head{background:var(--charcoal);color:var(--rice);padding:16px 18px;display:flex;justify-content:space-between;align-items:center;}
  .drawer-head h3{font-size:17px;color:var(--rice);}
  .drawer-head .close{background:none;border:none;color:var(--rice);font-size:22px;cursor:pointer;}
  .ledger{flex:1;overflow-y:auto;padding:16px 18px;background:repeating-linear-gradient(var(--paper) 0 33px, var(--rice-2) 33px 34px);}
  .lrow{display:flex;justify-content:space-between;align-items:center;padding:5px 0;font-size:13.5px;}
  .lrow .lname{flex:1;padding-right:8px;}
  .lrow .lqty{width:60px;font-family:'IBM Plex Mono',monospace;text-align:center;}
  .lrow .lprice{width:60px;text-align:right;font-family:'IBM Plex Mono',monospace;font-weight:600;}
  .lrow .lremove{background:none;border:none;color:var(--vermilion);font-size:16px;cursor:pointer;margin-left:6px;}
  .empty-note{text-align:center;opacity:.5;font-size:13px;padding:40px 0;}
  .ltotal{border-top:2px dashed var(--brass);margin-top:10px;padding-top:10px;display:flex;justify-content:space-between;font-weight:700;font-size:16px;}
  .drawer-form{padding:14px 18px;border-top:1px solid var(--rice-2);display:flex;flex-direction:column;gap:8px;}
  .drawer-form label{font-size:11px;text-transform:uppercase;letter-spacing:.5px;opacity:.6;font-weight:600;}
  .drawer-form select,.drawer-form input{padding:9px 10px;border:1px solid var(--rice-2);border-radius:6px;font-family:'Work Sans',sans-serif;font-size:14px;background:#fff;}
  .send-btn{background:var(--leaf);color:#fff;border:none;padding:13px;border-radius:8px;font-weight:700;font-size:14.5px;cursor:pointer;margin-top:4px;display:flex;align-items:center;justify-content:center;gap:8px;}
  
  footer{background:var(--charcoal);color:var(--rice);padding:36px 20px 26px;text-align:center;}
  footer h4{font-family:'Fraunces',serif;font-size:20px;margin-bottom:10px;}
  footer .fpills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:14px 0;}
  footer .fpills span{border:1px solid rgba(255,255,255,.2);padding:5px 12px;border-radius:16px;font-size:12px;}
  .admin-link{background:none;border:none;color:rgba(255,255,255,.35);font-size:11px;margin-top:18px;cursor:pointer;text-decoration:underline;}

  /* ADMIN */
  .admin-overlay{position:fixed;inset:0;background:var(--rice);z-index:80;display:none;flex-direction:column;}
  .admin-overlay.show{display:flex;}
  .admin-head{background:var(--charcoal);color:var(--rice);padding:14px 20px;display:flex;justify-content:space-between;align-items:center;}
  .admin-head h3{color:var(--rice);font-size:18px;}
  .admin-head button{background:none;border:none;color:var(--rice);font-size:22px;cursor:pointer;}
  .admin-tabs{display:flex;gap:8px;padding:12px 20px;background:var(--paper);border-bottom:1px solid var(--rice-2);}
  .admin-tabs button{background:var(--rice-2);border:none;padding:8px 16px;border-radius:16px;font-weight:600;font-size:13px;cursor:pointer;}
  .admin-tabs button.active{background:var(--leaf);color:#fff;}
  .admin-body{flex:1;overflow-y:auto;padding:18px 20px 60px;max-width:800px;margin:0 auto;width:100%;}
  .order-card{background:var(--paper);border:1px solid var(--rice-2);border-radius:10px;padding:14px;margin-bottom:12px;}
  .order-card .ohead{display:flex;justify-content:space-between;font-size:12px;opacity:.6;margin-bottom:6px;}
  .order-card .oitems{font-size:13.5px;line-height:1.5;margin-bottom:8px;}
  .order-card .ofoot{display:flex;justify-content:space-between;align-items:center;font-size:13px;}
  .order-card select{padding:6px 10px;border-radius:6px;border:1px solid var(--rice-2);font-size:12.5px;}
  .admin-cat{background:var(--paper);border:1px solid var(--rice-2);border-radius:10px;padding:14px;margin-bottom:14px;}
  .admin-cat h4{font-size:16px;margin-bottom:10px;}
  .admin-item-row{display:grid;grid-template-columns:1fr 100px 100px 30px;gap:6px;margin-bottom:6px;align-items:center;}
  .admin-item-row input{padding:6px 8px;border:1px solid var(--rice-2);border-radius:6px;font-size:12.5px;}
  .admin-item-row button{background:var(--vermilion);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:14px;}
  .admin-btn-row{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;}
  .admin-btn-row button{background:var(--leaf);color:#fff;border:none;padding:7px 12px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:600;}
  .admin-btn-row button.secondary{background:var(--rice-2);color:var(--charcoal);}
  .save-bar{position:sticky;bottom:0;background:var(--paper);border-top:1px solid var(--rice-2);padding:12px 20px;display:flex;justify-content:center;gap:10px;z-index:10;}
  .save-bar button{background:var(--turmeric-dark);color:#fff;border:none;padding:11px 22px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;}
  .status-msg{font-size:12px;text-align:center;padding:6px;opacity:.7;}

  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:100;display:none;align-items:center;justify-content:center;padding:20px;}
  .modal-overlay.show{display:flex;}
  .modal-box{background:var(--paper);border-radius:12px;padding:20px;width:min(320px,100%);box-shadow:0 10px 30px rgba(0,0,0,.3);}
</style>
</head>
<body>

<header>
  <div class="logo">
    <div class="logo-mark">SNK</div>
    <div class="logo-text">
      <h1>SNK Foods</h1>
      <span>Indian Grocery · Delivered</span>
    </div>
  </div>
  <a class="wa-quick" href="https://wa.me/31685259659" target="_blank">💬 WhatsApp</a>
</header>

<section class="hero">
  <div class="hero-kicker">SNK Foods — Fresh from home, delivered</div>
  <div class="hero-inner">
    <h2>Fresh Indian groceries,<br><em>delivered to your door.</em></h2>
    <p>Rice, dals, spices, snacks &amp; pooja items — order on WhatsApp and we deliver straight to your home.</p>
    <div class="pills">
      <span class="pill">📍 Den Haag</span>
      <span class="pill">📍 Rotterdam</span>
      <span class="pill">📍 Delft</span>
      <span class="pill">📍 Leiden</span>
    </div>
    <div class="delivery-note">🚚 Delivery only — no pickup at this time</div>
    <br>
    <a class="hero-cta" href="#catalog">Start Your Order ↓</a>
  </div>
</section>

<nav class="catnav" id="catnav"></nav>
<main id="catalog"><div class="loading-note">Loading products…</div></main>

<div class="float-cart" id="floatCart" onclick="openCart()">
  <span>🛒 <span id="floatText">0 items</span></span>
  <span class="badge" id="floatBadge">0</span>
</div>

<div class="overlay" id="overlay" onclick="closeCart()"></div>
<div class="drawer" id="drawer">
  <div class="drawer-head">
    <h3>Your Order Chit 🧾</h3>
    <button class="close" onclick="closeCart()">×</button>
  </div>
  <div class="ledger" id="ledger"></div>
  <div class="drawer-form">
    <label>Delivery Area</label>
    <select id="area">
      <option>Den Haag</option>
      <option>Rotterdam</option>
      <option>Delft</option>
      <option>Leiden</option>
    </select>
    <label>Your Name</label>
    <input id="cname" placeholder="Full name">
    <label>Delivery Address</label>
    <input id="caddr" placeholder="Street, house no., postcode">
    <button class="send-btn" id="sendBtn" onclick="sendOrder()">📲 Send Order via WhatsApp</button>
  </div>
</div>

<footer>
  <h4>SNK Foods</h4>
  <p style="font-size:13px;">Order anytime on WhatsApp: <a class="fwa" href="https://wa.me/31685259659" target="_blank">+31 6 85259659</a></p>
  <button class="admin-link" onclick="adminLogin()">Admin</button>
</footer>

<!-- ADMIN PANEL -->
<div class="admin-overlay" id="adminOverlay">
  <div class="admin-head">
    <h3>SNK Foods — Admin</h3>
    <button onclick="closeAdmin()">×</button>
  </div>
  <div class="admin-tabs">
    <button id="tabOrdersBtn" class="active" onclick="showAdminTab('orders')">Orders</button>
    <button id="tabProductsBtn" onclick="showAdminTab('products')">Products</button>
  </div>
  <div class="admin-body" id="adminBody"></div>
  <div class="save-bar" id="saveBar" style="display:none;">
    <button onclick="saveCatalog()">Save Product Changes</button>
    <button class="admin-btn-row secondary" style="background:var(--rice-2);color:var(--charcoal);border:none;padding:11px 18px;border-radius:8px;font-weight:600;cursor:pointer;" onclick="resetCatalog()">Reset to Default</button>
  </div>
  <div class="status-msg" id="adminStatus"></div>
</div>

<!-- CUSTOM MODAL -->
<div class="modal-overlay" id="modalOverlay">
  <div class="modal-box">
    <div id="modalTitle" style="font-weight:700;font-size:15px;margin-bottom:10px;"></div>
    <input id="modalInput" style="width:100%;padding:9px 10px;border:1px solid var(--rice-2);border-radius:6px;font-size:14px;margin-bottom:12px;box-sizing:border-box;">
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button id="modalCancel" style="background:var(--rice-2);border:none;padding:9px 16px;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">Cancel</button>
      <button id="modalOk" style="background:var(--leaf);color:#fff;border:none;padding:9px 16px;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;">OK</button>
    </div>
  </div>
</div>

<script>
const WA_NUMBER = "31685259659";
const ADMIN_PASSCODE = "snk2026"; 

const defaultCatalog = [
  { id:"spice", name:"Spices & Masala", items:[
    ["Coriander Powder", "250g, 500g, 1kg", "1.99, 3.49, 6.49"],
    ["Sambar Powder", "200g, 500g", "2.99, 5.99"],
    ["Chilli Powder", "200g, 500g, 1kg", "2.49, 4.49, 8.49"],
    ["Turmeric Powder", "200g", "1.99"],
    ["Mustard Seeds", "200g, 500g", "1.49, 2.99"]
  ]},
  { id:"rice", name:"Rice & Flour", items:[
    ["Idli Rice", "5kg, 10kg", "9.99, 18.99"],
    ["Ponni Boiled Rice", "5kg, 10kg", "11.49, 21.99"],
    ["Basmati Rice", "5kg", "13.99"],
    ["Chakki Fresh Atta", "5kg, 10kg", "7.49, 13.99"]
  ]},
  { id:"veg", name:"Fresh Vegetables", items:[
    ["Onion", "1kg, 5kg", "1.99, 8.49"],
    ["Tomato", "1kg", "2.49"],
    ["Potato", "1kg, 3kg", "1.79, 4.49"],
    ["Green Chilli", "250g", "1.49"]
  ]}
];

let catalog = [];
let cart = {}; 

function withTimeout(promise, ms=4000){
  return Promise.race([promise, new Promise((_, reject)=> setTimeout(()=> reject(new Error('timeout')), ms))]);
}

async function loadCatalog(){
  if(typeof window.storage === 'undefined'){
    catalog = JSON.parse(JSON.stringify(defaultCatalog));
    renderCatalog();
    return;
  }
  try{
    const res = await withTimeout(window.storage.get('catalog', true));
    catalog = JSON.parse(res.value);
  }catch(e){
    catalog = JSON.parse(JSON.stringify(defaultCatalog));
    withTimeout(window.storage.set('catalog', JSON.stringify(catalog), true)).catch(()=>{});
  }
  renderCatalog();
}

function parseVariants(unitStr, priceStr) {
  const units = unitStr.split(',').map(s => s.trim());
  const prices = priceStr.split(',').map(s => parseFloat(s.trim()) || 0);
  return units.map((u, i) => ({ unit: u, price: prices[i] || prices[0] || 0 }));
}

function renderCatalog(){
  const navEl = document.getElementById('catnav');
  const mainEl = document.getElementById('catalog');
  navEl.innerHTML = ''; mainEl.innerHTML = '';
  
  catalog.forEach(cat=>{
    navEl.innerHTML += `<a href="#cat-${cat.id}">${cat.name}</a>`;
    let rowsHtml = '';
    
    cat.items.forEach(([name, unitStr, priceStr], itemIdx)=>{
      const variants = parseVariants(unitStr, priceStr);
      const itemRowId = `row-${cat.id}-${itemIdx}`;
      
      const defaultUnit = variants[0].unit;
      const defaultPrice = variants[0].price;
      const initialKey = `${cat.id}||${name}||${defaultUnit}`;
      const inCart = cart[initialKey] && cart[initialKey].qty > 0;
      
      let optionsHtml = variants.map((v, idx) => `<option value="${idx}">${v.unit}</option>`).join('');

      rowsHtml += `
        <div class="item-row" id="${itemRowId}">
          <div class="pname">${name}</div>
          <div>
            <select class="punit-select" onchange="onUnitChange('${cat.id}', ${itemIdx}, '${escapeStr(name)}', this.value)">
              ${optionsHtml}
            </select>
          </div>
          <div class="price" id="price-${cat.id}-${itemIdx}">€${defaultPrice.toFixed(2)}</div>
          <div class="action-cell" id="action-${cat.id}-${itemIdx}">
            ${inCart ? `
              <div class="stepper">
                <button onclick="changeQtyViaUI('${cat.id}', ${itemIdx}, '${escapeStr(name)}', -1)">−</button>
                <div class="qty">${cart[initialKey].qty}</div>
                <button onclick="changeQtyViaUI('${cat.id}', ${itemIdx}, '${escapeStr(name)}', 1)">+</button>
              </div>
            ` : `
              <button class="addbtn" onclick="addViaUI('${cat.id}', ${itemIdx}, '${escapeStr(name)}')">Add</button>
            `}
          </div>
        </div>`;
    });
    
    mainEl.innerHTML += `
      <div class="cat-section" id="cat-${cat.id}">
        <div class="cat-head"><h3>${cat.name}</h3></div>
        <div class="cat-rule"></div>
        <div class="table-container">
          <div class="table-header">
            <div>Item Name</div>
            <div>Unit</div>
            <div style="text-align:right; padding-right:2px;">Price</div>
            <div style="text-align:center;">Action</div>
          </div>
          ${rowsHtml}
        </div>
      </div>`;
  });
}

function getSelectedVariant(catId, itemIdx) {
  const cat = catalog.find(c => c.id === catId);
  const item = cat.items[itemIdx];
  const variants = parseVariants(item[1], item[2]);
  const rowEl = document.getElementById(`row-${catId}-${itemIdx}`);
  const selectEl = rowEl.querySelector('.punit-select');
  const selectedIdx = parseInt(selectEl.value) || 0;
  return variants[selectedIdx];
}

function onUnitChange(catId, itemIdx, name, selectValue) {
  const variant = getSelectedVariant(catId, itemIdx);
  document.getElementById(`price-${catId}-${itemIdx}`).textContent = `€${variant.price.toFixed(2)}`;
  updateActionCell(catId, itemIdx, name);
}

function updateActionCell(catId, itemIdx, name) {
  const variant = getSelectedVariant(catId, itemIdx);
  const key = `${catId}||${name}||${variant.unit}`;
  const cell = document.getElementById(`action-${catId}-${itemIdx}`);
  
  if (cart[key] && cart[key].qty > 0) {
    cell.innerHTML = `
      <div class="stepper">
        <button onclick="changeQtyViaUI('${catId}', ${itemIdx}, '${escapeStr(name)}', -1)">−</button>
        <div class="qty">${cart[key].qty}</div>
        <button onclick="changeQtyViaUI('${catId}', ${itemIdx}, '${escapeStr(name)}', 1)">+</button>
      </div>`;
  } else {
    cell.innerHTML = `<button class="addbtn" onclick="addViaUI('${catId}', ${itemIdx}, '${escapeStr(name)}')">Add</button>`;
  }
}

function addViaUI(catId, itemIdx, name) {
  const variant = getSelectedVariant(catId, itemIdx);
  const key = `${catId}||${name}||${variant.unit}`;
  cart[key] = { name, unit: variant.unit, price: variant.price, qty: 1 };
  updateActionCell(catId, itemIdx, name);
  updateFloatCart();
  renderLedger();
}

function changeQtyViaUI(catId, itemIdx, name, delta) {
  const variant = getSelectedVariant(catId, itemIdx);
  const key = `${catId}||${name}||${variant.unit}`;
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];
  updateActionCell(catId, itemIdx, name);
  updateFloatCart();
  renderLedger();
}

function escapeStr(s){ return s.replace(/'/g,"\\'"); }

function updateFloatCart(){
  const items = Object.values(cart);
  const count = items.reduce((s,i)=>s+i.qty,0);
  const total = items.reduce((s,i)=>s+(i.qty*i.price),0);
  const fc = document.getElementById('floatCart');
  if(count > 0){
    document.getElementById('floatText').textContent = `${count} item${count!==1?'s':''} - €${total.toFixed(2)}`;
    document.getElementById('floatBadge').textContent = count;
    fc.style.display = 'flex';
  } else {
    fc.style.display = 'none';
  }
}

function renderLedger(){
  const ledgerEl = document.getElementById('ledger');
  const items = Object.entries(cart);
  if(items.length===0){
    ledgerEl.innerHTML = `<div class="empty-note">Your chit is empty.</div>`;
    document.getElementById('sendBtn').disabled = true;
    return;
  }
  document.getElementById('sendBtn').disabled = false;
  let total = 0, rows = '';
  items.forEach(([key,item])=>{
    const lineTotal = item.qty*item.price;
    total += lineTotal;
    rows += `
      <div class="lrow">
        <div class="lname">${item.name} <span style="opacity:.5">(${item.unit})</span></div>
        <div class="lqty">×${item.qty}</div>
        <div class="lprice">€${lineTotal.toFixed(2)}</div>
        <button class="lremove" onclick="removeLedgerItem('${key}')">×</button>
      </div>`;
  });
  ledgerEl.innerHTML = rows + `<div class="ltotal"><span>Total</span><span>€${total.toFixed(2)}</span></div>`;
}

function removeLedgerItem(key) {
  delete cart[key];
  renderLedger();
  updateFloatCart();
  catalog.forEach((cat) => {
    cat.items.forEach((item, itemIdx) => {
      updateActionCell(cat.id, itemIdx, item[0]);
    });
  });
}

function openCart(){ document.getElementById('drawer').classList.add('open'); document.getElementById('overlay').classList.add('show'); }
function closeCart(){ document.getElementById('drawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); }

function sendOrder(){
  const items = Object.values(cart);
  if(items.length===0) return;
  const area = document.getElementById('area').value;
  const name = document.getElementById('cname').value.trim();
  const addr = document.getElementById('caddr').value.trim();
  let total = 0;
  const lineList = items.map((item)=>{
    total += item.qty*item.price;
    return { name:item.name, unit:item.unit, qty:item.qty, price:item.price, lineTotal:+(item.qty*item.price).toFixed(2) };
  });
  const orderObj = {
    items: lineList, total:+total.toFixed(2), area,
    name: name || "(not given)", address: addr || "(not given)",
    status: "New", timestamp: Date.now()
  };

  let lines = lineList.map((it,i)=>`${i+1}. ${it.name} (${it.unit}) x${it.qty} - €${it.lineTotal.toFixed(2)}`).join('\n');
  let msg = `Hello SNK Foods!\nNew Order:\n\n${lines}\n\nTotal: €${orderObj.total.toFixed(2)}\n\nDelivery Area: ${area}\nName: ${orderObj.name}\nAddress: ${orderObj.address}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank');

  saveOrderInBackground(orderObj);
}

function saveOrderInBackground(orderObj){
  if(typeof window.storage === 'undefined') return;
  const key = 'order_'+Date.now()+'_'+Math.random().toString(36).slice(2,7);
  withTimeout(window.storage.set(key, JSON.stringify(orderObj), true)).catch(()=>{});
}

let modalResolve = null;
function askModal(title, {showInput=true, okLabel="OK", cancelLabel="Cancel"}={}){
  return new Promise(resolve=>{
    modalResolve = resolve;
    document.getElementById('modalTitle').textContent = title;
    const inputEl = document.getElementById('modalInput');
    inputEl.style.display = showInput ? 'block' : 'none';
    inputEl.value = '';
    document.getElementById('modalOk').textContent = okLabel;
    document.getElementById('modalCancel').textContent = cancelLabel;
    document.getElementById('modalCancel').style.display = cancelLabel ? 'inline-block' : 'none';
    document.getElementById('modalOverlay').classList.add('show');
    setTimeout(()=>inputEl.focus(), 50);
  });
}
function closeModalWith(val){
  document.getElementById('modalOverlay').classList.remove('show');
  if(modalResolve) modalResolve(val);
  modalResolve = null;
}
document.getElementById('modalOk').onclick = ()=>{
  const inputEl = document.getElementById('modalInput');
  closeModalWith(inputEl.style.display==='none' ? true : (inputEl.value || ''));
};
document.getElementById('modalCancel').onclick = ()=> closeModalWith(null);

async function customPrompt(title){ return await askModal(title, {showInput:true}); }
async function customConfirm(title){ return await askModal(title, {showInput:false, okLabel:"Yes", cancelLabel:"Cancel"}); }
async function customAlert(title){ await askModal(title, {showInput:false, okLabel:"OK", cancelLabel:""}); }

async function adminLogin(){
  const pass = await customPrompt("Enter admin passcode");
  if(pass === ADMIN_PASSCODE){
    document.getElementById('adminOverlay').classList.add('show');
    showAdminTab('orders');
  } else if(pass !== null) {
    await customAlert("Wrong passcode.");
  }
}
function closeAdmin(){ document.getElementById('adminOverlay').classList.remove('show'); }

function showAdminTab(tab){
  document.getElementById('tabOrdersBtn').classList.toggle('active', tab==='orders');
  document.getElementById('tabProductsBtn').classList.toggle('active', tab==='products');
  document.getElementById('saveBar').style.display = tab==='products' ? 'flex' : 'none';
  if(tab==='orders') loadOrdersTab(); else loadProductsTab();
}

async function loadOrdersTab(){
  const body = document.getElementById('adminBody');
  body.innerHTML = `<div class="loading-note">Loading orders…</div>`;
  let orders = [];
  try{
    const listRes = await withTimeout(window.storage.list('order_', true));
    const keys = (listRes && listRes.keys) || [];
    for(const k of keys){
      try{
        const r = await withTimeout(window.storage.get(k, true));
        orders.push({ key:k, ...JSON.parse(r.value) });
      }catch(e){}
    }
    orders.sort((a,b)=> b.timestamp - a.timestamp);
  }catch(e){}

  if(orders.length===0){
    body.innerHTML = `<div class="loading-note">No orders yet.</div>`;
    return;
  }
  body.innerHTML = orders.map(o=>{
    const itemsHtml = o.items.map(it=>`${it.name} (${it.unit}) x${it.qty} — €${it.lineTotal.toFixed(2)}`).join('<br>');
    const date = new Date(o.timestamp).toLocaleString();
    return `
      <div class="order-card">
        <div class="ohead"><span>${date}</span><span>${o.area}</span></div>
        <div class="oitems"><b>${o.name}</b> · ${o.address}<br>${itemsHtml}</div>
        <div class="ofoot">
          <b>Total: €${o.total.toFixed(2)}</b>
          <select onchange="updateOrderStatus('${o.key}', this.value)">
            ${["New","Confirmed","Out for delivery","Delivered"].map(s=>`<option ${s===o.status?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
      </div>`;
  }).join('');
}

async function updateOrderStatus(key, status){
  try{
    const r = await window.storage.get(key, true);
    const obj = JSON.parse(r.value);
    obj.status = status;
    await window.storage.set(key, JSON.stringify(obj), true);
  }catch(e){}
}

function loadProductsTab(){
  const body = document.getElementById('adminBody');
  body.innerHTML = catalog.map((cat,ci)=>`
    <div class="admin-cat">
      <h4>${cat.name}</h4>
      <p style="font-size:11px; color:#666; margin:-6px 0 10px;">Note: Units and prices must be separated by commas (e.g., 250g, 500g)</p>
      <div id="cat-items-${ci}">
        ${cat.items.map((item,ii)=>`
          <div class="admin-item-row" id="row-${ci}-${ii}">
            <input value="${item[0].replace(/"/g,'&quot;')}" onchange="editItem(${ci},${ii},0,this.value)" placeholder="Product name">
            <input value="${item[1]}" onchange="editItem(${ci},${ii},1,this.value)" placeholder="Units (e.g. 250g, 500g)">
            <input value="${item[2]}" onchange="editItem(${ci},${ii},2,this.value)" placeholder="Prices (e.g. 1.99, 3.49)">
            <button onclick="removeItemRow(${ci},${ii})">×</button>
          </div>
        `).join('')}
      </div>
      <div class="admin-btn-row">
        <button onclick="addItemRow(${ci})">+ Add product</button>
        <button class="secondary" onclick="removeCategory(${ci})">Delete category</button>
      </div>
    </div>
  `).join('') + `
    <div class="admin-btn-row">
      <button onclick="addCategory()">+ Add category</button>
    </div>`;
}

function editItem(ci,ii,field,val){ catalog[ci].items[ii][field] = val; }
function addItemRow(ci){ catalog[ci].items.push(["New product","250g, 500g","1.99, 3.49"]); loadProductsTab(); }
function removeItemRow(ci,ii){ catalog[ci].items.splice(ii,1); loadProductsTab(); }
async function addCategory(){
  const name = await customPrompt("New category name");
  if(!name) return;
  catalog.push({ id: 'cat'+Date.now(), name, items: [] });
  loadProductsTab();
}
async function removeCategory(ci){
  const ok = await customConfirm(`Delete category "${catalog[ci].name}"?`);
  if(ok){ catalog.splice(ci,1); loadProductsTab(); }
}
async function saveCatalog(){
  const statusEl = document.getElementById('adminStatus');
  statusEl.textContent = "Saving…";
  try{
    await window.storage.set('catalog', JSON.stringify(catalog), true);
    statusEl.textContent = "Saved ✓ — live on the site now.";
    renderCatalog();
  }catch(e){ statusEl.textContent = "Save failed, try again."; }
  setTimeout(()=>statusEl.textContent='', 3000);
}
async function resetCatalog(){
  const ok = await customConfirm("Reset all products to original list?");
  if(!ok) return;
  catalog = JSON.parse(JSON.stringify(defaultCatalog));
  try{ await window.storage.set('catalog', JSON.stringify(catalog), true); }catch(e){}
  loadProductsTab(); renderCatalog();
}

loadCatalog();
</script>
</body>
</html>
