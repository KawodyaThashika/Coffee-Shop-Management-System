/* ════════════════════════════════════════
   Sip & Savor Café — Enhanced Script
   Features: Particle Canvas, Animated Stats,
   Modal with Size/Add-ons, Countdown Timer,
   Testimonial Slider, Theme Toggle, Toast, etc.
   ════════════════════════════════════════ */

/* ─── DATA ─────────────────────────────── */
const menuItems = [
    // ── Coffee ──
    {
        id: 1, name: "Classic Espresso", price: 3.50, category: "coffee", rating: 4.9, reviews: 312, sizable: true,
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
        description: "Rich and bold single shot with a perfect crema layer and deep roasted chocolate notes."
    },
    {
        id: 2, name: "Cappuccino", price: 4.50, category: "coffee", rating: 4.8, reviews: 247, sizable: true,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
        description: "Espresso with velvety steamed milk and a thick, airy cloud of microfoam."
    },
    {
        id: 3, name: "Latte", price: 4.75, category: "coffee", rating: 4.7, reviews: 198, sizable: true,
        image: "https://static.vecteezy.com/system/resources/thumbnails/002/741/024/small/hot-latte-art-coffee-on-wood-table-relax-time-photo.jpg",
        description: "Creamy espresso drink with perfectly steamed milk and a delicate rosette of latte art."
    },
    {
        id: 4, name: "Caramel Macchiato", price: 5.25, category: "coffee", rating: 4.9, reviews: 423, sizable: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuPFG2p5pa82pAMnVtFaQiIFE81WR23oeF3fR2YOGKg&s=10",
        description: "Vanilla-sweetened milk marked with bold espresso and finished with rich caramel drizzle."
    },
    {
        id: 5, name: "Flat White", price: 4.25, category: "coffee", rating: 4.6, reviews: 150, sizable: true,
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80",
        description: "Stronger than a latte with a higher espresso-to-milk ratio and silky microfoam."
    },
    {
        id: 6, name: "Mocha", price: 5.00, category: "coffee", rating: 4.8, reviews: 189, sizable: true,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        description: "Espresso blended with premium chocolate and steamed milk, topped with whipped cream."
    },

    // ── Cold Drinks ──
    {
        id: 10, name: "Iced Cold Brew", price: 5.50, category: "cold", rating: 4.9, reviews: 334, sizable: true,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
        description: "Slow-steeped for 18 hours — unbelievably smooth, zero bitterness. Best served over ice."
    },
    {
        id: 13, name: "Iced Matcha Latte", price: 5.25, category: "cold", rating: 4.7, reviews: 211, sizable: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MliJRraupVXZTU-hP0LAXtNg-zwlQUpXa8r-mCHt7w&s=10",
        description: "Ceremonial-grade matcha whisked smooth with cold oat milk over crushed ice."
    },
    {
        id: 14, name: "Frappuccino Blend", price: 5.75, category: "cold", rating: 4.5, reviews: 140, sizable: true,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        description: "Our signature blended coffee drink loaded with ice, milk and a whipped cream crown."
    },

    // ── Pastry ──
    {
        id: 20, name: "Blueberry Muffin", price: 3.00, category: "pastry", rating: 4.6, reviews: 92, sizable: false,
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=80",
        description: "Soft and moist, bursting with fresh blueberries and topped with a crunchy sugar crust."
    },
    {
        id: 21, name: "Butter Croissant", price: 3.25, category: "pastry", rating: 4.8, reviews: 203, sizable: false,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        description: "Classic French pastry made with 100% butter — shattering crisp exterior, cloud-soft inside."
    },
    {
        id: 22, name: "Chocolate Chunk Cookie", price: 2.50, category: "pastry", rating: 4.7, reviews: 178, sizable: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-P5Iwb6xPvif-7S3KvvMEPfFcmGHwh2JpDjKBrjX2w&s=10",
        description: "Thick, gooey and loaded with chunks of premium Belgian chocolate. Always fresh-baked."
    },
    {
        id: 23, name: "Cinnamon Roll", price: 3.75, category: "pastry", rating: 4.9, reviews: 261, sizable: false,
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80",
        description: "Pillowy soft spiral packed with cinnamon-sugar, drizzled with cream cheese glaze."
    },

    // ── Tea ──
    {
        id: 8, name: "Green Tea", price: 3.00, category: "tea", rating: 4.5, reviews: 78, sizable: true,
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80",
        description: "Premium first-flush green tea leaves steeped at exactly 80°C for the perfect cup."
    },
    {
        id: 9, name: "Chai Latte", price: 4.50, category: "tea", rating: 4.8, reviews: 165, sizable: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aOqvhDrZSZJZTCjiadqJKb_SrOifqt7Ny4ld2IhO2A&s=10",
        description: "Aromatic blend of Assam black tea, ginger, cardamom, clove and cinnamon with frothy milk."
    },
    {
        id: 16, name: "Earl Grey", price: 3.25, category: "tea", rating: 4.4, reviews: 58, sizable: true,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
        description: "Premium bergamot-infused Ceylon black tea — fragrant, delicate and perfectly balanced."
    },

    // ── Specials ──
    {
        id: 11, name: "Morning Combo", price: 6.50, category: "special", rating: 4.9, reviews: 87, sizable: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOUUR8FcTvWPInolhBH6p530sfLAr3bqsqIYCFpqEOg&s=10",
        description: "Our best-selling cappuccino paired with a fresh butter croissant. The ultimate morning duo."
    },
    {
        id: 12, name: "Honey Lavender Latte", price: 5.75, category: "special", rating: 5.0, reviews: 119, sizable: true,
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
        description: "Fragrant lavender syrup meets local wildflower honey in this dreamy signature latte."
    },
];

