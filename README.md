# online-market
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
  body{margin:0;background:var(--rice);color:var(--charcoal);font-family:'Work Sans',sans-serif;}
  h1,h2,h3{font-family:'Fraunces',serif;margin:0;}
  .mono{font-family:'IBM Plex Mono',monospace;}

  header{position:sticky;top:0;z-index:40;background:var(--charcoal);color:var(--rice);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 10px rgba(0,0,0,.15);}
  .logo{display:flex;align-items:center;gap:10px;}
  .logo-mark{width:38px;height:38px;border-radius:8px;background:linear-gradient(135deg,var(--turmeric),var(--vermilion));display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-weight:900;color:var(--rice);font-size:16px;flex-shrink:0;}
  .logo-text h1{font-size:20px;letter-spacing:.5px;color:var(--rice);}
  .logo-text span{font-size:11px;opacity:.75;display:block;letter-spacing:1px;text-transform:uppercase;}
  .wa-quick{background:var(--leaf);color:#fff;border:none;padding:9px 14px;border-radius:20px;font-size:13px;font-weight:600;text-decoration:none;display:flex;align-items:center;gap:6px;}

  .hero{padding:56px 20px 40px;text-align:center;background:
    radial-gradient(circle at 15% 20%, rgba(200,134,13,.12), transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(166,58,46,.10), transparent 40%);}
  .hero .eyebrow{font-family:'Fraunces',serif;font-style:italic;font-weight:600;color:var(--vermilion);font-size:16px;margin-bottom:6px;letter-spacing:.3px;}
  .hero h2{font-size:clamp(28px,6vw,46px);line-height:1.1;font-weight:900;color:var(--charcoal);}
  .hero h2 em{color:var(--turmeric-dark);font-style:normal;}
  .hero p{max-width:520px;margin:16px auto 0;font-size:15px;line-height:1.6;opacity:.85;}
  .pills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:20px;}
  .pill{background:var(--paper);border:1px solid var(--brass);color:var(--leaf-dark);padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;}
  .hero-cta{margin-top:26px;display:inline-block;background:var(--vermilion);color:#fff;padding:14px 28px;border-radius:8px;font-weight:700;text-decoration:none;font-size:15px;box-shadow:0 6px 0 var(--turmeric-dark);}
  .delivery-note{margin-top:10px;font-size:12px;font-weight:600;color:var(--leaf-dark);letter-spacing:.3px;}

  .catnav{position:sticky;top:66px;z-index:30;background:var(--rice);border-bottom:1px solid var(--rice-2);overflow-x:auto;white-space:nowrap;padding:10px 16px;display:flex;gap:8px;}
  .catnav a{flex-shrink:0;background:var(--paper);border:1px solid var(--rice-2);padding:7px 14px;border-radius:16px;font-size:13px;font-weight:600;color:var(--charcoal);text-decoration:none;}
  .catnav a:hover{border-color:var(--turmeric);}

  main{max-width:920px;margin:0 auto;padding:20px 16px 120px;}
  .loading-note{text-align:center;padding:60px 20px;opacity:.6;font-size:14px;}
  .cat-section{margin-top:44px;}
  .cat-head{display:flex;align-items:baseline;gap:10px;margin-bottom:4px;}
  .cat-head h3{font-size:24px;font-weight:700;}
  .cat-rule{height:2px;background:repeating-linear-gradient(90deg,var(--brass) 0 8px,transparent 8px 14px);margin:10px 0 18px;}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px;}
  .card{background:var(--paper);border:1px solid var(--rice-2);border-radius:10px;padding:14px;display:flex;flex-direction:column;gap:8px;}
  .card .pname{font-weight:600;font-size:14.5px;line-height:1.3;}
  .card .punit{font-size:12px;opacity:.6;}
  .card .prow{display:flex;align-items:center;justify-content:space-between;margin-top:auto;}
  .card .price{font-family:'IBM Plex Mono',monospace;font-weight:600;color:var(--vermilion);font-size:15px;}
  .stepper{display:flex;align-items:center;border:1px solid var(--rice-2);border-radius:6px;overflow:hidden;}
  .stepper button{width:26px;height:26px;border:none;background:var(--rice-2);font-size:16px;cursor:pointer;font-weight:600;}
  .stepper .qty{width:26px;text-align:center;font-size:13px;font-family:'IBM Plex Mono',monospace;}
  .addbtn{background:var(--leaf);color:#fff;border:none;padding:8px 0;border-radius:6px;font-weight:600;font-size:13px;cursor:pointer;}
  .addbtn.added{background:var(--turmeric-dark);}

  .float-cart{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);background:var(--charcoal);color:var(--rice);padding:12px 22px;border-radius:30px;display:none;align-items:center;gap:10px;box-shadow:0 6px 20px rgba(0,0,0,.3);z-index:50;cursor:pointer;font-weight:600;font-size:14px;}
  .float-cart .badge{background:var(--vermilion);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:12px;font-family:'IBM Plex Mono',monospace;}

  .overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:60;display:none;}
  .overlay.show{display:block;}
  .drawer{position:fixed;top:0;right:0;bottom:0;width:min(400px,92vw);background:var(--paper);z-index:61;transform:translateX(100%);transition:transform .25s ease;display:flex;flex-direction:column;box-shadow:-4px 0 20px rgba(0,0,0,.2);}
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
  .send-btn:disabled{opacity:.4;}
  .send-note{font-size:11px;opacity:.55;text-align:center;margin-top:2px;}

  footer{background:var(--charcoal);color:var(--rice);padding:36px 20px 26px;text-align:center;}
  footer h4{font-family:'Fraunces',serif;font-size:20px;margin-bottom:10px;}
  footer .fpills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:14px 0;}
  footer .fpills span{border:1px solid rgba(255,255,255,.2);padding:5px 12px;border-radius:16px;font-size:12px;}
  footer .fnote{font-size:12px;opacity:.6;margin-top:16px;}
  footer a.fwa{color:var(--turmeric);font-weight:700;text-decoration:none;}
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
  .admin-item-row{display:grid;grid-template-columns:1fr 70px 80px 30px;gap:6px;margin-bottom:6px;align-items:center;}
  .admin-item-row input{padding:6px 8px;border:1px solid var(--rice-2);border-radius:6px;font-size:12.5px;}
  .admin-item-row button{background:var(--vermilion);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:14px;}
  .admin-btn-row{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;}
  .admin-btn-row button{background:var(--leaf);color:#fff;border:none;padding:7px 12px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:600;}
  .admin-btn-row button.secondary{background:var(--rice-2);color:var(--charcoal);}
  .save-bar{position:sticky;bottom:0;background:var(--paper);border-top:1px solid var(--rice-2);padding:12px 20px;display:flex;justify-content:center;gap:10px;}
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
  <div class="eyebrow">Welcome</div>
  <h2>Fresh Indian groceries,<br><em>delivered to your door.</em></h2>
  <p>Rice, dals, spices, snacks &amp; pooja items — order on WhatsApp and we deliver straight to your home. No shop visit needed.</p>
  <div class="pills">
    <span class="pill">📍 Den Haag</span>
    <span class="pill">📍 Rotterdam</span>
    <span class="pill">📍 Delft</span>
    <span class="pill">📍 Leiden</span>
  </div>
  <div class="delivery-note">🚚 Delivery only — no pickup at this time</div>
  <br>
  <a class="hero-cta" href="#catalog">Start Your Order ↓</a>
</section>

<nav class="catnav" id="catnav"></nav>

<main id="catalog"><div class="loading-note">Loading products…</div></main>

<div class="float-cart" id="floatCart" onclick="openCart()">
  🛒 <span id="floatText">0 items</span> <span class="badge" id="floatBadge">0</span>
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
    <div class="send-note">Order also gets saved so SNK Foods can track it.</div>
  </div>
</div>

<footer>
  <h4>SNK Foods</h4>
  <p style="opacity:.8;font-size:13px;">Your home-style Indian grocery, delivered.</p>
  <div class="fpills">
    <span>Den Haag</span><span>Rotterdam</span><span>Delft</span><span>Leiden</span>
  </div>
  <p style="font-size:13px;">Order anytime on WhatsApp: <a class="fwa" href="https://wa.me/31685259659" target="_blank">+31 6 85259659</a></p>
  <p class="fnote">Delivery only. Prices are indicative — final total confirmed on WhatsApp before dispatch.</p>
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

<!-- CUSTOM MODAL (replaces prompt/confirm/alert, which some app views block) -->
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
const ADMIN_PASSCODE = "snk2026"; // change this to something only you know

const defaultCatalog = [
  { id:"veg", name:"Fresh Vegetables", items:[
    ["Onion", "1kg", 1.99],
    ["Tomato", "1kg", 2.49],
    ["Potato", "1kg", 1.79],
    ["Green Chilli", "250g", 1.49],
    ["Curry Leaves", "bunch", 1.29],
    ["Coriander Leaves", "bunch", 1.29],
    ["Ginger", "250g", 1.99],
    ["Garlic", "250g", 1.99],
    ["Drumstick (Murungakkai)", "500g", 3.49],
    ["Brinjal", "500g", 2.29],
    ["Ladies Finger (Okra)", "500g", 2.49],
    ["Coconut (whole)", "1pc", 1.99],
  ]},
  { id:"rice", name:"Rice & Flour", items:[
    ["Idli Rice", "5kg", 9.99],
    ["Ponni Boiled Rice", "5kg", 11.49],
    ["Basmati Rice", "5kg", 13.99],
    ["Chakki Fresh Atta (Wheat Flour)", "5kg", 7.49],
    ["Rice Flour", "1kg", 2.99],
    ["Rava / Sooji", "1kg", 2.49],
  ]},
  { id:"dal", name:"Dals & Pulses", items:[
    ["Toor Dal", "1kg", 3.49],
    ["Moong Dal", "1kg", 3.29],
    ["Urad Dal", "1kg", 3.99],
    ["Chana Dal", "1kg", 3.29],
    ["Masoor Dal", "1kg", 2.99],
  ]},
  { id:"spice", name:"Spices & Masala", items:[
    ["Sambar Powder", "200g", 2.99],
    ["Rasam Powder", "200g", 2.99],
    ["Turmeric Powder", "200g", 1.99],
    ["Chilli Powder", "200g", 2.49],
    ["Garam Masala", "100g", 2.29],
    ["Mustard Seeds", "200g", 1.49],
  ]},
  { id:"snack", name:"Snacks & Namkeen", items:[
    ["Mixture", "200g", 2.99],
    ["Murukku", "200g", 2.99],
    ["Banana Chips", "200g", 2.49],
    ["Cashew Nuts", "200g", 4.99],
  ]},
  { id:"pickle", name:"Pappad & Pickles", items:[
    ["Appalam Papad", "200g", 2.49],
    ["Mango Pickle", "300g", 3.49],
    ["Lemon Pickle", "300g", 3.49],
    ["Garlic Pickle", "300g", 3.99],
  ]},
  { id:"tea", name:"Tea, Coffee & Beverages", items:[
    ["Tata Tea Gold", "250g", 3.49],
    ["Bru Coffee", "200g", 3.99],
    ["Bournvita", "500g", 4.49],
  ]},
  { id:"pooja", name:"Pooja Items", items:[
    ["Agarbathi (Incense)", "pack", 1.99],
    ["Camphor", "50g", 1.49],
    ["Kumkum & Turmeric Set", "set", 1.99],
    ["Cotton Wicks", "pack", 1.49],
  ]},
];

let catalog = [];
let cart = {}; // key -> {name,unit,price,qty}

// ---------- helper: never let a backend call hang forever ----------
function withTimeout(promise, ms=4000){
  return Promise.race([
    promise,
    new Promise((_, reject)=> setTimeout(()=> reject(new Error('timeout')), ms))
  ]);
}

// ---------- CATALOG LOAD/SAVE (shared backend storage) ----------
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

function renderCatalog(){
  const navEl = document.getElementById('catnav');
  const mainEl = document.getElementById('catalog');
  navEl.innerHTML = '';
  mainEl.innerHTML = '';
  catalog.forEach(cat=>{
    navEl.innerHTML += `<a href="#cat-${cat.id}">${cat.name}</a>`;
    let cardsHtml = '';
    cat.items.forEach(([name,unit,price])=>{
      const key = `${cat.id}||${name}||${unit}`;
      const ck = cssKey(key);
      cardsHtml += `
        <div class="card">
          <div class="pname">${name}</div>
          <div class="punit">${unit}</div>
          <div class="prow">
            <div class="price">€${Number(price).toFixed(2)}</div>
            <div class="stepper">
              <button onclick="changeQty('${key}',-1)">−</button>
              <div class="qty" id="qty-${ck}">0</div>
              <button onclick="changeQty('${key}',1)">+</button>
            </div>
          </div>
          <button class="addbtn" id="btn-${ck}" onclick="addFromCard('${key}','${escapeStr(name)}','${unit}',${price})">Add to order</button>
        </div>`;
    });
    mainEl.innerHTML += `
      <div class="cat-section" id="cat-${cat.id}">
        <div class="cat-head"><h3>${cat.name}</h3></div>
        <div class="cat-rule"></div>
        <div class="grid">${cardsHtml}</div>
      </div>`;
  });
  Object.keys(cart).forEach(k=>syncUI(k));
}

function cssKey(key){ return key.replace(/[^a-zA-Z0-9]/g,'_'); }
function escapeStr(s){ return s.replace(/'/g,"\\'"); }

// ---------- CART ----------
function addFromCard(key,name,unit,price){
  if(!cart[key]) cart[key] = {name,unit,price:Number(price),qty:0};
  cart[key].qty += 1;
  syncUI(key);
}
function changeQty(key,delta){
  if(!cart[key]) return;
  cart[key].qty += delta;
  if(cart[key].qty <= 0) delete cart[key];
  syncUI(key);
}
function syncUI(key){
  const ck = cssKey(key);
  const qtyEl = document.getElementById('qty-'+ck);
  const btnEl = document.getElementById('btn-'+ck);
  const qty = cart[key] ? cart[key].qty : 0;
  if(qtyEl) qtyEl.textContent = qty;
  if(btnEl){
    btnEl.textContent = qty>0 ? 'Added ✓' : 'Add to order';
    btnEl.classList.toggle('added', qty>0);
  }
  updateFloatCart();
  renderLedger();
}
function updateFloatCart(){
  const items = Object.values(cart);
  const count = items.reduce((s,i)=>s+i.qty,0);
  const fc = document.getElementById('floatCart');
  document.getElementById('floatText').textContent = count+" item"+(count!==1?'s':'');
  document.getElementById('floatBadge').textContent = count;
  fc.style.display = count>0 ? 'flex' : 'none';
}
function renderLedger(){
  const ledgerEl = document.getElementById('ledger');
  const items = Object.entries(cart);
  if(items.length===0){
    ledgerEl.innerHTML = `<div class="empty-note">Your chit is empty.<br>Add items from the catalog.</div>`;
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
        <button class="lremove" onclick="removeItem('${key}')">×</button>
      </div>`;
  });
  ledgerEl.innerHTML = rows + `<div class="ltotal"><span>Total</span><span>€${total.toFixed(2)}</span></div>`;
}
function removeItem(key){ delete cart[key]; syncUI(key); }
function openCart(){ document.getElementById('drawer').classList.add('open'); document.getElementById('overlay').classList.add('show'); }
function closeCart(){ document.getElementById('drawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); }

// ---------- ORDER SUBMIT (opens WhatsApp instantly; backend save happens in background) ----------
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

  // Build message and open WhatsApp FIRST, synchronously, so mobile browsers don't block the popup
  let lines = lineList.map((it,i)=>`${i+1}. ${it.name} (${it.unit}) x${it.qty} - €${it.lineTotal.toFixed(2)}`).join('\n');
  let msg = `Hello SNK Foods!\nNew Order:\n\n${lines}\n\nTotal: €${orderObj.total.toFixed(2)}\n\nDelivery Area: ${area}\nName: ${orderObj.name}\nAddress: ${orderObj.address}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank');

  // Save to backend afterwards, in the background — never blocks or delays the WhatsApp step
  saveOrderInBackground(orderObj);
}
function saveOrderInBackground(orderObj){
  if(typeof window.storage === 'undefined') return;
  const key = 'order_'+Date.now()+'_'+Math.random().toString(36).slice(2,7);
  withTimeout(window.storage.set(key, JSON.stringify(orderObj), true))
    .catch(e=> console.error('Order backup save failed (WhatsApp order still went through):', e));
}

// ---------- CUSTOM MODAL (works in sandboxed views where prompt/confirm/alert don't) ----------
let modalResolve = null;
function askModal(title, {isPassword=false, showInput=true, okLabel="OK", cancelLabel="Cancel"}={}){
  return new Promise(resolve=>{
    modalResolve = resolve;
    document.getElementById('modalTitle').textContent = title;
    const inputEl = document.getElementById('modalInput');
    inputEl.style.display = showInput ? 'block' : 'none';
    inputEl.type = isPassword ? 'password' : 'text';
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
document.getElementById('modalCancel').onclick = ()=> closeModalWith(inputEl_display_none_check());
function inputEl_display_none_check(){
  return document.getElementById('modalInput').style.display==='none' ? false : null;
}
document.getElementById('modalInput').addEventListener('keydown', e=>{
  if(e.key==='Enter') document.getElementById('modalOk').click();
});
async function customPrompt(title){ return await askModal(title, {showInput:true}); }
async function customConfirm(title){ return await askModal(title, {showInput:false, okLabel:"Yes", cancelLabel:"Cancel"}); }
async function customAlert(title){ await askModal(title, {showInput:false, okLabel:"OK", cancelLabel:""}); }

// ---------- ADMIN ----------
let adminUnlocked = false;
async function adminLogin(){
  const pass = await customPrompt("Enter admin passcode");
  if(pass === null || pass === '') return;
  if(pass === ADMIN_PASSCODE){
    adminUnlocked = true;
    document.getElementById('adminOverlay').classList.add('show');
    showAdminTab('orders');
  } else {
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

// Orders tab
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
  }catch(e){ orders = []; }

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
  }catch(e){ console.error(e); }
}

// Products tab
function loadProductsTab(){
  const body = document.getElementById('adminBody');
  body.innerHTML = catalog.map((cat,ci)=>`
    <div class="admin-cat">
      <h4>${cat.name}</h4>
      <div id="cat-items-${ci}">
        ${cat.items.map((item,ii)=>adminItemRow(ci,ii,item)).join('')}
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
function adminItemRow(ci,ii,item){
  return `<div class="admin-item-row" id="row-${ci}-${ii}">
    <input value="${item[0].replace(/"/g,'&quot;')}" onchange="editItem(${ci},${ii},0,this.value)" placeholder="Product name">
    <input value="${item[1]}" onchange="editItem(${ci},${ii},1,this.value)" placeholder="Unit">
    <input type="number" step="0.01" value="${item[2]}" onchange="editItem(${ci},${ii},2,this.value)" placeholder="Price">
    <button onclick="removeItemRow(${ci},${ii})">×</button>
  </div>`;
}
function editItem(ci,ii,field,val){ catalog[ci].items[ii][field] = field===2 ? parseFloat(val)||0 : val; }
function addItemRow(ci){
  catalog[ci].items.push(["New product","1kg",0]);
  loadProductsTab();
}
function removeItemRow(ci,ii){ catalog[ci].items.splice(ii,1); loadProductsTab(); }
async function addCategory(){
  const name = await customPrompt("New category name");
  if(!name) return;
  catalog.push({ id: 'cat'+Date.now(), name, items: [] });
  loadProductsTab();
}
async function removeCategory(ci){
  const ok = await customConfirm(`Delete category "${catalog[ci].name}" and all its products?`);
  if(ok){
    catalog.splice(ci,1);
    loadProductsTab();
  }
}
async function saveCatalog(){
  const statusEl = document.getElementById('adminStatus');
  statusEl.textContent = "Saving…";
  try{
    await window.storage.set('catalog', JSON.stringify(catalog), true);
    statusEl.textContent = "Saved ✓ — live on the site now.";
    renderCatalog();
  }catch(e){
    statusEl.textContent = "Save failed, try again.";
  }
  setTimeout(()=>statusEl.textContent='', 3000);
}
async function resetCatalog(){
  const ok = await customConfirm("Reset all products to the original default list? This discards your edits.");
  if(!ok) return;
  catalog = JSON.parse(JSON.stringify(defaultCatalog));
  try{ await window.storage.set('catalog', JSON.stringify(catalog), true); }catch(e){}
  loadProductsTab();
  renderCatalog();
}

loadCatalog();
</script>
</body>
</html>
