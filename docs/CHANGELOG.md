# CHANGELOG — APPAS AMOBLAMIENTOS

## [2.0.0] — Rediseño Web Integral (2026-11-12)

### Identidad Visual y Sistema de Diseño (`styles.css`, `docs/DESIGN_SYSTEM.md`)
- **Conservación estricta de colores institucionales:** Definición de tokens CSS oficiales basados en el logo original (`img/logo.jpg`) y la hoja de estilos previa: Blanco (`#FFFFFF` / `#F8FAFC`), Azul APPAS (`#162C6A` / `#1D4ED8` / `#0B1739`) y Naranja APPAS (`#EA580C` / `#C2410C`).
- **Eliminación de Tailwind CDN:** Se removió `<script src="https://cdn.tailwindcss.com"></script>` que bloqueaba el renderizado inicial, reemplazándolo por una arquitectura CSS3 propia, limpia y mantenible.
- **Tipografía Editorial y Técnica:** Incorporación de `Plus Jakarta Sans` para lectura editorial/comercial y `JetBrains Mono` para cotas técnicas, numeración de etapas y códigos de obra.
- **Corrección de bugs heredados:** Se eliminaron las referencias rotas a `img/fondo.jpeg` e `img/fondoCelular.jpg` que existían en el `styles.css` anterior.

### Experiencia Creativa Diferencial (`index.html`, `styles.css`, `script.js`)
- **Sección "DEL ORIGEN AL DETALLE":** Implementación de scroll narrativo inspirado en Railway adaptado a la carpintería a medida.
  - Lienzo técnico sticky (`#blueprintStage`) con indicador de avance (`20%` a `100%`), pestañas interactivas y soporte de teclado.
  - Ilustración técnica isométrica en SVG (`#evolvingWoodSvg`) que evoluciona en 5 etapas sincronizadas con `IntersectionObserver`:
    - `01 — MATERIA PRIMA` (Tablón con vetas + textura real `img/fondoDescrip.jpg`).
    - `02 — DISEÑO` (Plano técnico acotado en azul y naranja APPAS + evidencia real `img/imagen5.jpg`).
    - `03 — FABRICACIÓN` (Corte, escuadrado y mecanizado en taller + evidencia real `img/imagen4.jpg`).
    - `04 — ENSAMBLAJE` (Armado estructural y correderas telescópicas + evidencia real `img/imagen1.jpg`).
    - `05 — RESULTADO` (Mueble terminado con tapa lustrada + fotografías reales `img/imagen3.jpg`, `img/imagen6.jpg`, `img/imagen9.jpg`).

### Fotografía Auténtica y Portfolio Editorial (`index.html`, `docs/ASSET_CATALOG.md`)
- **100% Fotografías Reales:** Se inventariaron y documentaron las 10 fotografías auténticas de trabajos de APPAS (`img/imagen1.jpg` a `img/imagen10.jpg`).
- **Reemplazo de portada stock por obra real:** Se retiró `img/fondo.jpg` (imagen de stock) de la portada principal y se implementó un **Hero Showcase Interactivo** protagonizado por obras reales de APPAS (`imagen6.jpg`, `imagen3.jpg`, `imagen9.jpg`, `imagen10.jpg`).
- **Corrección de textos alternativos (`alt`):** Se corrigieron los 8 atributos `alt="Mesa ratona"` erróneos del HTML original por descripciones técnicas precisas para accesibilidad y SEO.
- **Galería Editorial Asimétrica con Filtros y Lightbox:**
  - Filtros dinámicos respaldados por categorías reales: *Todos (10)*, *Cocinas (3)*, *Mesadas e Islas (3)*, *Placares y Dormitorios (2)*, *Baños y Multiuso (1)*, *Mesas y Comedor (1)*.
  - Modal Lightbox accesible con contador de obra, navegación por teclado (`ArrowLeft`, `ArrowRight`, `Escape`) y botón *"Cotizar un diseño similar"*.

