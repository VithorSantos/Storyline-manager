'use strict';
const $ = id => document.getElementById(id);

/* ---------- i18n (PT / EN / ES) ---------- */
const I18N = {
  pt: { seeMore: 'Ver mais', openFolder: 'Abrir pasta', th_blue: 'Azul', th_purple: 'Roxo', th_cyan: 'Ciano', th_amber: 'Âmbar', th_crimson: 'Carmesim', navHome: "Início", navLib: "Biblioteca", searchPh: "Buscar storylines…", newProj: "Novo projeto", welcome: "Bem-vindo de volta!", heroSub: "Transforme suas ideias em histórias extraordinárias com uma experiência fluida, moderna e intuitiva.", startNow: "Começar agora", tutorials: "Ver tutoriais", stSt: "Storylines", stSec: "Seções", stCards: "Cards", stLast: "Última edição", yourProj: "Seus projetos", yourProjSub: "Continue de onde parou ou explore novas ideias.", searchProj: "Buscar projetos…", sortBy: "Ordenar por", sortName: "Ordem alfabética", sortCreated: "Data de criação", sortEdited: "Última edição", newTileSub: "Que história você vai escrever hoje?", cardsW: "cards", secW: "seções", cardW1: "card", secW1: "seção", editName: "Editar nome", changeImg: "Trocar imagem", moreOpts: "Mais opções", wsLight: "Fundo claro", wsDark: "Fundo escuro", wsColor: "Fundo na cor do tema", modeLight: "Modo claro", modeDark: "Modo escuro", nameReq: "Digite um nome.", newStTitle: "Nova storyline", imgUpdated: "Imagem atualizada!", imgRemoved: "Imagem removida!", noMatch: "Nenhuma storyline encontrada.", chooseImg: "Escolher imagem", noImgChosen: "Nenhuma imagem escolhida", delMode: "Excluir storylines", selOne: "1 selecionada", selMany: "{n} selecionadas", selAll: "Selecionar tudo", selClear: "Limpar seleção", delSel: "Excluir", delMany: "Excluir {n} storylines? Os arquivos serão apagados da pasta.", deletedMany: "Storylines excluídas!", cancelSel: "Cancelar", updated: "Atualizado", coverOpt: "Capa (opcional)", back: "← Dashboard", lastFolder: "Continuar na última pasta", heroPre: "Use sua criatividade com Storyline", homeDesc: 'Gerencie suas storylines salvando diretamente em arquivos JSON na sua pasta local.', pick: 'Selecione uma pasta para guardar ou carregar suas storylines', newSt: '+ Nova Storyline', addSec: '+ Adicionar Seção', save: 'Salvar na Pasta', addCard: '+ Adicionar Card', addImg: '+ Imagem', poseTitle: 'Título da Pose', newPose: 'Nova Pose', firstSec: 'Seção 1', positive: 'Prompt Positivo', negative: 'Prompt Negativo', basePrompt: 'Prompt Base', lora: 'URL da LoRA', open: 'Abrir', urlPh: 'URL de referência (https://...)', chars: 'chars', delSt: 'Excluir a storyline "{n}"? O arquivo será apagado da pasta.', deleted: 'Storyline excluída!', seedProc: 'Seed Processor', seedK: 'Seed Ksampler', newStS: '+ Storyline', addSecS: '+ Seção', saveS: 'Salvar', tokens: 'Tokens', tokTip: 'Estimativa de tokens (Base + cena). Modelos CLIP leem ~75 por bloco', poss: 'Possivelmente repetido', possTip: 'Ligar/desligar a detecção de conflitos e repetições parciais (cores, opostos, redundâncias)', helper: 'Assistente de Prompt', helperPh: 'Escreva aqui o prompt da cena. Tags já presentes no Prompt Base ficam em amarelo, no Negativo em vermelho, as repetidas em laranja e as possivelmente repetidas (ex.: white hair e brown hair) em ciano.', inBase: 'Já no Base', inNeg: 'No Negativo', dupDraft: 'Repetidas', bothLists: 'Em Base e Negativo:', dupBase: 'Repetidas no Base:', dupNeg: 'Repetidas no Negativo:', expand: 'Clique duas vezes para expandir', renameSt: 'Renomear storyline', nameExists: 'Já existe um arquivo com esse nome.', renamed: 'Renomeado!', ph: 'Digite as tags...', copy: 'Copiar prompt', copied: 'Copiado!', noImg: 'Sem imagem', ok: 'OK', cancel: 'Cancelar', del: 'Excluir', discard: 'Descartar', delSec: 'Excluir esta seção e todos os seus cards?', delCard: 'Excluir este card?', delImg: 'Remover imagem', secName: 'Nome da seção', stName: 'Nome da storyline', saved: 'Salvo na pasta!', unsupported: 'Use Chrome ou Edge (File System Access API).', noFiles: 'Nenhuma storyline na pasta. Crie uma nova.', unsaved: 'Há alterações não salvas. Deseja salvar antes de continuar?', err: 'Erro: ' },
  en: { seeMore: 'See more', openFolder: 'Open folder', th_blue: 'Blue', th_purple: 'Purple', th_cyan: 'Cyan', th_amber: 'Amber', th_crimson: 'Crimson', navHome: "Home", navLib: "Library", searchPh: "Search storylines…", newProj: "New project", welcome: "Welcome back!", heroSub: "Turn your ideas into extraordinary stories with a fluid, modern and intuitive experience.", startNow: "Get started", tutorials: "Watch tutorials", stSt: "Storylines", stSec: "Sections", stCards: "Cards", stLast: "Last edit", yourProj: "Your projects", yourProjSub: "Pick up where you left off or explore new ideas.", searchProj: "Search projects…", sortBy: "Sort by", sortName: "Alphabetical", sortCreated: "Creation date", sortEdited: "Last edit", newTileSub: "What story will you write today?", cardsW: "cards", secW: "sections", cardW1: "card", secW1: "section", editName: "Edit name", changeImg: "Change image", moreOpts: "More options", wsLight: "Light background", wsDark: "Dark background", wsColor: "Theme color background", modeLight: "Light mode", modeDark: "Dark mode", nameReq: "Enter a name.", newStTitle: "New storyline", imgUpdated: "Image updated!", imgRemoved: "Image removed!", noMatch: "No storylines found.", chooseImg: "Choose image", noImgChosen: "No image chosen", delMode: "Delete storylines", selOne: "1 selected", selMany: "{n} selected", selAll: "Select all", selClear: "Clear selection", delSel: "Delete", delMany: "Delete {n} storylines? The files will be removed from the folder.", deletedMany: "Storylines deleted!", cancelSel: "Cancel", updated: "Updated", coverOpt: "Cover (optional)", back: "← Dashboard", lastFolder: "Continue in last folder", heroPre: "Unleash your creativity with Storyline", homeDesc: 'Manage your storylines by saving straight to JSON files in your local folder.', pick: 'Select a folder to store or load your storylines', newSt: '+ New Storyline', addSec: '+ Add Section', save: 'Save to Folder', addCard: '+ Add Card', addImg: '+ Image', poseTitle: 'Pose title', newPose: 'New Pose', firstSec: 'Section 1', positive: 'Positive Prompt', negative: 'Negative Prompt', basePrompt: 'Base Prompt', lora: 'LoRA URL', open: 'Open', urlPh: 'Reference URL (https://...)', chars: 'chars', delSt: 'Delete storyline "{n}"? The file will be removed from the folder.', deleted: 'Storyline deleted!', seedProc: 'Seed Processor', seedK: 'Seed Ksampler', newStS: '+ Storyline', addSecS: '+ Section', saveS: 'Save', tokens: 'Tokens', tokTip: 'Token estimate (Base + scene). CLIP models read ~75 per chunk', poss: 'Possibly repeated', possTip: 'Turn on/off conflict and partial-repeat detection (colors, opposites, redundancy)', helper: 'Prompt Assistant', helperPh: 'Write the scene prompt here. Tags already in the Base Prompt are marked yellow, in the Negative red, repeated ones orange and possibly repeated ones (e.g. white hair and brown hair) cyan.', inBase: 'Already in Base', inNeg: 'In Negative', dupDraft: 'Repeated', bothLists: 'In both Base and Negative:', dupBase: 'Repeated in Base:', dupNeg: 'Repeated in Negative:', expand: 'Double-click to expand', renameSt: 'Rename storyline', nameExists: 'A file with that name already exists.', renamed: 'Renamed!', ph: 'Type tags...', copy: 'Copy prompt', copied: 'Copied!', noImg: 'No image', ok: 'OK', cancel: 'Cancel', del: 'Delete', discard: 'Discard', delSec: 'Delete this section and all its cards?', delCard: 'Delete this card?', delImg: 'Remove image', secName: 'Section name', stName: 'Storyline name', saved: 'Saved to folder!', unsupported: 'Use Chrome or Edge (File System Access API).', noFiles: 'No storylines in this folder. Create one.', unsaved: 'You have unsaved changes. Save before continuing?', err: 'Error: ' },
  es: { seeMore: 'Ver más', openFolder: 'Abrir carpeta', th_blue: 'Azul', th_purple: 'Morado', th_cyan: 'Cian', th_amber: 'Ámbar', th_crimson: 'Carmesí', navHome: "Inicio", navLib: "Biblioteca", searchPh: "Buscar storylines…", newProj: "Nuevo proyecto", welcome: "¡Bienvenido de nuevo!", heroSub: "Transforma tus ideas en historias extraordinarias con una experiencia fluida, moderna e intuitiva.", startNow: "Empezar ahora", tutorials: "Ver tutoriales", stSt: "Storylines", stSec: "Secciones", stCards: "Cards", stLast: "Última edición", yourProj: "Tus proyectos", yourProjSub: "Continúa donde lo dejaste o explora nuevas ideas.", searchProj: "Buscar proyectos…", sortBy: "Ordenar por", sortName: "Orden alfabético", sortCreated: "Fecha de creación", sortEdited: "Última edición", newTileSub: "¿Qué historia vas a escribir hoy?", cardsW: "cards", secW: "secciones", cardW1: "card", secW1: "sección", editName: "Editar nombre", changeImg: "Cambiar imagen", moreOpts: "Más opciones", wsLight: "Fondo claro", wsDark: "Fondo oscuro", wsColor: "Fondo del color del tema", modeLight: "Modo claro", modeDark: "Modo oscuro", nameReq: "Escribe un nombre.", newStTitle: "Nueva storyline", imgUpdated: "¡Imagen actualizada!", imgRemoved: "¡Imagen eliminada!", noMatch: "No se encontraron storylines.", chooseImg: "Elegir imagen", noImgChosen: "Ninguna imagen elegida", delMode: "Eliminar storylines", selOne: "1 seleccionada", selMany: "{n} seleccionadas", selAll: "Seleccionar todo", selClear: "Quitar selección", delSel: "Eliminar", delMany: "¿Eliminar {n} storylines? Los archivos se borrarán de la carpeta.", deletedMany: "¡Storylines eliminadas!", cancelSel: "Cancelar", updated: "Actualizado", coverOpt: "Portada (opcional)", back: "← Dashboard", lastFolder: "Continuar en la última carpeta", heroPre: "Usa tu creatividad con Storyline", homeDesc: 'Gestiona tus storylines guardando directamente en archivos JSON en tu carpeta local.', pick: 'Selecciona una carpeta para guardar o cargar tus storylines', newSt: '+ Nueva Storyline', addSec: '+ Añadir Sección', save: 'Guardar en la Carpeta', addCard: '+ Añadir Card', addImg: '+ Imagen', poseTitle: 'Título de la pose', newPose: 'Nueva Pose', firstSec: 'Sección 1', positive: 'Prompt Positivo', negative: 'Prompt Negativo', basePrompt: 'Prompt Base', lora: 'URL de la LoRA', open: 'Abrir', urlPh: 'URL de referencia (https://...)', chars: 'chars', delSt: '¿Eliminar la storyline "{n}"? El archivo se borrará de la carpeta.', deleted: '¡Storyline eliminada!', seedProc: 'Seed Processor', seedK: 'Seed Ksampler', newStS: '+ Storyline', addSecS: '+ Sección', saveS: 'Guardar', tokens: 'Tokens', tokTip: 'Estimación de tokens (Base + escena). Los modelos CLIP leen ~75 por bloque', poss: 'Posiblemente repetido', possTip: 'Activar/desactivar la detección de conflictos y repeticiones parciales (colores, opuestos, redundancias)', helper: 'Asistente de Prompt', helperPh: 'Escribe aquí el prompt de la escena. Las tags que ya están en el Prompt Base se marcan en amarillo, en el Negativo en rojo, las repetidas en naranja y las posiblemente repetidas (p. ej. white hair y brown hair) en cian.', inBase: 'Ya en Base', inNeg: 'En Negativo', dupDraft: 'Repetidas', bothLists: 'En Base y Negativo:', dupBase: 'Repetidas en Base:', dupNeg: 'Repetidas en Negativo:', expand: 'Haz doble clic para expandir', renameSt: 'Renombrar storyline', nameExists: 'Ya existe un archivo con ese nombre.', renamed: '¡Renombrado!', ph: 'Escribe las tags...', copy: 'Copiar prompt', copied: '¡Copiado!', noImg: 'Sin imagen', ok: 'OK', cancel: 'Cancelar', del: 'Eliminar', discard: 'Descartar', delSec: '¿Eliminar esta sección y todas sus cards?', delCard: '¿Eliminar esta card?', delImg: 'Quitar imagen', secName: 'Nombre de la sección', stName: 'Nombre de la storyline', saved: '¡Guardado en la carpeta!', unsupported: 'Usa Chrome o Edge (File System Access API).', noFiles: 'No hay storylines en la carpeta. Crea una nueva.', unsaved: 'Hay cambios sin guardar. ¿Guardar antes de continuar?', err: 'Error: ' }
};

