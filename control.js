
// ── DATA ──────────────────────────────────────
const MENU = [
  // Brunch
  { id:'b1', cat:'brunch', name:'XO Full Brunch Plate', desc:'Eggs, sausage, bacon, grilled tomato & toast', price:'₦12,500', img:'images/IMG43.jpg' },
  { id:'b2', cat:'brunch', name:'Belgian Waffles', desc:'Fresh waffles with berries, cream & maple syrup', price:'₦9,800', img:'images/IMG8.jpg' },
  { id:'b3', cat:'brunch', name:'French Toast', desc:'Brioche french toast with cinnamon butter', price:'₦4,500', img:'images/IMG30.jpg' },
  //{ id:'b4', cat:'brunch', name:'Eggs Benedict', desc:'Poached eggs, hollandaise, smoked salmon on sourdough', price:'₦11,200', img:'https://images.unsplash.com/photo-1533920379810-6bedac9f34f0?w=400&q=75' },
  { id:'b4', cat:'brunch', name:'Grilled Chicken Garden Salad', desc:'Juicy grilled chicken layered over crimp arugula, fresh cabbage slaw', price:'₦11,200', img:'images/IMG40.jpg' },
  // Savoury
  { id:'s1', cat:'savoury', name:'Ram Burger', desc:'Juicy ram patty, caramelized onion, special XO sauce', price:'₦7,500', img:'images/IMG25.jpg' },
  { id:'s2', cat:'savoury', name:'Prawn Tacos', desc:'Crispy prawns, avocado, chipotle lime slaw', price:'₦5,500', img:'images/IMG7.jpg' },
  { id:'s3', cat:'savoury', name:'Club Sandwich', desc:'Turkey, bacon, egg, lettuce, tomato on toasted sourdough', price:'₦8,500', img:'images/IMG44.jpg' },
  { id:'s4', cat:'savoury', name:'Meat Pie', desc:'Buttery shortcrust with seasoned minced meat filling', price:'₦8,200', img:'images/IMG13.jpg' },
  // Pastry/Dessert
  { id:'p1', cat:'pastry', name:'Butter Croissant', desc:'Classic French butter croissant, golden & flaky', price:'₦3,500', img:'images/IMG11.jpg' },
  { id:'p2', cat:'pastry', name:'Cheesecake Slice', desc:'New York style cheesecake on graham crust', price:'₦5,300', img:'images/IMG12.jpg' },
  { id:'p3', cat:'pastry', name:'Frangipane Tart', desc:'Almond cream tart with seasonal fruit', price:'₦4,100', img:'images/IMG47.jpg' },
  { id:'p4', cat:'pastry', name:'Glazed Donuts', desc:'Hand-cut donuts with rotating daily glazes', price:'₦2,800', img:'images/IMG50.jpg' },
  { id:'p5', cat:'pastry', name:'Choco Cake', desc:'Custom cakes for any occasion — enquire for pricing', price:'From ₦15,000', img:'images/IMG10.jpg' },
  // Drinks
  { id:'d1', cat:'drink', name:'Frappuccino', desc:'Blended espresso with cream & caramel drizzle', price:'₦7,000', img:'images/IMG29.jpg' },
  { id:'d2', cat:'drink', name:'Matcha Latte', desc:'Ceremonial grade matcha with oat milk', price:'₦6,500', img:'images/IMG16.jpg' },
  { id:'d3', cat:'drink', name:'Flat White', desc:'Ristretto espresso with velvety micro-foam', price:'₦5,000', img:'images/IMG17.jpg' },
  { id:'d4', cat:'drink', name:'Fresh Smoothie', desc:'Seasonal fruit blends — ask for today\'s options', price:'₦5,800', img:'images/IMG19.jpg' },
];