/* ─── Unique IDs for menu items (handle duplicate IDs for 'Special' items that use same images) ─── */
menuItems.forEach((item, i) => item._uid = item.id + '_' + i);

/* ─── STATE ─────────────────────────────── */
let cart = [];
let currentCategory = 'all';
let currentSearch = '';
let modalItem = null;
let modalQty = 1;

/* ─── DOM ───────────────────────────────── */
const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total-price');
const cartSubtotalEl = document.getElementById('cart-subtotal-price');
const cartTaxEl = document.getElementById('cart-tax');
const cartCountEl = document.getElementById('cart-count');
const cartCountLabel = document.getElementById('cart-count-label');
const checkoutBtn = document.getElementById('checkout-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
const menuSearch = document.getElementById('menu-search');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const noResults = document.getElementById('no-results');
const pageLoader = document.getElementById('page-loader');
const siteHeader = document.getElementById('site-header');
const toast = document.getElementById('toast');

// Checkout modal
const checkoutModal = document.getElementById('checkout-modal');
const checkoutModalClose = document.getElementById('checkout-modal-close');
const checkoutForm = document.getElementById('checkout-form');
const customerNameInput = document.getElementById('customer-name');
const orderNoteInput = document.getElementById('order-note');
const nameError = document.getElementById('name-error');
const noteChars = document.getElementById('note-chars');
const checkoutSummary = document.getElementById('checkout-summary');

// Modal
const itemModal = document.getElementById('item-modal');
const itemModalClose = document.getElementById('item-modal-close');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-desc');
const modalPriceEl = document.getElementById('modal-price');
const modalQtyEl = document.getElementById('modal-qty');
const modalTotalEl = document.getElementById('modal-total');
const modalAddBtn = document.getElementById('modal-add-btn');
const modalQtyMinus = document.getElementById('modal-qty-minus');
const modalQtyPlus = document.getElementById('modal-qty-plus');
const modalSizeSection = document.getElementById('modal-size-section');
const modalExtras = document.getElementById('modal-extras');

/* ════════════════════════════════════════
   INIT
   ════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    // Splash screen
    setTimeout(() => pageLoader.classList.add('hidden'), 1200);

    initTheme();
    initParticles();
    renderMenu();
    setupEventListeners();
    startCountdown();
    initScrollReveal();
    initStatsCounter();
    initTestimonialSlider();
    initHeaderScroll();
});

/* ════════════════════════════════════════
   PARTICLE CANVAS
   ════════════════════════════════════════ */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let W, H;

    function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

    class Particle {
        constructor() { this.reset(true); }
        reset(init = false) {
            this.x = Math.random() * W;
            this.y = init ? Math.random() * H : H + 20;
            this.size = Math.random() * 4 + 1.5;
            this.speedY = -(Math.random() * 0.4 + 0.15);
            this.speedX = (Math.random() - 0.5) * 0.2;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.opacityDir = (Math.random() > 0.5 ? 1 : -1) * 0.003;
            // 70% circles (steam), 30% coffee bean emoji replacement: just use varying shapes
            this.isRing = Math.random() > 0.65;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.opacity += this.opacityDir;
            if (this.opacity > 0.6 || this.opacity < 0.05) this.opacityDir *= -1;
            if (this.y < -20) this.reset();
        }
        draw() {
            const color = isDark() ? `rgba(212,163,90,${this.opacity})` : `rgba(111,78,55,${this.opacity * 0.6})`;
            ctx.save();
            ctx.globalAlpha = this.opacity;
            if (this.isRing) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.strokeStyle = color;
                ctx.lineWidth = 1.2;
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
            ctx.restore();
        }
    }

    const COUNT = 80;
    for (let i = 0; i < COUNT; i++) particles.push(new Particle());

    function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(loop);
    }
    loop();
}

