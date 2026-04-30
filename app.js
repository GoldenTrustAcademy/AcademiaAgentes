/**
 * GOLDEN TRUST FINANCIAL GROUP · ACADEMIA
 * Lógica principal — progreso, módulos, modal completo
 */

const STORAGE_KEY = 'gt_academy_progress';

function getProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function saveProgress(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function getDriveEmbedUrl(id) { return id ? `https://drive.google.com/file/d/${id}/preview` : null; }

// ── GREETING ──
const agentName = sessionStorage.getItem('gt_agent_name') || 'Agente';
const greetEl = document.getElementById('greeting');
if (greetEl) greetEl.textContent = 'Hola, ' + agentName;

// ── STATS ──
function renderStats(modules, progress) {
  const done  = Object.values(progress).filter(Boolean).length;
  const total = modules.length;
  const pct   = Math.round((done / total) * 100);
  document.getElementById('mod-counter').textContent = done + ' / ' + total + ' módulos';
  document.getElementById('prog-fill').style.width   = pct + '%';
  document.getElementById('prog-pct').textContent    = pct + '%';
  document.getElementById('pts').textContent         = (done * 100).toLocaleString() + ' pts';
}

// ── MEDALS ──
function renderMedals(modules, progress) {
  const row = document.getElementById('medals-row');
  row.innerHTML = '';
  modules.forEach(m => {
    const div = document.createElement('div');
    div.className = 'medal' + (progress[m.id] ? ' earned' : '');
    div.title = m.title;
    div.textContent = '🏅';
    row.appendChild(div);
  });
}

// ── GRID ──
function renderGrid(modules, progress) {
  const grid = document.getElementById('modules-grid');
  grid.innerHTML = '';
  modules.forEach(m => {
    const done = !!progress[m.id];
    const card = document.createElement('div');
    card.className = 'card' + (done ? ' done' : '');
    card.innerHTML = `
      <div class="card-thumb">
        <span class="card-num-badge">Módulo ${m.id}</span>
        <p class="card-thumb-title">${m.title}</p>
        <div class="card-check">✓</div>
      </div>
      <div class="card-body">
        <p class="card-num">Módulo ${m.id}</p>
        <h3 class="card-title">${m.title}</h3>
        <p class="card-desc">${m.description}</p>
        <p class="card-status">${done ? '✓ Completado' : '○ Pendiente'}</p>
      </div>`;
    card.addEventListener('click', () => openModal(m.id));
    grid.appendChild(card);
  });
}

// ── MODAL ──
let currentId = null;

function openModal(id) {
  const { modules } = ACADEMY_DATA;
  const m        = modules.find(x => x.id === id);
  if (!m) return;
  currentId      = id;
  const progress = getProgress();
  const done     = !!progress[id];
  const embedUrl = getDriveEmbedUrl(m.driveId);

  // Video
  const videoEl   = document.getElementById('modal-video');
  const noVideoEl = document.getElementById('no-video');
  if (embedUrl) {
    videoEl.src             = embedUrl;
    videoEl.style.display   = 'block';
    noVideoEl.style.display = 'none';
  } else {
    videoEl.src             = '';
    videoEl.style.display   = 'none';
    noVideoEl.style.display = 'flex';
  }

  // Badge + textos
  document.getElementById('modal-num-badge').textContent = 'Módulo ' + m.id;
  document.getElementById('modal-num').textContent       = 'Módulo ' + m.id;
  document.getElementById('modal-title').textContent     = m.title;
  document.getElementById('modal-desc').textContent      = m.description;

  // Frase
  const fraseWrap = document.getElementById('modal-frase-wrap');
  if (m.frase) {
    document.getElementById('modal-frase').textContent = '"' + m.frase + '"';
    fraseWrap.style.display = 'block';
  } else {
    fraseWrap.style.display = 'none';
  }

  // Puntos
  const puntosWrap = document.getElementById('modal-puntos-wrap');
  const puntosGrid = document.getElementById('modal-puntos-grid');
  if (m.puntos && m.puntos.length > 0) {
    puntosGrid.innerHTML = m.puntos.map(p => `
      <div class="punto-item">
        <div class="punto-dot"></div>
        <span>${p}</span>
      </div>`).join('');
    puntosWrap.style.display = 'block';
  } else {
    puntosWrap.style.display = 'none';
  }

  // Actividades
  const actWrap = document.getElementById('modal-actividades-wrap');
  const actGrid = document.getElementById('modal-actividades-grid');
  if (m.actividades && m.actividades.length > 0) {
    actGrid.innerHTML = m.actividades.map(a => `
      <div class="actividad-card">
        <p class="actividad-num">${a.numero}</p>
        <p class="actividad-label">${a.label}</p>
        <p class="actividad-desc">${a.desc}</p>
      </div>`).join('');
    actWrap.style.display = 'block';
  } else {
    actWrap.style.display = 'none';
  }

  // Consejo
  const consejoWrap = document.getElementById('modal-consejo-wrap');
  if (m.consejo) {
    document.getElementById('modal-consejo-text').textContent = '"' + m.consejo + '"';
    consejoWrap.style.display = 'block';
  } else {
    consejoWrap.style.display = 'none';
  }

  // Tarea
  const tareaWrap = document.getElementById('modal-tarea-wrap');
  if (m.tarea) {
    document.getElementById('modal-tarea-text').textContent = m.tarea;
    tareaWrap.style.display = 'block';
  } else {
    tareaWrap.style.display = 'none';
  }

  // Recursos
  const resWrap = document.getElementById('modal-recursos-wrap');
  const resList = document.getElementById('modal-recursos-list');
  if (m.resources && m.resources.length > 0) {
    resList.innerHTML = m.resources.map(r => `
      <a href="${r.url}" target="_blank" class="recurso-btn">
        <span>${r.icon || '📄'}</span>
        <span>${r.label}</span>
      </a>`).join('');
    resWrap.style.display = 'block';
  } else {
    resWrap.style.display = 'none';
  }

  // Botón completar
  const btn = document.getElementById('btn-complete');
  btn.textContent = done ? '✓ Módulo Completado' : '✓ Marcar como completado';
  btn.className   = 'btn-complete' + (done ? ' done' : '');

  // Navegación
  document.getElementById('btn-prev').style.display = id > 1 ? 'inline-block' : 'none';
  document.getElementById('btn-next').style.display = id < modules.length ? 'inline-block' : 'none';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal').scrollTop = 0;
}

function closeModal() {
  document.getElementById('modal-video').src = '';
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentId = null;
}

// ── EVENTOS ──
document.getElementById('btn-complete').addEventListener('click', () => {
  if (!currentId) return;
  const progress = getProgress();
  progress[currentId] = !progress[currentId];
  saveProgress(progress);
  const { modules } = ACADEMY_DATA;
  renderGrid(modules, progress);
  renderMedals(modules, progress);
  renderStats(modules, progress);
  const done = !!progress[currentId];
  const btn  = document.getElementById('btn-complete');
  btn.textContent = done ? '✓ Módulo Completado' : '✓ Marcar como completado';
  btn.className   = 'btn-complete' + (done ? ' done' : '');
});

document.getElementById('btn-prev').addEventListener('click', () => {
  if (currentId > 1) { closeModal(); setTimeout(() => openModal(currentId - 1), 80); }
});
document.getElementById('btn-next').addEventListener('click', () => {
  if (currentId < ACADEMY_DATA.modules.length) { closeModal(); setTimeout(() => openModal(currentId + 1), 80); }
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight' && currentId) document.getElementById('btn-next').click();
  if (e.key === 'ArrowLeft'  && currentId) document.getElementById('btn-prev').click();
});

// ── INIT ──
(function init() {
  const { modules } = ACADEMY_DATA;
  const progress    = getProgress();
  renderGrid(modules, progress);
  renderMedals(modules, progress);
  renderStats(modules, progress);
})();