const GALLERY_IMGS = [
  //{ src:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80', cat:'pastries', label:'Butter Croissants' },
  //{ src:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', cat:'brunch', label:'Brunch Plate' },
  //{ src:'images/IMG29.jpg', cat:'coffee', label:'Artisan Coffee' },
  //{ src:'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80', cat:'desserts', label:'Cheesecake' },
  { src:'images/IMG22.jpg', cat:'interior', label:'Café Interior' },
  { src:'images/IMG35.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG36.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG21.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG23.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG27.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG26.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG34.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG39.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG45.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG42.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG30.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG6.jpg', cat:'interior', label:'Gallery Images' },
  { src:'images/IMG31.jpg', cat:'interior', label:'Coffee Bar' },
  { src:'images/IMG19.jpg', cat:'coffee', label:'Frappuccino' },
  //{ src:'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80', cat:'coffee', label:'Matcha Latte' },
  //{ src:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80', cat:'pastries', label:'Tart' },
  { src:'images/IMG15.jpg', cat:'interior', label:'Dining Area' },
  //{ src:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', cat:'brunch', label:'Tacos' },
];

const IG_IMGS = [
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=75',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=75',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=75',
  'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&q=75',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=75',
  'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&q=75',
];

// ── PAGE ROUTING ──────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'home') initHomeAnimations();
  if (name === 'about') initCarousel('about-c-track', 'about-dots', 4);
  if (name === 'gallery') renderGallery('all');
}

// ── MOBILE MENU ──────────────────────────────
function toggleMobile() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ── NAVBAR SCROLL ────────────────────────────
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  nb.classList.toggle('scrolled', window.scrollY > 60);
});

// ── LIGHTBOX ─────────────────────────────────
let lbImages = [], lbIndex = 0;
function openLightbox(src) {
  lbImages = Array.from(document.querySelectorAll('#page-' + currentPage() + ' img[src]')).map(i => i.src);
  lbIndex = lbImages.indexOf(src);
  if (lbIndex < 0) { lbImages = [src]; lbIndex = 0; }
  document.getElementById('lb-img').src = lbImages[lbIndex];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbNav(dir) {
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  document.getElementById('lb-img').src = lbImages[lbIndex];
}
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});
function currentPage() {
  return document.querySelector('.page.active').id.replace('page-', '');
}