/* ════════════════════════════════════════
   THEME TOGGLE
   ════════════════════════════════════════ */
function initTheme() {
    const saved = localStorage.getItem('ss-theme') || 'dark';
    applyTheme(saved);
}
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('ss-theme', theme);
}
themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ════════════════════════════════════════
   HEADER SCROLL EFFECT
   ════════════════════════════════════════ */
function initHeaderScroll() {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                siteHeader.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ════════════════════════════════════════
   SCROLL REVEAL
   ════════════════════════════════════════ */
function initScrollReveal() {
    const els = document.querySelectorAll('.reveal-up');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════
   ANIMATED COUNTER
   ════════════════════════════════════════ */
function initStatsCounter() {
    const statNums = document.querySelectorAll('.stat-num');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const target = +e.target.dataset.count;
                let current = 0;
                const step = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    current = Math.min(current + step, target);
                    e.target.textContent = current.toLocaleString();
                    if (current >= target) clearInterval(timer);
                }, 25);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    statNums.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════
   COUNTDOWN TIMER
   ════════════════════════════════════════ */
function startCountdown() {
    // Countdown to end of current day
    function getEndOfDay() {
        const d = new Date();
        d.setHours(23, 59, 59, 999);
        return d;
    }
    const endTime = getEndOfDay();

    function updateCountdown() {
        const now = new Date();
        const diff = endTime - now;
        if (diff <= 0) { document.getElementById('cd-hours').textContent = '00'; document.getElementById('cd-minutes').textContent = '00'; document.getElementById('cd-seconds').textContent = '00'; return; }
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
        document.getElementById('cd-minutes').textContent = String(m).padStart(2, '0');
        document.getElementById('cd-seconds').textContent = String(s).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* ════════════════════════════════════════
   TESTIMONIAL SLIDER
   ════════════════════════════════════════ */
function initTestimonialSlider() {
    const track = document.getElementById('testimonials-track');
    const dotsEl = document.getElementById('testimonial-dots');
    const cards = track.querySelectorAll('.testimonial-card');
    const total = cards.length;
    let current = 0;
    let autoplay;
    let startX = 0;
    let isDragging = false;

    // Build dots
    cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 't-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(dot);
    });

    function getVisibleCount() {
        return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }

    function goTo(index) {
        const vis = getVisibleCount();
        const max = Math.max(0, total - vis);
        current = Math.max(0, Math.min(index, max));
        const cardW = cards[0].offsetWidth + 24; // gap = 1.5rem = 24px
        track.style.transform = `translateX(-${current * cardW}px)`;
        dotsEl.querySelectorAll('.t-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function next() { goTo(current + 1 < total - getVisibleCount() + 1 ? current + 1 : 0); }

    // Drag / Swipe
    track.addEventListener('mousedown', e => { startX = e.clientX; isDragging = true; clearInterval(autoplay); });
    track.addEventListener('mousemove', e => { if (!isDragging) return; });
    track.addEventListener('mouseup', e => { if (!isDragging) return; isDragging = false; if (e.clientX - startX < -50) next(); else if (e.clientX - startX > 50) goTo(current - 1); startAutoplay(); });
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; clearInterval(autoplay); });
    track.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - startX; if (dx < -50) next(); else if (dx > 50) goTo(current - 1); startAutoplay(); });

    function startAutoplay() { autoplay = setInterval(next, 4000); }
    startAutoplay();
    window.addEventListener('resize', () => goTo(0));
}

