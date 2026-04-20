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

    // hide group labels when all their cards are hidden
    document.querySelectorAll('.grid-group-label').forEach(label => {
      const group = label.dataset.filterGroup;
      label.style.display = (f === 'all' || f === group) ? '' : 'none';
    });
  });
});