// ── MENU RENDER ──────────────────────────────
function renderMenuGrid(items, containerId) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = items.map(item => `
    <div class="menu-card">
      <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy" />
      <div class="menu-card-body">
        <p class="menu-card-name">${item.name}</p>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-card-price">${item.price}</span>
          <span class="menu-card-tag">${item.cat}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderMenuRows(items, containerId) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = items.map(item => `
    <div class="menu-row">
      <img class="menu-row-img" src="${item.img}" alt="${item.name}" loading="lazy" />
      <div>
        <p class="menu-row-name">${item.name}</p>
        <p class="menu-row-desc">${item.desc}</p>
      </div>
      <span class="menu-row-price">${item.price}</span>
    </div>
  `).join('');
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const items = cat === 'all' ? MENU : MENU.filter(m => m.cat === cat);
  renderMenuGrid(items, 'menu-grid-preview');
}

// ── GALLERY RENDER ───────────────────────────
function renderGallery(cat) {
  const items = cat === 'all' ? GALLERY_IMGS : GALLERY_IMGS.filter(g => g.cat === cat);
  const c = document.getElementById('masonry-gallery');
  if (!c) return;
  c.innerHTML = items.map(g => `
    <div class="masonry-item" onclick="openLightbox('${g.src}')">
      <img src="${g.src}" alt="${g.label}" loading="lazy" />
      <div class="overlay"><span class="overlay-text">${g.label}</span></div>
    </div>
  `).join('');
}

function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery(cat);
}

// ── MASONRY HOME ─────────────────────────────
function renderMasonryHome() {
  const c = document.getElementById('masonry-home');
  if (!c) return;
  const items = GALLERY_IMGS.slice(0, 8);
  c.innerHTML = items.map(g => `
    <div class="masonry-item" onclick="openLightbox('${g.src}')">
      <img src="${g.src}" alt="${g.label}" loading="lazy" />
      <div class="overlay"><span class="overlay-text">${g.label}</span></div>
    </div>
  `).join('');
}

// ── INSTAGRAM ────────────────────────────────
function renderInstagram() {
  const c = document.getElementById('ig-grid');
  if (!c) return;
  c.innerHTML = IG_IMGS.map(src => `
    <div class="ig-post" onclick="window.open('https://instagram.com/xobakery','_blank')">
      <img src="${src}" alt="XO Bakery Instagram" loading="lazy" />
      <div class="ig-overlay"><span class="ig-icon">📸</span></div>
    </div>
  `).join('');
}

// ── CAROUSEL ─────────────────────────────────
function initCarousel(trackId, dotsId, count) {
  let cur = 0;
  const track = document.getElementById(trackId);
  const dotsEl = document.getElementById(dotsId);
  if (!track || !dotsEl) return;
  dotsEl.innerHTML = Array.from({length: count}, (_,i) => `<div class="cdot ${i===0?'active':''}" onclick="goSlide(${i},'${trackId}','${dotsId}',${count})"></div>`).join('');
  window['_carousel_' + trackId] = setInterval(() => {
    cur = (cur + 1) % count;
    goSlide(cur, trackId, dotsId, count);
  }, 4000);
}
window.goSlide = (i, trackId, dotsId, count) => {
  document.getElementById(trackId).style.transform = `translateX(-${i*100}%)`;
  const dots = document.querySelectorAll('#' + dotsId + ' .cdot');
  dots.forEach((d,j) => d.classList.toggle('active', i===j));
};

// ── DRAG SCROLL ──────────────────────────────
document.querySelectorAll('.hscroll-track').forEach(track => {
  let isDown = false, startX, scrollLeft;
  track.addEventListener('mousedown', e => {
    isDown = true; track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('dragging'); });
  track.addEventListener('mouseup', () => { isDown = false; track.classList.remove('dragging'); });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
  // Touch
  let touchStart;
  track.addEventListener('touchstart', e => { touchStart = e.touches[0].clientX; }, {passive:true});
  track.addEventListener('touchmove', e => {
    const diff = touchStart - e.touches[0].clientX;
    track.scrollLeft += diff * 0.6;
    touchStart = e.touches[0].clientX;
  }, {passive:true});
});

// ── GSAP ANIMATIONS ──────────────────────────
gsap.registerPlugin(ScrollTrigger);

function initHomeAnimations() {
  // Hero entrance
  gsap.fromTo('#h-eyebrow', { opacity:0, y:20 }, { opacity:1, y:0, duration:.8, delay:.3, ease:'power2.out' });
  gsap.fromTo('#h-title',   { opacity:0, y:40 }, { opacity:1, y:0, duration:1,  delay:.5, ease:'power3.out' });
  gsap.fromTo('#h-sub',     { opacity:0, y:30 }, { opacity:1, y:0, duration:.9, delay:.8, ease:'power2.out' });
  gsap.fromTo('#h-actions', { opacity:0, y:20 }, { opacity:1, y:0, duration:.8, delay:1,  ease:'power2.out' });

  // Hero parallax
  gsap.to('#hero-bg', {
    yPercent: 25,
    ease: 'none',
    scrollTrigger: { trigger: '#hero', start:'top top', end:'bottom top', scrub: true }
  });
}

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseFloat(el.style.transitionDelay || '0');
      setTimeout(() => {
        el.style.transition = 'opacity .8s cubic-bezier(.4,0,.2,1), transform .8s cubic-bezier(.4,0,.2,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay * 1000);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12 });

function observeReveals() {
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(36px)';
    revealObserver.observe(el);
  });
}

// ── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Render all dynamic content
  renderMenuGrid(MENU.slice(0, 8), 'menu-grid-preview');
  renderMenuRows(MENU.filter(m => m.cat === 'brunch'), 'menu-brunch-full');
  renderMenuRows(MENU.filter(m => m.cat === 'savoury'), 'menu-savoury-full');
  renderMenuRows(MENU.filter(m => m.cat === 'pastry'), 'menu-pastry-full');
  renderMenuRows(MENU.filter(m => m.cat === 'drink'), 'menu-drink-full');
  renderMasonryHome();
  renderInstagram();
  renderGallery('all');
  initCarousel('about-c-track', 'about-dots', 4);
  observeReveals();
  initHomeAnimations();

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (document.getElementById('lightbox').classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lbNav(-1);
      if (e.key === 'ArrowRight') lbNav(1);
    }
  });
});