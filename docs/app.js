'use strict';
const $ = id => document.getElementById(id);

/* ---------- i18n (PT / EN / ES) ---------- */
const I18N = {
  pt: { homeDesc: 'Gerencie suas storylines salvando diretamente em arquivos JSON na sua pasta local.', pick: 'Selecione uma pasta para guardar ou carregar suas storylines', newSt: '+ Nova Storyline', addSec: '+ Adicionar Seção', save: 'Salvar na Pasta', addCard: '+ Adicionar Card', addImg: '+ Imagem', poseTitle: 'Título da Pose', newPose: 'Nova Pose', firstSec: 'Seção 1', positive: 'Prompt Positivo', negative: 'Prompt Negativo', basePrompt: 'Prompt Base', lora: 'URL da LoRA', open: 'Abrir', urlPh: 'URL de referência (https://...)', chars: 'chars', resHint: 'Resolução recomendada: 1024×1024', delSt: 'Excluir a storyline "{n}"? O arquivo será apagado da pasta.', deleted: 'Storyline excluída!', expand: 'Clique duas vezes para expandir', renameSt: 'Renomear storyline', nameExists: 'Já existe um arquivo com esse nome.', renamed: 'Renomeado!', ph: 'Digite as tags...', copy: 'Copiar prompt', copied: 'Copiado!', noImg: 'Sem imagem', ok: 'OK', cancel: 'Cancelar', del: 'Excluir', discard: 'Descartar', delSec: 'Excluir esta seção e todos os seus cards?', delCard: 'Excluir este card?', delImg: 'Remover imagem', secName: 'Nome da seção', stName: 'Nome da storyline', saved: 'Salvo na pasta!', unsupported: 'Use Chrome ou Edge (File System Access API).', noFiles: 'Nenhuma storyline na pasta. Crie uma nova.', unsaved: 'Há alterações não salvas. Deseja salvar antes de continuar?', err: 'Erro: ' },
  en: { homeDesc: 'Manage your storylines by saving straight to JSON files in your local folder.', pick: 'Select a folder to store or load your storylines', newSt: '+ New Storyline', addSec: '+ Add Section', save: 'Save to Folder', addCard: '+ Add Card', addImg: '+ Image', poseTitle: 'Pose title', newPose: 'New Pose', firstSec: 'Section 1', positive: 'Positive Prompt', negative: 'Negative Prompt', basePrompt: 'Base Prompt', lora: 'LoRA URL', open: 'Open', urlPh: 'Reference URL (https://...)', chars: 'chars', resHint: 'Recommended resolution: 1024×1024', delSt: 'Delete storyline "{n}"? The file will be removed from the folder.', deleted: 'Storyline deleted!', expand: 'Double-click to expand', renameSt: 'Rename storyline', nameExists: 'A file with that name already exists.', renamed: 'Renamed!', ph: 'Type tags...', copy: 'Copy prompt', copied: 'Copied!', noImg: 'No image', ok: 'OK', cancel: 'Cancel', del: 'Delete', discard: 'Discard', delSec: 'Delete this section and all its cards?', delCard: 'Delete this card?', delImg: 'Remove image', secName: 'Section name', stName: 'Storyline name', saved: 'Saved to folder!', unsupported: 'Use Chrome or Edge (File System Access API).', noFiles: 'No storylines in this folder. Create one.', unsaved: 'You have unsaved changes. Save before continuing?', err: 'Error: ' },
  es: { homeDesc: 'Gestiona tus storylines guardando directamente en archivos JSON en tu carpeta local.', pick: 'Selecciona una carpeta para guardar o cargar tus storylines', newSt: '+ Nueva Storyline', addSec: '+ Añadir Sección', save: 'Guardar en la Carpeta', addCard: '+ Añadir Card', addImg: '+ Imagen', poseTitle: 'Título de la pose', newPose: 'Nueva Pose', firstSec: 'Sección 1', positive: 'Prompt Positivo', negative: 'Prompt Negativo', basePrompt: 'Prompt Base', lora: 'URL de la LoRA', open: 'Abrir', urlPh: 'URL de referencia (https://...)', chars: 'chars', resHint: 'Resolución recomendada: 1024×1024', delSt: '¿Eliminar la storyline "{n}"? El archivo se borrará de la carpeta.', deleted: '¡Storyline eliminada!', expand: 'Haz doble clic para expandir', renameSt: 'Renombrar storyline', nameExists: 'Ya existe un archivo con ese nombre.', renamed: '¡Renombrado!', ph: 'Escribe las tags...', copy: 'Copiar prompt', copied: '¡Copiado!', noImg: 'Sin imagen', ok: 'OK', cancel: 'Cancelar', del: 'Eliminar', discard: 'Descartar', delSec: '¿Eliminar esta sección y todas sus cards?', delCard: '¿Eliminar esta card?', delImg: 'Quitar imagen', secName: 'Nombre de la sección', stName: 'Nombre de la storyline', saved: '¡Guardado en la carpeta!', unsupported: 'Usa Chrome o Edge (File System Access API).', noFiles: 'No hay storylines en la carpeta. Crea una nueva.', unsaved: 'Hay cambios sin guardar. ¿Guardar antes de continuar?', err: 'Error: ' }
};

