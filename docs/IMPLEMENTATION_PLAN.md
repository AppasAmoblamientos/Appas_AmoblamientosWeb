# IMPLEMENTATION PLAN — APPAS AMOBLAMIENTOS

## Estado General por Fases

| Fase | Nombre | Estado | Resumen |
| :--- | :--- | :--- | :--- |
| **FASE 1** | Auditoría | COMPLETADA | Inspección de HTML/CSS/JS, historial Git, inventario de `img/` y verificación de datos comerciales. |
| **FASE 2** | Investigación | COMPLETADA | Análisis de identidad cromática original, referencias de scroll narrativo (Railway) y diseño editorial de mobiliario. |
| **FASE 3** | Diseño | COMPLETADA | Definición de `DESIGN_SYSTEM.md`, variables CSS, tipografía editorial/técnica, Header sticky y Hero con obra real. |
| **FASE 4** | Experiencia | COMPLETADA | Desarrollo del scroll narrativo interactivo **"DEL ORIGEN AL DETALLE"** (5 etapas con SVG dinámico + fotos reales). |
| **FASE 5** | Contenido | COMPLETADA | Implementación de Historia (+60 años de trayectoria), Servicios reales, Portfolio editorial, Presupuesto y Contacto. |
| **FASE 6** | Funciones | COMPLETADA | Filtros dinámicos de galería, Lightbox con zoom/teclado, configurador de presupuesto a WhatsApp, microinteracciones. |
| **FASE 7** | Optimización | COMPLETADA | Responsive design multi-dispositivo, SEO local (JSON-LD `LocalBusiness`), `sitemap.xml`, `robots.txt`, accesibilidad WCAG AA. |
| **FASE 8** | Validación | COMPLETADA | Pruebas de sintaxis, verificación de enlaces/imágenes, cero errores JS, test de responsive y `prefers-reduced-motion`. |
| **FASE 9** | Entrega | COMPLETADA | Actualización de documentación final (`CHANGELOG.md`, `TEST_REPORT.md`) e informe de entrega. |

---

## Desglose de Tareas Completadas
- [x] Auditar código fuente existente (`index.html`, `styles.css`, `script.js`) y commits históricos de Git.
- [x] Inventariar y visualizar las imágenes de la carpeta `img/`.
- [x] Verificar datos comerciales de APPAS Amoblamientos en Rafaela, Santa Fe.
- [x] Comprobar estado de indexación pública de Instagram y Facebook sin violar restricciones de acceso.
- [x] Crear estructura documental persistente en `/docs/`.
- [x] Documentar `DESIGN_SYSTEM.md` y `ASSET_CATALOG.md`.
- [x] Construir nuevo `index.html` semántico, accesible, con datos estructurados `LocalBusiness`, Open Graph y secciones completas (A–H).
- [x] Construir nuevo `styles.css` autónomo (eliminando Tailwind CDN), con sistema de tokens CSS (Blanco, Azul APPAS, Naranja APPAS), layout editorial, animaciones fluidas y soporte completo `prefers-reduced-motion`.
- [x] Desarrollar `script.js` modular con navegación sticky, scroll narrativo **DEL ORIGEN AL DETALLE**, filtrado dinámico, Lightbox accesible y configurador de presupuesto en vivo para WhatsApp.
- [x] Crear `sitemap.xml`, `robots.txt` y `img/favicon.svg` con identidad oficial de APPAS.
- [x] Ejecutar validaciones técnicas y documentar `CHANGELOG.md` y `TEST_REPORT.md`.

### Pendientes Opcionales para el Propietario
- **Incorporación futura de más fotografías desde Instagram/Facebook:** Cuando el usuario descargue nuevas fotos desde su cuenta de `@appas.amoblamientos` o `/appas.carpinteria`, basta con colocarlas en `img/` y añadir la entrada en `PORTFOLIO_ITEMS` dentro de `script.js` (procedimiento detallado en `docs/ASSET_CATALOG.md`).
