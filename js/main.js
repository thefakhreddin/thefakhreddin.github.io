// ── Render year ───────────────────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Build a single card ───────────────────────────────────────────────────────
function buildCard(p) {
  const thumb = p.img
    ? `<img src="${p.img}" alt="${p.title}" loading="lazy" />`
    : `<span class="thumb-placeholder">[ no image ]</span>`;

  const badge = p.source
    ? `<span class="badge-source badge-${p.source}">${p.source} ↗</span>`
    : '';

  const link = p.url ? `<span class="card-link">open →</span>` : '';
  const tag  = p.url ? 'a' : 'div';
  const href = p.url ? `href="${p.url}" target="_blank" rel="noopener"` : '';

  return `
    <${tag} class="card" data-type="${p.type}" ${href}>
      <div class="card-thumb">${thumb}</div>
      <div class="card-body">
        <p class="card-type">${p.category || p.type}</p>
        <p class="card-title">${p.title}</p>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">${badge}${link}</div>
      </div>
    </${tag}>`;
}

// ── Render all projects with group headers ────────────────────────────────────
(function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  let lastGroup = null;
  let html = '';

  PROJECTS.forEach(p => {
    if (p.group && p.group !== lastGroup) {
      html += `<div class="grid-group-label" data-filter-group="${p.type}">${p.group}</div>`;
      if (p.group === 'lego mechanical') {
        html += `<div class="grid-note" data-filter-group="${p.type}">// Don't let the colourful bricks fool you — there's real mechanical engineering beneath the surface.</div>`;
      }
      lastGroup = p.group;
    }
    html += buildCard(p);
  });

  grid.innerHTML = html;
})();

// ── Filter buttons ────────────────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;

    document.querySelectorAll('#project-grid .card').forEach(card => {
      card.dataset.hidden = (f === 'all' || card.dataset.type === f) ? 'false' : 'true';
    });

    document.querySelectorAll('.grid-group-label, .grid-note').forEach(label => {
      const group = label.dataset.filterGroup;
      label.style.display = (f === 'all' || f === group) ? '' : 'none';
    });
  });
});

// ── Render gallery from GALLERY_ASSETS ───────────────────────────────────────
(function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid || typeof GALLERY_ASSETS === 'undefined') return;

  const IMG_EXTS = /\.(jpg|jpeg|png|gif|webp)$/i;
  const VID_EXTS = /\.(mp4|mov|webm|m4v)$/i;
  const MOV_EXTS = /\.mov$/i;

  GALLERY_ASSETS.forEach(file => {
    const path = `assets/other/${file}`;
    const item = document.createElement('div');

    if (IMG_EXTS.test(file)) {
      item.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = path;
      img.loading = 'lazy';
      item.appendChild(img);

    } else if (VID_EXTS.test(file)) {
      item.className = 'gallery-item gallery-item--video';
      const video = document.createElement('video');
      video.setAttribute('data-lazy', '');
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.setAttribute('playsinline', '');
      video.preload = 'none';

      // MOV files: try mp4 first (works if H.264), fall back to quicktime for Safari
      if (MOV_EXTS.test(file)) {
        const s1 = document.createElement('source');
        s1.dataset.src = path;
        s1.type = 'video/mp4';
        video.appendChild(s1);
        const s2 = document.createElement('source');
        s2.dataset.src = path;
        s2.type = 'video/quicktime';
        video.appendChild(s2);
      } else {
        const source = document.createElement('source');
        source.dataset.src = path;
        source.type = 'video/mp4';
        video.appendChild(source);
      }

      item.appendChild(video);
    }

    if (item.firstChild) grid.appendChild(item);
  });
})();

// ── Gallery lightbox ──────────────────────────────────────────────────────────
(function lightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  const lbImg    = document.getElementById('lb-img');
  const lbVideo  = document.getElementById('lb-video');
  const lbVidSrc = document.getElementById('lb-video-src');
  const counter  = document.getElementById('lb-counter');
  let items      = [];
  let current    = 0;

  // Enforce mute — user cannot unmute the lightbox video
  lbVideo.muted = true;
  lbVideo.addEventListener('volumechange', () => { lbVideo.muted = true; });

  function buildItems() {
    items = Array.from(document.querySelectorAll('.gallery-item')).map(el => {
      const img = el.querySelector('img');
      if (img) return { type: 'image', src: img.src, alt: img.alt };
      const video = el.querySelector('video');
      if (video) {
        const source = video.querySelector('source');
        return { type: 'video', src: source ? (source.src || source.dataset.src || '') : '' };
      }
      return null;
    }).filter(Boolean);
  }

  function show(index) {
    if (!items.length) buildItems();
    current = (index + items.length) % items.length;
    const item = items[current];
    counter.textContent = `${current + 1} / ${items.length}`;

    if (item.type === 'image') {
      lbImg.src = item.src;
      lbImg.alt = item.alt || '';
      lbImg.style.display = '';
      lbVideo.style.display = 'none';
      lbVideo.pause();
    } else {
      lbImg.style.display = 'none';
      lbImg.src = '';
      lbVidSrc.src = item.src;
      lbVideo.muted = true;
      lbVideo.load();
      lbVideo.style.display = '';
    }

    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    lbImg.src = '';
    lbVideo.pause();
    lbVidSrc.src = '';
    document.body.style.overflow = '';
  }

  // Attach click — build items lazily after renderGallery() has run
  document.getElementById('gallery-grid')?.addEventListener('click', e => {
    const el = e.target.closest('.gallery-item');
    if (!el) return;
    buildItems();
    const index = Array.from(document.querySelectorAll('.gallery-item')).indexOf(el);
    show(index);
  });

  document.getElementById('lb-close').addEventListener('click', close);
  document.getElementById('lb-prev').addEventListener('click', () => show(current - 1));
  document.getElementById('lb-next').addEventListener('click', () => show(current + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  let touchX = 0;
  lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) dx < 0 ? show(current + 1) : show(current - 1);
  });
})();

// ── Lazy video loading ────────────────────────────────────────────────────────
(function lazyVideos() {
  const observe = () => {
    const videos = document.querySelectorAll('video[data-lazy]');
    if (!videos.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const video = entry.target;
        video.querySelectorAll('source[data-src]').forEach(s => {
          s.src = s.dataset.src;
          delete s.dataset.src;
        });
        video.load();
        video.removeAttribute('data-lazy');
        obs.unobserve(video);
      });
    }, { rootMargin: '400px' });

    videos.forEach(v => obs.observe(v));
  };

  // Run after renderGallery() has populated the DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }
})();