### Conversión Comercial y Presupuestos por WhatsApp (`index.html`, `script.js`)
- **Configurador de Presupuesto Renovado (`#formularioPedido`):**
  - Conserva los selectores originales (`#tipoMadera`, `#tipoSector`, `#otroTipoMaderaContainer`, `#otroSectorContainer`) y suma Nombre, Teléfono/Localidad, Tipo de Mueble, Medidas aproximadas, Etapa del proyecto, Descripción y recordatorio local de fotografías de referencia.
  - **Vista previa en vivo (`#whatsappMessagePreview`):** Muestra en tiempo real el mensaje estructurado que recibirá Omar Appas en WhatsApp (`3492 327644`).
  - **Pre-llenado inteligente:** Los botones *"Cotizar similar"* del Portfolio y de la sección Servicios completan automáticamente el ambiente, material y mueble en el formulario.

### SEO Local, Accesibilidad y Documentación (`sitemap.xml`, `robots.txt`, `img/favicon.svg`, `/docs/*`)
- Incorporación de metadatos SEO locales para Rafaela (Santa Fe), Open Graph, Twitter Cards y datos estructurados JSON-LD `LocalBusiness` (`FurnitureStore` + `HomeAndConstructionBusiness`).
- Creación de `img/favicon.svg`, `sitemap.xml` y `robots.txt` compatibles con la URL de GitHub Pages (`https://appasamoblamientos.github.io/Appas_AmoblamientosWeb/`).
- Soporte completo para `prefers-reduced-motion: reduce`, enlace *Saltar al contenido principal* (`.skip-link`) y navegación completa por teclado.


## [2.1.0] — Optimización de Header y Portada Inmersiva (Estilo SeasGeosciences)
- **Corrección de Navegación Principal (`.nav-list` y `.nav-link`)**: Se aplicó `display: inline-flex; align-items: center; white-space: nowrap; height: 2.45rem; line-height: 1;` en todos los enlaces del menú (`Inicio`, `Sobre APPAS`, `Del Origen al Detalle`, `Portfolio`, `Servicios`, `Presupuestos`, `Contacto`) para evitar saltos de línea, textos cortados o indicadores desalineados en cualquier resolución.
- **Corrección de Identidad en Header (`.brand-logo` y `.brand-text`)**: Se corrigió el interlineado (`line-height: 1.15`), espaciado vertical (`gap: 0.34rem`) y `white-space: nowrap` entre `Appas` y `DISEÑO & AMOBLAMIENTOS`, evitando que las astas descendentes de las letras `p` toquen el subtítulo o que éste se parta en dos renglones.
- **Hero Cinematográfico Inmersivo (`#inicio`)**: Incorporación de `img/hero-bg-modern.jpg` con movimiento de cámara suave (`@keyframes heroCinemaMotion`), overlay arquitectónico en azul profundo, `<canvas id="heroAmbientCanvas">` interactivo con partículas de luz/aserrín dorado y nodos técnicos, tarjetas glassmorphic y barra HUD inferior con coordenadas de Rafaela e indicador de scroll.


## [2.2.0] — Limpieza de Etiquetas y Ampliación del Portfolio a 20 Trabajos Reales
- **Eliminación de Badges / Etiquetas Artificiales**: Se quitaron las píldoras superiores (`.eyebrow-badge`, `.showcase-header-bar`, `.section-tag`) y todas las leyendas repetitivas como `"OBRA REAL #06"`, `"Fotografía auténtica APPAS"`, `"100% AUTÉNTICO"` y `"Obra Instalada"`.
- **Incorporación de 10 Nuevas Fotografías (`img/imagen11.jpg` a `img/imagen20.jpg`)**: Se guardaron, optimizaron (recortando franjas negras de capturas en `imagen11.jpg` e `imagen12.jpg`) e integraron en la grilla del Portfolio, en los filtros dinámicos (sumando la categoría **Comercial y Especiales**) y en el Lightbox interactivo con autocompletado directo para WhatsApp.