/* ---------- Estado ---------- */
let lang = I18N[localStorage.lang] ? localStorage.lang : 'pt', files = [], dir = null, cur = null, data = null, dirty = false, fresh = null, pending = null;
const t = k => I18N[lang][k] || k;
const uid = () => Math.random().toString(36).slice(2, 9);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fixUrl = u => !u ? '' : /^https?:\/\//i.test(u) ? u : 'https://' + u;
const openUrl = u => { u = fixUrl((u || '').trim()); if (u) window.open(u, '_blank', 'noopener'); };
const mkCard = () => ({ id: uid(), title: t('newPose'), url: '', positive: '', seedProcessor: '', seedKsampler: '', images: [], idx: 0 });
const newStory = () => ({ createdAt: Date.now(), cover: '', model: { prompt: '', negative: '', draft: '', lora: '' }, sections: [{ id: uid(), title: t('firstSec'), cards: [mkCard()] }] });
const sec = id => data.sections.find(s => s.id === id);
/* ---------- Textos das configurações (PT / EN / ES) ---------- */
Object.assign(I18N.pt, {
  navSet: 'Configurações', setTitle: 'Configurações', setIntro: 'Antes de começar, revise como suas storylines e imagens serão salvas. Os valores recomendados já estão selecionados: basta clicar em "Salvar e continuar" ou ajustar o que preferir. Você pode mudar tudo depois em Configurações.',
  setSecSave: 'Salvamento', setSecImg: 'Imagens', setSecData: 'Dados',
  autoName: 'Salvamento automático', autoDesc: 'Grava a storyline na pasta 3 segundos depois da sua última edição. Com ele ligado, o botão "Salvar na Pasta" fica oculto. Atalho: Ctrl+S salva na hora.',
  autoOffTitle: 'Desligar o salvamento automático?', autoOffBody: 'Com ele desligado, suas alterações só são gravadas quando você clicar em "Salvar na Pasta" (ou usar Ctrl+S).\nSe você fechar a aba ou o navegador travar antes de salvar, o que não foi salvo será perdido. Ao trocar de storyline ou voltar ao painel, o app vai perguntar se você quer salvar.', autoOffOk: 'Desligar mesmo assim',
  keepName: 'Manter imagens originais', keepDesc: 'Guarda as imagens exatamente como você enviou, sem converter nem redimensionar.',
  keepWTitle: 'Com a conversão ativa (recomendado):', keepW1: 'o formato das imagens é trocado para o escolhido abaixo;', keepW2: 'imagens maiores que a resolução máxima são reduzidas;', keepW3: 'metadados embutidos são removidos (por exemplo, o workflow que o ComfyUI grava dentro dos PNGs);', keepW4: 'o arquivo original não é guardado e a conversão não pode ser desfeita;', keepW5: 'GIFs não são alterados.', keepWTip: 'Para preservar tudo, ligue "Manter imagens originais".',
  fmtName: 'Formato', fmtWebp: 'WebP deixa os arquivos bem mais leves (normalmente 25% a 80% menores) com qualidade praticamente igual. Recomendado.', fmtPng: 'Atenção: PNG não perde qualidade, mas gera arquivos bem maiores, o que deixa as storylines pesadas.', fmtJpeg: 'Atenção: JPEG é leve, mas perde qualidade a cada compressão e não suporta transparência (áreas transparentes ficam brancas).',
  qualName: 'Qualidade', qualDesc: 'Quanto maior, melhor a imagem e maior o arquivo. 90 é um bom equilíbrio.',
  resName: 'Resolução máxima', resDesc: 'Imagens maiores são reduzidas para caber nesse limite, mantendo a proporção (sem cortar nem distorcer). Também é a resolução recomendada mostrada nos cards.', resCustom: 'Personalizada…', resOrig: 'Manter resolução original', resDefLbl: 'padrão', resBad: 'Use números inteiros entre 64 e 8192.',
  upName: 'Ampliar imagens menores', upDesc: 'Aumenta imagens menores que o limite até alcançá-lo. Não melhora a nitidez e pode aumentar o arquivo.',
  convName: 'Converter imagens existentes', convDesc: 'Aplica as configurações salvas às imagens de todas as storylines da pasta.', convBtn: 'Converter…', convNeedSave: 'Salve as alterações das configurações para poder converter.', convKeepOn: 'Desligue "Manter imagens originais" (aba Imagens) para poder converter.',
  bkName: 'Backup antes de converter', bkDesc: 'Copia os arquivos JSON alterados para uma subpasta "backup-…" (ocupa espaço extra).',
  dlName: 'Baixar imagens', dlDesc: 'Baixa todas as imagens de uma storyline em um arquivo ZIP, organizadas por seção e card.', dlFmtStored: 'Como estão salvas', dlFmtPng: 'Converter para PNG', dlBtn: 'Baixar ZIP', dlNone: 'Esta storyline não tem imagens.', dlDone: 'ZIP gerado com {n} imagens.', dlBig: 'Imagens demais para um único ZIP (limite de 4 GB).', zipping: 'Gerando ZIP…',
  setSave: 'Salvar', setSaveGo: 'Salvar e continuar', setReset: 'Restaurar padrões', setUnsavedTitle: 'Há alterações não salvas nas configurações. Deseja salvar antes de sair?', setSaved: 'Configurações salvas!',
  analyzing: 'Analisando imagens…', converting: 'Convertendo imagens…', jobCancelling: 'Cancelando…',
  convSummaryTitle: 'Converter {n} imagens existentes?', convSumA: '{r} serão reduzidas, {f} terão só o formato trocado (se o arquivo ficar menor) e {k} já estão no padrão.', convBk: 'Será criado um backup dos arquivos alterados.', convNoBk: 'Nenhum backup será criado.', convIrrev: 'Esta ação não pode ser desfeita.', convGo: 'Converter', convNone: 'Todas as imagens já estão no padrão.', convDone: 'Conversão concluída: {a} → {b} ({n} imagens).', convCancelled: 'Conversão cancelada. Storylines já convertidas: {s}.',
  allSaved: 'Tudo já está salvo.', saveErr: '⚠ Erro ao salvar · Tentar de novo', gain: '{a} → {b}', resHint: 'Resolução recomendada: {r}'
});
Object.assign(I18N.en, {
  navSet: 'Settings', setTitle: 'Settings', setIntro: 'Before you start, review how your storylines and images will be saved. The recommended values are already selected: just click "Save and continue" or adjust what you prefer. You can change everything later in Settings.',
  setSecSave: 'Saving', setSecImg: 'Images', setSecData: 'Data',
  autoName: 'Autosave', autoDesc: 'Writes the storyline to the folder 3 seconds after your last edit. While it is on, the "Save to Folder" button is hidden. Shortcut: Ctrl+S saves immediately.',
  autoOffTitle: 'Turn off autosave?', autoOffBody: 'With it off, your changes are only written when you click "Save to Folder" (or press Ctrl+S).\nIf you close the tab or the browser crashes before saving, anything unsaved will be lost. When you switch storylines or go back to the dashboard, the app will ask whether to save.', autoOffOk: 'Turn off anyway',
  keepName: 'Keep original images', keepDesc: 'Stores images exactly as you uploaded them, with no conversion or resizing.',
  keepWTitle: 'With conversion on (recommended):', keepW1: 'the image format is changed to the one chosen below;', keepW2: 'images larger than the maximum resolution are reduced;', keepW3: 'embedded metadata is removed (for example, the workflow ComfyUI writes inside PNGs);', keepW4: 'the original file is not kept and the conversion cannot be undone;', keepW5: 'GIFs are left unchanged.', keepWTip: 'To preserve everything, turn on "Keep original images".',
  fmtName: 'Format', fmtWebp: 'WebP makes files much lighter (usually 25% to 80% smaller) with practically the same quality. Recommended.', fmtPng: 'Warning: PNG loses no quality, but produces much larger files, which makes storylines heavy.', fmtJpeg: 'Warning: JPEG is light, but loses quality with each compression and does not support transparency (transparent areas become white).',
  qualName: 'Quality', qualDesc: 'Higher means a better image and a larger file. 90 is a good balance.',
  resName: 'Maximum resolution', resDesc: 'Larger images are reduced to fit this limit, keeping the aspect ratio (no cropping or distortion). It is also the recommended resolution shown on the cards.', resCustom: 'Custom…', resOrig: 'Keep original resolution', resDefLbl: 'default', resBad: 'Use whole numbers between 64 and 8192.',
  upName: 'Upscale smaller images', upDesc: 'Enlarges images smaller than the limit until they reach it. It does not improve sharpness and may increase file size.',
  convName: 'Convert existing images', convDesc: 'Applies the saved settings to the images of every storyline in the folder.', convBtn: 'Convert…', convNeedSave: 'Save the settings changes to be able to convert.', convKeepOn: 'Turn off "Keep original images" (Images tab) to be able to convert.',
  bkName: 'Backup before converting', bkDesc: 'Copies the changed JSON files to a "backup-…" subfolder (uses extra space).',
  dlName: 'Download images', dlDesc: 'Downloads all images of a storyline as a ZIP file, organized by section and card.', dlFmtStored: 'As stored', dlFmtPng: 'Convert to PNG', dlBtn: 'Download ZIP', dlNone: 'This storyline has no images.', dlDone: 'ZIP created with {n} images.', dlBig: 'Too many images for a single ZIP (4 GB limit).', zipping: 'Creating ZIP…',
  setSave: 'Save', setSaveGo: 'Save and continue', setReset: 'Restore defaults', setUnsavedTitle: 'You have unsaved changes in settings. Save before leaving?', setSaved: 'Settings saved!',
  analyzing: 'Analyzing images…', converting: 'Converting images…', jobCancelling: 'Cancelling…',
  convSummaryTitle: 'Convert {n} existing images?', convSumA: '{r} will be reduced, {f} will only change format (if the file gets smaller) and {k} already match the settings.', convBk: 'A backup of the changed files will be created.', convNoBk: 'No backup will be created.', convIrrev: 'This cannot be undone.', convGo: 'Convert', convNone: 'All images already match the settings.', convDone: 'Conversion finished: {a} → {b} ({n} images).', convCancelled: 'Conversion cancelled. Storylines already converted: {s}.',
  allSaved: 'Everything is already saved.', saveErr: '⚠ Save failed · Try again', gain: '{a} → {b}', resHint: 'Recommended resolution: {r}'
});
Object.assign(I18N.es, {
  navSet: 'Configuración', setTitle: 'Configuración', setIntro: 'Antes de empezar, revisa cómo se guardarán tus storylines e imágenes. Los valores recomendados ya están seleccionados: basta con pulsar "Guardar y continuar" o ajustar lo que prefieras. Puedes cambiarlo todo después en Configuración.',
  setSecSave: 'Guardado', setSecImg: 'Imágenes', setSecData: 'Datos',
  autoName: 'Guardado automático', autoDesc: 'Escribe la storyline en la carpeta 3 segundos después de tu última edición. Mientras esté activado, el botón "Guardar en la Carpeta" queda oculto. Atajo: Ctrl+S guarda al instante.',
  autoOffTitle: '¿Desactivar el guardado automático?', autoOffBody: 'Con él desactivado, tus cambios solo se escriben cuando pulses "Guardar en la Carpeta" (o uses Ctrl+S).\nSi cierras la pestaña o el navegador falla antes de guardar, lo que no se guardó se perderá. Al cambiar de storyline o volver al panel, la app preguntará si quieres guardar.', autoOffOk: 'Desactivar de todos modos',
  keepName: 'Mantener imágenes originales', keepDesc: 'Guarda las imágenes tal como las subiste, sin convertir ni redimensionar.',
  keepWTitle: 'Con la conversión activada (recomendado):', keepW1: 'el formato de las imágenes cambia al elegido abajo;', keepW2: 'las imágenes mayores que la resolución máxima se reducen;', keepW3: 'se eliminan los metadatos incrustados (por ejemplo, el workflow que ComfyUI escribe dentro de los PNG);', keepW4: 'el archivo original no se conserva y la conversión no se puede deshacer;', keepW5: 'los GIF no se modifican.', keepWTip: 'Para conservarlo todo, activa "Mantener imágenes originales".',
  fmtName: 'Formato', fmtWebp: 'WebP hace los archivos mucho más ligeros (normalmente entre un 25% y un 80% menos) con una calidad prácticamente igual. Recomendado.', fmtPng: 'Atención: PNG no pierde calidad, pero genera archivos mucho más grandes, lo que vuelve pesadas las storylines.', fmtJpeg: 'Atención: JPEG es ligero, pero pierde calidad en cada compresión y no admite transparencia (las zonas transparentes se vuelven blancas).',
  qualName: 'Calidad', qualDesc: 'Cuanto mayor, mejor imagen y archivo más grande. 90 es un buen equilibrio.',
  resName: 'Resolución máxima', resDesc: 'Las imágenes más grandes se reducen para caber en este límite, manteniendo la proporción (sin recortar ni deformar). También es la resolución recomendada que se muestra en las cards.', resCustom: 'Personalizada…', resOrig: 'Mantener resolución original', resDefLbl: 'predeterminada', resBad: 'Usa números enteros entre 64 y 8192.',
  upName: 'Ampliar imágenes menores', upDesc: 'Aumenta las imágenes menores que el límite hasta alcanzarlo. No mejora la nitidez y puede aumentar el archivo.',
  convName: 'Convertir imágenes existentes', convDesc: 'Aplica la configuración guardada a las imágenes de todas las storylines de la carpeta.', convBtn: 'Convertir…', convNeedSave: 'Guarda los cambios de configuración para poder convertir.', convKeepOn: 'Desactiva "Mantener imágenes originales" (pestaña Imágenes) para poder convertir.',
  bkName: 'Copia de seguridad antes de convertir', bkDesc: 'Copia los archivos JSON modificados a una subcarpeta "backup-…" (ocupa espacio extra).',
  dlName: 'Descargar imágenes', dlDesc: 'Descarga todas las imágenes de una storyline en un archivo ZIP, organizadas por sección y card.', dlFmtStored: 'Como están guardadas', dlFmtPng: 'Convertir a PNG', dlBtn: 'Descargar ZIP', dlNone: 'Esta storyline no tiene imágenes.', dlDone: 'ZIP creado con {n} imágenes.', dlBig: 'Demasiadas imágenes para un único ZIP (límite de 4 GB).', zipping: 'Creando ZIP…',
  setSave: 'Guardar', setSaveGo: 'Guardar y continuar', setReset: 'Restaurar valores', setUnsavedTitle: 'Hay cambios sin guardar en la configuración. ¿Guardar antes de salir?', setSaved: '¡Configuración guardada!',
  analyzing: 'Analizando imágenes…', converting: 'Convirtiendo imágenes…', jobCancelling: 'Cancelando…',
  convSummaryTitle: '¿Convertir {n} imágenes existentes?', convSumA: '{r} se reducirán, {f} solo cambiarán de formato (si el archivo queda más pequeño) y {k} ya cumplen la configuración.', convBk: 'Se creará una copia de seguridad de los archivos modificados.', convNoBk: 'No se creará ninguna copia de seguridad.', convIrrev: 'Esta acción no se puede deshacer.', convGo: 'Convertir', convNone: 'Todas las imágenes ya cumplen la configuración.', convDone: 'Conversión terminada: {a} → {b} ({n} imágenes).', convCancelled: 'Conversión cancelada. Storylines ya convertidas: {s}.',
  allSaved: 'Todo está guardado.', saveErr: '⚠ Error al guardar · Reintentar', gain: '{a} → {b}', resHint: 'Resolución recomendada: {r}'
});