/* ════════════════════════════════════════
   RENDER MENU
   ════════════════════════════════════════ */
function renderMenu() {
    menuGrid.innerHTML = '';
    const q = currentSearch.toLowerCase().trim();
    const filtered = menuItems.filter(item => {
        const catMatch = currentCategory === 'all' || item.category === currentCategory;
        const searchMatch = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
        return catMatch && searchMatch;
    });

    noResults.style.display = filtered.length === 0 ? 'block' : 'none';

    filtered.forEach((item, idx) => {
        const el = document.createElement('div');
        el.className = 'menu-item';
        el.style.animationDelay = `${idx * 0.06}s`;
        const stars = '★'.repeat(Math.round(item.rating)) + '☆'.repeat(5 - Math.round(item.rating));
        el.innerHTML = `
            <div class="menu-img-container">
                <img src="${item.image}" alt="${item.name}" class="menu-img" loading="lazy">
                <div class="menu-img-overlay">
                    <button class="quick-view-btn" onclick="openModal(${item.id}, event)">✦ Customize</button>
                </div>
                <span class="menu-category-tag">${item.category}</span>
            </div>
            <div class="menu-info">
                <div class="menu-header">
                    <h3 class="menu-title">${item.name}</h3>
                    <span class="menu-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-desc">${item.description}</p>
                <div class="menu-rating">
                    <span>${stars}</span>
                    <span>${item.rating}</span>
                    <span>(${item.reviews})</span>
                </div>
                <button class="add-btn" onclick="addToCart(${item.id}, event)" id="add-btn-${item.id}-${idx}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add to Cart
                </button>
            </div>`;
        menuGrid.appendChild(el);
    });
}

/* ════════════════════════════════════════
   ITEM MODAL
   ════════════════════════════════════════ */
