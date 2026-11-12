# PROJECT CONTEXT — APPAS AMOBLAMIENTOS (Rediseño Web Integral)

## 1. Visión y Objetivo del Proyecto
Transformar la web estática de **APPAS Amoblamientos** (carpintería y diseño de mobiliario a medida con más de 60 años de trayectoria en Rafaela, Santa Fe) en una experiencia digital moderna, arquitectónica, editorial, interactiva y comercialmente efectiva, manteniendo 100% su identidad cromática original y utilizando exclusivamente fotografías auténticas de sus trabajos.

## 2. Arquitectura y Restricciones Técnicas
- **Plataforma de publicación:** GitHub Pages (`https://appasamoblamientos.github.io/Appas_AmoblamientosWeb/`).
- **Repositorio:** `https://github.com/AppasAmoblamientos/Appas_AmoblamientosWeb`.
- **Naturaleza del sitio:** 100% estático (HTML5 semántico, CSS3 moderno nativo con variables, JavaScript ES6+ limpio y modularizado, SVG en línea).
- **Rutas relativas:** Uso estricto de rutas relativas (`img/...`, `styles.css`, `script.js`) compatibles con el subdirectorio `/Appas_AmoblamientosWeb/` en GitHub Pages y entorno local.
- **Sin dependencias pesadas ni backends:** Se elimina `cdn.tailwindcss.com` (que bloqueaba el renderizado y pesaba >300KB de JS en tiempo de ejecución) y se reemplaza por un sistema de diseño CSS propio optimizado. Sin bases de datos, servidores ni API keys privadas.
- **Control de versiones:** No realizar `git commit` ni `git push` sin autorización explícita del usuario.

## 3. Hallazgos de la Auditoría Inicial (Fase 1)
1. **Dependencia ineficiente:** El sitio cargaba `<script src="https://cdn.tailwindcss.com"></script>` en el `<head>`, penalizando severamente el rendimiento (LCP/FCP) y generando estilos inconsistentes con `styles.css`.
2. **Errores de rutas y CSS en versión anterior:**
   - `styles.css` apuntaba a `img/fondo.jpeg` (inexistente) y `img/fondoCelular.jpg` (eliminado en commit `f96ce45`), mientras que `index.html` usaba `style="background-image: url('img/fondo.jpg')"`.
   - `img/intagram.png` tenía un typo en el nombre de archivo (se mantiene el archivo original para no romper referencias, pero se reemplaza en la UI por iconografía SVG vectorial nítida).
   - Atributos `alt="Mesa ratona"` repetidos erróneamente en 8 de las 10 fotos de productos (`imagen3.jpg` a `imagen10.jpg`).
3. **Fotografías locales vs. Stock:**
   - `img/imagen1.jpg` a `img/imagen10.jpg`: **10 fotografías 100% auténticas** de trabajos reales de APPAS en taller e instalados en clientes.
   - `img/fondo.jpg`: Imagen de stock de un carpintero con cepillo manual. Prohibido usarla como trabajo propio; la portada (`Hero`) ahora utiliza fotografías reales de obras de APPAS (`img/imagen6.jpg`, `img/imagen3.jpg`, `img/imagen9.jpg`).
   - `img/fondoDescrip.jpg`: Textura real de tablas y vetas de madera. Permitida por reglamento como textura secundaria/ambiental (ideal para la Etapa 01 de *Del Origen al Detalle*).
4. **Redes Sociales (Instagram / Facebook):**
   - Los perfiles públicos `@appas.amoblamientos` y `/appas.carpinteria` requieren autenticación/login en Meta para extracción automatizada y no están indexados públicamente en buscadores. Cumpliendo la regla innegociable de autenticidad y seguridad, se utilizan exclusivamente las 10 fotografías reales verificadas del repositorio y se deja documentado cómo incorporar nuevas fotos exportadas de Instagram/Facebook.

## 4. Datos Comerciales Verificados
- **Marca:** APPAS Amoblamientos (`Appas diseño & amoblamientos`).
- **Trayectoria:** Más de 60 años de trayectoria trabajando la madera a medida.
- **Titular / Contacto WhatsApp:** Omar Appas (`3492327644` / formato internacional WhatsApp `5493492327644` o `3492327644`). *Nota: se mantiene compatibilidad directa con `https://wa.me/5493492327644` y fallback/verificación*.
- **Dirección:** Bv. Lehmann 2606, esquina J. Peterlin — Rafaela, Santa Fe, Argentina.
- **Correo electrónico:** `omarappas@hotmail.com`
- **Instagram:** `https://www.instagram.com/appas.amoblamientos/`
- **Facebook:** `https://www.facebook.com/appas.carpinteria/photos` (y enlace histórico `/AppasCarpinteria`).

## 5. Decisiones de Diseño e Ingeniería
- **Identidad Cromática Innegociable:**
  - **Blanco (`#FFFFFF`, `#F8FAFC`):** Predominante en fondos, galerías, tarjetas editoriales y espacios de aire arquitectónico.
  - **Azul Institucional (`#1D3B8B` / `#1D4ED8` / `#0F2356`):** Derivado del azul profundo original del logo `img/logo.jpg` y `text-blue-700`, aplicado en navegación, encabezados, secciones técnicas (*Del Origen al Detalle*), badges e identidad.
  - **Naranja Acento (`#EA580C` / `#F97316` / `#D97706`):** Fuerte y vibrante (derivado de `.logo-orange: #ea580c` y la segunda "p" del isotipo), aplicado en botones de acción (CTA), indicadores de progreso del scroll narrativo, filtros activos y microinteracciones.
- **Experiencia Diferencial "DEL ORIGEN AL DETALLE":**
  - Sección interactiva con `position: sticky` + motor JavaScript ligero basado en `requestAnimationFrame` e `IntersectionObserver`.
  - Un plano/pieza de madera isométrica y técnica en SVG evoluciona en 5 etapas sincronizadas con el progreso de lectura (`01 Materia Prima` -> `02 Diseño` -> `03 Fabricación` -> `04 Ensamblaje` -> `05 Resultado Real`), culminando con la superposición y exhibición de fotografías reales de APPAS (`imagen6.jpg`, `imagen3.jpg`, `imagen9.jpg`).
- **Portfolio Editorial Dinámico:**
  - Grilla asimétrica estilo revista de arquitectura / lookbook (no tarjetas repetitivas iguales) con filtros por categorías reales respaldadas por las fotos existentes, buscador rápido, vista detallada en Lightbox accesible con navegación por teclado (`ArrowLeft`, `ArrowRight`, `Escape`), metadatos técnicos de cada obra y botón directo *"Cotizar un diseño similar"* que pre-rellena el formulario de presupuesto.