/* ---------- Estado ---------- */
let lang = I18N[localStorage.lang] ? localStorage.lang : 'pt', dir = null, cur = null, data = null, dirty = false, fresh = null, pending = null;
const t = k => I18N[lang][k] || k;
const uid = () => Math.random().toString(36).slice(2, 9);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fixUrl = u => !u ? '' : /^https?:\/\//i.test(u) ? u : 'https://' + u;
const openUrl = u => { u = fixUrl((u || '').trim()); if (u) window.open(u, '_blank', 'noopener'); };
const mkCard = () => ({ id: uid(), title: t('newPose'), url: '', positive: '', negative: '', images: [], idx: 0 });
const newStory = () => ({ model: { prompt: '', lora: '' }, sections: [{ id: uid(), title: t('firstSec'), cards: [mkCard()] }] });
const sec = id => data.sections.find(s => s.id === id);
const mark = v => { dirty = v; $('btnSave').classList.toggle('dirty', v); };
const show = id => document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id));
const toast = m => { const e = $('toast'); e.textContent = m; e.classList.add('show'); clearTimeout(e._t); e._t = setTimeout(() => e.classList.remove('show'), 2200); };

const lb = $('lightbox'), lbImg = lb.querySelector('img');
const THEMES = [['aurora', 'Aurora'], ['violet', 'Midnight Violet'], ['slate', 'Slate Minimal'], ['emerald', 'Deep Emerald'], ['cyber', 'Cyber Onyx'], ['rose', 'Obsidian Rose'], ['lavender', 'Soft Lavender'], ['mint', 'Soft Mint'], ['peach', 'Soft Peach'], ['sky', 'Soft Sky']];
const LANGS = [['pt', '🇧🇷 Português'], ['en', '🇺🇸 English'], ['es', '🇪🇸 Español']];
const fill = (sel, list) => sel.innerHTML = list.map(([v, n]) => `<option value="${v}">${n}</option>`).join('');
// Memória da última pasta (IndexedDB guarda o FileSystemDirectoryHandle)
const idb = () => new Promise((r, x) => { const q = indexedDB.open('sm', 1); q.onupgradeneeded = () => q.result.createObjectStore('k'); q.onsuccess = () => r(q.result); q.onerror = x; });
const idbGet = async k => { const d = await idb(); return new Promise(r => { const q = d.transaction('k').objectStore('k').get(k); q.onsuccess = () => r(q.result); q.onerror = () => r(); }); };
const idbSet = async (k, v) => { const d = await idb(); return new Promise(r => { const tx = d.transaction('k', 'readwrite'); tx.objectStore('k').put(v, k); tx.oncomplete = tx.onerror = () => r(); }); };

