# 🎬 Storyline Manager

[English](README.md) | [Português](README.pt-BR.md) | **Español**

Una aplicación web local para organizar **escenas y prompts de imagen** en flujos de trabajo de IA (Stable Diffusion, ComfyUI, Midjourney…). Crea storylines con secciones y cards, mantén juntos los prompts positivos/negativos y las imágenes de referencia, y guarda todo en **archivos JSON** sencillos dentro de una carpeta de tu ordenador.

Sin servidor, sin base de datos, sin cuenta: solo `index.html`, `style.css` y `app.js`.

![Workspace](docs\assets\Workspace.png)
![Workspace](docs\assets\Workspace2.png)

## ✨ Funcionalidades

**Storylines**
- Elige una carpeta una vez y trabaja directamente sobre sus archivos `.json` (lectura y escritura, mediante la File System Access API).
- Se recuerda la última carpeta usada: la próxima vez el selector de carpetas se abre en ella.
- Crea, renombra (✏️) y elimina (🗑) storylines desde la cabecera. Eliminar pide confirmación.
- Protección contra pérdida de datos: al cambiar o crear una storyline con cambios pendientes, puedes guardar, descartar o cancelar.

**Sección Model**
- Una sección **Model** fija permanece siempre arriba y no se puede mover ni eliminar.
- Guarda el **prompt base** del proyecto y una **URL de LoRA**, con un botón que abre el enlace en una pestaña nueva.
- Cada nueva storyline nace con la sección Model y una sección normal con una card vacía.

**Secciones y cards**
- Las secciones tienen título editable, botón *Añadir Card* y botón de eliminar con confirmación.
- Cada card tiene título de la pose, **prompt positivo** y **prompt negativo** (contador de caracteres en vivo y copia con un clic, con el aviso "¡Copiado!") y un botón de **URL de referencia** entre ambos.
- **Carrusel de imágenes** por card: sube varias imágenes a la vez, navega con las flechas y el indicador `1/3` y elimina la imagen activa.
- **Lightbox**: haz clic en una imagen para verla en su resolución original (recomendado: 1024×1024).
- **Expansión de prompt**: haz doble clic en cualquier caja de prompt para editarla en una ventana grande.
- **Arrastrar y soltar** para reordenar secciones y cards (las cards también pueden pasar a otra sección). Al arrastrar una sección, todas se convierten en barras compactas para facilitar el encaje. La sección Model queda bloqueada arriba.

**Interfaz**
- 10 temas: Aurora, Midnight Violet, Slate Minimal, Deep Emerald, Cyber Onyx, Obsidian Rose y cuatro temas oscuros suaves/pastel (Lavender, Mint, Peach, Sky).
- Tres idiomas: 🇧🇷 Português, 🇺🇸 English y 🇪🇸 Español. El tema y el idioma están disponibles en Home y en Workspace, y el navegador los recuerda.
- Adaptable desde 360 px de ancho, con animaciones suaves (respeta la preferencia de movimiento reducido).

## 🌐 Navegadores compatibles

| Navegador | Soporte |
|---|---|
| Google Chrome 86+ | ✅ Completo |
| Microsoft Edge 86+ | ✅ Completo |
| Firefox / Safari | ❌ No implementan `showDirectoryPicker`, que la app necesita para leer y escribir en tu carpeta |

## 🚀 Primeros pasos

La app debe servirse desde `localhost` o HTTPS para que el navegador habilite la File System Access API. Elige una opción:

**Opción 1 – Live Server de VS Code**
1. Abre la carpeta del proyecto en VS Code.
2. Haz clic derecho en `index.html` → **Open with Live Server**.

**Opción 2 – Python**
```bash
python -m http.server 5500
```
Después abre <http://localhost:5500> en Chrome o Edge.

**Opción 3 – GitHub Pages**
Activa Pages en los ajustes del repositorio (rama `main`, carpeta raíz). Cada visitante elige una carpeta en su propio ordenador, así que sus datos nunca salen de su máquina.

## 📖 Uso

1. En Home, haz clic en **Selecciona una carpeta para guardar o cargar tus storylines** y elige una carpeta.
2. Elige una storyline existente en el desplegable de la cabecera o pulsa **+ Nueva Storyline**.
3. Rellena la sección **Model**, añade secciones y cards, escribe tus prompts y añade imágenes.
4. Pulsa **Guardar en la Carpeta**. El botón late mientras haya cambios sin guardar.

## 🗂️ Formato de los datos

Cada storyline es un archivo `.json`:

```json
{
  "model": { "prompt": "prompt base…", "lora": "https://…" },
  "sections": [
    {
      "id": "a1b2c3d",
      "title": "En el centro comercial",
      "cards": [
        {
          "id": "e4f5g6h",
          "title": "Pose 1",
          "url": "https://…",
          "positive": "…",
          "negative": "…",
          "images": [{ "src": "data:image/png;base64,…" }]
        }
      ]
    }
  ]
}
```

Los archivos de versiones anteriores (sin `model` ni `url`) se abren con normalidad y se actualizan en el siguiente guardado.

## 📁 Estructura del proyecto

```
index.html   Marcado: Home, Workspace, modales, lightbox, expansión de prompt
style.css    Temas (variables CSS), diseño, animaciones, reglas responsivas
app.js       Estado, File System Access API, i18n, arrastrar y soltar, carrusel
```

## ⚠️ Notas y limitaciones

- **Las imágenes se guardan dentro del JSON** en su resolución original, por lo que los archivos pueden crecer mucho. Redimensiona las imágenes a unos 1024×1024 antes de subirlas.
- **Eliminar una storyline es permanente**: el archivo se borra de la carpeta sin pasar por la papelera.
- El selector de carpetas del sistema solo muestra carpetas, así que una carpeta con archivos `.json` puede parecer vacía. Tras elegir la carpeta, la app muestra su nombre y cuántos `.json` encontró.
- Chrome bloquea algunas carpetas sensibles (como la raíz de Documentos o Descargas). Usa una subcarpeta, por ejemplo `Storylines`.
- Las banderas usan una pequeña fuente web cargada desde una CDN, porque Windows no dibuja los emojis de banderas. Sin conexión en Windows verás letras (BR, US, ES) en su lugar.

## 🗺️ Ideas para el futuro

- PWA instalable.
- Aplicación de escritorio (Tauri o Electron) con acceso directo a archivos y sin las restricciones del navegador.
- Imágenes guardadas como archivos separados junto al JSON.
- Sincronización opcional con la nube (Google Drive, Dropbox).

## 📄 Licencia

Uso gratuito bajo la [Storyline Manager Free Use License](LICENSE): puedes descargar y usar la app sin coste, pero no se permite copiar, modificar, publicar, distribuir, sublicenciar ni vender el software. Esta no es una licencia de código abierto.
