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

// ── Gallery lightbox ─────────────────────────────────────────────────────────
(function lightbox() {
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  if (!galleryItems.length) return;

  // Build a unified media list: {type, src, alt}
  const items = galleryItems.map(el => {
    const img = el.querySelector('img');
    if (img) return { type: 'image', src: img.src, alt: img.alt };
    const video = el.querySelector('video');
    if (video) {
      const source = video.querySelector('source');
      const src = source ? (source.src || source.dataset.src || '') : '';
      return { type: 'video', src };
    }
    return null;
  }).filter(Boolean);

  const lb        = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lb-img');
  const lbVideo   = document.getElementById('lb-video');
  const lbVidSrc  = document.getElementById('lb-video-src');
  const counter   = document.getElementById('lb-counter');
  let current     = 0;

  function show(index) {
    current = (index + items.length) % items.length;
    const item = items[current];
    counter.textContent = `${current + 1} / ${items.length}`;

    if (item.type === 'image') {
      lbImg.src = item.src;
      lbImg.alt = item.alt;
      lbImg.style.display = '';
      lbVideo.style.display = 'none';
      lbVideo.pause();
    } else {
      lbImg.style.display = 'none';
      lbImg.src = '';
      lbVidSrc.src = item.src;
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

  galleryItems.forEach((el, i) => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => show(i));
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

// ── Lazy video loading (gallery.html) ────────────────────────────────────────
(function lazyVideos() {
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
})();