/* ---------- Configurações (modelo): salvas em .storylines-settings.json na pasta, com cópia no navegador ---------- */
const SET_FILE = '.storylines-settings.json';
const SET_DEF = { v: 1, autosave: true, keep: false, format: 'webp', quality: 90, res: '904', w: 904, h: 904, upscale: false, backup: false };
const RES_PRESETS = ['904', '1024', '768', '1536'];
const normSet = o => {
  o = o && typeof o === 'object' ? o : {};
  const r = { ...SET_DEF };
  ['autosave', 'keep', 'upscale', 'backup'].forEach(k => { if (typeof o[k] === 'boolean') r[k] = o[k]; });
  if (['webp', 'png', 'jpeg'].includes(o.format)) r.format = o.format;
  const q = Math.round(+o.quality); if (q >= 60 && q <= 100) r.quality = q;
  if (o.res === 'orig' || o.res === 'custom' || RES_PRESETS.includes(String(o.res))) r.res = String(o.res);
  const w = Math.round(+o.w), h = Math.round(+o.h);
  if (w >= 64 && w <= 8192) r.w = w;
  if (h >= 64 && h <= 8192) r.h = h;
  return r;
};
const readCache = () => { try { const j = localStorage.smSettings; return j ? JSON.parse(j) : null; } catch { return null; } };
const cacheSet = () => { try { localStorage.smSettings = JSON.stringify(S); } catch { /* sem armazenamento */ } };
let S = normSet(readCache());
const limitOf = s => s.keep || s.res === 'orig' ? null : s.res === 'custom' ? { w: s.w, h: s.h } : { w: +s.res, h: +s.res };
const resHint = () => { const l = limitOf(S); return l ? t('resHint').replace('{r}', l.w + '×' + l.h) : ''; };

// Salvamento automático: depois de 3 s sem novas edições grava o arquivo (rev conta as edições; saveQ serializa as gravações)
let autoOn = S.autosave, autoT = null, rev = 0, saving = false, fsLock = false, saveQ = Promise.resolve(), stK = '', stTm = '';
// status ao lado do Salvar: '…' (aguardando), '✓ hora' (salvo) ou botão de nova tentativa (erro)
function renderSt() {
  const h = !autoOn ? '' : stK === 'wait' ? '…' : stK === 'ok' ? '✓ ' + stTm : stK === 'err' ? `<button type="button" class="save-retry" data-retry>${t('saveErr')}</button>` : '';
  document.querySelectorAll('.save-st').forEach(e => { e.innerHTML = h; });
}
const setAutoSt = (k, tm) => { stK = k; stTm = tm || ''; renderSt(); };
const nowHM = () => new Date().toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' });
function schedAuto() { clearTimeout(autoT); if (!autoOn || !dirty) return; setAutoSt('wait'); autoT = setTimeout(autoSave, 3000); }
async function autoSave() {
  if (!autoOn || !dirty || !dir || !cur || !data) return;
  if (saving || fsLock || document.getElementById('modal').classList.contains('show')) return schedAuto();   // ocupado: tenta de novo depois
  await save(true);
}
const mark = v => { dirty = v; if (v) { rev++; schedAuto(); } else clearTimeout(autoT); document.querySelectorAll('#btnSave,#fabSave').forEach(b => b.classList.toggle('dirty', v)); };
const show = id => document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id));
const toast = m => { const e = $('toast'); e.textContent = m; e.classList.add('show'); clearTimeout(e._t); e._t = setTimeout(() => e.classList.remove('show'), 2200); };

const lb = $('lightbox'), lbImg = lb.querySelector('img');
const THEMES = [['blue', '#2563eb'], ['purple', '#702963'], ['cyan', '#22d3ee'], ['amber', '#f59e0b'], ['crimson', '#64242F']];
const LANGS = [['pt', '🇧🇷 Português'], ['en', '🇺🇸 English'], ['es', '🇪🇸 Español']];
const fillThemes = () => { document.querySelectorAll('[data-th]').forEach(b => { b.title = t('th_' + b.dataset.th); b.setAttribute('aria-label', t('th_' + b.dataset.th)); }); };
let booted = false;
const popWord = () => document.querySelectorAll('.accent-word').forEach(w => { w.classList.remove('wpop'); void w.offsetWidth; w.classList.add('wpop'); });
const syncThemeCur = () => { const v = document.documentElement.dataset.theme, th = THEMES.find(x => x[0] === v); if (!th) return; $('themeCur').style.setProperty('--c', th[1]); $('dCust').style.setProperty('--c', th[1]); $('wThemeBtn').style.setProperty('--c', th[1]); $('wThemeLbl').textContent = t('th_' + v); };
// Memória da última pasta (IndexedDB guarda o FileSystemDirectoryHandle)
const idb = () => new Promise((r, x) => { const q = indexedDB.open('sm', 1); q.onupgradeneeded = () => q.result.createObjectStore('k'); q.onsuccess = () => r(q.result); q.onerror = x; });
const idbGet = async k => { const d = await idb(); return new Promise(r => { const q = d.transaction('k').objectStore('k').get(k); q.onsuccess = () => r(q.result); q.onerror = () => r(); }); };
const idbSet = async (k, v) => { const d = await idb(); return new Promise(r => { const tx = d.transaction('k', 'readwrite'); tx.objectStore('k').put(v, k); tx.oncomplete = tx.onerror = () => r(); }); };

function applyLang() {
  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es' }[lang];
  document.querySelectorAll('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  $('menuLabel').textContent = LANGS.find(l => l[0] === lang)[1]; syncThemeCur();
  document.querySelectorAll('[data-i18n-ph]').forEach(e => e.placeholder = t(e.dataset.i18nPh));
  $('dLangBtn').textContent = $('wLangBtn').textContent = LANGS.find(l => l[0] === lang)[1]; updateLast();
  document.querySelectorAll('.dd-pop [data-dl]').forEach(b => b.classList.toggle('active', b.dataset.dl === lang));
  buildSw(); renderFdd(); renderStats(); renderProjects(); updateSortUI(); updateSel();
  fillThemes(); document.querySelectorAll('#menuPop [data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  $('btnRename').title = t('renameSt'); $('btnDelSt').title = t('del'); $('btnSettings').title = t('setTitle'); $('btnSettings').setAttribute('aria-label', t('setTitle')); renderSt(); if (setEl.classList.contains('show')) refreshSet();
  if (data) render();
}

/* ---------- Modal genérico (prompt / confirmação / salvar-descartar-cancelar) ---------- */
function ask({ title, fields = [], ok, alt, cover, validate, note }) {
  return new Promise(res => {
    $('mTitle').textContent = title;
    $('mFields').innerHTML = fields.map(f => `<input class="ask-in" placeholder="${esc(f.ph)}" value="${esc(f.v || '')}">`).join('') + (cover ? `<div class="cover-pick"><span class="cp-label">${t('coverOpt')}</span><div class="cp-row"><label class="cp-btn"><input type="file" id="mCover" accept="image/*" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.6"/><path d="M21 15l-5-5L5 21"/></svg><span>${t('chooseImg')}</span></label><span class="cp-name">${t('noImgChosen')}</span><button type="button" class="cp-x" aria-label="${t('delImg')}" hidden>✕</button></div><div class="cp-prev" hidden></div></div>` : '') + (note ? `<p class="m-note">${esc(note)}</p>` : '');
    if (cover) {
      const inp = $('mCover'), nm = document.querySelector('.cp-name'), pv = document.querySelector('.cp-prev'), x = document.querySelector('.cp-x');
      const reset = () => { inp.value = ''; nm.textContent = t('noImgChosen'); nm.classList.remove('has'); pv.hidden = x.hidden = true; pv.style.backgroundImage = ''; };
      inp.onchange = () => { const f = inp.files[0]; if (!f) return reset(); nm.textContent = f.name; nm.classList.add('has'); x.hidden = pv.hidden = false; const fr = new FileReader(); fr.onload = () => { pv.style.backgroundImage = `url("${fr.result}")`; }; fr.readAsDataURL(f); };
      x.onclick = reset;
    }
    $('mErr').hidden = true;
    $('mOk').textContent = ok || t('ok');
    $('mCancel').textContent = t('cancel');
    $('mAlt').hidden = !alt; if (alt) $('mAlt').textContent = alt;
    $('modal').classList.add('show');
    ($('mFields').querySelector('input') || $('mOk')).focus();
    let busy = false;
    const done = v => { if ($('modal').contains(document.activeElement)) document.activeElement.blur(); $('modal').classList.remove('show'); $('mOk').onclick = $('mCancel').onclick = $('mAlt').onclick = $('modal').onkeydown = $('mFields').oninput = null; res(v); };
    // erro de validação: a janela continua aberta e mostra só a mensagem
    const fail = msg => { $('mErr').textContent = msg; $('mErr').hidden = false; const b = $('modal').querySelector('.modal-box'); b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); const i = $('mFields').querySelector('.ask-in'); if (i) i.focus(); };
    const submit = async () => {
      if (busy) return; busy = true;
      const v = [...$('mFields').querySelectorAll('.ask-in')].map(i => i.value.trim()); v.file = ($('mCover') && $('mCover').files[0]) || null;
      try { const er = validate ? await validate(v) : ''; if (er && er.trim()) return fail(er); done(v); }
      finally { busy = false; }
    };
    $('mOk').onclick = submit;
    $('mCancel').onclick = () => done(null);
    $('mAlt').onclick = () => done('alt');
    $('mFields').oninput = () => { $('mErr').hidden = true; };
    $('modal').onkeydown = e => { if (e.key === 'Enter') submit(); if (e.key === 'Escape') { e.stopPropagation(); $('mCancel').click(); } };
  });
}
// Protege contra perda de dados: salvar / descartar / cancelar
async function guard() {
  if (!dirty) return true;
  if (autoOn && await save(true)) return true;   // salvamento automático ligado: grava sem perguntar (se falhar, cai no aviso abaixo)
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
  await enterDir();
}
async function loadFiles(sel) {
  try { projects = await scanDir(); } catch (e) { toast(t('err') + e.message); projects = []; }
  files = projects.map(p => p.name).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  show('workspace'); window.scrollTo(0, 0);
  if (!files.length) { data = null; cur = null; mark(false); renderFdd(); await openDash(); toast(t('noFiles') + ' (' + dir.name + ')'); return; }
  await openFile(sel && files.includes(sel) ? sel : files[0]);
  if (!sel) toast('📁 ' + dir.name + ' · ' + files.length + ' .json');
}
async function openFile(n) {
  try {
    const f = await (await dir.getFileHandle(n)).getFile();
    const j = JSON.parse(await f.text());
    data = {
      cover: j.cover || '', createdAt: j.createdAt || 0,
      model: { prompt: (j.model && j.model.prompt) || '', negative: (j.model && j.model.negative) || '', draft: (j.model && j.model.draft) || '', lora: (j.model && j.model.lora) || '' },
      sections: (j.sections || []).map(s => ({ id: s.id || uid(), title: s.title || '', cards: (s.cards || []).map(c => ({ id: c.id || uid(), title: c.title || '', url: c.url || '', positive: c.positive || '', seedProcessor: c.seedProcessor || c.seed || c.negative || '', seedKsampler: c.seedKsampler || '', images: (c.images || []).map(i => ({ src: i.src })), idx: 0 })) }))
    };
    cur = n; mark(false); renderFdd(); render();
  } catch (e) { toast(t('err') + e.message); }
}
async function write(name, obj) {
  const fh = await dir.getFileHandle(name, { create: true });
  const w = await fh.createWritable();
  await w.write(JSON.stringify(obj, (k, v) => k === 'idx' ? undefined : v, 2));
  await w.close();
}
const save = quiet => (saveQ = saveQ.then(() => doSave(quiet === true)));
async function doSave(quiet) {
  if (!dir || !cur || !data) return true;
  const r = rev, name = cur, d = data;
  saving = true;
  try {
    await write(name, d);
    if (r === rev && name === cur) { mark(false); setAutoSt('ok', nowHM()); } else if (name === cur) schedAuto();   // houve edição durante a gravação: continua pendente
    syncProject(); if (!quiet) toast(t('saved')); return true;
  } catch (e) { toast(t('err') + e.message); if (autoOn) setAutoSt('err'); return false; }
  finally { saving = false; }
}
const safeName = s => s.replace(/\.json$/i, '').replace(/[\\/:*?"<>|]/g, '_') + '.json';
const fileExists = async n => { if (projects.some(p => p.name.toLowerCase() === n.toLowerCase())) return true; try { await dir.getFileHandle(n); return true; } catch { return false; } };
// Nova storyline (botões do painel e do Workspace): nome + imagem de capa opcional; erros aparecem dentro da janela
async function newStoryline(fromDash) {
  if (!dir || !await guard()) return;
  const r = await ask({ title: fromDash === true ? t('newProj') : t('newStTitle'), fields: [{ ph: t('stName') }], cover: true,
    validate: async v => !v[0] ? t('nameReq') : await fileExists(safeName(v[0])) ? t('nameExists') : '' });
  if (!r) return;
  const n = safeName(r[0]);
  try { const d = newStory(); if (r.file) d.cover = await coverOf(r.file); await write(n, d); await loadFiles(n); } catch (e) { toast(t('err') + e.message); }
}
// Renomeia o arquivo no disco: usa move() quando o navegador suporta; senão copia o conteúdo e remove o antigo.
async function moveFile(old, n) {
  const fh = await dir.getFileHandle(old);
  try { await fh.move(n); }
  catch {
    const txt = await (await fh.getFile()).text();
    const w = await (await dir.getFileHandle(n, { create: true })).createWritable();
    await w.write(txt); await w.close();
    await dir.removeEntry(old);
  }
}
// Pede o novo nome (validando dentro da janela) e renomeia; devolve o novo nome ou null
async function renameFlow(old) {
  const r = await ask({ title: t('renameSt'), fields: [{ ph: t('stName'), v: old.replace(/\.json$/i, '') }],
    validate: async v => { if (!v[0]) return t('nameReq'); const n = safeName(v[0]); if (n.toLowerCase() === old.toLowerCase()) return ''; return await fileExists(n) ? t('nameExists') : ''; } });
  if (!r) return null;
  const n = safeName(r[0]); if (n === old) return null;
  fsLock = true;
  try { await saveQ; await moveFile(old, n); } catch (e) { toast(t('err') + e.message); return null; } finally { fsLock = false; }
  const p = projects.find(x => x.name === old); if (p) p.name = n;
  return n;
}
// As edições não salvas continuam na tela (não recarrega do disco).
async function renameStoryline() {
  if (!dir || !cur) return toast(t('noFiles'));
  const old = cur, n = await renameFlow(old); if (!n) return;
  files = files.map(x => x === old ? n : x).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  cur = n; renderFdd(); toast(t('renamed'));
}

// Exclui o arquivo da storyline atual da pasta (com confirmação) e carrega a próxima disponível.
async function deleteStoryline() {
  if (!dir || !cur) return toast(t('noFiles'));
  if (!await ask({ title: t('delSt').replace('{n}', cur), ok: t('del') })) return;
  fsLock = true;
  try {
    await saveQ; await dir.removeEntry(cur);
    mark(false); fsLock = false; await loadFiles(); toast(t('deleted'));
  } catch (e) { toast(t('err') + e.message); } finally { fsLock = false; }
}

/* ---------- Imagens (upload local em resolução original, salva no JSON) ---------- */
const readFile = f => new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result); fr.readAsDataURL(f); });

