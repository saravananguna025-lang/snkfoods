
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SNK Foods — Premium Indian Grocery</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght=400;500;600;700;800&family=Playfair+Display:wght=600;700;900&display=swap" rel="stylesheet">
<style>
  :root {
    --primary: #0B4624;
    --accent: #D4AF37;
    --accent-dark: #AA841C;
    --text-dark: #1E293B;
    --text-light: #64748B;
    --bg-light: #F8FAFC;
    --card-bg: #FFFFFF;
    --danger: #EF4444;
  }
  
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
  body { background: var(--bg-light); color: var(--text-dark); padding-bottom: 100px; -webkit-tap-highlight-color: transparent; }
  
  header { position: sticky; top: 0; z-index: 1001; background: var(--primary); color: #fff; padding: 15px 20px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
  .header-left { display: flex; align-items: center; gap: 12px; }
  .menu-toggle { background: none; border: none; color: #fff; font-size: 26px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 4px; }
  .logo { display: flex; align-items: center; gap: 12px; }
  .logo-mark { width: 42px; height: 42px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-weight: 900; color: var(--primary); font-size: 18px; }
  .logo-text h1 { font-family: 'Playfair Display', serif; font-size: 22px; color: #fff; line-height: 1; }
  .logo-text span { font-size: 11px; color: var(--accent); letter-spacing: 1px; text-transform: uppercase; font-weight: 600; }
  .wa-quick { background: #25D366; color: #fff; border: none; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 10px rgba(37,211,102,0.3); }

  .hero { background: linear-gradient(135deg, #073018 0%, #0B4624 100%); color: #fff; padding: 40px 20px; text-align: center; border-bottom: 4px solid var(--accent); }
  .hero h2 { font-family: 'Playfair Display', serif; font-size: 32px; margin-bottom: 10px; color: #fff; }
  .hero h2 em { color: var(--accent); font-style: normal; }
  .hero p { font-size: 14px; color: #E2E8F0; max-width: 500px; margin: 0 auto 15px; opacity: 0.9; }
  .pills { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
  .pill { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: 600; }

  .catnav { position: sticky; top: 72px; z-index: 1000; background: #fff; border-bottom: 1px solid #E2E8F0; overflow-x: auto; white-space: nowrap; padding: 12px 16px; display: flex; gap: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); scroll-behavior: smooth; }
  .catnav::-webkit-scrollbar { display: none; }
  .catnav a { flex-shrink: 0; background: var(--bg-light); border: 1px solid #E2E8F0; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; color: var(--text-dark); text-decoration: none; transition: all 0.2s; }
  .catnav a.active, .catnav a:hover { background: var(--primary); color: #fff; border-color: var(--primary); }

  main { max-width: 1100px; margin: 0 auto; padding: 20px 16px; }
  .cat-section { margin-bottom: 40px; scroll-margin-top: 145px; }
  .cat-head { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; }
  .cat-head h3 { font-family: 'Playfair Display', serif; font-size: 24px; color: var(--primary); font-weight: 700; }
  .cat-line { flex: 1; height: 2px; background: #E2E8F0; }
  
  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 16px; }
  @media (max-width: 400px) {
    .products-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  }

  .product-card { background: var(--card-bg); border: 1px solid #E2E8F0; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; position: relative; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.02); will-change: transform; }
  .product-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.06); }
  
  .img-slot { width: 100%; aspect-ratio: 1/1; background: #F1F5F9; border-radius: 8px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: var(--text-light); overflow: hidden; position: relative; }
  .img-slot img { width: 100%; height: 100%; object-fit: cover; }
  
  .oos-badge { position: absolute; top: 8px; left: 8px; background: var(--danger); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; z-index: 2; }
  .oos-card { opacity: 0.6; }

  .pname { font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; line-height: 1.3; min-height: 36px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  
  .variant-wrapper { margin-bottom: 10px; }
  .punit-select { width: 100%; padding: 6px 8px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 12px; background: #fff; color: var(--text-dark); font-weight: 500; outline: none; cursor: pointer; }
  
  .price-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .price { font-size: 16px; font-weight: 800; color: var(--primary); }

  .action-container { width: 100%; min-height: 36px; display: flex; align-items: center; }
  .addbtn { width: 100%; background: var(--primary); color: #fff; border: none; height: 36px; border-radius: 8px; font-weight: 700; font-size: 13px; cursor: pointer; transition: background 0.2s; box-shadow: 0 2px 6px rgba(11,70,36,0.15); }
  .addbtn:hover { background: #073018; }
  .addbtn:disabled { background: #CBD5E1; color: #94A3B8; cursor: not-allowed; box-shadow: none; }
  
  .stepper { width: 100%; display: flex; align-items: center; justify-content: space-between; border: 2px solid var(--primary); border-radius: 8px; background: #fff; overflow: hidden; height: 36px; }
  .stepper button { width: 36px; height: 100%; border: none; background: var(--primary); color: #fff; font-size: 18px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
  .stepper button.minus { background: #E2E8F0; color: var(--text-dark); }
  .stepper button.minus:hover { background: #CBD5E1; }
  .stepper button.plus { background: var(--primary); color: #fff; }
  .stepper button.plus:hover { background: #073018; }
  .stepper .qty { font-size: 14px; font-weight: 800; color: var(--text-dark); flex: 1; text-align: center; }

  .float-cart { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #fff; padding: 14px 24px; border-radius: 30px; display: none; align-items: center; gap: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.25); z-index: 1100; cursor: pointer; font-weight: 700; font-size: 15px; width: 90%; max-width: 400px; justify-content: space-between; border: 1px solid rgba(255,255,255,0.2); }
  .float-cart .badge { background: var(--accent); color: var(--primary); border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }

  .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1900; display: none; backdrop-filter: blur(2px); }
  .overlay.show { display: block; }
  
  .drawer { position: fixed; top: 0; right: 0; bottom: 0; width: min(450px, 100vw); background: #fff; z-index: 2000; transform: translateX(100%); transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: column; box-shadow: -10px 0 30px rgba(0,0,0,0.15); }
  .drawer.open { transform: translateX(0); }
  .drawer-head { background: var(--primary); color: #fff; padding: 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid var(--accent); }
  .drawer-head h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: #fff; }
  .drawer-head .close { background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; opacity: 0.8; }
  
  .menu-drawer { position: fixed; top: 0; left: 0; bottom: 0; width: min(300px, 85vw); background: #fff; z-index: 2500; transform: translateX(-100%); transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: column; box-shadow: 10px 0 30px rgba(0,0,0,0.15); overflow: hidden; }
  .menu-drawer.open { transform: translateX(0); }
  .menu-drawer-head { background: var(--primary); color: #fff; padding: 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid var(--accent); flex-shrink: 0; }
  .menu-drawer-head h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: #fff; }
  .menu-drawer-head .close { background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; opacity: 0.8; }
  .menu-drawer-body { flex: 1; overflow-y: auto; padding: 10px 0; background: #fff; -webkit-overflow-scrolling: touch; }
  .menu-cat-link { display: block; padding: 14px 20px; color: var(--text-dark); text-decoration: none; font-weight: 600; font-size: 14px; border-bottom: 1px solid #F1F5F9; transition: background 0.2s; }
  .menu-cat-link:hover { background: var(--bg-light); color: var(--primary); }

  .menu-contact-box { background: var(--bg-light); padding: 16px 20px; border-top: 2px dashed #CBD5E1; margin-top: 15px; }
  .menu-contact-box h4 { font-size: 13px; font-weight: 800; color: var(--primary); text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.5px; }
  .menu-contact-box p { font-size: 13px; color: var(--text-dark); margin-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 500; }

  .ledger { flex: 1; overflow-y: auto; padding: 20px; background: #F8FAFC; }
  .lrow { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-size: 14px; }
  .lrow .lname { flex: 1; padding-right: 10px; font-weight: 600; }
  .lrow .lqty { width: 50px; text-align: center; font-weight: 700; color: var(--primary); }
  .lrow .lprice { width: 70px; text-align: right; font-weight: 700; }
  .lremove { background: none; border: none; color: var(--danger); font-size: 18px; cursor: pointer; margin-left: 10px; padding: 0 4px; }
  
  .empty-note { text-align: center; color: var(--text-light); padding: 50px 0; font-size: 14px; }
  .ltotal { border-top: 2px dashed #CBD5E1; margin-top: 15px; padding-top: 15px; display: flex; justify-content: space-between; font-weight: 800; font-size: 18px; color: var(--primary); }
  
  .drawer-form { padding: 15px 20px; border-top: 1px solid #E2E8F0; background: #fff; display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; max-height: 55vh; overflow-y: auto; }
  .drawer-form label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-light); font-weight: 700; margin-top: 4px; }
  .drawer-form select, .drawer-form input, .drawer-form textarea { padding: 9px 12px; border: 1px solid #CBD5E1; border-radius: 8px; font-size: 13px; background: #fff; outline: none; width: 100%; font-family: inherit; }
  .drawer-form textarea { resize: none; min-height: 60px; }
  
  .send-btn { background: #25D366; color: #fff; border: none; padding: 12px; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; margin-top: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 10px rgba(37,211,102,0.25); }
  
  footer { background: #073018; color: #fff; padding: 40px 20px; text-align: center; border-top: 4px solid var(--accent); }
  footer h4 { font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 12px; color: var(--accent); }
  footer p { font-size: 14px; opacity: 0.8; margin-bottom: 15px; }
  .admin-link { background: none; border: none; color: rgba(255,255,255,0.3); font-size: 12px; cursor: pointer; text-decoration: underline; margin-top: 10px; }

  .admin-overlay { position: fixed; inset: 0; background: #fff; z-index: 3000; display: none; flex-direction: column; }
  .admin-overlay.show { display: flex; }
  .admin-head { background: var(--primary); color: #fff; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; }
  .admin-head h3 { color: #fff; font-family: 'Playfair Display', serif; }
  .admin-head button { background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; }
  .admin-tabs { display: flex; gap: 10px; padding: 12px 20px; background: var(--bg-light); border-bottom: 1px solid #E2E8F0; }
  .admin-tabs button { background: #E2E8F0; border: none; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 13px; cursor: pointer; color: var(--text-dark); }
  .admin-tabs button.active { background: var(--primary); color: #fff; }
  
  .admin-body { flex: 1; overflow-y: auto; padding: 20px; max-width: 1000px; margin: 0 auto; width: 100%; }
  
  .admin-cat-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 2px solid var(--bg-light); padding-bottom: 6px; }
  .admin-cat-nav-btns { display: flex; gap: 5px; }
  .admin-cat-nav-btns button { background: #E2E8F0; border: none; font-size: 12px; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-weight: 700; }
  .admin-cat-nav-btns button:hover { background: #CBD5E1; }

  .admin-cat { background: #fff; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; margin-bottom: 20px; }
  .admin-cat h4 { font-size: 16px; color: var(--primary); font-weight: 700; }
  
  .admin-item-row { display: grid; grid-template-columns: 2fr 1.2fr 1.2fr 1.5fr 80px 40px; gap: 8px; margin-bottom: 10px; align-items: center; background: var(--bg-light); padding: 8px; border-radius: 6px; }
  .admin-item-row input { padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 13px; width: 100%; }
  .admin-item-row label { display: flex; flex-direction: column; align-items: center; font-size: 10px; font-weight: 700; color: var(--danger); cursor: pointer; }
  .admin-item-row button { background: var(--danger); color: #fff; border: none; border-radius: 6px; cursor: pointer; height: 34px; font-size: 16px; font-weight: 700; }
  
  .admin-btn-row { display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap; }
  .admin-btn-row button { background: var(--primary); color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-size: 13px; cursor: pointer; font-weight: 600; }
  .admin-btn-row button.secondary { background: #E2E8F0; color: var(--text-dark); }
  
  .save-bar { position: sticky; bottom: 0; background: #fff; border-top: 1px solid #E2E8F0; padding: 15px 20px; display: flex; justify-content: center; gap: 12px; z-index: 10; }
  .save-bar button { background: var(--primary); color: #fff; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 14px; }
  .save-bar button.reset { background: #E2E8F0; color: var(--text-dark); }
  .status-msg { font-size: 13px; text-align: center; padding: 8px; font-weight: 600; color: var(--primary); }

  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 4000; display: none; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(2px); }
  .modal-overlay.show { display: flex; }
  .modal-box { background: #fff; border-radius: 12px; padding: 20px; width: min(360px, 100%); box-shadow: 0 15px 40px rgba(0,0,0,0.3); border-top: 4px solid var(--primary); }
</style>
</head>
<body>

<header>
  <div class="header-left">
    <button class="menu-toggle" onclick="openMenuDrawer()">☰</button>
    <div class="logo">
      <div class="logo-mark">SNK</div>
      <div class="logo-text">
        <h1>SNK Foods</h1>
        <span>Premium Grocery</span>
      </div>
    </div>
  </div>
  <a class="wa-quick" href="https://wa.me/31685259659" target="_blank">📲 WhatsApp</a>
</header>

<section class="hero">
  <h2>Authentic Indian Taste, <br><em>Delivered Fresh.</em></h2>
  <p>Premium quality rice, fresh spices, lentils, and daily essentials curated for your kitchen.</p>
  <div class="pills">
    <span class="pill">📍 Den Haag</span>
    <span class="pill">📍 Rotterdam</span>
    <span class="pill">📍 Delft</span>
    <span class="pill">📍 Leiden</span>
  </div>
</section>

<nav class="catnav" id="catnav"></nav>

<main id="catalog">
  <div style="text-align:center; padding: 40px; color: var(--text-light);">Loading catalog items...</div>
</main>

<div class="float-cart" id="floatCart" onclick="openCart()">
  <span>🛒 <span id="floatText">0 items</span></span>
  <span class="badge" id="floatBadge">0</span>
</div>

<div class="overlay" id="overlay" onclick="closeAllDrawers()"></div>

<div class="menu-drawer" id="menuDrawer">
  <div class="menu-drawer-head">
    <h3>Categories Menu 📂</h3>
    <button class="close" onclick="closeMenuDrawer()">×</button>
  </div>
  <div class="menu-drawer-body" id="menuDrawerBody"></div>
  <div class="menu-contact-box">
    <h4>Contact Us 📞</h4>
    <p>📞 Phone: +31 6 85259659</p>
    <p>📍 Areas: Den Haag, Rotterdam, Delft, Leiden</p>
    <p>⏰ Hours: 09:00 AM - 08:00 PM</p>
  </div>
</div>

<div class="drawer" id="drawer">
  <div class="drawer-head">
    <h3>Your Basket Chit 🧾</h3>
    <button class="close" onclick="closeCart()">×</button>
  </div>
  <div class="ledger" id="ledger"></div>
  <div class="drawer-form">
    <label>Delivery Destination</label>
    <select id="area">
      <option>Den Haag</option>
      <option>Rotterdam</option>
      <option>Delft</option>
      <option>Leiden</option>
    </select>
    <label>Your Full Name</label>
    <input id="cname" placeholder="Enter your name">
    <label>Complete Address</label>
    <input id="caddr" placeholder="Street name, house number, postcode">
    
    <label>Review / Special Comments</label>
    <textarea id="ccomments" placeholder="Add items details notes, custom weights, or delivery notes..."></textarea>
    
    <button class="send-btn" id="sendBtn" onclick="sendOrder()">📲 Send Order to WhatsApp</button>
  </div>
</div>

<footer>
  <h4>SNK Foods Netherlands</h4>
  <p>Fresh groceries delivered straight to your doorstep.</p>
  <button class="admin-link" onclick="adminLogin()">Store Admin Portal</button>
</footer>

<div class="admin-overlay" id="adminOverlay">
  <div class="admin-head">
    <h3>SNK Operations Control</h3>
    <button onclick="closeAdmin()">×</button>
  </div>
  <div class="admin-tabs">
    <button id="tabOrdersBtn" class="active" onclick="showAdminTab('orders')">Customer Orders</button>
    <button id="tabProductsBtn" onclick="showAdminTab('products')">Inventory & Products</button>
  </div>
  <div class="admin-body" id="adminBody"></div>
  <div class="save-bar" id="saveBar" style="display:none;">
    <button onclick="saveCatalog()">Save & Update Live Catalog</button>
    <button class="reset" onclick="resetCatalog()">Reset to Defaults</button>
  </div>
  <div class="status-msg" id="adminStatus"></div>
</div>

<div class="modal-overlay" id="modalOverlay">
  <div class="modal-box">
    <div id="modalTitle" style="font-weight:700; font-size:15px; margin-bottom:12px; color: var(--text-dark);"></div>
    <input id="modalInput" style="width:100%; padding:10px; border:1px solid #CBD5E1; border-radius:6px; font-size:14px; margin-bottom:14px; box-sizing:border-box; outline:none;">
    <div style="display:flex; gap:10px; justify-content:flex-end;">
      <button id="modalCancel" style="background:#E2E8F0; border:none; padding:8px 16px; border-radius:6px; font-weight:600; cursor:pointer; font-size:13px; color:var(--text-dark);">Cancel</button>
      <button id="modalOk" style="background:var(--primary); color:#fff; border:none; padding:8px 16px; border-radius:6px; font-weight:600; cursor:pointer; font-size:13px;">Confirm</button>
    </div>
  </div>
</div>

<script>
const WA_NUMBER = "31685259659";
const ADMIN_PASSCODE = "snk2026";

const defaultCatalog = [
  { id:"vegetables", name:"Fresh Vegetables 🥕", items:[
    ["Onion", "1kg, 5kg", "1.49, 5.99", "", false],
    ["Tomato", "1kg", "1.99", "", false],
    ["Potato", "1kg, 2.5kg", "1.29, 2.99", "", false],
    ["Green Chillies", "200g", "1.49", "", false],
    ["Ginger", "250g", "1.89", "", false],
    ["Garlic", "500g", "2.29", "", false],
    ["Coriander Leaves", "1 Bunch", "0.79", "", false]
  ]},
  { id:"rice", name:"Rice & Atta", items:[
    ["Idli Rice", "5kg, 10kg", "9.99, 18.99", "", false],
    ["Ponni Boiled Rice", "5kg, 10kg", "11.49, 21.99", "", false],
    ["Sona Masoori Rice", "5kg, 10kg", "10.99, 19.99", "", false],
    ["Basmati Rice", "1kg, 5kg", "2.99, 12.49", "", false],
    ["Chakki Fresh Atta", "5kg, 10kg", "7.49, 13.99", "", false]
  ]},
  { id:"dals", name:"Dals & Pulses", items:[
    ["Toor Dal", "1kg", "2.99", "", false],
    ["Urad Dal (Whole)", "1kg", "3.49", "", false],
    ["Chana Dal", "1kg", "2.49", "", false],
    ["Moong Dal", "1kg", "2.89", "", false],
    ["Mustard Seeds", "200g", "1.19", "", false],
    ["Cumin Seeds", "200g", "1.89", "", false]
  ]},
  { id:"spices", name:"Masala Powders", items:[
    ["Sambar Powder", "200g, 500g", "2.49, 5.49", "", false],
    ["Chilli Powder", "200g, 500g", "1.99, 4.49", "", false],
    ["Coriander Powder", "250g, 500g", "1.89, 3.49", "", false],
    ["Turmeric Powder", "200g", "1.49", "", false],
    ["Garam Masala", "100g", "1.29", "", false],
    ["Chicken Masala", "100g", "1.39", "", false]
  ]}
];

let catalog = [];
let cart = {};
let isManualScrolling = false;

function loadCatalog(){
  try {
    const saved = localStorage.getItem('snk_catalog');
    if (saved) {
      catalog = JSON.parse(saved);
      renderCatalog();
      setupScrollSpy();
      return;
    }
  } catch(e) {
    console.log("Storage access error.");
  }
  
  catalog = JSON.parse(JSON.stringify(defaultCatalog));
  renderCatalog();
  setupScrollSpy();
}

function parseVariants(unitStr, priceStr) {
  const units = unitStr.split(',').map(s => s.trim());
  const prices = priceStr.split(',').map(s => parseFloat(s.trim()) || 0);
  return units.map((u, i) => ({ unit: u, price: prices[i] || prices[0] || 0 }));
}

function renderCatalog(){
  const navEl = document.getElementById('catnav');
  const mainEl = document.getElementById('catalog');
  const menuBodyEl = document.getElementById('menuDrawerBody');
  
  if(!navEl || !mainEl || !menuBodyEl) return;
  
  navEl.innerHTML = ''; mainEl.innerHTML = ''; menuBodyEl.innerHTML = '';
  
  catalog.forEach((cat, cIdx)=>{
    const navLink = document.createElement('a');
    navLink.href = `#cat-${cat.id}`;
    navLink.textContent = cat.name;
    navLink.setAttribute('data-id', cat.id);
    if(cIdx === 0) navLink.classList.add('active');
    
    navLink.onclick = (e) => {
      e.preventDefault();
      isManualScrolling = true;
      document.querySelectorAll('.catnav a').forEach(a => a.classList.remove('active'));
      navLink.classList.add('active');
      const targetSec = document.getElementById(`cat-${cat.id}`);
      if(targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => { isManualScrolling = false; }, 800);
    };
    navEl.appendChild(navLink);

    const menuLink = document.createElement('a');
    menuLink.href = `#cat-${cat.id}`;
    menuLink.className = 'menu-cat-link';
    menuLink.textContent = cat.name;
    menuLink.onclick = (e) => {
      e.preventDefault();
      closeMenuDrawer();
      isManualScrolling = true;
      const targetSec = document.getElementById(`cat-${cat.id}`);
      if(targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.catnav a').forEach(a => {
        if(a.getAttribute('data-id') === cat.id) {
          a.classList.add('active');
          a.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          a.classList.remove('active');
        }
      });
      setTimeout(() => { isManualScrolling = false; }, 800);
    };
    menuBodyEl.appendChild(menuLink);

    let cardsHtml = '';
    
    cat.items.forEach(([name, unitStr, priceStr, imgUrl, isOos], itemIdx)=>{
      const variants = parseVariants(unitStr, priceStr);
      const defaultPrice = variants[0].price;
      const initialKey = `${cat.id}||${name}||${variants[0].unit}`;
      const currentQty = cart[initialKey] ? cart[initialKey].qty : 0;
      
      let optionsHtml = variants.map((v, idx) => `<option value="${idx}">${v.unit}</option>`).join('');
      const fallbackImg = `https://dummyimage.com/300x300/f1f5f9/0b4624.png&text=${encodeURIComponent(name)}`;
      const finalImgSrc = imgUrl && imgUrl.trim() !== "" ? imgUrl.trim() : fallbackImg;
      const cleanName = escapeStr(name);

      cardsHtml += `
        <div class="product-card ${isOos ? 'oos-card' : ''}" id="card-${cat.id}-${itemIdx}">
          ${isOos ? `<div class="oos-badge">Out Of Stock</div>` : ''}
          <div>
            <div class="img-slot">
              <img src="${finalImgSrc}" alt="${name}" loading="lazy">
            </div>
            <div class="pname">${name}</div>
          </div>
          <div>
            <div class="variant-wrapper">
              <select class="punit-select" onchange="onVariantChange('${cat.id}', ${itemIdx}, '${cleanName}', this.value)">
                ${optionsHtml}
              </select>
            </div>
            <div class="price-row">
              <span class="price" id="price-${cat.id}-${itemIdx}">€${defaultPrice.toFixed(2)}</span>
            </div>
            <div class="action-container" id="action-${cat.id}-${itemIdx}">
              ${isOos ? `<button class="addbtn" disabled>Out of Stock</button>` : currentQty > 0 ? `
                <div class="stepper">
                  <button class="minus" onclick="handleQtyChange('${cat.id}', ${itemIdx}, '${cleanName}', -1)">−</button>
                  <span class="qty">${currentQty}</span>
                  <button class="plus" onclick="handleQtyChange('${cat.id}', ${itemIdx}, '${cleanName}', 1)">+</button>
                </div>
              ` : `<button class="addbtn" onclick="handleInitialAdd('${cat.id}', ${itemIdx}, '${cleanName}')">Add to Cart</button>`}
            </div>
          </div>
        </div>`;
    });
    
    mainEl.innerHTML += `
      <div class="cat-section" id="cat-${cat.id}">
        <div class="cat-head">
          <h3>${cat.name}</h3>
          <div class="cat-line"></div>
        </div>
        <div class="products-grid">${cardsHtml}</div>
      </div>`;
  });
}

function setupScrollSpy() {
  window.addEventListener('scroll', () => {
    if (isManualScrolling) return;
    const sections = document.querySelectorAll('.cat-section');
    const navLinks = document.querySelectorAll('.catnav a');
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 160;
      if (window.scrollY >= top) currentId = sec.id.replace('cat-', '');
    });
    if (currentId) {
      navLinks.forEach(a => {
        if (a.getAttribute('data-id') === currentId) {
          if (!a.classList.contains('active')) {
            a.classList.add('active');
            a.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        } else {
          a.classList.remove('active');
        }
      });
    }
  });
}

function getActiveVariantDetails(catId, itemIdx) {
  const cat = catalog.find(c => c.id === catId);
  const item = cat.items[itemIdx];
  const variants = parseVariants(item[1], item[2]);
  const cardEl = document.getElementById(`card-${catId}-${itemIdx}`);
  const selectEl = cardEl.querySelector('.punit-select');
  return variants[parseInt(selectEl.value) || 0];
}

function onVariantChange(catId, itemIdx, name, val) {
  const variant = getActiveVariantDetails(catId, itemIdx);
  document.getElementById(`price-${catId}-${itemIdx}`).textContent = `€${variant.price.toFixed(2)}`;
  refreshCardActionArea(catId, itemIdx, name);
}

function refreshCardActionArea(catId, itemIdx, name) {
  const cat = catalog.find(c => c.id === catId);
  const isOos = cat.items[itemIdx][4];
  const variant = getActiveVariantDetails(catId, itemIdx);
  const key = `${catId}||${name}||${variant.unit}`;
  const actionContainer = document.getElementById(`action-${catId}-${itemIdx}`);
  const cleanName = escapeStr(name);
  
  if (isOos) {
    actionContainer.innerHTML = `<button class="addbtn" disabled>Out of Stock</button>`;
  } else if (cart[key] && cart[key].qty > 0) {
    actionContainer.innerHTML = `
      <div class="stepper">
        <button class="minus" onclick="handleQtyChange('${catId}', ${itemIdx}, '${cleanName}', -1)">−</button>
        <span class="qty">${cart[key].qty}</span>
        <button class="plus" onclick="handleQtyChange('${catId}', ${itemIdx}, '${cleanName}', 1)">+</button>
      </div>`;
  } else {
    actionContainer.innerHTML = `<button class="addbtn" onclick="handleInitialAdd('${catId}', ${itemIdx}, '${cleanName}')">Add to Cart</button>`;
  }
}

function handleInitialAdd(catId, itemIdx, name) {
  const variant = getActiveVariantDetails(catId, itemIdx);
  const key = `${catId}||${name}||${variant.unit}`;
  cart[key] = { name, unit: variant.unit, price: variant.price, qty: 1 };
  refreshCardActionArea(catId, itemIdx, name);
  syncCartTotals();
}

function handleQtyChange(catId, itemIdx, name, delta) {
  const variant = getActiveVariantDetails(catId, itemIdx);
  const key = `${catId}||${name}||${variant.unit}`;
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];
  refreshCardActionArea(catId, itemIdx, name);
  syncCartTotals();
}

function escapeStr(s){ return s.replace(/'/g, "\\'"); }

function syncCartTotals(){
  const items = Object.values(cart);
  const totalCount = items.reduce((sum, i)=> sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i)=> sum + (i.qty * i.price), 0);
  const floatCart = document.getElementById('floatCart');
  if(totalCount > 0){
    document.getElementById('floatText').textContent = `${totalCount} item${totalCount!==1?'s':''} - €${totalPrice.toFixed(2)}`;
    document.getElementById('floatBadge').textContent = totalCount;
    floatCart.style.display = 'flex';
  } else {
    floatCart.style.display = 'none';
  }
  renderLedger();
}

function renderLedger(){
  const ledgerEl = document.getElementById('ledger');
  const items = Object.entries(cart);
  if(items.length === 0){
    ledgerEl.innerHTML = `<div class="empty-note">Your shopping basket is empty.</div>`;
    document.getElementById('sendBtn').disabled = true;
    return;
  }
  document.getElementById('sendBtn').disabled = false;
  let runningTotal = 0, html = '';
  items.forEach(([key, item])=>{
    runningTotal += item.qty * item.price;
    html += `
      <div class="lrow">
        <div class="lname">${item.name} <span style="color:var(--text-light); font-size:12px;">(${item.unit})</span></div>
        <div class="lqty">×${item.qty}</div>
        <div class="lprice">€${(item.qty * item.price).toFixed(2)}</div>
        <button class="lremove" onclick="removeBasketItem('${escapeStr(key)}')">×</button>
      </div>`;
  });
  ledgerEl.innerHTML = html + `<div class="ltotal"><span>Subtotal</span><span>€${runningTotal.toFixed(2)}</span></div>`;
}

function removeBasketItem(key) {
  delete cart[key];
  syncCartTotals();
  catalog.forEach((cat) => {
    cat.items.forEach((item, itemIdx) => { refreshCardActionArea(cat.id, itemIdx, item[0]); });
  });
}

function openCart(){ document.getElementById('drawer').classList.add('open'); document.getElementById('overlay').classList.add('show'); }
function closeCart(){ document.getElementById('drawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); }
function openMenuDrawer(){ document.getElementById('menuDrawer').classList.add('open'); document.getElementById('overlay').classList.add('show'); }
function closeMenuDrawer(){ document.getElementById('menuDrawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); }
function closeAllDrawers(){ closeCart(); closeMenuDrawer(); }

function sendOrder(){
  const items = Object.values(cart);
  if(items.length === 0) return;
  const area = document.getElementById('area').value;
  const name = document.getElementById('cname').value.trim();
  const addr = document.getElementById('caddr').value.trim();
  const comments = document.getElementById('ccomments').value.trim();
  
  if(!name || !addr) { customAlert("Please fill in your Name and complete Address."); return; }
  
  let total = 0;
  let lines = items.map((it, i)=>{ total += it.qty * it.price; return `${i+1}. ${it.name} (${it.unit}) x${it.qty} - €${(it.qty*it.price).toFixed(2)}`; }).join('\n');
  
  let msg = `Hello SNK Foods!\nOrder Request:\n\n${lines}\n\nTotal: €${total.toFixed(2)}\n\nDelivery to: ${area}\nName: ${name}\nAddress: ${addr}`;
  
  if(comments) {
    msg += `\n\nComments / Review: ${comments}`;
  }
  
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank');
}

let modalPromiseResolver = null;
function askModal(title, {showInput=true, okLabel="OK", cancelLabel="Cancel"}={}){
  return new Promise(resolve=>{
    modalPromiseResolver = resolve;
    document.getElementById('modalTitle').textContent = title;
    const input = document.getElementById('modalInput');
    input.style.display = showInput ? 'block' : 'none';
    input.value = '';
    document.getElementById('modalOk').textContent = okLabel;
    document.getElementById('modalCancel').style.display = cancelLabel ? 'inline-block' : 'none';
    document.getElementById('modalOverlay').classList.add('show');
    if(showInput) setTimeout(()=>input.focus(), 60);
  });
}
function completeModal(val){
  document.getElementById('modalOverlay').classList.remove('show');
  if(modalPromiseResolver) modalPromiseResolver(val);
  modalPromiseResolver = null;
}
document.getElementById('modalOk').onclick = ()=>{
  const input = document.getElementById('modalInput');
  completeModal(input.style.display==='none' ? true : input.value);
};
document.getElementById('modalCancel').onclick = ()=> completeModal(null);

async function customPrompt(t){ return await askModal(t, {showInput:true}); }
async function customConfirm(t){ return await askModal(t, {showInput:false, okLabel:"Yes", cancelLabel:"Cancel"}); }
async function customAlert(t){ await askModal(t, {showInput:false, okLabel:"OK", cancelLabel:""}); }

async function adminLogin(){
  const pass = await customPrompt("Enter admin passcode");
  if(pass === ADMIN_PASSCODE){ document.getElementById('adminOverlay').classList.add('show'); showAdminTab('orders'); }
  else if(pass !== null) { await customAlert("Access Denied."); }
}
function closeAdmin(){ document.getElementById('adminOverlay').classList.remove('show'); }

function showAdminTab(tab){
  document.getElementById('tabOrdersBtn').classList.toggle('active', tab==='orders');
  document.getElementById('tabProductsBtn').classList.toggle('active', tab==='products');
  document.getElementById('saveBar').style.display = tab==='products' ? 'flex' : 'none';
  if(tab==='orders') loadOrdersTab(); else loadProductsTab();
}

async function loadOrdersTab(){
  document.getElementById('adminBody').innerHTML = `<div style="text-align:center;padding:30px;color:var(--text-light);">Orders list synced from local storage memory.</div>`;
}

function loadProductsTab(){
  const body = document.getElementById('adminBody');
  body.innerHTML = catalog.map((cat, ci)=>`
    <div class="admin-cat">
      <div class="admin-cat-header-row">
        <h4>Category: ${cat.name}</h4>
        <div class="admin-cat-nav-btns">
          <button onclick="moveCategoryOrder(${ci}, -1)">▲ Up</button>
          <button onclick="moveCategoryOrder(${ci}, 1)">▼ Down</button>
        </div>
      </div>
      <div id="cat-items-${ci}">
        ${cat.items.map((item, ii)=>`
          <div class="admin-item-row" id="arow-${ci}-${ii}">
            <input value="${item[0].replace(/"/g,'&quot;')}" onchange="editItem(${ci},${ii},0,this.value)" placeholder="Name">
            <input value="${item[1]}" onchange="editItem(${ci},${ii},1,this.value)" placeholder="Variants">
            <input value="${item[2]}" onchange="editItem(${ci},${ii},2,this.value)" placeholder="Prices">
            <input value="${item[3] || ''}" onchange="editItem(${ci},${ii},3,this.value)" placeholder="Image URL">
            <label><input type="checkbox" ${item[4] ? 'checked' : ''} onchange="editItem(${ci},${ii},4,this.checked)"> OOS</label>
            <button onclick="removeItemRow(${ci},${ii})">×</button>
          </div>
        `).join('')}
      </div>
      <div class="admin-btn-row">
        <button onclick="addItemRow(${ci})">+ Add Product</button>
        <button class="secondary" onclick="removeCategory(${ci})">Delete Category</button>
      </div>
    </div>
  `).join('') + `
    <div class="admin-btn-row" style="margin-top:20px;">
      <button onclick="addCategory()" style="background:var(--accent); color:var(--primary); font-weight:700;">+ Create New Category</button>
    </div>`;
}

function moveCategoryOrder(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex >= 0 && targetIndex < catalog.length) {
    const temp = catalog[index]; catalog[index] = catalog[targetIndex]; catalog[targetIndex] = temp;
    loadProductsTab();
  }
}

function editItem(ci,ii,field,val){ catalog[ci].items[ii][field] = val; }
function addItemRow(ci){ catalog[ci].items.push(["New Grocery Item","1kg","1.99","", false]); loadProductsTab(); }
function removeItemRow(ci,ii){ catalog[ci].items.splice(ii,1); loadProductsTab(); }

async function addCategory(){
  const name = await customPrompt("Enter new category name:");
  if(!name) return;
  catalog.push({ id: 'cat'+Date.now(), name, items: [] });
  loadProductsTab();
}
async function removeCategory(ci){
  const ok = await customConfirm(`Are you sure you want to delete "${catalog[ci].name}"?`);
  if(ok){ catalog.splice(ci,1); loadProductsTab(); }
}

function saveCatalog(){
  const statusEl = document.getElementById('adminStatus');
  statusEl.textContent = "Publishing live...";
  try{
    localStorage.setItem('snk_catalog', JSON.stringify(catalog));
    statusEl.textContent = "Catalog successfully updated! ✓";
    renderCatalog();
    setupScrollSpy();
  }catch(e){ 
    statusEl.textContent = "Error saving changes."; 
  }
  setTimeout(()=>statusEl.textContent='', 3000);
}

function resetCatalog(){
  localStorage.removeItem('snk_catalog');
  catalog = JSON.parse(JSON.stringify(defaultCatalog));
  loadProductsTab(); renderCatalog(); setupScrollSpy();
}

loadCatalog();
</script>
</body>
</html>