window.openModal = function (id, e) {
    if (e) e.stopPropagation();
    const item = menuItems.find(i => i.id === id);
    if (!item) return;
    modalItem = item;
    modalQty = 1;

    modalImg.src = item.image;
    modalImg.alt = item.name;
    modalName.textContent = item.name;
    modalDesc.textContent = item.description;
    modalPriceEl.textContent = `$${item.price.toFixed(2)}`;
    modalQtyEl.textContent = 1;

    // Show/hide size section
    modalSizeSection.style.display = item.sizable ? '' : 'none';
    // Reset size
    document.querySelectorAll('input[name="item-size"]').forEach(r => { r.checked = r.value === 'S'; });
    // Reset extras
    document.querySelectorAll('.extra-option input').forEach(cb => cb.checked = false);

    updateModalTotal();
    itemModal.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

function closeModal() {
    itemModal.classList.remove('open');
    if (!cartSidebar.classList.contains('open')) {
        overlay.classList.remove('active');
    }
    document.body.style.overflow = '';
}

function getModalExtrasTotal() {
    let t = 0;
    document.querySelectorAll('.extra-option input:checked').forEach(cb => { t += parseFloat(cb.value); });
    return t;
}

function getModalSizeUpcharge() {
    const sel = document.querySelector('input[name="item-size"]:checked');
    return sel && sel.value === 'L' ? 0.75 : 0;
}

function updateModalTotal() {
    if (!modalItem) return;
    const total = (modalItem.price + getModalSizeUpcharge() + getModalExtrasTotal()) * modalQty;
    modalTotalEl.textContent = `$${total.toFixed(2)}`;
}

itemModalClose.addEventListener('click', closeModal);
modalQtyMinus.addEventListener('click', () => { if (modalQty > 1) { modalQty--; modalQtyEl.textContent = modalQty; updateModalTotal(); } });
modalQtyPlus.addEventListener('click', () => { modalQty++; modalQtyEl.textContent = modalQty; updateModalTotal(); });
document.querySelectorAll('input[name="item-size"]').forEach(r => r.addEventListener('change', updateModalTotal));
document.querySelectorAll('.extra-option input').forEach(cb => cb.addEventListener('change', updateModalTotal));

modalAddBtn.addEventListener('click', () => {
    if (!modalItem) return;

    // Build extras label
    const extrasLabels = [];
    document.querySelectorAll('.extra-option input:checked').forEach(cb => extrasLabels.push(cb.dataset.label));
    const sizeVal = document.querySelector('input[name="item-size"]:checked')?.value || 'M';
    const extraCost = getModalExtrasTotal() + getModalSizeUpcharge();
    const unitPrice = +(modalItem.price + extraCost).toFixed(2);

    const existingIdx = cart.findIndex(i => i.id === modalItem.id && i.size === sizeVal && JSON.stringify(i.extras) === JSON.stringify(extrasLabels));
    if (existingIdx > -1) {
        cart[existingIdx].quantity += modalQty;
    } else {
        cart.push({ ...modalItem, quantity: modalQty, size: modalItem.sizable ? sizeVal : null, extras: extrasLabels, unitPrice });
    }

    updateCartUI();
    showToast(`✓ ${modalItem.name} added to your order!`);
    bumpCartBtn();
    closeModal();
    openCart();
});

/* ════════════════════════════════════════
   CART FUNCTIONS
   ════════════════════════════════════════ */
window.addToCart = function (id, e) {
    if (e) e.stopPropagation();
    const item = menuItems.find(i => i.id === id);
    if (!item) return;
    const existing = cart.find(i => i.id === id && !i.size);
    if (existing) { existing.quantity++; }
    else { cart.push({ ...item, quantity: 1, size: null, extras: [], unitPrice: item.price }); }
    updateCartUI();
    showToast(`✓ ${item.name} added to your order!`);
    bumpCartBtn();
    openCart();
};

window.addToCartById = function (id) {
    window.addToCart(id, null);
};

window.removeFromCart = function (cartId) {
    cart = cart.filter(i => i._cartId !== cartId);
    updateCartUI();
    if (cart.length === 0) showEmptyCart();
};

window.changeQuantity = function (cartId, delta) {
    const item = cart.find(i => i._cartId === cartId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) { cart = cart.filter(i => i._cartId !== cartId); }
    updateCartUI();
};

let cartIdCounter = 0;
function updateCartUI() {
    // Assign stable cart IDs on first add
    cart.forEach(item => { if (!item._cartId) item._cartId = ++cartIdCounter; });

    cartItemsContainer.innerHTML = '';
    let subtotal = 0, count = 0;

    if (cart.length === 0) {
        showEmptyCart();
    } else {
        cart.forEach(item => {
            subtotal += item.unitPrice * item.quantity;
            count += item.quantity;
            const el = document.createElement('div');
            el.className = 'cart-item';
            const metaStr = [item.size ? `Size: ${item.size}` : null, ...(item.extras || [])].filter(Boolean).join(' · ');
            el.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <span class="cart-item-title">${item.name}</span>
                    ${metaStr ? `<span class="cart-item-meta">${metaStr}</span>` : ''}
                    <span class="cart-item-price">$${(item.unitPrice * item.quantity).toFixed(2)}</span>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQuantity(${item._cartId}, -1)" aria-label="Decrease">−</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity(${item._cartId},  1)" aria-label="Increase">+</button>
                    </div>
                </div>
                <button class="cart-remove-btn" onclick="removeFromCart(${item._cartId})" aria-label="Remove">&times;</button>`;
            cartItemsContainer.appendChild(el);
        });
    }

    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    cartTaxEl.textContent = `$${tax.toFixed(2)}`;
    cartTotalEl.textContent = `$${total.toFixed(2)}`;
    cartCountEl.textContent = count;
    cartCountEl.setAttribute('aria-label', `${count} items in cart`);
    cartCountLabel.textContent = `${count} item${count !== 1 ? 's' : ''}`;
}

function showEmptyCart() {
    cartItemsContainer.innerHTML = `
        <div class="empty-cart-msg">
            <span class="empty-cart-icon">☕</span>
            <p>Your cart is empty.</p>
            <a href="#menu" class="btn btn-primary" style="margin-top:0.5rem;" onclick="closeCart()">Browse Menu</a>
        </div>`;
    cartSubtotalEl.textContent = '$0.00';
    cartTaxEl.textContent = '$0.00';
    cartTotalEl.textContent = '$0.00';
    cartCountEl.textContent = 0;
    cartCountLabel.textContent = '0 items';
}

function bumpCartBtn() {
    cartBtn.classList.remove('bump');
    cartCountEl.classList.remove('pop');
    requestAnimationFrame(() => { requestAnimationFrame(() => { cartBtn.classList.add('bump'); cartCountEl.classList.add('pop'); }); });
    setTimeout(() => { cartBtn.classList.remove('bump'); cartCountEl.classList.remove('pop'); }, 500);
}

/* ════════════════════════════════════════
   CART OPEN / CLOSE
   ════════════════════════════════════════ */
function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    if (!itemModal.classList.contains('open')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

window.closeCart = closeCart;

/* ════════════════════════════════════════
   TOAST
   ════════════════════════════════════════ */
let toastTimer;
function showToast(msg) {
    clearTimeout(toastTimer);
    toast.innerHTML = msg;
    toast.classList.add('show', 'toast-success');
    toastTimer = setTimeout(() => toast.classList.remove('show', 'toast-success'), 2800);
}

/* ════════════════════════════════════════
   EVENT LISTENERS
   ════════════════════════════════════════ */
function setupEventListeners() {
    // Filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenu();
        });
    });

    // Search
    let searchDebounce;
    menuSearch.addEventListener('input', () => {
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(() => { currentSearch = menuSearch.value; renderMenu(); }, 300);
    });

    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    overlay.addEventListener('click', () => { closeCart(); closeModal(); });
    clearCartBtn.addEventListener('click', () => { if (cart.length === 0) return; cart = []; showEmptyCart(); showToast('🗑 Cart cleared.'); });

    // Checkout → open name modal
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) { showToast('⚠️ Your cart is empty!'); return; }
        openCheckoutModal();
    });

    // Hamburger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
        mobileNav.setAttribute('aria-hidden', !mobileNav.classList.contains('open'));
        hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => { hamburger.classList.remove('open'); mobileNav.classList.remove('open'); mobileNav.setAttribute('aria-hidden', 'true'); });
    });

    // Close modal on overlay click
    itemModal.addEventListener('click', e => { if (e.target === itemModal) closeModal(); });

    // Menu card click opens modal
    menuGrid.addEventListener('click', e => {
        const card = e.target.closest('.menu-item');
        if (!card) return;
        const addBtn = e.target.closest('.add-btn');
        const quickBtn = e.target.closest('.quick-view-btn');
        if (addBtn || quickBtn) return; // handled inline
        const idx = Array.from(menuGrid.children).indexOf(card);
        const q = currentSearch.toLowerCase().trim();
        const filtered = menuItems.filter(item => {
            const catMatch = currentCategory === 'all' || item.category === currentCategory;
            const searchMatch = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
            return catMatch && searchMatch;
        });
        if (filtered[idx]) openModal(filtered[idx].id, e);
    });

    // Smooth nav active highlighting on scroll
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const ioOpts = { rootMargin: '-40% 0px -55% 0px' };
    const sectionObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`); });
            }
        });
    }, ioOpts);
    sections.forEach(s => sectionObs.observe(s));
}