/* ---------- Render ---------- */
function mediaHTML(c) {
  const im = c.images[c.idx];
  if (!im) return `<div>🖼<br>${t('noImg')}${resHint() ? `<small class="res-hint">${resHint()}</small>` : ''}</div>`;
  const nav = c.images.length > 1 ? `<button class="nav prev" data-act="prev">‹</button><button class="nav next" data-act="next">›</button>` : '';
  return `<img src="${esc(im.src)}" alt="" data-act="zoom" draggable="false">${nav}<span class="count">${c.idx + 1}/${c.images.length}</span>`;
}
const field = (c, k) => `<label class="fld"><span>${t(k)}<em>${(c[k] || '').length} ${t('chars')}</em></span><div class="ta"><textarea data-f="${k}" placeholder="${t('ph')}" title="${t('expand')}">${esc(c[k])}</textarea><button type="button" class="icon copy" data-act="copy" data-k="${k}" data-tip="${t('copied')}" title="${t('copy')}">⧉</button></div></label>`;
const sfield = (c, k, label) => `<label class="fld"><span>${label}</span><div class="ta one"><input data-f="${k}" value="${esc(c[k])}" placeholder="0"><button type="button" class="icon copy" data-act="copy" data-k="${k}" data-tip="${t('copied')}" title="${t('copy')}">⧉</button></div></label>`;
const cardHTML = c => `<article class="card glass ${c.id === fresh ? 'pop' : ''}" data-c="${c.id}">
  <div class="card-top"><span class="grip" draggable="true" data-drag="card">⠿</span><input class="pose" data-f="title" value="${esc(c.title)}" placeholder="${t('poseTitle')}"><button class="icon del" data-act="delCard" title="${t('del')}">✕</button></div>
  <div class="media">${mediaHTML(c)}</div>
  <div class="row"><button class="btn sm" data-act="addImg" title="${esc(resHint())}">${t('addImg')}</button><button class="btn sm danger" data-act="delImg" title="${t('delImg')}">🗑</button></div>
  ${field(c, 'positive')}
  <div class="url-row"><input data-f="url" value="${esc(c.url)}" placeholder="${t('urlPh')}"><button class="btn sm" data-act="openUrl" title="${t('open')}">↗</button></div>
  ${sfield(c, 'seedProcessor', t('seedProc'))}
  ${sfield(c, 'seedKsampler', t('seedK'))}</article>`;
const mfield = (k, label) => `<label class="fld"><span>${label}<em>${data.model[k].length} ${t('chars')}</em></span><div class="ta"><textarea data-m="${k}" placeholder="${t('ph')}" title="${t('expand')}">${esc(data.model[k])}</textarea><button type="button" class="icon copy" data-act="copyModel" data-k="${k}" data-tip="${t('copied')}" title="${t('copy')}">⧉</button></div></label>`;
const helperHTML = () => `<div class="helper"><label class="fld"><span>${t('helper')}<em>${data.model.draft.length} ${t('chars')}</em></span><div class="hl"><div class="hl-back" id="hlBack"></div><textarea id="hlText" data-m="draft" placeholder="${t('helperPh')}" title="${t('expand')}">${esc(data.model.draft)}</textarea><button type="button" class="icon copy" data-act="copyModel" data-k="draft" data-tip="${t('copied')}" title="${t('copy')}">⧉</button></div></label><div class="hl-sum" id="hlSum"></div></div>`;
const modelHTML = () => `<section class="section glass model"><div class="sec-head"><h2 class="sec-name">Model</h2></div><div class="model-layout"><div class="model-body">
  ${mfield('prompt', t('basePrompt'))}
  ${mfield('negative', t('negative'))}
  <div class="url-row"><input data-m="lora" value="${esc(data.model.lora)}" placeholder="${t('lora')} (https://...)"><button class="btn" data-act="openLora">${t('open')} ↗</button></div></div>${helperHTML()}</div></section>`;
function render() {
  const root = $('sections');
  if (!data) { root.innerHTML = ''; return; }
  root.innerHTML = modelHTML() + data.sections.map(s => `<section class="section glass ${s.id === fresh ? 'pop' : ''}" data-s="${s.id}">
    <div class="sec-head"><span class="grip" draggable="true" data-drag="sec">⠿</span><input class="sec-title" data-sf value="${esc(s.title)}"><button class="btn primary" data-act="addCard">${t('addCard')}</button><button class="btn danger" data-act="delSec" title="${t('del')}">🗑</button></div>
    <div class="cards">${s.cards.map(cardHTML).join('')}</div></section>`).join('');
  fresh = null;
  updateHelper();
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
  if (a === 'copyModel') return copyText(b, data.model[b.dataset.k]);
  if (a === 'openLora') return openUrl(data.model.lora);
  if (a === 'togglePoss') {
    // anima o interruptor existente e só depois redesenha o resumo (recriar o elemento cancelaria a animação)
    possOn = !possOn; localStorage.possOn = possOn ? '1' : '0';
    b.classList.toggle('on', possOn); b.setAttribute('aria-checked', possOn); b.closest('.chip').classList.toggle('off', !possOn);
    b.classList.remove('pulse'); void b.offsetWidth; b.classList.add('pulse');
    return setTimeout(updateHelper, 360);
  }
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
  if (el.dataset.m) { data.model[el.dataset.m] = el.value; if (em) em.textContent = el.value.length + ' ' + t('chars'); updateHelper(); return mark(true); }
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
  const { c } = pending, list = [...e.target.files], d0 = data; e.target.value = '';
  if (!list.length) return;
  const media = () => document.querySelector(`[data-c="${c.id}"] .media`);
  if (media()) media().classList.add('busy');
  let before = 0, after = 0, conv = 0;
  for (const f of list) {
    try {
      const r = S.keep ? { blob: f, changed: false } : await convertBlob(f);
      before += f.size; after += r.blob.size; if (r.changed) conv++;
      c.images.push({ src: await readFile(r.blob) });
    } catch (er) { toast(t('err') + er.message); }
  }
  if (data !== d0) return;   // trocou de storyline durante a conversão
  c.idx = c.images.length - 1; mark(true);
  const m = media(); if (m) { m.classList.remove('busy'); m.innerHTML = mediaHTML(c); }
  if (conv && before > after) toast('🗜 ' + t('gain').replace('{a}', fmtBytes(before)).replace('{b}', fmtBytes(after)));
};

/* ---------- Header ---------- */
$('btnPick').onclick = pickFolder;
$('btnNew').onclick = () => newStoryline();
$('btnRename').onclick = renameStoryline;
$('btnDelSt').onclick = deleteStoryline;
$('btnSave').onclick = $('fabSave').onclick = () => save();
// celular: ao rolar além do header, só o botão de salvar fica visível (o header completo fica no topo da página)
new IntersectionObserver(([e]) => { document.body.classList.toggle('hdr-away', !e.isIntersecting); }).observe(document.querySelector('.topbar'));
$('btnAddSection').onclick = async () => {
  if (!data) return toast(t('noFiles'));
  const r = await ask({ title: t('secName'), fields: [{ ph: '...' }] });
  if (!r || !r[0]) return;
  const s = { id: uid(), title: r[0], cards: [mkCard()] };
  data.sections.push(s); fresh = s.id; mark(true); render();
  setTimeout(() => $('sections').lastElementChild.scrollIntoView({ behavior: 'smooth' }), 50);
};
const switchTo = async name => { if (name === cur || !await guard()) return; await openFile(name); };
$('fabNew').onclick = () => newStoryline();
$('fabSec').onclick = () => $('btnAddSection').onclick();
const setTheme = v => { document.documentElement.dataset.theme = v; document.querySelectorAll('[data-th]').forEach(b => { const on = b.dataset.th === v; b.classList.toggle('active', on); b.setAttribute('aria-pressed', on); }); syncThemeCur(); if (booted) popWord(); };
// Home: barra de temas e menu de idiomas
$('themeBar').onclick = e => { const b = e.target.closest('[data-th]'); if (b) { setTheme(b.dataset.th); localStorage.theme = b.dataset.th; } };
const closeMenu = () => { ['menuPop', 'themePop'].forEach(id => $(id).classList.remove('show')); $('menuBtn').setAttribute('aria-expanded', 'false'); $('themeCur').setAttribute('aria-expanded', 'false'); };
const togglePop = (pop, btn) => e => { e.stopPropagation(); const was = $(pop).classList.contains('show'); closeMenu(); if (!was) { $(pop).classList.add('show'); $(btn).setAttribute('aria-expanded', 'true'); } };
$('menuBtn').onclick = togglePop('menuPop', 'menuBtn');
$('themeCur').onclick = togglePop('themePop', 'themeCur');
$('themePop').onclick = e => { const b = e.target.closest('[data-th]'); if (b) { setTheme(b.dataset.th); localStorage.theme = b.dataset.th; closeMenu(); } };
$('menuPop').onclick = e => { const b = e.target.closest('[data-lang]'); if (!b) return; lang = b.dataset.lang; localStorage.lang = lang; applyLang(); closeMenu(); };
document.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); document.querySelectorAll('.fdd.open').forEach(d => d.classList.remove('open')); closeProjMenu(); if (selMode && !e.target.closest('#modal')) setSel(false); } });
window.addEventListener('beforeunload', e => { if (dirty) e.preventDefault(); });
// ao trocar de aba/minimizar, grava na hora (se o salvamento automático estiver ligado)
document.addEventListener('visibilitychange', () => { if (document.hidden && autoOn && dirty && cur && data) save(true); });
// tentar de novo depois de um erro de salvamento
document.addEventListener('click', e => { if (e.target.closest('[data-retry]')) save(); });
// Ctrl+S salva na hora (no Workspace); nas configurações salva as configurações
document.addEventListener('keydown', e => {
  if (!(e.ctrlKey || e.metaKey) || e.shiftKey || e.altKey || e.key.toLowerCase() !== 's') return;
  e.preventDefault();
  if (!$('workspace').classList.contains('active') || jobRunning || $('modal').classList.contains('show') || !cur || !data) return;
  if (dirty) { clearTimeout(autoT); save(); } else toast(t('allSaved'));
});