function applyLang() {
  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es' }[lang];
  document.querySelectorAll('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll('.langSel').forEach(s => s.value = lang);
  $('btnRename').title = t('renameSt'); $('btnDelSt').title = t('del');
  if (data) render();
}

/* ---------- Modal genérico (prompt / confirmação / salvar-descartar-cancelar) ---------- */
function ask({ title, fields = [], ok, alt }) {
  return new Promise(res => {
    $('mTitle').textContent = title;
    $('mFields').innerHTML = fields.map(f => `<input placeholder="${esc(f.ph)}" value="${esc(f.v || '')}">`).join('');
    $('mOk').textContent = ok || t('ok');
    $('mCancel').textContent = t('cancel');
    $('mAlt').hidden = !alt; if (alt) $('mAlt').textContent = alt;
    $('modal').classList.add('show');
    ($('mFields').querySelector('input') || $('mOk')).focus();
    const done = v => { $('modal').classList.remove('show'); $('mOk').onclick = $('mCancel').onclick = $('mAlt').onclick = $('modal').onkeydown = null; res(v); };
    $('mOk').onclick = () => done([...$('mFields').querySelectorAll('input')].map(i => i.value.trim()));
    $('mCancel').onclick = () => done(null);
    $('mAlt').onclick = () => done('alt');
    $('modal').onkeydown = e => { if (e.key === 'Enter') $('mOk').click(); if (e.key === 'Escape') $('mCancel').click(); };
  });
}
// Protege contra perda de dados: salvar / descartar / cancelar
async function guard() {
  if (!dirty) return true;
  const r = await ask({ title: t('unsaved'), ok: t('save'), alt: t('discard') });
  if (r === null) return false;
  return r === 'alt' ? true : await save();
}

/* ---------- File System Access API ---------- */
async function pickFolder() {
  if (!window.showDirectoryPicker) { toast(t('unsupported')); return; }
  let last; try { last = await idbGet('dir'); } catch {}
  const opts = { id: 'storylines', mode: 'readwrite' }; if (last) opts.startIn = last;
  try { dir = await showDirectoryPicker(opts); } catch { return; }
  try { await idbSet('dir', dir); } catch {}
  await loadFiles();
}
async function loadFiles(sel) {
  const names = [];
  for await (const [n, h] of dir.entries()) if (h.kind === 'file' && /\.json$/i.test(n)) names.push(n);
  names.sort();
  $('fileSelect').innerHTML = names.map(n => `<option>${esc(n)}</option>`).join('');
  show('workspace');
  if (!names.length) { data = null; cur = null; mark(false); render(); toast(t('noFiles') + ' (' + dir.name + ')'); return; }
  await openFile(sel && names.includes(sel) ? sel : names[0]);
  if (!sel) toast('📁 ' + dir.name + ' · ' + names.length + ' .json');
}
async function openFile(n) {
  try {
    const f = await (await dir.getFileHandle(n)).getFile();
    const j = JSON.parse(await f.text());
    data = {
      model: { prompt: (j.model && j.model.prompt) || '', lora: (j.model && j.model.lora) || '' },
      sections: (j.sections || []).map(s => ({ id: s.id || uid(), title: s.title || '', cards: (s.cards || []).map(c => ({ id: c.id || uid(), title: c.title || '', url: c.url || '', positive: c.positive || '', negative: c.negative || '', images: (c.images || []).map(i => ({ src: i.src })), idx: 0 })) }))
    };
    cur = n; $('fileSelect').value = n; mark(false); render();
  } catch (e) { toast(t('err') + e.message); }
}
async function write(name, obj) {
  const fh = await dir.getFileHandle(name, { create: true });
  const w = await fh.createWritable();
  await w.write(JSON.stringify(obj, (k, v) => k === 'idx' ? undefined : v, 2));
  await w.close();
}
async function save() {
  if (!dir || !cur || !data) return true;
  try { await write(cur, data); mark(false); toast(t('saved')); return true; } catch (e) { toast(t('err') + e.message); return false; }
}
async function newStoryline() {
  if (!dir || !await guard()) return;
  const r = await ask({ title: t('stName'), fields: [{ ph: 'storyline' }] });
  if (!r || !r[0]) return;
  const n = r[0].replace(/\.json$/i, '').replace(/[\\/:*?"<>|]/g, '_') + '.json';
  try { await write(n, newStory()); await loadFiles(n); } catch (e) { toast(t('err') + e.message); }
}

// Renomeia o arquivo no disco: usa move() quando o navegador suporta; senão copia o conteúdo e remove o antigo.
// As edições não salvas continuam na tela (não recarrega do disco).
async function renameStoryline() {
  if (!dir || !cur) return toast(t('noFiles'));
  const r = await ask({ title: t('renameSt'), fields: [{ ph: t('stName'), v: cur.replace(/\.json$/i, '') }] });
  if (!r || !r[0]) return;
  const n = r[0].replace(/\.json$/i, '').replace(/[\\/:*?"<>|]/g, '_') + '.json', old = cur;
  if (n === old) return;
  try {
    let exists = true; try { await dir.getFileHandle(n); } catch { exists = false; }
    if (exists) return toast(t('nameExists'));
    const fh = await dir.getFileHandle(old);
    try { await fh.move(n); }
    catch {
      const txt = await (await fh.getFile()).text();
      const w = await (await dir.getFileHandle(n, { create: true })).createWritable();
      await w.write(txt); await w.close();
      await dir.removeEntry(old);
    }
    const o = [...$('fileSelect').options].find(x => x.value === old);
    if (o) o.value = o.textContent = n;
    cur = n; $('fileSelect').value = n; toast(t('renamed'));
  } catch (e) { toast(t('err') + e.message); }
}

// Exclui o arquivo da storyline atual da pasta (com confirmação) e carrega a próxima disponível.
async function deleteStoryline() {
  if (!dir || !cur) return toast(t('noFiles'));
  if (!await ask({ title: t('delSt').replace('{n}', cur), ok: t('del') })) return;
  try {
    await dir.removeEntry(cur);
    mark(false); await loadFiles(); toast(t('deleted'));
  } catch (e) { toast(t('err') + e.message); }
}

/* ---------- Imagens (upload local em resolução original, salva no JSON) ---------- */
const readFile = f => new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result); fr.readAsDataURL(f); });

/* ---------- Render ---------- */
function mediaHTML(c) {
  const im = c.images[c.idx];
  if (!im) return `<div>🖼<br>${t('noImg')}<small class="res-hint">${t('resHint')}</small></div>`;
  const nav = c.images.length > 1 ? `<button class="nav prev" data-act="prev">‹</button><button class="nav next" data-act="next">›</button>` : '';
  return `<img src="${esc(im.src)}" alt="" data-act="zoom" draggable="false">${nav}<span class="count">${c.idx + 1}/${c.images.length}</span>`;
}
const field = (c, k) => `<label class="fld"><span>${t(k)}<em>${(c[k] || '').length} ${t('chars')}</em></span><div class="ta"><textarea data-f="${k}" placeholder="${t('ph')}" title="${t('expand')}">${esc(c[k])}</textarea><button type="button" class="icon copy" data-act="copy" data-k="${k}" data-tip="${t('copied')}" title="${t('copy')}">⧉</button></div></label>`;
const cardHTML = c => `<article class="card glass ${c.id === fresh ? 'pop' : ''}" data-c="${c.id}">
  <div class="card-top"><span class="grip" draggable="true" data-drag="card">⠿</span><input class="pose" data-f="title" value="${esc(c.title)}" placeholder="${t('poseTitle')}"><button class="icon del" data-act="delCard" title="${t('del')}">✕</button></div>
  <div class="media">${mediaHTML(c)}</div>
  <div class="row"><button class="btn sm" data-act="addImg" title="${t('resHint')}">${t('addImg')}</button><button class="btn sm danger" data-act="delImg" title="${t('delImg')}">🗑</button></div>
  ${field(c, 'positive')}
  <div class="url-row"><input data-f="url" value="${esc(c.url)}" placeholder="${t('urlPh')}"><button class="btn sm" data-act="openUrl" title="${t('open')}">↗</button></div>
  ${field(c, 'negative')}</article>`;
const modelHTML = () => `<section class="section glass model"><div class="sec-head"><h2 class="sec-name">Model</h2></div><div class="model-body">
  <label class="fld"><span>${t('basePrompt')}<em>${data.model.prompt.length} ${t('chars')}</em></span><div class="ta"><textarea data-m="prompt" placeholder="${t('ph')}" title="${t('expand')}">${esc(data.model.prompt)}</textarea><button type="button" class="icon copy" data-act="copyModel" data-tip="${t('copied')}" title="${t('copy')}">⧉</button></div></label>
  <div class="url-row"><input data-m="lora" value="${esc(data.model.lora)}" placeholder="${t('lora')} (https://...)"><button class="btn" data-act="openLora">${t('open')} ↗</button></div></div></section>`;
function render() {
  const root = $('sections');
  if (!data) { root.innerHTML = ''; return; }
  root.innerHTML = modelHTML() + data.sections.map(s => `<section class="section glass ${s.id === fresh ? 'pop' : ''}" data-s="${s.id}">
    <div class="sec-head"><span class="grip" draggable="true" data-drag="sec">⠿</span><input class="sec-title" data-sf value="${esc(s.title)}"><button class="btn" data-act="addCard">${t('addCard')}</button><button class="btn danger" data-act="delSec" title="${t('del')}">🗑</button></div>
    <div class="cards">${s.cards.map(cardHTML).join('')}</div></section>`).join('');
  fresh = null;
}

/* ---------- Eventos (delegação) ---------- */
const copyText = async (b, txt) => {
  try { await navigator.clipboard.writeText(txt || ''); b.classList.add('copied'); setTimeout(() => b.classList.remove('copied'), 1200); }
  catch (er) { toast(t('err') + er.message); }
};
document.addEventListener('click', async e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act;
  if (a === 'zoom') { lbImg.src = b.src; lb.classList.add('show'); lb.querySelector('.lb-scroll').scrollTo(0, 0); if (lbImg.complete) lbImg.onload(); return; }
  if (a === 'copyModel') return copyText(b, data.model.prompt);
  if (a === 'openLora') return openUrl(data.model.lora);
  const se = b.closest('.section'), ce = b.closest('.card');
  const s = se && sec(se.dataset.s), c = s && ce && s.cards.find(x => x.id === ce.dataset.c);
  const refresh = () => { ce.querySelector('.media').innerHTML = mediaHTML(c); };
  const n = c && c.images.length;
  if (a === 'addCard') { const k = mkCard(); s.cards.push(k); fresh = k.id; mark(true); render(); }
  else if (a === 'delSec') {
    if (await ask({ title: t('delSec'), ok: t('del') })) { se.classList.add('out'); setTimeout(() => { data.sections = data.sections.filter(x => x !== s); mark(true); render(); }, 250); }
  }
  else if (a === 'delCard') {
    if (await ask({ title: t('delCard'), ok: t('del') })) { ce.classList.add('out'); setTimeout(() => { s.cards = s.cards.filter(x => x !== c); mark(true); render(); }, 250); }
  }
  else if (a === 'addImg') { pending = { c, ce }; $('fileInput').click(); }
  else if (a === 'delImg' && n) { c.images.splice(c.idx, 1); c.idx = Math.max(0, c.idx - 1); mark(true); refresh(); }
  else if (a === 'prev' || a === 'next') { c.idx = (c.idx + (a === 'next' ? 1 : -1) + n) % n; refresh(); }
  else if (a === 'openUrl') openUrl(c.url);
  else if (a === 'copy') copyText(b, c[b.dataset.k]);
});
document.addEventListener('input', e => {
  const el = e.target, em = el.closest('.fld') && el.closest('.fld').querySelector('em');
  if (el.dataset.m) { data.model[el.dataset.m] = el.value; if (em) em.textContent = el.value.length + ' ' + t('chars'); return mark(true); }
  const se = el.closest('.section'); if (!se) return;
  const s = sec(se.dataset.s);
  if ('sf' in el.dataset) s.title = el.value;
  else if (el.dataset.f) {
    const c = s.cards.find(x => x.id === el.closest('.card').dataset.c);
    c[el.dataset.f] = el.value;
    if (em) em.textContent = el.value.length + ' ' + t('chars');
  } else return;
  mark(true);
});
$('fileInput').onchange = async e => {
  if (!pending) return;
  const { c, ce } = pending;
  for (const f of e.target.files) c.images.push({ src: await readFile(f) });
  e.target.value = ''; c.idx = c.images.length - 1; mark(true);
  ce.querySelector('.media').innerHTML = mediaHTML(c);
};

/* ---------- Header ---------- */
$('btnPick').onclick = pickFolder;
$('btnNew').onclick = newStoryline;
$('btnRename').onclick = renameStoryline;
$('btnDelSt').onclick = deleteStoryline;
$('btnSave').onclick = save;
$('btnAddSection').onclick = async () => {
  if (!data) return toast(t('noFiles'));
  const r = await ask({ title: t('secName'), fields: [{ ph: '...' }] });
  if (!r || !r[0]) return;
  const s = { id: uid(), title: r[0], cards: [mkCard()] };
  data.sections.push(s); fresh = s.id; mark(true); render();
  setTimeout(() => $('sections').lastElementChild.scrollIntoView({ behavior: 'smooth' }), 50);
};
$('fileSelect').onchange = async e => {
  if (!await guard()) { e.target.value = cur; return; }
  await openFile(e.target.value);
};
document.querySelectorAll('.langSel').forEach(s => s.onchange = e => { lang = e.target.value; localStorage.lang = lang; applyLang(); });
const setTheme = v => { document.documentElement.dataset.theme = v; document.querySelectorAll('.themeSel').forEach(s => s.value = v); };
document.querySelectorAll('.themeSel').forEach(s => s.onchange = e => { setTheme(e.target.value); localStorage.theme = e.target.value; });
window.addEventListener('beforeunload', e => { if (dirty) e.preventDefault(); });

/* ---------- Lightbox ---------- */
lbImg.onload = () => { $('lbHint').textContent = lbImg.naturalWidth + '×' + lbImg.naturalHeight + ' · ' + t('resHint'); };
lb.onclick = e => { if (e.target === lb || e.target.classList.contains('lb-scroll') || e.target.id === 'lbClose') lb.classList.remove('show'); };
document.addEventListener('keydown', e => { if (e.key === 'Escape') { lb.classList.remove('show'); $('pvx').classList.remove('show'); } });

/* ---------- Expandir prompt (duplo clique) ---------- */
const pv = $('pvx'), pvText = $('pvText'); let pvSrc = null;
const pvCount = () => { $('pvCount').textContent = pvText.value.length + ' ' + t('chars'); };
document.addEventListener('dblclick', e => {
  const ta = e.target.closest('textarea[data-f],textarea[data-m]'); if (!ta) return;
  pvSrc = ta; pvText.value = ta.value;
  $('pvTitle').textContent = ta.closest('.fld').querySelector('span').firstChild.textContent;
  pvCount(); pv.classList.add('show'); pvText.focus();
});
// edita o prompt original em tempo real (reaproveita o tratamento de "input" já existente)
pvText.addEventListener('input', () => { pvSrc.value = pvText.value; pvSrc.dispatchEvent(new Event('input', { bubbles: true })); pvCount(); });
pv.onclick = e => { if (e.target === pv || e.target.id === 'pvClose') pv.classList.remove('show'); };

/* ---------- Drag and drop (seções e cards; "Model" fica travada no topo) ---------- */
let drag = null, drop = null;
const clearDrop = () => document.querySelectorAll('.drop-before,.drop-after,.drop-end').forEach(e => e.classList.remove('drop-before', 'drop-after', 'drop-end'));
document.addEventListener('dragstart', e => {
  const g = e.target.closest && e.target.closest('[data-drag]'); if (!g) return;
  const el = g.closest(g.dataset.drag === 'sec' ? '.section' : '.card');
  drag = { k: g.dataset.drag, el };
  e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', 'x'); e.dataTransfer.setDragImage(el, 20, 20);
  setTimeout(() => { el.classList.add('dragging'); if (drag && drag.k === 'sec') document.body.classList.add('sorting-sec'); }, 0);
});
document.addEventListener('dragover', e => {
  if (!drag) return;
  if (e.clientY < 80) scrollBy(0, -20); else if (e.clientY > innerHeight - 80) scrollBy(0, 20);
  let over, after = false, end = false;
  if (drag.k === 'sec') {
    let best = 1e9; // seção normal mais próxima do cursor (nunca acima do Model)
    document.querySelectorAll('.section[data-s]').forEach(s => { const q = s.getBoundingClientRect(), d = Math.abs(e.clientY - (q.top + q.height / 2)); if (d < best) { best = d; over = s; } });
    if (!over || over === drag.el) { clearDrop(); drop = null; e.preventDefault(); return; }
    const r = over.getBoundingClientRect(); after = e.clientY > r.top + r.height / 2;
  } else {
    over = e.target.closest('.card');
    if (over === drag.el) { clearDrop(); drop = null; return; }
    if (over) { const r = over.getBoundingClientRect(); after = e.clientX > r.left + r.width / 2; }
    else { over = e.target.closest('.cards'); if (!over) { clearDrop(); drop = null; return; } end = true; }
  }
  e.preventDefault(); clearDrop();
  over.classList.add(end ? 'drop-end' : after ? 'drop-after' : 'drop-before');
  drop = { over, after, end };
});
document.addEventListener('drop', e => {
  if (!drag || !drop) return;
  e.preventDefault();
  const { over, after, end } = drop, el = drag.el, k = drag.k;
  drag = drop = null; clearDrop(); document.body.classList.remove('sorting-sec');
  if (k === 'sec') {
    const [m] = data.sections.splice(data.sections.findIndex(s => s.id === el.dataset.s), 1);
    const to = data.sections.findIndex(s => s.id === over.dataset.s);
    data.sections.splice(after ? to + 1 : to, 0, m);
  } else {
    const fs = sec(el.closest('.section').dataset.s);
    const [m] = fs.cards.splice(fs.cards.findIndex(c => c.id === el.dataset.c), 1);
    const ts = sec(over.closest('.section').dataset.s);
    if (end) ts.cards.push(m);
    else { const to = ts.cards.findIndex(c => c.id === over.dataset.c); ts.cards.splice(after ? to + 1 : to, 0, m); }
  }
  mark(true); render();
});
document.addEventListener('dragend', () => { clearDrop(); document.body.classList.remove('sorting-sec'); document.querySelectorAll('.dragging').forEach(e => e.classList.remove('dragging')); drag = drop = null; });

/* ---------- Init ---------- */
document.querySelectorAll('.themeSel').forEach(s => fill(s, THEMES));
document.querySelectorAll('.langSel').forEach(s => fill(s, LANGS));
setTheme(THEMES.some(x => x[0] === localStorage.theme) ? localStorage.theme : 'aurora');
applyLang();
