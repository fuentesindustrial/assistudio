# Portfolio Cyberpunk — Diseño v1.0

**Fecha:** 2026-05-19
**Archivo objetivo:** `portfolio-mockup.html`
**Enfoque:** Reskin Progresivo (CSS + JS únicamente, sin tocar el HTML estructural)

---

## Decisiones de diseño

| Dimensión | Decisión |
|---|---|
| Estilo visual | Cyberpunk Elegante (negro profundo + neon) |
| Tipo de parallax | Capas de Profundidad (4 capas, velocidades distintas) |
| Color de acento | Cyan Eléctrico `#00c8ff` (reemplaza al dorado `#c9a84c`) |
| Tipografía adicional | `Share Tech Mono` para badges, monograma, stats y eyebrows |
| Fuente de cuerpo | `Inter` — se mantiene |
| Toggle ES/EN | Se conserva 100% funcional |

---

## Paleta de tokens

```
--bg:          #020408   (antes #06090f)
--bg-1:        #0a1020   (antes #0c1220)
--bg-2:        #0d1628   (antes #111827)
--border:      rgba(0,200,255,0.08)
--border-cyan: rgba(0,200,255,0.30)
--cyan:        #00c8ff   (antes --gold: #c9a84c)
--cyan-light:  #6fe0ff   (antes --gold-light: #e6c97a)
--cyan-dim:    rgba(0,200,255,0.08)
--text:        #e0e8f0   (antes #eef2f7)
--muted:       #5a7a96   (antes #7a8fa6)
--muted-2:     #2a4a60   (antes #4a5e75)
```

---

## Cambios por sección

### Variables CSS (`:root`)
- Renombrar todas las variables `--gold*` a `--cyan*` con nuevos valores.
- Actualizar `--bg`, `--bg-1`, `--bg-2` a los tonos más oscuros.
- Agregar `--grid-color: rgba(0,200,255,0.04)` para la grilla.

### `body::before` — Grilla de fondo
- Reemplazar el ruido de SVG por una grilla CSS de líneas cyan:
  ```css
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 36px 36px;
  ```
- La grilla es la Capa 1 del parallax (velocidad más lenta).

### Nav
- Monograma `FF`: fondo `--cyan` sólido con `box-shadow: 0 0 12px rgba(0,200,255,0.5)`.
- Links de nav: `font-family: 'Share Tech Mono'`, color `--cyan` con opacidad.
- Botón de idioma: borde `--border-cyan`, activo con fondo `--cyan` y texto `--bg`.

### Hero
- **Badge pill**: font `Share Tech Mono`, texto en SCREAMING_SNAKE_CASE.
- **Nombre** (`hero-name`): `FELIPE` en blanco, `FUENTES` en `--cyan` con `text-shadow` glow.
  ```css
  text-shadow: 0 0 20px rgba(0,200,255,0.5), 0 0 40px rgba(0,200,255,0.2);
  ```
- **Scan-line**: pseudo-elemento `::after` en `#hero` que baja de top a bottom en loop (4s).
- **Rol** (`hero-role`): font `Share Tech Mono`, separador `//` en lugar de `·`.
- **Botón primario**: fondo `--cyan`, texto `--bg`, `box-shadow` cyan glow.
- **Stats bar**: números en `Share Tech Mono`, etiquetas en `text-transform: uppercase` con `--cyan` semitransparente.

### About / KPI Cards
- `kpi-card::before`: gradiente de `--cyan` a transparent.
- `kpi-num`: color `--cyan` con glow sutil.
- Chips (`.chip`): borde `--border-cyan`, fondo `--cyan-dim`, color `--cyan-light`.

### Experience (Timeline)
- Línea vertical (`tl-wrap::before`): gradiente de `--cyan` a transparent.
- Dot (`tl-dot`): fondo `--cyan`, `box-shadow: 0 0 0 3px rgba(0,200,255,0.15), 0 0 12px rgba(0,200,255,0.4)`.
- Badge de fecha: fondo `--cyan-dim`, borde `--border-cyan`, color `--cyan`.

### Education
- `edu-icon`: fondo `--cyan-dim`, borde `--border-cyan`.
- `edu-inst`: color `--cyan-light`.

### Skills
- `skill-fill`: gradiente `--cyan` → `--cyan-light`.
- `skill-pct`: color `--cyan`.
- Tags en hover: borde y color `--cyan`.

### Strengths
- `str-card:hover`: borde `--border-cyan`, sombra cyan sutil.
- Iconos: fondo `--cyan-dim` semitransparente.

### Contact
- `contact-wrap`: borde `--border-cyan`, gradiente interno con cyan semitransparente.
- Links de contacto en hover: fondo `--cyan-dim`.

### Footer
- Borde superior `--border` (cyan versión oscura).

---

## Sistema Parallax

Script JS puro, sin librerías externas (~40 líneas), usando `requestAnimationFrame` + `scroll` listener con `passive: true`.

```
Capa 1 — .orb-1, .orb-2, body::before (grilla)   → speed: 0.10
Capa 2 — elementos decorativos del hero            → speed: 0.25
Capa 3 — .hero-stats, eyebrow labels               → speed: 0.50
Capa 4 — contenido de texto, botones CTA           → speed: 1.00 (sin efecto)
```

Implementación:
```js
const parallaxLayers = [
  { selector: '.orb-1',    speed: 0.10 },
  { selector: '.orb-2',    speed: 0.15 },
  { selector: '.hero-pill',speed: 0.25 },
  { selector: '.hero-stats',speed: 0.50 },
];
```

Solo aplica en el viewport del `#hero` para no interferir con el scroll de otras secciones.

---

## Animación scan-line (Hero)

```css
#hero::after {
  content: '';
  position: absolute; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,200,255,0.4), transparent);
  animation: scanline 5s linear infinite;
  pointer-events: none; z-index: 2;
}
@keyframes scanline {
  0%   { top: 0;    opacity: 1; }
  90%  { opacity: 0.3; }
  100% { top: 100%; opacity: 0; }
}
```

---

## Tipografía adicional

Agregar al `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

Uso de `Share Tech Mono`:
- `.nav-links a` — links de navegación
- `.hero-pill` — badge de disponibilidad
- `.hero-role` — rol/título debajo del nombre
- `.stat-num` — números de estadísticas
- `.eyebrow` — etiquetas de sección
- `.skill-pct` — porcentajes de habilidades
- `.tl-badge` — fechas de experiencia

---

## Scope explícito (fuera del alcance)

- El contenido textual no cambia.
- No se agregan nuevas secciones.
- El toggle de idioma ES/EN se mantiene sin cambios funcionales.
- No se usan librerías externas (sin Three.js, Particles.js, GSAP).
- El archivo resultante debe ser un único HTML auto-contenido.

**Excepción de HTML permitida:** Se agrega un `<span class="cyan">` dentro del `<h1 class="hero-name">` para aplicar el color cyan sólo a "Fuentes". El texto del span no lleva `data-es`/`data-en` porque el nombre propio no cambia con el idioma.

---

## Archivo de salida

`portfolio-mockup.html` — mismo archivo, misma estructura, CSS y JS actualizados in-place.