/* ---------- Lightbox ---------- */
lbImg.onload = () => { const h = resHint(); $('lbHint').textContent = lbImg.naturalWidth + '×' + lbImg.naturalHeight + (h ? ' · ' + h : ''); };
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

/* ---------- Assistente de prompt: marca tags repetidas ---------- */
// Cada tag (separada por vírgula, ponto e vírgula ou quebra de linha) é normalizada: minúsculas, sem pesos
// "(tag:1.2)", sem parênteses e com "_" = espaço. Assim "no_humans" e "no humans" são a mesma tag.
const SPLIT = /([,;\n]+)/;
const norm = s => s.toLowerCase().replace(/\\/g, '').replace(/[()[\]{}]/g, '').replace(/:\s*-?\d*\.?\d+\s*$/, '').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
const ALIAS = {};
const tagKey = s => { const n = norm(s); return ALIAS[n] || n; };
const tagsOf = txt => txt.split(SPLIT).filter((_, i) => i % 2 === 0).map(tagKey).filter(Boolean);
const countMap = arr => arr.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {});
/* ---------- Analisador: dicionário (dictionary.js) + regras ---------- */
// dictionary.js (editável) define window.SM_DICT com cores, grupos de tags excludentes, apelidos e pares opcionais.
// É um script, e não um .json lido por fetch, para funcionar também ao abrir o index.html direto do disco (file://).
// cooccurrence.json (opcional, só quando servido por http): { "pairs": [["tag a", "tag b"], ...] }.
let COLORS = new Set(), possOn = localStorage.possOn !== '0';
const GIDX = {};
const addGroup = g => { g = g.map(tagKey); g.forEach(x => (GIDX[x] = GIDX[x] || []).push(g)); };
async function loadDict() {
  const d = window.SM_DICT;
  if (d) {
    Object.entries(d.aliases || {}).forEach(([a, c]) => ALIAS[norm(a)] = norm(c));
    COLORS = new Set((d.colors || []).map(norm));
    Object.values(d.groups || {}).forEach(addGroup);
    (d.pairs || []).forEach(addGroup);
  } else console.warn('dictionary.js não foi carregado');
  if (location.protocol !== 'file:') try { ((await (await fetch('cooccurrence.json')).json()).pairs || []).forEach(addGroup); } catch { /* arquivo opcional */ }
  updateHelper();
}
const colorsOf = k => k.split(' ').slice(0, -1).filter(w => COLORS.has(w)).sort().join('+');
const headOf = k => { const w = k.split(' '); return w.length > 1 ? w[w.length - 1] : ''; };
const tokens = s => (s.match(/[a-z0-9]+|[^\sa-z0-9]/gi) || []).length;
function updateHelper() {
  const back = $('hlBack'); if (!back || !data) return;
  const m = data.model, base = countMap(tagsOf(m.prompt)), neg = countMap(tagsOf(m.negative)), dr = countMap(tagsOf(m.draft));
  const baseK = Object.keys(base), drK = Object.keys(dr);
  // possível conflito (grupo excludente ou cores diferentes na mesma categoria) ou redundância (genérica ⊂ específica)
  const similar = k => {
    const out = [], c = colorsOf(k), h = headOf(k);
    [[baseK, 'Base'], [drK, '']].forEach(([list, label]) => list.forEach(o => {
      if (o === k || out.some(x => x[0] === o)) return;
      if ((GIDX[k] || []).some(g => g.includes(o)) || (c && h && h === headOf(o) && colorsOf(o) && colorsOf(o) !== c)) out.push([o, label, '≈']);
      else if (k.length > 2 && o.endsWith(' ' + k)) out.push([o, label, '⊂']);
    }));
    return out;
  };
  let nb = 0, nn = 0, nd = 0, np = 0; const pairs = [], seen = {};
  back.innerHTML = m.draft.split(SPLIT).map((seg, i) => {
    if (i % 2) return esc(seg);
    const p = seg.match(/^(\s*)([\s\S]*?)(\s*)$/), k = tagKey(p[2]);
    let cls = !k ? '' : neg[k] ? 'm-neg' : base[k] ? 'm-base' : dr[k] > 1 ? 'm-dup' : '';
    if (cls === 'm-neg') nn++; else if (cls === 'm-base') nb++; else if (cls === 'm-dup') nd++;
    else if (k) {
      const sim = similar(k);   // o número é sempre contado; o interruptor só liga/desliga a marcação e os detalhes
      if (sim.length) {
        np++; const id = [k, ...sim.map(x => x[0])].sort().join('|');
        if (!seen[id]) { seen[id] = 1; pairs.push(k + ' ' + sim.map(x => x[2] + ' ' + x[0] + (x[1] ? ' (' + x[1] + ')' : '')).join(', ')); }
        if (possOn) cls = 'm-poss';
      }
    }
    return cls ? esc(p[1]) + `<mark class="${cls}">${esc(p[2])}</mark>` + esc(p[3]) : esc(seg);
  }).join('') + '\n';
  back.scrollTop = $('hlText').scrollTop;
  const nt = tokens(m.prompt) + tokens(m.draft), dups = o => Object.keys(o).filter(k => o[k] > 1), list = (a, sep = ', ') => a.slice(0, 8).join(sep) + (a.length > 8 ? '…' : '');
  const rows = [[t('bothLists'), baseK.filter(k => neg[k]), ', ', 'k-dup'], [t('dupBase'), dups(base), ', ', 'k-dup'], [t('dupNeg'), dups(neg), ', ', 'k-dup'], [t('poss') + ':', possOn ? pairs : [], ' · ', 'k-poss']].filter(r => r[1].length);
  $('hlSum').innerHTML = `<div class="hl-chips"><span class="chip m-base">${t('inBase')}: ${nb}</span><span class="chip m-neg">${t('inNeg')}: ${nn}</span><span class="chip m-dup">${t('dupDraft')}: ${nd}</span>` +
    `<span class="chip m-poss${possOn ? '' : ' off'}"><span class="lbl">${t('poss')}: ${np}</span><button type="button" class="switch${possOn ? ' on' : ''}" role="switch" aria-checked="${possOn}" data-act="togglePoss" title="${t('possTip')}"></button></span>` +
    `<span class="chip tok${nt > 75 ? ' over' : ''}" title="${t('tokTip')}">${t('tokens')}: ~${nt}</span></div>` +
    (rows.length ? `<div class="hl-rows">` + rows.map(r => `<div class="hl-row ${r[3]}"><b>${r[0]}</b> ${esc(list(r[1], r[2]))}</div>`).join('') + `</div>` : '');
}
document.addEventListener('scroll', e => { if (e.target.id === 'hlText') $('hlBack').scrollTop = e.target.scrollTop; }, true);

