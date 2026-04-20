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

// ── Lazy video loading (album.html) ──────────────────────────────────────────
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
