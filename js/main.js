// ── Render year ───────────────────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Render project cards ──────────────────────────────────────────────────────
function buildCard(p) {
  const thumb = p.img
    ? `<img src="${p.img}" alt="${p.title}" />`
    : '';

  const badge = p.source
    ? `<span class="badge-source badge-${p.source}">${p.source} ↗</span>`
    : '';

  const link = p.url
    ? `<span class="card-link">open →</span>`
    : '';

  const tag = p.url ? 'a' : 'div';
  const href = p.url ? `href="${p.url}" target="_blank" rel="noopener"` : '';

  return `
    <${tag} class="card" data-type="${p.type}" ${href}>
      <div class="card-thumb">${thumb}</div>
      <div class="card-body">
        <p class="card-type">${p.category || p.type}</p>
        <p class="card-title">${p.title}</p>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          ${badge}
          ${link}
        </div>
      </div>
    </${tag}>`;
}

(function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;
  grid.innerHTML = PROJECTS.map(buildCard).join('');
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
  });
});