/* ---------- Painel (tela intermediária entre Home e Workspace) ---------- */
// Um índice (.storylines-index.json) guarda contagens e capas; só os arquivos alterados são relidos.
// Arquivos .json que não são storylines (sem a lista "sections", ex.: dictionary.json, package.json) ficam fora da lista.
const IDX_V = 2;   // versão do índice: índices antigos são descartados e refeitos uma vez
const isStory = j => !!j && typeof j === 'object' && Array.isArray(j.sections);
let selMode = false, selSet = new Set(), projects = [], dashQ = '', viewMode = localStorage.view || 'grid', sortKey = localStorage.sortKey || 'edited', sortDir = localStorage.sortDir || 'desc', lastDir = null, slide = 0, slideT;
const BOOK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h7a3 3 0 013 3v13a2 2 0 00-2-2H2zM22 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8z"/></svg>';
const rel = ts => { const f = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' }), d = (ts - Date.now()) / 1000; for (const [u, s] of [['year', 31536000], ['month', 2592000], ['day', 86400], ['hour', 3600], ['minute', 60]]) if (Math.abs(d) >= s) return f.format(Math.round(d / s), u); return f.format(0, 'minute'); };
const coverOf = f => new Promise(r => { const fr = new FileReader(); fr.onload = () => { const im = new Image(); im.onload = () => { const s = Math.min(1, 800 / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = im.width * s; c.height = im.height * s; c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); r(c.toDataURL('image/jpeg', .8)); }; im.onerror = () => r(''); im.src = fr.result; }; fr.readAsDataURL(f); });
async function scanDir() {
  let idx = {}; try { const r = JSON.parse(await (await (await dir.getFileHandle('.storylines-index.json')).getFile()).text()); if (r.v === IDX_V) idx = r.files || {}; } catch { /* sem índice ainda */ }
  const out = [], files = {}; let changed = false;
  for await (const [n, h] of dir.entries()) {
    if (h.kind !== 'file' || !/\.json$/i.test(n) || n[0] === '.') continue;
    const f = await h.getFile(); let e = idx[n];
    if (!e || e.m !== f.lastModified) {
      let j; try { j = JSON.parse(await f.text()); } catch { continue; }   // JSON inválido: ignora (e relê se mudar)
      if (!isStory(j)) e = { m: f.lastModified, skip: 1 };
      else { const s = j.sections; e = { m: f.lastModified, s: s.length, c: s.reduce((a, x) => a + (x.cards || []).length, 0), cover: j.cover || '', created: j.createdAt || (e && e.created) || f.lastModified }; }
      changed = true;
    }
    files[n] = e; if (!e.skip) out.push({ name: n, ...e });
  }
  if (changed || Object.keys(idx).length !== Object.keys(files).length) { try { await write('.storylines-index.json', { v: IDX_V, files }); } catch { /* somente leitura */ } }
  return out;
}
async function refreshDash(anim) {
  try { projects = await scanDir(); } catch (e) { toast(t('err') + e.message); projects = []; }
  renderStats(); renderProjects(anim); updateSel();
}
async function openDash() { show('dashboard'); window.scrollTo(0, 0); spy(); await refreshDash(true); }
const metaOf = p => `${p.c} ${t(p.c === 1 ? 'cardW1' : 'cardsW')} · ${p.s} ${t(p.s === 1 ? 'secW1' : 'secW')}`;
// mantém o cache da lista em dia depois de salvar
function syncProject() {
  const p = projects.find(x => x.name === cur); if (!p || !data) return;
  p.m = Date.now(); p.s = data.sections.length; p.c = data.sections.reduce((a, x) => a + x.cards.length, 0); p.cover = data.cover || ''; renderFdd();
}
function renderStats() {
  $('stStN').textContent = projects.length; $('stSecN').textContent = projects.reduce((a, p) => a + p.s, 0); $('stCardsN').textContent = projects.reduce((a, p) => a + p.c, 0);
  $('stLastN').textContent = projects.length ? rel(Math.max(...projects.map(p => p.m))) : '—';
}
function renderProjects(anim = false) {
  const q = dashQ.trim().toLowerCase(), key = { name: p => p.name.toLowerCase(), created: p => p.created, edited: p => p.m }[sortKey];
  const a = projects.filter(p => p.name.replace(/\.json$/i, '').toLowerCase().includes(q)).sort((x, y) => key(x) > key(y) ? 1 : key(x) < key(y) ? -1 : 0);
  if (sortDir === 'desc') a.reverse();
  $('projGrid').className = 'proj-grid ' + viewMode + (anim ? '' : ' noanim') + (selMode ? ' selecting' : '');
  $('projGrid').innerHTML = `<div class="proj new" role="button" tabindex="0" data-new><span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></span><b>${t('newProj')}</b><small>${t('newTileSub')}</small></div>` + a.map((p, i) => `<div class="proj${selSet.has(p.name) ? ' sel' : ''}" role="button" tabindex="0" data-open="${esc(p.name)}" style="animation-delay:${Math.min(i, 8) * 60}ms"><span class="proj-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><button type="button" class="proj-more" data-name="${esc(p.name)}" aria-label="${t('moreOpts')}" title="${t('moreOpts')}" aria-haspopup="menu" aria-expanded="false"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="19" cy="12" r="1.9"/></svg></button><div class="proj-cover" ${p.cover ? `style="background-image:url('${esc(p.cover)}')"` : ''}>${p.cover ? '' : BOOK}</div><div class="proj-body"><h3>${esc(p.name.replace(/\.json$/i, ''))}</h3><p>${metaOf(p)}</p><div class="proj-foot"><span>${t('updated')} ${rel(p.m)}</span><i class="go">→</i></div></div></div>`).join('');
}
const SORTS = [['edited', 'sortEdited'], ['name', 'sortName'], ['created', 'sortCreated']];
function updateSortUI() {
  $('sortPop').innerHTML = SORTS.map(([k, l]) => `<li><button type="button" data-sort="${k}" class="${k === sortKey ? 'active' : ''}">${t(l)}</button></li>`).join('');
  $('sortLbl').textContent = t(SORTS.find(s => s[0] === sortKey)[1]); $('sortDirBtn').textContent = sortDir === 'asc' ? '↑' : '↓';
  $('vGrid').classList.toggle('on', viewMode === 'grid'); $('vList').classList.toggle('on', viewMode === 'list');
}
/* ---------- Modo claro/escuro (global) + opção "cor do tema" só no Workspace ---------- */
const ICON = {
  light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>',
  color: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 100 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 004-4c0-4.4-4-7.7-9-7.7z"/><circle cx="7.5" cy="11" r=".6"/><circle cx="10" cy="7" r=".6"/><circle cx="15" cy="7" r=".6"/></svg>'
};
let mode = localStorage.smode === 'light' ? 'light' : 'dark', wsColor = localStorage.wsColor === '1';
function applyMode() {
  document.documentElement.dataset.mode = mode;
  document.querySelectorAll('.screen').forEach(e => e.dataset.mode = mode);
  $('workspace').dataset.wsbg = wsColor ? 'color' : mode;
  document.querySelectorAll('.mode-sw').forEach(sw => {
    const ws = sw.dataset.sw === 'ws';
    sw.querySelectorAll('[data-mode]').forEach(b => { const m = b.dataset.mode, on = m === 'color' ? wsColor : (!ws || !wsColor) && m === mode; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  });
}
function buildSw() {
  document.querySelectorAll('.mode-sw').forEach(sw => {
    const ws = sw.dataset.sw === 'ws', kinds = ws && sw.dataset.color ? ['light', 'dark', 'color'] : ['light', 'dark'];
    const label = k => ws ? t({ light: 'wsLight', dark: 'wsDark', color: 'wsColor' }[k]) : t(k === 'light' ? 'modeLight' : 'modeDark');
    sw.innerHTML = kinds.map(k => `<button type="button" data-mode="${k}" title="${label(k)}" aria-label="${label(k)}">${ICON[k]}</button>`).join('');
  });
  applyMode();
}
// No Workspace o interruptor só muda o fundo; "cor do tema" usa o fundo colorido da cor de customização
function setMode(m, inWs) {
  if (m === 'color') { wsColor = true; localStorage.wsColor = '1'; }
  else { mode = m; localStorage.smode = m; if (inWs) { wsColor = false; localStorage.wsColor = '0'; } }
  applyMode();
}
document.addEventListener('click', e => { const b = e.target.closest('.mode-sw [data-mode]'); if (b) setMode(b.dataset.mode, b.closest('.mode-sw').dataset.sw === 'ws'); });

/* ---------- Painel: o item ativo do menu lateral acompanha a rolagem ---------- */
let spyLock = 0;
function spy() {
  if (!$('dashboard').classList.contains('active') || Date.now() < spyLock) return;
  const r = $('projects').getBoundingClientRect(), atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 6;
  setNav(scrollY > 8 && (r.top < innerHeight * 0.55 || atEnd));
}
const setNav = lib => { $('navHome').classList.toggle('active', !lib); $('navLib').classList.toggle('active', lib); };
window.addEventListener('scroll', spy, { passive: true }); window.addEventListener('resize', spy);

/* ---------- Painel: menu de três pontos (editar nome, trocar/remover imagem) ---------- */
let menuName = null;
const closeProjMenu = () => { $('projMenu').hidden = true; document.querySelectorAll('.proj-more[aria-expanded=true]').forEach(b => b.setAttribute('aria-expanded', 'false')); menuName = null; };
const MI = {
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>',
  img: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.6"/><path d="M21 15l-5-5L5 21"/></svg>',
  del: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/></svg>'
};
function openProjMenu(btn) {
  const was = btn.getAttribute('aria-expanded') === 'true'; closeProjMenu(); if (was) return;
  const p = projects.find(x => x.name === btn.dataset.name); if (!p) return;
  menuName = p.name; btn.setAttribute('aria-expanded', 'true');
  const m = $('projMenu');
  m.innerHTML = `<button type="button" role="menuitem" data-pm="rename">${MI.edit}<span>${t('editName')}</span></button><button type="button" role="menuitem" data-pm="cover">${MI.img}<span>${t('changeImg')}</span></button>` + `<button type="button" role="menuitem" class="danger" data-pm="remove"${p.cover ? '' : ' disabled'}>${MI.del}<span>${t('delImg')}</span></button>`;
  m.hidden = false;
  const r = btn.getBoundingClientRect(), w = m.offsetWidth, h = m.offsetHeight;
  m.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.right - w)) + 'px';
  m.style.top = (r.bottom + 8 + h > innerHeight ? Math.max(8, r.top - h - 8) : r.bottom + 8) + 'px';
  (m.querySelector('button') || m).focus();
}
async function patchFile(name, fn) { const fh = await dir.getFileHandle(name), j = JSON.parse(await (await fh.getFile()).text()); fn(j); await write(name, j); }
$('projMenu').onclick = async e => {
  const b = e.target.closest('[data-pm]'); if (!b) return;
  const name = menuName, act = b.dataset.pm; closeProjMenu(); if (!name) return;
  try {
    if (act === 'rename') { const n = await renameFlow(name); if (n) { if (cur === name) cur = n; await refreshDash(); toast(t('renamed')); } }
    else if (act === 'cover') { $('coverInput').dataset.name = name; $('coverInput').click(); }
    else if (act === 'remove') { await patchFile(name, j => { j.cover = ''; }); await refreshDash(); toast(t('imgRemoved')); }
  } catch (er) { toast(t('err') + er.message); }
};
$('coverInput').onchange = async e => {
  const f = e.target.files[0], name = e.target.dataset.name; e.target.value = ''; if (!f || !name) return;
  try { const c = await coverOf(f); if (!c) return toast(t('err') + '—'); await patchFile(name, j => { j.cover = c; }); await refreshDash(); toast(t('imgUpdated')); }
  catch (er) { toast(t('err') + er.message); }
};
document.addEventListener('click', e => { if (!e.target.closest('.proj-more,#projMenu')) closeProjMenu(); });
window.addEventListener('scroll', closeProjMenu, { passive: true });
window.addEventListener('resize', closeProjMenu);

/* ---------- Painel: excluir uma ou várias storylines ---------- */
function updateSel() {
  selSet.forEach(n => { if (!projects.some(p => p.name === n)) selSet.delete(n); });
  const n = selSet.size, vis = projects.filter(p => p.name.replace(/\.json$/i, '').toLowerCase().includes(dashQ.trim().toLowerCase()));
  $('selBar').hidden = !selMode; $('delModeBtn').classList.toggle('on', selMode); $('delModeBtn').setAttribute('aria-pressed', selMode);
  $('sbCount').textContent = n === 1 ? t('selOne') : t('selMany').replace('{n}', n);
  $('sbAll').textContent = vis.length && vis.every(p => selSet.has(p.name)) ? t('selClear') : t('selAll');
  $('sbDel').querySelector('span').textContent = t('delSel') + (n ? ' (' + n + ')' : ''); $('sbDel').disabled = !n; $('sbCancel').textContent = t('cancelSel');
  $('delModeBtn').title = $('delModeBtn').ariaLabel = t('delMode');
}
function setSel(on) { selMode = on; if (!on) selSet.clear(); closeProjMenu(); renderProjects(); updateSel(); }
async function deleteSelected() {
  const names = [...selSet].filter(n => projects.some(p => p.name === n)); if (!names.length) return;
  const bare = n => n.replace(/\.json$/i, '');
  const r = await ask({ title: names.length === 1 ? t('delSt').replace('{n}', bare(names[0])) : t('delMany').replace('{n}', names.length), ok: t('del'),
    note: names.length > 1 ? names.slice(0, 6).map(n => '• ' + bare(n)).join('\n') + (names.length > 6 ? '\n… +' + (names.length - 6) : '') : '' });
  if (!r) return;
  let fail = 0; for (const n of names) { try { await dir.removeEntry(n); } catch { fail++; } }
  if (names.includes(cur)) { cur = null; data = null; mark(false); }
  selMode = false; selSet.clear(); await refreshDash(); updateSel();
  toast(fail ? t('err') + fail + '/' + names.length : names.length === 1 ? t('deleted') : t('deletedMany'));
}
$('delModeBtn').onclick = () => setSel(!selMode);
$('selBar').onclick = e => {
  const b = e.target.closest('[data-sb]'); if (!b) return;
  if (b.dataset.sb === 'cancel') return setSel(false);
  if (b.dataset.sb === 'del') return deleteSelected();
  const vis = projects.filter(p => p.name.replace(/\.json$/i, '').toLowerCase().includes(dashQ.trim().toLowerCase())), all = vis.length && vis.every(p => selSet.has(p.name));
  vis.forEach(p => all ? selSet.delete(p.name) : selSet.add(p.name)); renderProjects(); updateSel();
};

/* ---------- Workspace: lista de storylines (capa, nome, cards e seções) ---------- */
const fddCov = c => `<span class="fdd-cov"${c ? ` style="background-image:url('${esc(c)}')"` : ''}>${c ? '' : BOOK}</span>`;
const infoOf = n => { const p = projects.find(x => x.name === n) || { c: 0, s: 0, cover: '' }; return n === cur && data ? { c: data.sections.reduce((a, x) => a + x.cards.length, 0), s: data.sections.length, cover: data.cover || '' } : p; };
function renderFdd() {
  document.querySelectorAll('.fdd').forEach(d => {
    if (!d.firstElementChild) d.innerHTML = '<button type="button" class="btn fdd-btn" aria-haspopup="listbox" aria-expanded="false"></button><div class="fdd-pop"><input class="fdd-q" type="search" autocomplete="off"><div class="fdd-list" role="listbox"></div></div>';
    const i = infoOf(cur), q = d.querySelector('.fdd-q'), key = q.value.trim().toLowerCase();
    d.querySelector('.fdd-btn').innerHTML = fddCov(cur ? i.cover : '') + `<span class="fdd-name">${esc(cur ? cur.replace(/\.json$/i, '') : '—')}</span>`;
    q.placeholder = t('searchPh'); q.hidden = files.length < 7;
    const list = files.filter(n => n.replace(/\.json$/i, '').toLowerCase().includes(key));
    d.querySelector('.fdd-list').innerHTML = list.length ? list.map(n => { const x = infoOf(n); return `<button type="button" role="option" class="fdd-item${n === cur ? ' on' : ''}" data-f="${esc(n)}" aria-selected="${n === cur}">${fddCov(x.cover)}<span class="fdd-txt"><b>${esc(n.replace(/\.json$/i, ''))}</b><small>${metaOf(x)}</small></span><i class="fdd-ck">✓</i></button>`; }).join('') : `<div class="fdd-empty">${t('noMatch')}</div>`;
  });
}
document.addEventListener('click', e => {
  const fd = e.target.closest('.fdd');
  document.querySelectorAll('.fdd.open').forEach(d => { if (d !== fd) { d.classList.remove('open'); d.querySelector('.fdd-btn').setAttribute('aria-expanded', 'false'); } });
  if (!fd) return;
  const it = e.target.closest('.fdd-item');
  if (it) { fd.classList.remove('open'); fd.querySelector('.fdd-btn').setAttribute('aria-expanded', 'false'); switchTo(it.dataset.f); return; }
  if (e.target.closest('.fdd-btn')) {
    const open = fd.classList.toggle('open'); fd.querySelector('.fdd-btn').setAttribute('aria-expanded', open);
    if (open) { const pop = fd.querySelector('.fdd-pop'), w = pop.offsetWidth, l = fd.getBoundingClientRect().left; pop.style.left = (l + w > innerWidth - 10 ? Math.min(0, innerWidth - 10 - w - l) : 0) + 'px'; const q = fd.querySelector('.fdd-q'); if (!q.hidden) q.focus({ preventScroll: true }); const on = fd.querySelector('.fdd-item.on'); if (on) on.scrollIntoView({ block: 'nearest' }); }
  }
});
document.addEventListener('input', e => { if (e.target.classList.contains('fdd-q')) renderFdd(); });

const goSlide = n => { slide = (n + 3) % 3; document.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('on', i === slide)); $('slideNum').textContent = (slide + 1) + ' / 3'; };
const startSlides = () => { clearInterval(slideT); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) slideT = setInterval(() => goSlide(slide + 1), 6500); };
const updateLast = () => { if (lastDir) $('btnLast').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6a2 2 0 012-2h4l2 3h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg><b>${t('lastFolder')}</b><em>· ${esc(lastDir.name)}</em>`; };
const onQ = e => { dashQ = e.target.value; $('dSearch').value = $('pSearch').value = dashQ; renderProjects(); updateSel(); };
const setView = v => { viewMode = v; localStorage.view = v; renderProjects(); updateSortUI(); };
$('dSearch').oninput = $('pSearch').oninput = onQ;
$('dLogo').onclick = e => { e.preventDefault(); show('home'); };
$('navHome').onclick = () => { spyLock = Date.now() + 900; setNav(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
$('navLib').onclick = () => { spyLock = Date.now() + 900; setNav(true); $('projects').scrollIntoView({ behavior: 'smooth', block: 'start' }); };
$('dNew').onclick = $('dStart').onclick = () => newStoryline(true);
$('dLangPop').onclick = $('wLangPop').onclick = e => { const b = e.target.closest('[data-dl]'); if (b) { lang = b.dataset.dl; localStorage.lang = lang; applyLang(); } };
$('dThemePop').onclick = $('wThemePop').onclick = e => { const b = e.target.closest('[data-th]'); if (b) { setTheme(b.dataset.th); localStorage.theme = b.dataset.th; } };
$('sortPop').onclick = e => { const b = e.target.closest('[data-sort]'); if (b) { sortKey = b.dataset.sort; localStorage.sortKey = sortKey; renderProjects(); updateSortUI(); } };
$('sortDirBtn').onclick = () => { sortDir = sortDir === 'asc' ? 'desc' : 'asc'; localStorage.sortDir = sortDir; renderProjects(); updateSortUI(); };
$('vGrid').onclick = () => setView('grid'); $('vList').onclick = () => setView('list');
$('projGrid').onclick = e => {
  const o = e.target.closest('[data-open]');
  if (selMode) { if (o) { const n = o.dataset.open; selSet.has(n) ? selSet.delete(n) : selSet.add(n); o.classList.toggle('sel', selSet.has(n)); updateSel(); } return; }
  const mb = e.target.closest('.proj-more'); if (mb) return openProjMenu(mb); if (e.target.closest('[data-new]')) return newStoryline(true); if (o) loadFiles(o.dataset.open);
};
$('projGrid').onkeydown = e => { if (e.key === 'Enter' && !e.target.closest('.proj-more')) { const x = e.target.closest('[data-new],[data-open]'); if (x) x.click(); } };
$('hero').onmouseenter = () => clearInterval(slideT); $('hero').onmouseleave = startSlides;
$('slidePrev').onclick = () => { goSlide(slide - 1); startSlides(); }; $('slideNext').onclick = () => { goSlide(slide + 1); startSlides(); };
$('btnBack').onclick = async () => { if (await guard()) openDash(); };
$('btnLast').onclick = async () => { try { if (await lastDir.requestPermission({ mode: 'readwrite' }) !== 'granted') return; dir = lastDir; await enterDir(); } catch (e) { toast(t('err') + e.message); } };
document.addEventListener('click', e => {
  const b = e.target.closest('.dd-btn'), d = b && b.parentElement;
  document.querySelectorAll('.dd.open').forEach(x => x !== d && x.classList.remove('open'));
  if (!d) return;
  if (d.classList.toggle('open')) { const pop = d.querySelector('.dd-pop'); pop.style.left = pop.style.right = ''; const r = d.getBoundingClientRect(); if (r.right - pop.offsetWidth < 8) { pop.style.right = 'auto'; pop.style.left = '0'; } }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.dd.open').forEach(x => x.classList.remove('open'));
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && $('dashboard').classList.contains('active')) { e.preventDefault(); $('dSearch').focus(); }
});
function initDash() {
  $('dLangPop').innerHTML = $('wLangPop').innerHTML = LANGS.map(([v, n]) => `<li><button type="button" data-dl="${v}">${n}</button></li>`).join('');
  $('dThemePop').innerHTML = $('wThemePop').innerHTML = THEMES.map(([v, col]) => `<li><button type="button" data-th="${v}" style="--c:${col}"><i class="dot"></i><span data-i18n="th_${v}"></span></button></li>`).join('');
  startSlides();
  idbGet('dir').then(h => { if (h) { lastDir = h; $('btnLast').hidden = false; updateLast(); } }).catch(() => {});
}

/* ---------- Configurações: janela, conversão de imagens, conversão em lote e ZIP ---------- */
const setEl = $('settings');
let D = null, setFirst = false, setOpener = null, setBusy = false, jobRunning = false;
const job = { cancel: false };
const MIME = { webp: 'image/webp', png: 'image/png', jpeg: 'image/jpeg' };
const EXT = { 'image/webp': 'webp', 'image/png': 'png', 'image/jpeg': 'jpg', 'image/gif': 'gif', 'image/avif': 'avif', 'image/bmp': 'bmp' };
const fmtBytes = n => n < 1048576 ? Math.max(1, Math.round(n / 1024)) + ' KB' : (n / 1048576).toLocaleString(lang, { maximumFractionDigits: 1 }) + ' MB';
const tick = () => new Promise(r => setTimeout(r, 0));
const pad2 = n => String(n).padStart(2, '0');
const fname = s => String(s || '').replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_').replace(/\s+/g, ' ').trim().replace(/[. ]+$/, '').slice(0, 60) || '-';
const stamp = () => { const d = new Date(); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}_${pad2(d.getHours())}${pad2(d.getMinutes())}`; };
const isDataImg = s => typeof s === 'string' && s.startsWith('data:image/') && s.includes(';base64,');
const setDirty = () => JSON.stringify(normSet(D)) !== JSON.stringify(S);

