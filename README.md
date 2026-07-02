<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SNK Foods — Indian Grocery & Admin</title>
<style>
  :root {
    --turmeric: #C8860D; --leaf: #3C5A3E; --vermilion: #A63A2E; 
    --rice: #FBF4E4; --rice-2: #F3E9D2; --charcoal: #241C15; --paper: #FFFDF7;
  }
  * { box-sizing: border-box; font-family: sans-serif; margin: 0; padding: 0; }
  body { background: var(--rice); color: var(--charcoal); padding-bottom: 90px; }
  header { background: var(--charcoal); color: var(--rice); padding: 15px; text-align: center; font-weight: bold; position: sticky; top: 0; z-index: 10; font-size: 20px; display: flex; justify-content: space-between; align-items: center; }
  header button { background: var(--turmeric); color: white; border: none; padding: 5px 10px; border-radius: 4px; font-size: 12px; cursor: pointer; }
  .view-section { display: none; }
  .view-section.active { display: block; }
  .hero { text-align: center; padding: 25px 15px; background: var(--rice-2); }
  .hero h2 { color: var(--vermilion); font-size: 22px; }
  .hero p { font-size: 13px; margin-top: 5px; opacity: 0.8; font-weight: bold; }
  .cat-title { background: var(--turmeric); color: white; padding: 10px 15px; font-size: 16px; font-weight: bold; margin-top: 15px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; padding: 10px; }
  .card { background: var(--paper); border: 1px solid var(--rice-2); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; gap: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
  .pimg { width: 100%; height: 100px; object-fit: cover; border-radius: 6px; background: #eee; }
  .pname { font-weight: bold; font-size: 14px; min-height: 36px; line-height: 1.3; color: var(--charcoal); }
  .punit { font-size: 12px; color: #666; }
  .prow { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
  .price { font-weight: bold; color: var(--vermilion); font-size: 15px; }
  .stepper { display: flex; align-items: center; border: 1px solid var(--turmeric); border-radius: 4px; overflow: hidden; background: white; }
  .stepper button { width: 26px; height: 26px; border: none; background: var(--rice-2); font-weight: bold; font-size: 16px; cursor: pointer; }
  .stepper .qty { width: 26px; text-align: center; font-size: 13px; font-weight: bold; }
  
  /* Admin Styles */
  .admin-box { max-width: 500px; margin: 30px auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  .admin-box h3 { margin-bottom: 15px; color: var(--vermilion); }
  .admin-box input, .admin-box select { width: 100%; padding: 10px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; }
  .btn { width: 100%; padding: 12px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; color: white; }
  .btn-primary { background: var(--leaf); font-size: 15px; }
  .btn-danger { background: var(--vermilion); margin-top: 5px; }
  .admin-item-row { display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; background: white; margin-bottom: 5px; border-radius: 4px; }

  /* Floating Cart & Drawer */
  .float-cart { position: fixed; bottom: 15px; left: 50%; transform: translateX(-50%); background: var(--charcoal); color: var(--rice); padding: 12px 20px; border-radius: 30px; display: none; align-items: center; gap: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); z-index: 20; font-weight: bold; cursor: pointer; width: 92%; max-width: 350px; justify-content: space-between; }
  .float-cart .badge { background: var(--vermilion); padding: 4px 10px; border-radius: 12px; font-size: 12px; }
  .drawer { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 30; display: none; justify-content: flex-end; }
  .drawer.open { display: flex; }
  .drawer-content { background: var(--paper); width: 100%; max-width: 360px; height: 100%; display: flex; flex-direction: column; padding: 15px; }
  .drawer-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--rice-2); padding-bottom: 10px; margin-bottom: 10px; }
  .ledger { flex: 1; overflow-y: auto; }
  .lrow { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed var(--rice-2); font-size: 14px; }
  .ltotal { font-weight: bold; font-size: 16px; padding: 15px 0; display: flex; justify-content: space-between; border-top: 2px solid var(--turmeric); }
  .drawer-form { display: flex; flex-direction: column; gap: 10px; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); margin-top: 10px; }
</style>
</head>
<body>

<header>
  <span onclick="switchView('shop')" style="cursor:pointer;">🛒 SNK Foods</span>
  <button id="navBtn" onclick="toggleAdminNav()">Admin Login</button>
</header>

<div id="shopView" class="view-section active">
  <section class="hero">
    <h2>Fresh Indian Groceries</h2>
    <p>📍 Den Haag • Rotterdam • Delft • Leiden</p>
  </section>
  <main id="catalog"></main>
</div>

<div id="loginView" class="view-section">
  <div class="admin-box">
    <h3>Admin Login</h3>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button class="btn btn-primary" onclick="login()">Login</button>
  </div>
</div>

<div id="adminView" class="view-section">
  <div class="admin-box">
    <h3>Add / Update Product</h3>
    <select id="pCat">
      <option value="veg">🍅 Fresh Vegetables</option>
      <option value="rice">🌾 Rice & Flour</option>
      <option value="dal">🥣 Dals & Pulses</option>
    </select>
    <input type="text" id="pName" placeholder="Product Name (e.g. Onion)">
    <input type="text" id="pUnit" placeholder="Unit (e.g. 1kg)">
    <input type="number" step="0.01" id="pPrice" placeholder="Price in € (e.g. 1.99)">
    <input type="text" id="pImg" placeholder="Image URL (Optional)">
    <button class="btn btn-primary" onclick="saveProduct()">Save Product</button>
  </div>
  
  <div class="admin-box" style="max-width:600px;">
    <h3>Manage Current Products</h3>
    <div id="adminProductList"></div>
  </div>
</div>

<div class="float-cart" id="floatCart" onclick="openCart()">
  <span>View Order Chit 🧾</span>
  <span class="badge" id="floatBadge">0 items - €0.00</span>
</div>

<div class="drawer" id="drawer" onclick="closeCart(event)">
  <div class="drawer-content" onclick="event.stopPropagation()">
    <div class="drawer-head"><h3>Your Order Chit</h3><button onclick="closeCart(null)" style="font-size:24px; background:none; border:none; cursor:pointer;">×</button></div>
    <div class="ledger" id="ledger"></div>
    <div class="drawer-form">
      <input id="cname" placeholder="Your Full Name" style="padding:10px; border:1px solid #ccc; border-radius:4px;">
      <select id="area" style="padding:10px; border:1px solid #ccc; border-radius:4px;"><option>Den Haag</option><option>Rotterdam</option><option>Delft</option><option>Leiden</option></select>
      <input id="caddr" placeholder="Delivery Address" style="padding:10px; border:1px solid #ccc; border-radius:4px;">
      <button class="btn btn-primary" onclick="sendOrder()">📲 Send via WhatsApp</button>
    </div>
  </div>
</div>

<script>
const WA_NUMBER = "31685259659";
let isAdmin = false;

const defaultCatalog = {
  veg: [
    { name: "Onion (வெங்காயம்)", unit: "1kg", price: 1.99, img: "https://images.unsplash.com/photo-1580145692334-7065658633b7?w=300&auto=format&fit=crop&q=80" },
    { name: "Tomato (தக்காளி)", unit: "1kg", price: 2.49, img: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=300&auto=format&fit=crop&q=80" },
    { name: "Potato (உருளைக்கிழங்கு)", unit: "1kg", price: 1.79, img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&auto=format&fit=crop&q=80" },
    { name: "Green Chilli (பச்சை மிளகாய்)", unit: "250g", price: 1.49, img: "https://images.unsplash.com/photo-1565599837634-134bc3aadce8?w=300&auto=format&fit=crop&q=80" }
  ],
  rice: [
    { name: "Idli Rice (இட்லி அரிசி)", unit: "5kg", price: 9.99, img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
    { name: "Ponni Rice (பொன்னி அரிசி)", unit: "5kg", price: 11.49, img: "https://images.unsplash.com/photo-1536304997881-a372c179924b?w=300&auto=format&fit=crop&q=80" }
  ],
  dal: [
    { name: "Toor Dal (துவரம் பருப்பு)", unit: "1kg", price: 3.49, img: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=300&auto=format&fit=crop&q=80" },
    { name: "Moong Dal (பாசிப் பருப்பு)", unit: "1kg", price: 3.29, img: "https://images.unsplash.com/photo-1600180758890-6b945f9a2ba6?w=300&auto=format&fit=crop&q=80" }
  ]
};

let db = JSON.parse(localStorage.getItem('snk_db')) || defaultCatalog;
let cart = {};

function saveDB() { localStorage.setItem('snk_db', JSON.stringify(db)); }

function switchView(view) {
  document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
  if(view === 'shop') document.getElementById('shopView').classList.add('active');
  if(view === 'login') document.getElementById('loginView').classList.add('active');
  if(view === 'admin') document.getElementById('adminView').classList.add('active');
}

function toggleAdminNav() {
  if(isAdmin) {
    isAdmin = false;
    document.getElementById('navBtn').textContent = "Admin Login";
    switchView('shop');
  } else {
    switchView('login');
  }
}

function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if(u === 'admin' && p === 'snk123') {
    isAdmin = true;
    document.getElementById('navBtn').textContent = "Logout Admin";
    switchView('admin');
    renderAdminProducts();
  } else {
    alert("Wrong Login Details!");
  }
}

function renderCatalog() {
  const mainEl = document.getElementById('catalog');
  const catNames = { veg: "🍅 Fresh Vegetables", rice: "🌾 Rice & Flour", dal: "🥣 Dals & Pulses" };
  let html = '';
  
  for (let cat in db) {
    if(db[cat].length === 0) continue;
    html += `<div class="cat-title">${catNames[cat]}</div><div class="grid">`;
    db[cat].forEach((item, index) => {
      const id = `${cat}-${index}`;
      const fallbackImg = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300";
      html += `<div class="card">
        <img class="pimg" src="${item.img || fallbackImg}" alt="${item.name}" loading="lazy">
        <div class="pname">${item.name}</div>
        <div class="punit">${item.unit}</div>
        <div class="prow">
          <div class="price">€${parseFloat(item.price).toFixed(2)}</div>
          <div class="stepper">
            <button onclick="updateQty('${id}','${item.name}',${item.price},-1)">−</button>
            <div class="qty" id="qty-${id}">${cart[id] ? cart[id].qty : 0}</div>
            <button onclick="updateQty('${id}','${item.name}',${item.price},1)">+</button>
          </div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }
  mainEl.innerHTML = html;
}

function updateQty(id, name, price, delta) {
  if (!cart[id]) cart[id] = { name, price, qty: 0 };
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  
  const qtyEl = document.getElementById(`qty-${id}`);
  if (qtyEl) qtyEl.textContent = cart[id] ? cart[id].qty : 0;
  updateCartUI();
}

function updateCartUI() {
  let count = 0, total = 0;
  Object.values(cart).forEach(item => { count += item.qty; total += item.qty * item.price; });
  const fc = document.getElementById('floatCart');
  const fb = document.getElementById('floatBadge');
  if (count > 0) { fb.textContent = `${count} items - €${total.toFixed(2)}`; fc.style.display = 'flex'; }
  else { fc.style.display = 'none'; }
}

function openCart() { document.getElementById('drawer').classList.add('open'); renderLedger(); }
function closeCart(e) { document.getElementById('drawer').classList.remove('open'); }

function renderLedger() {
  const ledgerEl = document.getElementById('ledger');
  let html = '', total = 0;
  Object.values(cart).forEach(item => {
    total += item.qty * item.price;
    html += `<div class="lrow"><span>${item.name} (x${item.qty})</span><span>€${(item.qty * item.price).toFixed(2)}</span></div>`;
  });
  html += `<div class="ltotal"><span>Total Amount</span><span>€${total.toFixed(2)}</span></div>`;
  ledgerEl.innerHTML = html;
}

function sendOrder() {
  const name = document.getElementById('cname').value;
  const area = document.getElementById('area').value;
  const addr = document.getElementById('caddr').value;
  if(!name || !addr) { alert("Please fill Name and Address"); return; }
  let msg = `*New Order from SNK Foods*\n\n*Name:* ${name}\n*Area:* ${area}\n*Address:* ${addr}\n\n*Items:*\n`;
  let total = 0;
  Object.values(cart).forEach(item => {
    msg += `- ${item.name} x ${item.qty} (€${(item.qty * item.price).toFixed(2)})\n`;
    total += item.qty * item.price;
  });
  msg += `\n*Total Bill:* €${total.toFixed(2)}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function saveProduct() {
  const cat = document.getElementById('pCat').value;
  const name = document.getElementById('pName').value;
  const unit = document.getElementById('pUnit').value;
  const price = parseFloat(document.getElementById('pPrice').value);
  const img = document.getElementById('pImg').value;
  
  if(!name || !unit || isNaN(price)) { alert("Please fill all details!"); return; }
  
  const existingIdx = db[cat].findIndex(i => i.name.toLowerCase() === name.toLowerCase());
  if(existingIdx > -1) {
    db[cat][existingIdx] = { name, unit, price, img };
  } else {
    db[cat].push({ name, unit, price, img });
  }
  
  saveDB();
  renderAdminProducts();
  renderCatalog();
  alert("Product Saved Successfully!");
  
  document.getElementById('pName').value = '';
  document.getElementById('pUnit').value = '';
  document.getElementById('pPrice').value = '';
  document.getElementById('pImg').value = '';
}

function deleteProduct(cat, idx) {
  if(confirm("Are you sure you want to delete this item?")) {
    db[cat].splice(idx, 1);
    saveDB();
    renderAdminProducts();
    renderCatalog();
  }
}

function renderAdminProducts() {
  const listEl = document.getElementById('adminProductList');
  let html = '';
  for(let cat in db) {
    db[cat].forEach((item, idx) => {
      html += `<div class="admin-item-row">
        <div><strong>${item.name}</strong> (${item.unit}) - €${item.price}</div>
        <button class="btn btn-danger" style="width:auto; padding:5px 10px; font-size:12px;" onclick="deleteProduct('${cat}', ${idx})">Delete</button>
      </div>`;
    });
  }
  listEl.innerHTML = html;
}

renderCatalog();
</script>
</body>
</html>