/* ════════════════════════════════════════
   CHECKOUT MODAL
   ════════════════════════════════════════ */
function openCheckoutModal() {
    // Build order summary
    let subtotal = 0;
    const rows = cart.map(item => {
        const lineTotal = item.unitPrice * item.quantity;
        subtotal += lineTotal;
        const meta = [item.size ? `Size ${item.size}` : null, ...(item.extras || [])].filter(Boolean).join(', ');
        return `<div class="co-row">
                    <span class="co-name">${item.name}${meta ? ` <small>(${meta})</small>` : ''} ×${item.quantity}</span>
                    <span class="co-price">$${lineTotal.toFixed(2)}</span>
                </div>`;
    });
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    checkoutSummary.innerHTML = `
        <div class="co-header">Order Summary</div>
        ${rows.join('')}
        <div class="co-divider"></div>
        <div class="co-row co-sub"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
        <div class="co-row co-sub"><span>Tax (8%)</span><span>$${tax.toFixed(2)}</span></div>
        <div class="co-row co-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>`;

    // Reset form state
    checkoutForm.reset();
    nameError.style.display = 'none';
    noteChars.textContent = '0 / 200';
    customerNameInput.classList.remove('input-invalid');
    // Remove success state if re-opened
    checkoutForm.style.display = '';
    const prevSuccess = checkoutModal.querySelector('.co-success');
    if (prevSuccess) prevSuccess.remove();

    checkoutModal.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => customerNameInput.focus(), 350);
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('open');
    if (!cartSidebar.classList.contains('open') && !itemModal.classList.contains('open')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close button
checkoutModalClose.addEventListener('click', closeCheckoutModal);
checkoutModal.addEventListener('click', e => { if (e.target === checkoutModal) closeCheckoutModal(); });

// Character counter for note
orderNoteInput.addEventListener('input', () => {
    noteChars.textContent = `${orderNoteInput.value.length} / 200`;
});

// Form submit
checkoutForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = customerNameInput.value.trim();
    if (!name) {
        nameError.style.display = 'block';
        customerNameInput.classList.add('input-invalid');
        customerNameInput.focus();
        return;
    }
    nameError.style.display = 'none';
    customerNameInput.classList.remove('input-invalid');

    // Build order snapshot
    let subtotal = 0;
    const orderItems = cart.map(item => {
        subtotal += item.unitPrice * item.quantity;
        return {
            name: item.name,
            category: item.category,
            qty: item.quantity,
            size: item.size,
            extras: item.extras || [],
            unitPrice: item.unitPrice,
            lineTotal: +(item.unitPrice * item.quantity).toFixed(2)
        };
    });
    const tax = +(subtotal * 0.08).toFixed(2);
    const total = +(subtotal + tax).toFixed(2);

    const saved = OrderStore.save({
        customerName: name,
        items: orderItems,
        subtotal: +subtotal.toFixed(2),
        tax,
        total,
        note: orderNoteInput.value.trim()
    });

    // Show success inside modal
    checkoutForm.style.display = 'none';
    const success = document.createElement('div');
    success.className = 'co-success';
    success.innerHTML = `
        <div class="co-success-icon">🎉</div>
        <h3>Order Placed!</h3>
        <p>Thank you, <strong>${name}</strong>! Your order has been received.</p>
        <p class="co-order-id">Order ID: <strong>${saved.id}</strong></p>
        <button class="btn btn-primary" onclick="closeCheckoutModal(); closeCart();" style="margin-top:1rem;width:100%;">
            Back to Menu
        </button>`;
    checkoutModal.querySelector('.checkout-modal-content').appendChild(success);

    // Clear cart
    cart = [];
    showEmptyCart();
    bumpCartBtn();
    showToast(`🎉 Order placed! Your ID: ${saved.id}`);
});