// --- arquivo de configurações na pasta
async function writeSettingsFile() { if (!dir) return; const fh = await dir.getFileHandle(SET_FILE, { create: true }), w = await fh.createWritable(); await w.write(JSON.stringify(S, null, 2)); await w.close(); }
async function persistSettings() { cacheSet(); try { await writeSettingsFile(); return true; } catch (e) { toast(t('err') + e.message); return false; } }
// devolve true se já existe configuração (na pasta ou no navegador); false = primeiro acesso
async function loadSettings() {
  let j = null;
  try { j = JSON.parse(await (await (await dir.getFileHandle(SET_FILE)).getFile()).text()); } catch { /* sem arquivo na pasta */ }
  if (j && typeof j === 'object') { S = normSet(j); cacheSet(); applySettings(); if (data) render(); return true; }
  const c = readCache();
  if (c) { S = normSet(c); try { await writeSettingsFile(); } catch { /* pasta somente leitura */ } applySettings(); return true; }
  return false;
}
async function enterDir() { const known = await loadSettings(); await openDash(); if (!known) openSettings({ first: true }); }
function applySettings() {
  autoOn = S.autosave; document.body.classList.toggle('auto-on', autoOn);
  if (!autoOn) { clearTimeout(autoT); if (stK === 'wait') setAutoSt(''); } else if (dirty) schedAuto();
  renderSt();
}

// --- processamento de imagem (canvas do navegador: funciona offline, sem bibliotecas)
const decode = async b => { try { return await createImageBitmap(b, { imageOrientation: 'from-image' }); } catch { return await createImageBitmap(b); } };
function dataToBlob(src) {
  const i = src.indexOf(','), mime = src.slice(5, i).split(';')[0] || 'application/octet-stream', bin = atob(src.slice(i + 1)), u = new Uint8Array(bin.length);
  for (let k = 0; k < bin.length; k++) u[k] = bin.charCodeAt(k);
  return new Blob([u], { type: mime });
}
const hasAscii = (u, s) => { outer: for (let i = 0; i + s.length <= u.length; i++) { for (let k = 0; k < s.length; k++) if (u[i + k] !== s.charCodeAt(k)) continue outer; return true; } return false; };
async function isAnimated(b) {
  if (b.type === 'image/png') return hasAscii(new Uint8Array(await b.slice(0, 4096).arrayBuffer()), 'acTL');
  if (b.type === 'image/webp') return hasAscii(new Uint8Array(await b.slice(0, 256).arrayBuffer()), 'ANIM');
  return false;
}
// só reduz (ou amplia, se a opção estiver ligada) para caber no limite; nunca corta nem distorce
function targetSize(w, h, s) {
  const l = limitOf(s); if (!l) return { w, h, scale: 1 };
  let sc = Math.min(l.w / w, l.h / h); if (sc > 1 && !s.upscale) sc = 1;
  if (sc === 1) return { w, h, scale: 1 };
  return { w: Math.max(1, Math.round(w * sc)), h: Math.max(1, Math.round(h * sc)), scale: sc };
}
function resample(src, tw, th, white) {
  let cw = src.width, ch = src.height, cur = src;
  while (cw / 2 >= tw && ch / 2 >= th) {   // reduz em etapas de até 50% para manter a nitidez
    const nw = Math.max(1, Math.floor(cw / 2)), nh = Math.max(1, Math.floor(ch / 2)), c = document.createElement('canvas'); c.width = nw; c.height = nh;
    const x = c.getContext('2d'); x.imageSmoothingQuality = 'high'; x.drawImage(cur, 0, 0, nw, nh); cur = c; cw = nw; ch = nh;
  }
  const c = document.createElement('canvas'); c.width = tw; c.height = th; const x = c.getContext('2d');
  if (white) { x.fillStyle = '#fff'; x.fillRect(0, 0, tw, th); }
  x.imageSmoothingQuality = 'high'; x.drawImage(cur, 0, 0, tw, th); return c;
}
// Aplica as configurações a uma imagem. { blob, changed }: sem mudança devolve o próprio arquivo.
async function convertBlob(blob, s = S) {
  const keep = { blob, changed: false };
  if (s.keep || blob.type === 'image/gif' || blob.type === 'image/svg+xml' || await isAnimated(blob)) return keep;
  let bm; try { bm = await decode(blob); } catch { return keep; }
  try {
    const T = targetSize(bm.width, bm.height, s), mime = MIME[s.format];
    if (T.scale === 1 && blob.type === mime) return keep;   // já está no formato e no tamanho
    const cv = resample(bm, T.w, T.h, mime === 'image/jpeg');
    const out = await new Promise(r => cv.toBlob(r, mime, s.quality / 100));
    if (!out || out.type !== mime) return keep;
    if (T.scale === 1 && out.size >= blob.size) return keep;   // só troca de formato: só vale se o arquivo ficar menor
    return { blob: out, changed: true, resized: T.scale !== 1 };
  } finally { bm.close(); }
}
async function convertSrc(src) { try { const b = dataToBlob(src), r = await convertBlob(b); return r.changed ? { src: await readFile(r.blob), before: b.size, after: r.blob.size } : null; } catch { return null; } }
async function classifySrc(src) {
  try {
    const b = dataToBlob(src);
    if (b.type === 'image/gif' || b.type === 'image/svg+xml' || await isAnimated(b)) return 'skip';
    const bm = await decode(b), T = targetSize(bm.width, bm.height, S); bm.close();
    return T.scale !== 1 ? 'resize' : b.type === MIME[S.format] ? 'ok' : 'format';
  } catch { return 'skip'; }
}

// --- painel de progresso (bloqueia a tela enquanto roda)
function jobBegin(text) { jobRunning = true; job.cancel = false; $('jobTxt').textContent = text; $('jobBar').style.width = '0%'; $('jobX').textContent = t('cancel'); $('jobWrap').hidden = false; }
const jobProg = p => { $('jobBar').style.width = Math.round(Math.min(1, Math.max(0, p)) * 100) + '%'; };
function jobEnd() { jobRunning = false; $('jobWrap').hidden = true; }
$('jobX').onclick = () => { job.cancel = true; $('jobTxt').textContent = t('jobCancelling'); };

// --- conversão de imagens já existentes (todas as storylines da pasta)
async function listJson() { const out = []; for await (const [n, h] of dir.entries()) if (h.kind === 'file' && /\.json$/i.test(n) && n[0] !== '.') out.push(n); return out.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })); }
async function analyzeAll() {
  jobBegin(t('analyzing'));
  const plan = { files: [], resize: 0, format: 0, ok: 0, total: 0, imgs: 0 };
  try {
    const names = await listJson(); let i = 0;
    for (const n of names) {
      if (job.cancel) return null;
      let j; try { j = JSON.parse(await (await (await dir.getFileHandle(n)).getFile()).text()); } catch { j = null; }
      if (!isStory(j)) { jobProg(++i / names.length); continue; }
      let c = 0;
      for (const s of j.sections || []) for (const cd of s.cards || []) for (const im of cd.images || []) {
        if (job.cancel) return null;
        if (!im || !isDataImg(im.src)) continue;
        plan.imgs++; const k = await classifySrc(im.src);
        if (k === 'resize') { plan.resize++; c++; } else if (k === 'format') { plan.format++; c++; } else plan.ok++;
      }
      if (c) plan.files.push(n);
      jobProg(++i / names.length); await tick();
    }
    plan.total = plan.resize + plan.format; return plan;
  } catch (e) { toast(t('err') + e.message); return null; }
  finally { jobEnd(); }
}
const askConvert = plan => ask({ title: t('convSummaryTitle').replace('{n}', plan.total), ok: t('convGo'),
  note: [t('convSumA').replace('{r}', plan.resize).replace('{f}', plan.format).replace('{k}', plan.ok), S.backup ? t('convBk') : t('convNoBk'), t('convIrrev')].join('\n') });
