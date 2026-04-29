# 🌟 Golden Trust Financial Group · Academia

Plataforma de formación profesional para Golden Trust Financial Group.

---

## 📁 Estructura de Archivos

```
golden-trust-academy/
├── index.html          ← Página principal
├── styles.css          ← Estilos visuales
├── app.js              ← Lógica de la app
├── data.js             ← ⭐ AQUÍ EDITAS TUS MÓDULOS Y VIDEOS
├── assets/
│   ├── logo.jpg        ← ⭐ COPIA TU LOGO AQUÍ
│   └── (imágenes de módulos)
└── README.md
```

---

## ▶️ Cómo Agregar Videos de Google Drive

1. Sube tu video a **Google Drive**
2. Haz clic derecho → **Compartir** → **Cualquier persona con el enlace puede ver**
3. Copia el enlace. Se ve así:
   ```
   https://drive.google.com/file/d/1ABCxyz123456789/view
   ```
4. El **ID** es la parte entre `/d/` y `/view`:
   ```
   1ABCxyz123456789
   ```
5. Abre `data.js` y pega el ID en el módulo correspondiente:
   ```js
   {
     id: 1,
     title: "Mentalidad de Top Producer",
     driveId: "1ABCxyz123456789",  // ← AQUÍ
     ...
   }
   ```

---

## 🖼️ Cómo Agregar Imágenes de Portada

1. Coloca la imagen en la carpeta `assets/`
2. En `data.js`, escribe el nombre del archivo:
   ```js
   thumb: "modulo1.jpg"
   ```
3. Si no tienes imagen, el módulo mostrará el título como fondo automáticamente.

---

## 📎 Cómo Agregar Recursos (PDFs, links)

En `data.js`, agrega los recursos así:
```js
resources: [
  { label: "Guía PDF Módulo 1", url: "https://drive.google.com/..." },
  { label: "Plantilla Excel", url: "https://docs.google.com/..." }
]
```

---

## 🚀 Cómo Publicar en GitHub Pages

1. Crea un repositorio en GitHub (puede ser privado o público)
2. Sube todos los archivos
3. Ve a **Settings → Pages**
4. En **Source**, selecciona: `Deploy from a branch`
5. Rama: `main` / Carpeta: `/ (root)`
6. Clic en **Save**
7. En unos minutos tu academia estará en:
   ```
   https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
   ```

---

## ✏️ Cómo Agregar o Editar Módulos

Abre `data.js` y edita el array `modules`. Para agregar un módulo nuevo:
```js
{
  id: 14,                           // Número del módulo
  title: "Nombre del Módulo",       // Título
  description: "Descripción...",    // Descripción corta
  driveId: "TU_ID_DE_DRIVE",        // ID del video en Google Drive
  thumb: "modulo14.jpg",            // Imagen de portada (opcional)
  resources: []                     // Recursos adicionales (opcional)
}
```

---

## 📊 Funcionalidades

- ✅ Progreso guardado automáticamente en el navegador
- 🏅 Sistema de medallas al completar módulos
- 📺 Reproductor de video de Google Drive integrado
- 📱 Diseño responsive (móvil y desktop)
- 🔒 Sin necesidad de servidor o base de datos

---

*Academia Golden Trust Financial Group · Elizabeth Jiménez*
