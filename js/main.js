 /* ============================================================
     CMS DATA
  ============================================================ */
  const DOTS = [
    '#4ED8C8','#4DB87A','#C6C6C6','#E8A95C','#E05C5C','#9B7CDB'
  ];
 
  const CMS = {
    products: [
      {
        img: 'https://framerusercontent.com/images/kkz2wsmVHSnkW0jpGAHt5psBcwo.webp',
        alt: 'French People and Society',
        title: 'Thalby Guide to French People and Society',
        price: 'USD 6.99'
      },
      {
        img: 'https://framerusercontent.com/images/n7sIurP6n2xqeNqosoBlok6xyeo.webp',
        alt: 'French Culture and Heritage',
        title: 'Thalby Guide to French Culture and Heritage',
        price: 'USD 6.99'
      },
      {
        img: 'https://framerusercontent.com/images/iBBcSYqCTWpBJkq400jGKo8H6s.webp',
        alt: 'French People and Society',
        title: 'Thalby Guide to French People and Society',
        price: 'USD 6.99'
      }
    ],
 
    categories: [
      {
        img: 'https://framerusercontent.com/images/iBBcSYqCTWpBJkq400jGKo8H6s.webp',
        alt: 'People and Society guide cover',
        tag: 'Category',
        title: 'People and Society',
        body: 'Our guides to society deliver all the social insight you need, helping you understand how people live, love and play today and why communities are the way they are.',
        cta: 'Shop Society Now',
        alt_layout: false
      },
      {
        img: 'https://framerusercontent.com/images/U5B9uxikkQQwO0fNU5S0eQvqac.webp',
        alt: 'Culture and Heritage guide cover',
        tag: 'Category',
        title: 'Culture and Heritage',
        body: "As well as covering heritage and tradition, our guides to culture introduce you to the designers, artists and chefs creating at the forefront of today's culture.",
        cta: 'Shop Culture Now',
        alt_layout: true
      },
      {
        img: 'https://framerusercontent.com/images/kkz2wsmVHSnkW0jpGAHt5psBcwo.webp',
        alt: 'Power and Politics guide cover',
        tag: 'Category',
        title: 'Power and Politics',
        body: "Our guides to power take you behind the scenes to explore the power dynamics, policies and politics shaping a country's future and its global position.",
        cta: 'Shop Politics Now',
        alt_layout: false
      }
    ],
 
    features: [
      { dot: '#4ED8C8', label: 'Written by locals' },
      { dot: '#4DB87A', label: 'Packed with insight' },
      { dot: '#9B7CDB', label: 'Interviews with diverse voices' },
      { dot: '#E8A95C', label: 'Key facts and etiquette tips' },
      { dot: '#E05C5C', label: 'A concise 1-hour read' },
      { dot: '#202020', label: 'Instant digital access' }
    ],
 
    voices: [
      {
        img: 'https://framerusercontent.com/images/Sb2NEmSyEbpOo1wPY1qjc2WUiKQ.webp',
        alt: 'Camille Muller portrait',
        quote: "\u201cI don\u2019t like things to be conventional. If it\u2019s too nice, I bring disorder.\u201d",
        name: 'Camille Muller, Landscape Designer, France.'
      },
      {
        img: 'https://framerusercontent.com/images/dDDM6HAQtTaJTk8aSJrTBdG6ZQ.webp',
        alt: 'Sonia Kowalewski portrait',
        quote: "\u201cMagic is not magic in the senses that I can just wish for anything.\u201d",
        name: 'Sonia Kowalewski, Landscape Designer, Germany.'
      },
      {
        img: 'https://framerusercontent.com/images/fux6kmFsjJnSOrUNI7TwAgUYrs.webp',
        alt: 'Camille Muller portrait',
        quote: "\u201cI don\u2019t like things to be conventional. If it\u2019s too nice, I bring disorder.\u201d",
        name: 'Camille Muller, Landscape Designer, France.'
      }
    ]
  };
 
  /* ============================================================
     HELPERS
  ============================================================ */
  function makeDots(size) {
    return DOTS.map(bg => {
      const s = size ? `width:${size}px;height:${size}px;` : '';
      return `<span class="color-dot" style="background:${bg};${s}" aria-hidden="true"></span>`;
    }).join('');
  }
 
  /* ============================================================
     RENDER: Products
  ============================================================ */
  function renderProducts() {
    const el = document.getElementById('productsGrid');
    if (!el) return;
    el.innerHTML = CMS.products.map((p, i) => `
      <article class="product-card fade-up" data-delay="${i+1}" role="listitem">
        <div class="product-card__image-wrap">
          <img src="${p.img}" alt="${p.alt}" width="400" height="533" loading="lazy" decoding="async" />
        </div>
        <div class="product-card__meta">
          <div class="color-dots">${makeDots()}</div>
          <p class="product-card__title">${p.title}</p>
          <p class="product-card__price">${p.price}</p>
        </div>
        <div class="product-card__footer">
          <button class="btn-thalby btn-thalby--outline" style="width:100%;" aria-label="Add ${p.title} to cart">
            Add to cart
          </button>
        </div>
      </article>
    `).join('');
  }
 
  /* ============================================================
     RENDER: Categories
  ============================================================ */
  function renderCategories() {
    const el = document.getElementById('categoryRows');
    if (!el) return;
    el.innerHTML = CMS.categories.map(c => `
      <div class="category-row${c.alt_layout ? ' category-row--alt' : ''} fade-up">
        <div class="category-row__image">
          <img src="${c.img}" alt="${c.alt}" width="600" height="480" loading="lazy" decoding="async" />
        </div>
        <div class="category-row__content">
          <div class="color-dots-row">${makeDots()}</div>
          <span class="category-row__tag">${c.tag}</span>
          <h3 class="category-row__title">${c.title}</h3>
          <p class="category-row__body">${c.body}</p>
          <div><a href="#" class="btn-thalby">${c.cta}</a></div>
        </div>
      </div>
    `).join('');
  }
 
  /* ============================================================
     RENDER: Features
  ============================================================ */
  function renderFeatures() {
    const el = document.getElementById('featuresGrid');
    if (!el) return;
    el.innerHTML = CMS.features.map((f, i) => `
      <div class="feature-item fade-up" data-delay="${i+1}">
        <div class="feature-item__dot" style="background:${f.dot};" aria-hidden="true"></div>
        <p class="feature-item__label">${f.label}</p>
      </div>
    `).join('');
  }
 
  /* ============================================================
     RENDER: Voices
  ============================================================ */
  function renderVoices() {
    const el = document.getElementById('voicesGrid');
    if (!el) return;
    el.innerHTML = CMS.voices.map((v, i) => `
      <article class="voice-card fade-up" data-delay="${i+1}" role="listitem">
        <div class="voice-card__image">
          <img src="${v.img}" alt="${v.alt}" width="400" height="400" loading="lazy" decoding="async" />
        </div>
        <blockquote class="voice-card__quote">${v.quote}</blockquote>
        <p class="voice-card__attribution">${v.name}</p>
        <div class="voice-card__footer">
          <a href="#" class="t-body-sm">Discover</a>
        </div>
      </article>
    `).join('');
  }
 
  /* ============================================================
     RENDER: Newsletter dots
  ============================================================ */
  function renderNewsletterDots() {
    const html = makeDots(18);
    const l = document.getElementById('nlDotsLeft');
    const r = document.getElementById('nlDotsRight');
    if (l) l.innerHTML = html;
    if (r) r.innerHTML = html;
  }
 
  /* ============================================================
     NAVBAR: hide on scroll down, show on scroll up
     Uses requestAnimationFrame + passive listener for perf
  ============================================================ */
  function initNavScroll() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
 
    let lastY = window.scrollY;
    let ticking = false;
 
    window.addEventListener('scroll', () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > lastY && y > 80) {
          nav.classList.add('nav--hidden');
        } else if (y < lastY) {
          nav.classList.remove('nav--hidden');
        }
        nav.classList.toggle('nav--scrolled', y > 10);
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }
 
  /* ============================================================
     INTERSECTION OBSERVER: fade-up animations
     Single observer reused for all elements (performance)
  ============================================================ */
  function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // fire once only
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
 
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
 
  /* ============================================================
     INIT — DOMContentLoaded
  ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Render CMS content
    renderProducts();
    renderCategories();
    renderFeatures();
    renderVoices();
    renderNewsletterDots();
 
    // 2. Init behaviors after paint
    requestAnimationFrame(() => {
      initAnimations();
      initNavScroll();
    });
  });