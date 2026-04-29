/**
 * GOLDEN TRUST FINANCIAL GROUP · ACADEMIA
 * App Logic — Módulos, Progreso, Modal
 */

// ——— STATE ———
const STORAGE_KEY = 'gt_academy_progress';

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ——— HELPERS ———
function getDriveEmbedUrl(driveId) {
  if (!driveId) return null;
  return `https://drive.google.com/file/d/${driveId}/preview`;
}

function getDriveThumbUrl(driveId) {
  if (!driveId) return null;
  return `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
}

// ——— RENDER MEDALS ———
function renderMedals(modules, progress) {
  const row = document.getElementById('medals-row');
  row.innerHTML = '';
  modules.forEach(mod => {
    const div = document.createElement('div');
    div.className = 'medal-item' + (progress[mod.id] ? ' earned' : '');
    div.title = mod.title;
    div.textContent = progress[mod.id] ? '🏅' : '🏅';
    row.appendChild(div);
  });
}

// ——— RENDER STATS ———
function renderStats(modules, progress) {
  const total = modules.length;
  const completed = Object.values(progress).filter(Boolean).length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const pts = completed * 100;

  document.getElementById('total-modules').textContent = total;
  document.getElementById('completed-count').textContent = completed;
  document.getElementById('progress-pct').textContent = pct + '%';
  document.getElementById('total-pts').textContent = pts.toLocaleString();
  document.getElementById('hero-progress-fill').style.width = pct + '%';
}

// ——— RENDER MODULES ———
function renderModules(modules, progress) {
  const grid = document.getElementById('modules-grid');
  grid.innerHTML = '';

  modules.forEach(mod => {
    const done = !!progress[mod.id];
    const thumbUrl = mod.thumb
      ? `assets/${mod.thumb}`
      : (mod.driveId ? getDriveThumbUrl(mod.driveId) : null);

    const card = document.createElement('div');
    card.className = 'module-card' + (done ? ' completed' : '');
    card.setAttribute('data-id', mod.id);

    card.innerHTML = `
      <div class="card-thumb">
        ${thumbUrl
          ? `<img class="card-thumb-img" src="${thumbUrl}" alt="${mod.title}" loading="lazy" />`
          : `<div class="card-thumb-placeholder">
               <span class="thumb-module-title">${mod.title}</span>
             </div>`
        }
        <span class="card-module-label">Módulo ${mod.id}</span>
        <div class="card-play-btn">
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="rgba(201,162,39,0.9)" stroke="white" stroke-width="2"/>
            <polygon points="23,18 46,30 23,42" fill="white"/>
          </svg>
        </div>
        <div class="card-check">✓</div>
      </div>
      <div class="card-body">
        <p class="card-module-num">Módulo ${mod.id}</p>
        <h3 class="card-title">${mod.title}</h3>
        <p class="card-desc">${mod.description}</p>
      </div>
    `;

    card.addEventListener('click', () => openModal(mod));
    grid.appendChild(card);
  });
}

// ——— MODAL ———
let currentModuleId = null;

function openModal(mod) {
  currentModuleId = mod.id;
  const progress = getProgress();
  const done = !!progress[mod.id];
  const embedUrl = getDriveEmbedUrl(mod.driveId);

  document.getElementById('modal-num').textContent = `Módulo ${mod.id}`;
  document.getElementById('modal-title').textContent = mod.title;
  document.getElementById('modal-desc').textContent = mod.description;

  const videoEl = document.getElementById('modal-video');
  if (embedUrl) {
    videoEl.src = embedUrl;
    document.querySelector('.modal-video-wrap').style.display = 'block';
  } else {
    videoEl.src = '';
    document.querySelector('.modal-video-wrap').style.display = 'none';
  }

  const btnComplete = document.getElementById('btn-complete');
  if (done) {
    btnComplete.textContent = '✓ Módulo Completado';
    btnComplete.classList.add('done');
  } else {
    btnComplete.textContent = '✓ Marcar como completado';
    btnComplete.classList.remove('done');
  }

  const btnRes = document.getElementById('btn-resources');
  if (mod.resources && mod.resources.length > 0) {
    btnRes.style.display = 'inline-block';
    btnRes.onclick = () => {
      mod.resources.forEach(r => window.open(r.url, '_blank'));
    };
  } else {
    btnRes.style.display = 'none';
  }

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const videoEl = document.getElementById('modal-video');
  videoEl.src = '';
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModuleId = null;
}

// ——— COMPLETE MODULE ———
document.getElementById('btn-complete').addEventListener('click', () => {
  if (!currentModuleId) return;
  const progress = getProgress();
  progress[currentModuleId] = !progress[currentModuleId];
  saveProgress(progress);

  // Update UI
  const modules = ACADEMY_DATA.modules;
  renderModules(modules, progress);
  renderMedals(modules, progress);
  renderStats(modules, progress);

  const btnComplete = document.getElementById('btn-complete');
  if (progress[currentModuleId]) {
    btnComplete.textContent = '✓ Módulo Completado';
    btnComplete.classList.add('done');
  } else {
    btnComplete.textContent = '✓ Marcar como completado';
    btnComplete.classList.remove('done');
  }
});

// ——— CLOSE MODAL ———
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ——— INIT ———
function init() {
  const { modules } = ACADEMY_DATA;
  const progress = getProgress();
  renderModules(modules, progress);
  renderMedals(modules, progress);
  renderStats(modules, progress);
}

init();
