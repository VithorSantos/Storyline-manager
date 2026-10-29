# 🎬 Storyline Manager

[English](README.md) | **Português** | [Español](README.es.md)

Um aplicativo web local para organizar **cenas e prompts de imagem** em fluxos de IA (Stable Diffusion, ComfyUI, Midjourney…). Monte storylines com seções e cards, mantenha prompts positivos/negativos e imagens de referência juntos e salve tudo em **arquivos JSON** simples, em uma pasta do seu computador.

Sem servidor, sem banco de dados, sem conta: são só `index.html`, `style.css` e `app.js`.

![Workspace](docs/assets/Workspace.png)
![Workspace](docs/assets/Workspace2.png)

## ✨ Funcionalidades

**Storylines**
- Escolha uma pasta uma vez e trabalhe direto nos arquivos `.json` dela (leitura e escrita, pela File System Access API).
- A última pasta usada é lembrada: na próxima vez o seletor de pastas já abre nela.
- Crie, renomeie (✏️) e exclua (🗑) storylines pelo cabeçalho. A exclusão pede confirmação.
- Proteção contra perda de dados: ao trocar ou criar uma storyline com alterações pendentes, você pode salvar, descartar ou cancelar.

**Seção Model**
- Uma seção **Model** fixa fica sempre no topo e não pode ser movida nem excluída.
- Ela guarda o **prompt base** e o **prompt negativo** do projeto e uma **URL de LoRA**, com um botão que abre o link em nova aba.
- Ao lado desses campos fica um grande **Assistente de Prompt**: escreva ali o prompt da cena e ele marca as tags que já estão no prompt base (amarelo), as que estão no prompt negativo (vermelho) e as repetidas dentro do próprio texto (laranja). As tags são comparadas sem diferenciar maiúsculas, pesos e `_` de espaço, então `no_humans` equivale a `no humans`. Um resumo também lista as tags que aparecem ao mesmo tempo no prompt base e no negativo. A opção **Possivelmente repetido** (liga/desliga com ON/OFF) também sinaliza tags da mesma categoria com cores diferentes (em relação ao prompt base e dentro do próprio texto), como `white_hair` e `brown_hair` ou `black shirt` e `white shirt` (ciano).
- Toda nova storyline já nasce com a seção Model e uma seção normal com um card vazio.

**Seções e cards**
- As seções têm título editável, botão *Adicionar Card* e botão de excluir com confirmação.
- Cada card tem título da pose, **prompt positivo** (contador de caracteres ao vivo e cópia com um clique, com o aviso "Copiado!"), um botão de **URL de referência** e dois campos de uma linha: **Seed Processor** e **Seed Ksampler**.
- **Carrossel de imagens** por card: envie várias imagens de uma vez, navegue com as setas e o indicador `1/3` e remova a imagem ativa.
- **Lightbox**: clique em uma imagem para vê-la na resolução original (recomendado: 1024×1024).
- **Expansão de prompt**: dê dois cliques em qualquer caixa de prompt para editá-la em uma janela grande.
- **Arrastar e soltar** para reordenar seções e cards (os cards também podem ir para outra seção). Ao arrastar uma seção, todas viram barras compactas para facilitar o encaixe. A seção Model fica travada no topo.

**Interface**
- 10 temas: Aurora, Midnight Violet, Slate Minimal, Deep Emerald, Cyber Onyx, Obsidian Rose e quatro temas escuros suaves/pastel (Lavender, Mint, Peach, Sky).
- Três idiomas: 🇧🇷 Português, 🇺🇸 English e 🇪🇸 Español. Tema e idioma ficam disponíveis na Home e no Workspace e são lembrados pelo navegador.
- Responsivo a partir de 360 px de largura: no celular, os cards rolam para o lado dentro de cada seção, e no celular e no tablet o header fica no topo da página e vira uma barra flutuante compacta (lista de storylines, nova storyline, adicionar seção e salvar) ao rolar. Animações suaves, respeitando a preferência de movimento reduzido.

