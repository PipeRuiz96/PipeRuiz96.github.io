# Instrucciones para Agregar Videos y GIFs a tu Portfolio

## Ubicaciones donde agregar tus videos demostrativos:

### 1. AUTOMATIZADOR DE DIGITACIÓN (Extensión más popular)
**Archivo:** `index.html` - **Línea:** 201-207
```html
<!-- VIDEO PLACEHOLDER -->
<div class="demo-container">
    <div class="video-placeholder">
        <i class="fas fa-play"></i>
        <span>Video Demo (Aquí va tu video)</span>
        <!-- Aquí puedes pegar el código embed de tu video -->
    </div>
</div>
```

**Cómo reemplazar:**
Elimina todo lo que está dentro de `<div class="demo-container">` y coloca:
```html
<div class="demo-container">
    <video controls width="100%" style="border-radius: 10px;">
        <source src="videos/automatizador-digitacion.mp4" type="video/mp4">
        Tu navegador no soporta videos HTML5.
    </video>
</div>
```

### 2. CONVERTOR WEB → EXCEL/SHEETS
**Archivo:** `index.html` - **Línea:** 234-241
```html
<!-- GIF PLACEHOLDER -->
<div class="demo-container">
    <div class="gif-placeholder">
        <i class="fas fa-image"></i>
        <span>GIF Demo (Aquí va tu GIF)</span>
        <!-- Aquí puedes pegar tu GIF demostrativo -->
    </div>
</div>
```

**Cómo reemplazar:**
```html
<div class="demo-container">
    <img src="gifs/convertor-web-excel.gif" alt="Demo Convertor Web a Excel" 
         style="width: 100%; border-radius: 10px; border: 2px solid rgba(255,215,0,0.3);">
</div>
```

### 3. ANALIZADOR GOOGLE DRIVE
**Archivo:** `index.html` - **Línea:** 268-274
Reemplaza con video de la herramienta analizando fotos.

### 4. DESCARGADOR INTELIGENTE IMÁGENES
**Archivo:** `index.html` - **Línea:** 301-307
Reemplaza con GIF mostrando descarga masiva con nombres automáticos.

### 5. CALCULADOR DE PORCENTAJES
**Archivo:** `index.html` - **Línea:** 334-340
Reemplaza con GIF de la calculadora en acción.

## Estructura de archivos recomendada:

```
tu-portfolio/
├── index.html
├── assets/
│   ├── styles.css
│   ├── script.js
│   └── icons.svg
├── videos/          # ← Crear esta carpeta
│   ├── automatizador-digitacion.mp4
│   ├── google-drive-analyzer.mp4
│   └── demo-principal.mp4
├── gifs/            # ← Crear esta carpeta
│   ├── convertor-web-excel.gif
│   ├── descargador-imagenes.gif
│   ├── calculador-porcentajes.gif
│   └── extension-X.gif
└── images/          # ← Para capturas de pantalla
    ├── screenshot-extension-1.png
    └── logo-personal.png
```

## Consejos para los videos:

### VIDEOS (.mp4):
- **Duración:** 30-60 segundos máximo
- **Resolución:** 1280x720 o 1920x1080
- **Peso:** Máximo 10MB por video
- **Contenido:** 
  1. Mostrar el problema (datos en Sheets)
  2. Activar la extensión
  3. Ver el resultado automático

### GIFS (.gif):
- **Duración:** 10-20 segundos en bucle
- **Peso:** Máximo 5MB por GIF  
- **Resolución:** 800x600 es suficiente
- **Contenido:** Acción específica en bucle

## URLs que puedes usar alternativamente:

Si subes tus videos a YouTube, puedes usar embeds:
```html
<div class="demo-container">
    <iframe width="100%" height="250" 
            src="https://www.youtube.com/embed/TU_VIDEO_ID" 
            frameborder="0" allowfullscreen 
            style="border-radius: 10px;">
    </iframe>
</div>
```

## Videos que necesitas grabar:

### PRIORIDAD ALTA:
1. **Automatizador de Digitación** - Tu extensión estrella
2. **Convertor Web → Excel** - Muy visual y comprensible
3. **Calculador de Porcentajes** - Rápido y efectivo

### PRIORIDAD MEDIA:
4. **Descargador de Imágenes** - Muestra la descarga masiva
5. **Analizador Google Drive** - Análisis de calidad de fotos

### Ideas para los videos:
- **Automatizador:** Sheets con 50 productos → CMS en 30 segundos
- **Convertor:** Página de Uber Eats → Excel organizado  
- **Calculador:** Aplicar 15% descuento a lista de precios
- **Descargador:** Descargar 20 imágenes de una página web
- **Analizador:** Revisar 100 fotos de Drive y mostrar cuáles fallan

## Nota importante:
Cada video/GIF debe mostrar un problema real que resuelves, no algo genérico. Esto es lo que te diferencia de otros freelancers.