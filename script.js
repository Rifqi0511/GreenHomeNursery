
const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp tokomu

const products = [
  {
    id: 1,
    name: "Monstera",
    category: "Tanaman hias",
    price: 65000,
    description: "Daun unik untuk sudut ruang yang estetik.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 2,
    name: "Lidah Mertua",
    category: "Tanaman hias",
    price: 35000,
    description: "Tanaman hias yang mudah dirawat.",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 3,
    name: "Sirih Gading",
    category: "Tanaman hias",
    price: 25000,
    description: "Tanaman rambat untuk rak atau gantungan.",
    image: "https://images.unsplash.com/photo-1616690248798-4f7c6b7f1c7b?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 4,
    name: "Bonsai Serut",
    category: "Bonsai",
    price: 150000,
    description: "Bonsai dengan bentuk alami dan indah.",
    image: "https://images.unsplash.com/photo-1612363148954-8c8f8f7a9f4a?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 5,
    name: "Bibit Tomat",
    category: "Bibit",
    price: 7000,
    description: "Mulai kebun kecil dari bibit pilihan.",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 6,
    name: "Pot Minimalis",
    category: "Pot",
    price: 18000,
    description: "Pot modern untuk tanaman kesayangan.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 7,
    name: "Media Tanam",
    category: "Perawatan",
    price: 15000,
    description: "Media untuk mendukung pertumbuhan tanaman.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 8,
    name: "Pupuk Organik",
    category: "Perawatan",
    price: 12000,
    description: "Nutrisi untuk membantu pertumbuhan tanaman.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 9,
    name: "Calathea",
    category: "Tanaman hias",
    price: 45000,
    description: "Daun dekoratif dengan corak warna unik.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 10,
    name: "Bonsai Beringin",
    category: "Bonsai",
    price: 200000,
    description: "Pilihan bonsai untuk pemula maupun kolektor.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 11,
    name: "Lidah Buaya",
    category: "Tanaman hias",
    price: 20000,
    description: "Tanaman sukulen yang praktis dirawat.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 12,
    name: "Bibit Cabai",
    category: "Bibit",
    price: 8000,
    description: "Bibit pilihan untuk kebun rumahan.",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 13,
    name: "Peace Lily",
    category: "Tanaman hias",
    price: 55000,
    description: "Tanaman hijau dengan bunga putih yang anggun.",
    image: "https://images.unsplash.com/photo-1597055181300-e3633a917c7b?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 14,
    name: "Kaktus Mini",
    category: "Tanaman hias",
    price: 15000,
    description: "Tanaman mungil untuk meja atau rak.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 15,
    name: "Bonsai Cemara",
    category: "Bonsai",
    price: 175000,
    description: "Bentuk artistik untuk mempercantik teras.",
    image: "https://images.unsplash.com/photo-1612363148954-8c8f8f7a9f4a?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 16,
    name: "Aglaonema",
    category: "Tanaman hias",
    price: 40000,
    description: "Tanaman berdaun dekoratif dengan warna menarik.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 17,
    name: "Bibit Terong",
    category: "Bibit",
    price: 7000,
    description: "Pilihan bibit untuk kebun di rumah.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 18,
    name: "Pot Terakota",
    category: "Pot",
    price: 22000,
    description: "Pot klasik untuk berbagai jenis tanaman.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=85"
  }
];

let cart = [];
let activeCategory = "Semua";

const rupiah = (number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);