## 🌐 Navegadores compatíveis

| Navegador | Suporte |
|---|---|
| Google Chrome 86+ | ✅ Completo |
| Microsoft Edge 86+ | ✅ Completo |
| Firefox / Safari | ❌ Não implementam o `showDirectoryPicker`, que o app precisa para ler e gravar na sua pasta |

## 🚀 Como começar

O app precisa ser servido por `localhost` ou HTTPS para que o navegador libere a File System Access API. Escolha uma opção:

**Opção 1 – Live Server do VS Code**
1. Abra a pasta do projeto no VS Code.
2. Clique com o botão direito em `index.html` → **Open with Live Server**.

**Opção 2 – Python**
```bash
python -m http.server 5500
```
Depois abra <http://localhost:5500> no Chrome ou no Edge.

**Opção 3 – GitHub Pages**
Ative o Pages nas configurações do repositório (branch `main`, pasta raiz). Cada visitante escolhe uma pasta no próprio computador, então os dados nunca saem da máquina dele.

## 📖 Como usar

1. Na Home, clique em **Selecione uma pasta para guardar ou carregar suas storylines** e escolha uma pasta.
2. Escolha uma storyline existente no seletor do cabeçalho ou clique em **+ Nova Storyline**.
3. Preencha a seção **Model**, adicione seções e cards, escreva seus prompts e adicione imagens.
4. Clique em **Salvar na Pasta**. O botão pulsa enquanto houver alterações não salvas.

## 🗂️ Formato dos dados

Cada storyline é um arquivo `.json`:

```json
{
  "model": { "prompt": "prompt base…", "negative": "…", "draft": "…", "lora": "https://…" },
  "sections": [
    {
      "id": "a1b2c3d",
      "title": "No shopping",
      "cards": [
        {
          "id": "e4f5g6h",
          "title": "Pose 1",
          "url": "https://…",
          "positive": "…",
          "seedProcessor": "…",
          "seedKsampler": "…",
          "images": [{ "src": "data:image/png;base64,…" }]
        }
      ]
    }
  ]
}
```

Arquivos de versões antigas (sem `model` ou `url`) abrem normalmente e são atualizados no próximo salvamento.

## 📁 Estrutura do projeto

```
index.html   Marcação: Home, Workspace, modais, lightbox, expansão de prompt
style.css    Temas (variáveis CSS), layout, animações, regras responsivas
app.js       Estado, File System Access API, i18n, arrastar e soltar, carrossel
```

## ⚠️ Observações e limitações

- **As imagens ficam dentro do JSON** na resolução original, então os arquivos podem ficar grandes. Redimensione as imagens para cerca de 1024×1024 antes de enviar.
- **Excluir uma storyline é permanente**: o arquivo é removido da pasta sem passar pela lixeira.
- O seletor de pastas do sistema mostra só pastas, então uma pasta com arquivos `.json` pode parecer vazia. Depois de escolher a pasta, o app mostra o nome dela e quantos `.json` encontrou.
- O Chrome bloqueia algumas pastas sensíveis (como a raiz de Documentos ou Downloads). Use uma subpasta, por exemplo `Storylines`.
- As bandeiras usam uma pequena fonte web carregada de uma CDN, porque o Windows não desenha emojis de bandeira. Sem internet no Windows, você verá letras (BR, US, ES) no lugar.

## 🗺️ Ideias para o futuro

- PWA instalável.
- Aplicativo desktop (Tauri ou Electron) com acesso direto a arquivos e sem as restrições do navegador.
- Imagens salvas como arquivos separados ao lado do JSON.
- Sincronização opcional com a nuvem (Google Drive, Dropbox).

## 📄 Licença

Uso gratuito sob a [Storyline Manager Free Use License](LICENSE): você pode baixar e usar o app sem custo, mas não é permitido copiar, modificar, publicar, distribuir, sublicenciar nem vender o software. Esta não é uma licença de código aberto.
