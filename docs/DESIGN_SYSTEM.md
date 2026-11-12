# DESIGN SYSTEM — APPAS AMOBLAMIENTOS

## 1. Identidad Cromática Oficial (Innegociable)
La paleta respeta estrictamente los tres colores institucionales de APPAS Amoblamientos analizados en `img/logo.jpg` y `styles.css`, rechazando esquemas genéricos marrones o beige.

### Colores Principales (Variables CSS)
| Token CSS | Valor HEX | Uso Principal |
| :--- | :--- | :--- |
| `--color-white` | `#FFFFFF` | Fondo principal, tarjetas, galerías y superficies limpias. |
| `--color-surface` | `#F8FAFC` | Fondos secundarios sutiles con matiz arquitectónico frío-neutro. |
| `--color-surface-alt` | `#F1F5F9` | Bloques de contraste suave, inputs y contenedores técnicos. |
| `--color-blue-primary` | `#1D4ED8` | Azul institucional vibrante (referencia `text-blue-700` original). |
| `--color-blue-deep` | `#162C6A` | Azul profundo del logo original (`img/logo.jpg`), encabezados y sección narrativa. |
| `--color-blue-dark` | `#0B1739` | Fondos institucionales oscuros, plano técnico blueprint y footer. |
| `--color-blue-soft` | `#EFF6FF` | Fondos de badges, estados seleccionados y acentos informativos. |
| `--color-orange-primary` | `#EA580C` | Naranja institucional original (`.logo-orange` en `styles.css`). |
| `--color-orange-hover` | `#C2410C` | Estado hover/activo de llamadas a la acción principales. |
| `--color-orange-light` | `#FFEDD5` | Indicadores suaves, etiquetas de etapa y resaltados cálidos. |
| `--color-orange-amber` | `#D97706` | Matiz dorado-naranja de la segunda "p" del isotipo original. |
| `--color-text-main` | `#0F172A` | Texto principal de alto contraste (ratio > 14:1 sobre blanco). |
| `--color-text-muted` | `#475569` | Descripciones editoriales, subtítulos y metadatos (ratio > 7:1). |
| `--color-border` | `#E2E8F0` | Líneas divisorias arquitectónicas y bordes de grilla. |

### Distribución Visual
- **70% Blanco / Superficies claras:** Aporta amplitud arquitectónica y hace que las fotografías reales de los muebles sean las protagonistas.
- **20% Azul APPAS:** Aporta autoridad técnica, trayectoria (+60 años), estructura editorial, encabezados y el plano técnico interactivo.
- **10% Naranja APPAS:** Guía la mirada hacia los botones de conversión (*Solicitar Presupuesto*, *Enviar a WhatsApp*), el indicador del scroll narrativo y los estados activos.

---

## 2. Tipografía Editorial y Técnica
Se implementa una combinación tipográfica de alta legibilidad y carácter arquitectónico mediante Google Fonts con `display=swap` y fallback seguro al sistema:
- **Encabezados y Display (`--font-display`):** `'Plus Jakarta Sans'` / `'Playfair Display'` (para acentos editoriales puntuales) — transmite precisión moderna, geometría limpia y solidez industrial.
- **Cuerpo y UI (`--font-sans`):** `'Plus Jakarta Sans'`, `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` — lectura fluida en pantallas de cualquier densidad.
- **Datos Técnicos y Numeración (`--font-mono`):** `'JetBrains Mono'`, `monospace` — empleado en numeración de etapas (`01`–`05`), cotas del plano técnico, dimensiones y códigos de catálogo.

### Escala Tipográfica Fluida (`clamp()`)
- **Hero Title (`h1`):** `clamp(2.4rem, 5vw + 1rem, 4.5rem)`, `font-weight: 800`, `letter-spacing: -0.03em`.
- **Section Title (`h2`):** `clamp(1.85rem, 3.2vw + 0.5rem, 3rem)`, `font-weight: 800`, `letter-spacing: -0.025em`.
- **Card / Stage Title (`h3`):** `clamp(1.25rem, 1.5vw + 0.5rem, 1.65rem)`, `font-weight: 700`.
- **Body Large:** `clamp(1.05rem, 0.5vw + 0.95rem, 1.2rem)`, `line-height: 1.7`.
- **Body Regular:** `1rem` (`16px`–`17px`), `line-height: 1.65`.

---

## 3. Componentes y Patrones UI
1. **Header Sticky Arquitectónico:**
   - Barra superior con datos rápidos (Rafaela, Santa Fe · +60 años de trayectoria · contacto directo) y barra principal con `backdrop-filter: blur(16px)` sobre blanco translúcido (`rgba(255, 255, 255, 0.92)`), logo original, enlaces con indicador activo y CTA naranja.
   - Barra de progreso de lectura superior en naranja (`#EA580C`).
2. **Hero / Portada Asimétrica:**
   - Composición editorial de dos columnas en desktop: a la izquierda propuesta de valor, credenciales verificadas (+60 años, fabricación propia a medida, taller propio en Rafaela) y doble CTA; a la derecha un showcase arquitectónico interactivo con fotografías reales de APPAS (`imagen6.jpg`, `imagen3.jpg`, `imagen9.jpg`) y ficha técnica de la obra en exhibición.
3. **Scroll Narrativo "DEL ORIGEN AL DETALLE":**
   - Layout `position: sticky` de pantalla completa en desktop y tarjeta técnica progresiva en móvil.
   - Panel visual izquierdo/central con lienzo técnico azul profundo (`#0B1739`) donde un SVG isométrico/técnico de alta precisión se transforma etapa por etapa (veta orgánica -> plano acotado -> corte y mecanizado -> ensamble explosivo -> mueble real con fotografía auténtica).
4. **Galería Portfolio Editorial (Bento / Asimétrica):**
   - Destaca obras clave en formato grande (2 columnas) alternadas con piezas verticales/cuadradas, evitando la monotonía de tarjetas idénticas.
   - Cada pieza muestra número de catálogo, categoría, material real verificado, título y acceso al Lightbox o cotización directa.
5. **Configurador de Presupuesto para WhatsApp:**
   - Formulario interactivo por pasos lógicos con chips seleccionables, campos claros, validación amigable en tiempo real (sin `alert()` intrusivos) y vista previa en vivo del mensaje que se enviará a Omar Appas por WhatsApp.