async function runConvert(plan) {
  if (dirty) await save(true);   // grava o que está pendente antes de mexer nos arquivos
  fsLock = true; jobBegin(t('converting'));
  const changed = new Set(); let done = 0, before = 0, after = 0, imgs = 0, canceled = false, bdir = null;
  try {
    for (const n of plan.files) {
      if (job.cancel) { canceled = true; break; }
      const txt = await (await (await dir.getFileHandle(n)).getFile()).text(), j = JSON.parse(txt); let any = false, fb = 0, fa = 0, fi = 0;
      outer: for (const s of j.sections || []) for (const cd of s.cards || []) for (const im of cd.images || []) {
        if (job.cancel) { canceled = true; break outer; }
        if (!im || !isDataImg(im.src)) continue;
        const r = await convertSrc(im.src); jobProg(++done / (plan.imgs || 1)); await tick();
        if (r) { im.src = r.src; any = true; fb += r.before; fa += r.after; fi++; }
      }
      if (canceled) break;   // o arquivo interrompido não é gravado
      if (any) {
        if (S.backup) { bdir = bdir || await dir.getDirectoryHandle('backup-' + stamp(), { create: true }); const w = await (await bdir.getFileHandle(n, { create: true })).createWritable(); await w.write(txt); await w.close(); }
        await write(n, j); changed.add(n); before += fb; after += fa; imgs += fi;
      }
    }
  } catch (e) { toast(t('err') + e.message); }
  finally { fsLock = false; jobEnd(); }
  if (changed.size) {
    await refreshDash();
    if (cur && changed.has(cur)) { if ($('workspace').classList.contains('active')) await openFile(cur); else data = null; }
  }
  if (setEl.classList.contains('show')) refreshSet();
  toast(canceled ? t('convCancelled').replace('{s}', changed.size) : t('convDone').replace('{a}', fmtBytes(before)).replace('{b}', fmtBytes(after)).replace('{n}', imgs));
}
async function convertFlow(manual) {
  if (jobRunning || S.keep || !dir) return;
  const plan = await analyzeAll(); if (!plan) return;
  if (!plan.total) { if (manual) toast(t('convNone')); return; }
  if (await askConvert(plan)) await runConvert(plan);
}

// --- baixar todas as imagens de uma storyline (ZIP gerado no navegador, sem compressão)
const CRC = (() => { const tb = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; tb[n] = c >>> 0; } return tb; })();
const crc32 = u => { let c = ~0; for (let i = 0; i < u.length; i++) c = CRC[(c ^ u[i]) & 255] ^ (c >>> 8); return ~c >>> 0; };
async function makeZip(entries) {
  const enc = new TextEncoder(), parts = [], cd = []; let off = 0;
  const d = new Date(), dt = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1), dd = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
  for (const e of entries) {
    const buf = new Uint8Array(await e.blob.arrayBuffer()), nm = enc.encode(e.name), crc = crc32(buf);
    const h = new DataView(new ArrayBuffer(30));
    h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true); h.setUint16(10, dt, true); h.setUint16(12, dd, true);
    h.setUint32(14, crc, true); h.setUint32(18, buf.length, true); h.setUint32(22, buf.length, true); h.setUint16(26, nm.length, true); h.setUint16(28, 0, true);
    parts.push(h.buffer, nm, buf);
    const c = new DataView(new ArrayBuffer(46));
    c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true); c.setUint16(12, dt, true); c.setUint16(14, dd, true);
    c.setUint32(16, crc, true); c.setUint32(20, buf.length, true); c.setUint32(24, buf.length, true); c.setUint16(28, nm.length, true); c.setUint32(42, off, true);
    cd.push(c.buffer, nm); off += 30 + nm.length + buf.length;
  }
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, entries.length, true); end.setUint16(10, entries.length, true);
  end.setUint32(12, cd.reduce((a, p) => a + p.byteLength, 0), true); end.setUint32(16, off, true);
  return new Blob([...parts, ...cd, end.buffer], { type: 'application/zip' });
}
async function downloadFlow() {
  if (jobRunning || !dir) return;
  const name = $('sDlSt').value; if (!name) return;
  const asPng = $('sDlFmt').value === 'png';
  jobBegin(t('zipping'));
  try {
    const j = name === cur && data ? data : JSON.parse(await (await (await dir.getFileHandle(name)).getFile()).text());
    const items = [];
    (j.sections || []).forEach((s, si) => (s.cards || []).forEach((c, ci) => (c.images || []).forEach((im, ii, arr) => { if (im && isDataImg(im.src)) items.push({ si, ci, ii, n: arr.length, s, c, src: im.src }); })));
    if (!items.length) { toast(t('dlNone')); return; }
    const entries = [], used = new Set(); let size = 0;
    for (let k = 0; k < items.length; k++) {
      if (job.cancel) return;
      const it = items[k]; let b = dataToBlob(it.src);
      if (asPng && b.type !== 'image/png' && b.type !== 'image/gif' && b.type !== 'image/svg+xml' && !await isAnimated(b)) {
        try { const bm = await decode(b), cv = resample(bm, bm.width, bm.height, false); bm.close(); const o = await new Promise(r => cv.toBlob(r, 'image/png')); if (o && o.type === 'image/png') b = o; } catch { /* mantém o original */ }
      }
      let nm = `${pad2(it.si + 1)} ${fname(it.s.title)}/${pad2(it.ci + 1)} ${fname(it.c.title)}${it.n > 1 ? ' (' + (it.ii + 1) + ')' : ''}.${EXT[b.type] || b.type.split('/')[1] || 'img'}`;
      while (used.has(nm.toLowerCase())) nm = nm.replace(/(\.[^./]+)$/, '_$1');
      used.add(nm.toLowerCase()); entries.push({ name: nm, blob: b }); size += b.size; jobProg((k + 1) / items.length * .9); await tick();
    }
    if (size > 3.9e9 || entries.length > 65000) { toast(t('dlBig')); return; }
    const zip = await makeZip(entries); jobProg(1);
    const a = document.createElement('a'); a.href = URL.createObjectURL(zip); a.download = fname(name.replace(/\.json$/i, '')) + '.zip'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 30000);
    toast(t('dlDone').replace('{n}', entries.length));
  } catch (e) { toast(t('err') + e.message); }
  finally { jobEnd(); if (setEl.classList.contains('show')) refreshSet(); }
}

// --- janela
const FMT_KEY = { webp: 'fmtWebp', png: 'fmtPng', jpeg: 'fmtJpeg' };
const swSet = (id, on) => { const b = $(id); b.classList.toggle('on', !!on); b.setAttribute('aria-checked', !!on); };
const pulseSw = b => { b.classList.remove('pulse'); void b.offsetWidth; b.classList.add('pulse'); };
function refreshSet() {
  swSet('sAuto', D.autosave); swSet('sKeep', D.keep); swSet('sUp', D.upscale); swSet('sBk', D.backup);
  setEl.querySelectorAll('[data-fmt]').forEach(b => { const on = b.dataset.fmt === D.format; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
  const fn = $('sFmtNote'); fn.textContent = t(FMT_KEY[D.format]); fn.className = 'set-note ' + (D.format === 'webp' ? 'info' : 'warn');
  $('sQualRow').hidden = D.format === 'png'; $('sQual').value = D.quality; $('sQualV').textContent = D.quality;
  $('sRes').value = D.res; $('sRes').querySelector('[value="904"]').textContent = '904 × 904 (' + t('resDefLbl') + ')';
  $('sCustom').hidden = D.res !== 'custom';
  $('sKeepWarn').hidden = D.keep; $('sConv').inert = D.keep; $('sConv').classList.toggle('off', D.keep);
  $('setSave').textContent = setFirst ? t('setSaveGo') : t('setSave');
  const df = setDirty(), cd = $('sConvDesc');
  cd.textContent = df ? t('convNeedSave') : S.keep ? t('convKeepOn') : t('convDesc'); cd.classList.toggle('warn', df || S.keep);
  $('sConvAll').disabled = S.keep || df || jobRunning;
  $('sDl').disabled = !$('sDlSt').options.length || jobRunning;
}
function fillSettingsUI() {
  $('sW').value = D.w; $('sH').value = D.h; $('sResErr').hidden = true; D.bad = false;
  const names = projects.map(p => p.name).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  $('sDlSt').innerHTML = names.map(n => `<option value="${esc(n)}">${esc(n.replace(/\.json$/i, ''))}</option>`).join('');
  if (cur && names.includes(cur)) $('sDlSt').value = cur;
  $('setIntro').hidden = !setFirst; refreshSet();
}
function selectPane(p) {
  setEl.querySelectorAll('.set-pane').forEach(e => { e.hidden = e.dataset.pane !== p; });
  setEl.querySelectorAll('.set-nav button').forEach(b => { const on = b.dataset.pane === p; b.classList.toggle('on', on); b.setAttribute('aria-current', on ? 'page' : 'false'); });
  $('setMain').scrollTop = 0;
}
function openSettings(o = {}) {
  if (setEl.classList.contains('show')) return;
  setFirst = !!o.first; setOpener = document.activeElement; D = { ...S };
  setEl.classList.toggle('first', setFirst); selectPane('save'); fillSettingsUI();
  setEl.classList.add('show'); setEl.setAttribute('aria-hidden', 'false'); document.body.classList.add('set-open');
  setTimeout(() => { const b = $('setNav').querySelector('.on'); if (b) b.focus(); }, 40);
}
function closeSettings() {
  setEl.classList.remove('show', 'first'); setEl.setAttribute('aria-hidden', 'true'); document.body.classList.remove('set-open'); setFirst = false;
  if (setOpener && document.body.contains(setOpener)) setOpener.focus(); setOpener = null;
}
async function requestClose() {
  if (setFirst || setBusy || jobRunning || $('modal').classList.contains('show')) return;
  if (!setDirty()) return closeSettings();
  const r = await ask({ title: t('setUnsavedTitle'), ok: t('setSave'), alt: t('discard') });
  if (r === null) return;
  if (r === 'alt') return closeSettings();
  await saveSettings();
}
async function saveSettings() {
  if (setBusy || jobRunning) return;
  if (D.res === 'custom' && D.bad) { selectPane('img'); $('sResErr').hidden = false; $('sW').focus(); const b = setEl.querySelector('.set-box'); b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); return; }
  const prev = S, first = setFirst; S = normSet(D); setBusy = true;
  await persistSettings(); setBusy = false;
  applySettings(); if (data) render();   // atualiza a dica de resolução dos cards
  closeSettings(); toast(t('setSaved'));
  if (!S.keep && (first || ['keep', 'format', 'res', 'w', 'h', 'upscale'].some(k => prev[k] !== S[k]))) convertFlow(false);   // oferece converter o que estiver fora do padrão
}
$('setNav').onclick = e => { const b = e.target.closest('[data-pane]'); if (b) selectPane(b.dataset.pane); };
$('sAuto').onclick = async () => {
  if (D.autosave) { const r = await ask({ title: t('autoOffTitle'), note: t('autoOffBody'), ok: t('autoOffOk') }); if (!r) return; D.autosave = false; }
  else D.autosave = true;
  refreshSet(); pulseSw($('sAuto'));
};
$('sKeep').onclick = () => { D.keep = !D.keep; refreshSet(); pulseSw($('sKeep')); };
$('sUp').onclick = () => { D.upscale = !D.upscale; refreshSet(); pulseSw($('sUp')); };
$('sBk').onclick = () => { D.backup = !D.backup; refreshSet(); pulseSw($('sBk')); };
$('sFmt').onclick = e => { const b = e.target.closest('[data-fmt]'); if (b) { D.format = b.dataset.fmt; refreshSet(); } };
$('sQual').oninput = e => { D.quality = +e.target.value; refreshSet(); };
$('sRes').onchange = e => {
  D.res = e.target.value; D.bad = false; $('sResErr').hidden = true;
  if (D.res === 'custom') { $('sW').value = D.w; $('sH').value = D.h; }
  refreshSet(); if (D.res === 'custom') $('sW').focus();
};
$('sW').oninput = $('sH').oninput = () => {
  const w = +$('sW').value, h = +$('sH').value, ok = Number.isInteger(w) && Number.isInteger(h) && w >= 64 && w <= 8192 && h >= 64 && h <= 8192;
  D.bad = !ok; $('sResErr').hidden = ok; if (ok) { D.w = w; D.h = h; } refreshSet();
};
$('setReset').onclick = () => { D = { ...SET_DEF }; fillSettingsUI(); };
$('setSave').onclick = saveSettings;
$('setX').onclick = $('setCancel').onclick = requestClose;
$('sConvAll').onclick = () => convertFlow(true);
$('sDl').onclick = downloadFlow;
let setDown = null;
setEl.addEventListener('mousedown', e => { setDown = e.target; });
setEl.addEventListener('click', e => { if (e.target === setEl && setDown === setEl) requestClose(); });
$('navSet').onclick = () => openSettings();
$('btnSettings').onclick = () => openSettings();
// teclado: Esc fecha (pergunta se há alterações), Ctrl+S salva as configurações, Tab fica dentro da janela
document.addEventListener('keydown', e => {
  if (!setEl.classList.contains('show') || e.target.closest('#modal') || $('modal').classList.contains('show')) return;
  if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); requestClose(); }
  else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 's') { e.preventDefault(); e.stopPropagation(); saveSettings(); }
  else if (e.key === 'Tab') {
    const f = [...setEl.querySelectorAll('button, select, input')].filter(x => !x.disabled && !x.hidden && x.offsetParent !== null && !x.closest('[inert],[hidden]'));
    if (!f.length) return;
    const i = f.indexOf(document.activeElement);
    if (i < 0) { e.preventDefault(); f[0].focus(); }
    else if (e.shiftKey && i === 0) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
  }
}, true);

/* ---------- Init ---------- */
loadDict();
$('menuPop').innerHTML = LANGS.map(([v, n]) => `<li role="none"><button role="menuitem" data-lang="${v}">${n}</button></li>`).join('');
$('themePop').innerHTML = THEMES.map(([v, col]) => `<li role="none"><button role="menuitem" data-th="${v}" style="--c:${col}"><i class="dot"></i><span data-i18n="th_${v}"></span></button></li>`).join('');
fillThemes();
setTheme(THEMES.some(x => x[0] === localStorage.theme) ? localStorage.theme : 'blue');
initDash();
applySettings();
applyLang();
booted = true;
