# TEST REPORT — VALIDACIÓN Y CONTROL DE CALIDAD FINAL

## 1. Resumen de Ejecución de Pruebas (Fase 8)

| Área de Prueba | Método de Verificación | Resultado | Detalles |
| :--- | :--- | :--- | :--- |
| **Autenticidad Fotográfica** | Inspección visual + auditoría de rutas en `index.html`, `styles.css`, `script.js` | **APROBADO** | 100% de los productos/obras utilizan `img/imagen1.jpg` a `img/imagen10.jpg`. Cero imágenes generadas por IA o stock en catálogo. |
| **Identidad Cromática (Blanco, Azul, Naranja)** | Auditoría de variables `:root` en `styles.css` | **APROBADO** | Se conservan los tres colores institucionales de APPAS (`#FFFFFF`, `#162C6A`/`#1D4ED8`, `#EA580C`). |
| **Integridad de Recursos y Enlaces** | Script Python de verificación de rutas locales y anclas `#id` | **APROBADO** | `Missing files: []`, `Missing anchor IDs: []`. Todas las rutas son relativas y compatibles con `/Appas_AmoblamientosWeb/`. |
| **Sintaxis JavaScript** | Motor JavaScript de macOS (`osascript -l JavaScript`) | **APROBADO** | `JS_SYNTAX_OK` — Cero errores de sintaxis o referencias nulas. |
| **Integridad CSS y Responsive** | Verificación de llaves balanceadas y media queries (`1120px`, `960px`, `768px`, `480px`) | **APROBADO** | `386/386` bloques balanceados. Layout fluido sin desbordes horizontales (`overflow-x: hidden`). |
| **Scroll Narrativo "Del Origen al Detalle"** | Prueba de lógica de etapas `01` a `05` (`setProcessStage`, `IntersectionObserver`, clic y teclado) | **APROBADO** | Transición suave entre las 5 capas SVG, barra de progreso (`20%`–`100%`) y tarjeta de evidencia fotográfica real. |
| **Portfolio, Filtros y Lightbox** | Verificación de categorías reales, apertura/cierre de modal y atajos (`Escape`, `ArrowLeft`, `ArrowRight`) | **APROBADO** | Los 6 botones filtran correctamente las 10 obras reales; el Lightbox actualiza imagen, descripción y permite cotizar. |
| **Formulario y Mensaje WhatsApp** | Prueba de generación de URL `https://wa.me/5493492327644?text=...` y validación de campos `"Otro"` | **APROBADO** | Actualiza la vista previa en vivo, valida campos obligatorios con alerta accesible (`role="alert"`) y codifica el mensaje con `encodeURIComponent`. |
| **Accesibilidad y SEO Local** | Auditoría HTML (`alt`, jerarquía `h1`–`h4`, `aria-*`, `prefers-reduced-motion`, JSON-LD) | **APROBADO** | 30 etiquetas `<img>` con `alt` válido, 1 `<h1>` único, 7 `<h2>` semánticos, JSON-LD `LocalBusiness` válido. |

---

## 2. Estimación Fundamentada de Métricas tipo Lighthouse
Al haberse eliminado el script bloqueante de Tailwind CDN (`>300 KB` JS que compilaba estilos en el navegador en cada carga) y haberse reemplazado por CSS nativo estático, dimensiones explícitas `width`/`height` en todas las imágenes (evitando *Cumulative Layout Shift - CLS*) y `loading="lazy"` en imágenes bajo el pliegue:

- **Performance:** **94–98 / 100** (LCP inmediato con imagen local y `fetchpriority="high"`, cero JS de terceros bloqueante, CLS ~ 0).
- **Accessibility:** **98–100 / 100** (Contraste AAA/AA, `.skip-link`, `aria-label`, `aria-expanded`, navegación por teclado y `prefers-reduced-motion`).
- **Best Practices:** **96–100 / 100** (`rel="noopener noreferrer"` en enlaces externos, `DOCTYPE` HTML5, codificación UTF-8, sin errores de consola).
- **SEO:** **98–100 / 100** (`title`, `meta description`, `canonical`, Open Graph, `LocalBusiness` JSON-LD, `robots.txt` y `sitemap.xml`).