function renderProducts(category = activeCategory) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const visibleProducts = category === "Semua"
    ? products
    : products.filter(product => product.category === category);

  grid.innerHTML = visibleProducts.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400/e9efdf/20533d?text=GreenHome+Plant';"
        >
      </div>

      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-bottom">
          <span class="product-price">${rupiah(product.price)}</span>
          <button
            class="add-btn"
            onclick="addToCart(${product.id})"
            aria-label="Tambah ${product.name} ke keranjang"
            title="Tambah ke keranjang"
          >+</button>
        </div>
      </div>
    </article>
  `).join("");
}

function filterProducts(category, button) {
  activeCategory = category;

  document.querySelectorAll(".filters button").forEach(item => {
    item.classList.remove("active");
  });

  if (button) button.classList.add("active");

  renderProducts(category);
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  toggleCart(true);
}

function changeQuantity(productId, amount) {
  const item = cart.find(product => product.id === productId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== productId);
  }

  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById("cart-count");

  if (countElement) countElement.textContent = count;

  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  if (!cartItems || !totalElement) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div style="font-size:36px">🪴</div>
        Keranjangmu masih kosong.<br>
        Yuk, pilih tanaman favoritmu!
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img
          src="${item.image}"
          alt="${item.name}"
          onerror="this.onerror=null;this.src='https://placehold.co/100x100/e9efdf/20533d?text=Plant';"
        >

        <div>
          <h3>${item.name}</h3>
          <p>${rupiah(item.price)}</p>

          <div class="quantity-controls">
            <button onclick="changeQuantity(${item.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </div>

        <button
          class="remove-item"
          onclick="removeFromCart(${item.id})"
        >Hapus</button>
      </div>
    `).join("");
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  totalElement.textContent = rupiah(total);

  const checkoutButton = document.getElementById("checkout-button");
  if (checkoutButton) {
    checkoutButton.disabled = cart.length === 0;
    checkoutButton.style.opacity = cart.length === 0 ? "0.5" : "1";
  }
}

function toggleCart(show) {
  const drawer = document.getElementById("drawer");
  const backdrop = document.getElementById("backdrop");

  if (!drawer || !backdrop) return;

  drawer.classList.toggle("open", show);
  backdrop.classList.toggle("show", show);

  document.body.style.overflow = show ? "hidden" : "";
}

function setupCartDrawer() {
  const drawer = document.getElementById("drawer");
  if (!drawer) return;

  // Membuat isi keranjang secara otomatis.
  drawer.innerHTML = `
    <div class="drawer-head">
      <div>
        <p class="eyebrow">PESANANMU</p>
        <h2>Keranjang</h2>
      </div>

      <button
        class="close-cart"
        onclick="toggleCart(false)"
        aria-label="Tutup keranjang"
      >×</button>
    </div>

    <div class="cart-items" id="cart-items"></div>

    <div class="cart-summary">
      <div class="total-row">
        <span>Total</span>
        <span id="cart-total">Rp0</span>
      </div>

      <form class="checkout-form" id="checkout-form">
        <label>
          Nama penerima
          <input
            type="text"
            id="customer-name"
            placeholder="Masukkan nama"
            required
          >
        </label>

        <label>
          Alamat pengiriman
          <textarea
            id="customer-address"
            placeholder="Masukkan alamat lengkap"
            required
          ></textarea>
        </label>

        <label>
          Catatan pesanan (opsional)
          <textarea
            id="customer-note"
            placeholder="Contoh: tanaman dikirim sore hari"
          ></textarea>
        </label>

        <button
          class="primary"
          id="checkout-button"
          type="submit"
          style="width:100%"
        >
          Pesan via WhatsApp ↗
        </button>
      </form>
    </div>
  `;

  document.getElementById("checkout-form").addEventListener(
    "submit",
    checkoutWhatsApp
  );
}

function checkoutWhatsApp(event) {
  event.preventDefault();

  if (cart.length === 0) {
    alert("Keranjangmu masih kosong.");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const address = document.getElementById("customer-address").value.trim();
  const note = document.getElementById("customer-note").value.trim();

  if (!name || !address) {
    alert("Mohon isi nama dan alamat pengiriman.");
    return;
  }

  const lines = cart.map(item =>
    `- ${item.name} x${item.quantity} = ${rupiah(item.price * item.quantity)}`
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const message = [
    "Halo GreenHome Nursery, saya ingin memesan:",
    "",
    ...lines,
    "",
    `Total produk: ${rupiah(total)}`,
    `Nama: ${name}`,
    `Alamat: ${address}`,
    note ? `Catatan: ${note}` : "",
    "",
    "Mohon konfirmasi ketersediaan produk dan ongkir. Terima kasih."
  ].filter(Boolean).join("\n");

  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (phone === "6281234567890" || phone.length < 9) {
    alert(
      "Ganti WHATSAPP_NUMBER di script.js dengan nomor WhatsApp tokomu sebelum menerima pesanan."
    );
    return;
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  setupCartDrawer();
  renderProducts();
  updateCart();

  const backdrop = document.getElementById("backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", () => toggleCart(false));
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") toggleCart(false);
  });
});
