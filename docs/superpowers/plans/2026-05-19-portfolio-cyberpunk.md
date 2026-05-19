# Portfolio Cyberpunk Reskin — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar `portfolio-mockup.html` en un portafolio futurista Cyberpunk Elegante con paleta cyan eléctrico, tipografía monospace, grilla animada de fondo y sistema parallax de 4 capas.

**Architecture:** Reskin Progresivo — se edita únicamente el `<style>` y el `<script>` del archivo HTML existente, más un `<span>` mínimo en el h1 del nombre. No se toca el contenido textual ni las secciones. El parallax es JS puro (~40 líneas) sin librerías externas.

**Tech Stack:** HTML5, CSS3 (custom properties, keyframes, grid background), Vanilla JS (scroll + requestAnimationFrame), Google Fonts (Share Tech Mono + Inter)

**Spec:** `docs/superpowers/specs/2026-05-19-portfolio-cyberpunk-design.md`

---

## File Map

| Archivo | Acción | Responsabilidad |
|---|---|---|
| `portfolio-mockup.html` | Modificar | Único archivo — CSS tokens, estilos por sección, animaciones, parallax JS |

---

### Task 1: Fuente y tokens CSS base

**Files:**
- Modify: `portfolio-mockup.html` (líneas 7-9 `<link>` fonts, líneas 11-26 `:root`)

- [ ] **Step 1: Actualizar la URL de Google Fonts para incluir Share Tech Mono**

En `portfolio-mockup.html`, línea 9, reemplazar:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```
por:
```html
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

- [ ] **Step 2: Reemplazar el bloque `:root` completo**

Localizar el bloque `/* ─── TOKENS ─────────────────────────────── */` y reemplazar todo el `:root { ... }` por:
```css
:root {
  --bg:          #020408;
  --bg-1:        #0a1020;
  --bg-2:        #0d1628;
  --border:      rgba(0,200,255,0.08);
  --border-cyan: rgba(0,200,255,0.30);
  --cyan:        #00c8ff;
  --cyan-light:  #6fe0ff;
  --cyan-dim:    rgba(0,200,255,0.08);
  --grid-color:  rgba(0,200,255,0.04);
  --text:        #e0e8f0;
  --muted:       #5a7a96;
  --muted-2:     #2a4a60;
  --radius:      14px;
  --radius-lg:   22px;
}
```

- [ ] **Step 3: Verificar visualmente**

Abrir `portfolio-mockup.html` en el navegador. El fondo debe ser negro más profundo (#020408). No debe verse ningún color dorado — todos los elementos que usaban `--gold` deben haber cambiado a cyan o estar temporalmente sin color de acento hasta los pasos siguientes.

- [ ] **Step 4: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: update CSS tokens to cyan cyberpunk palette"
```

---

### Task 2: Fondo — grilla CSS animada

**Files:**
- Modify: `portfolio-mockup.html` (bloque `/* ─── NOISE TEXTURE ─────────────────────── */`)

- [ ] **Step 1: Reemplazar el bloque `body::before` completo**

Localizar `/* ─── NOISE TEXTURE ─────────────────────── */` y reemplazar el bloque `body::before { ... }` por:
```css
/* ─── GRID BACKGROUND ──────────────────── */
body::before {
  content: '';
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 1;
}
```

- [ ] **Step 2: Verificar visualmente**

Refrescar el navegador. El fondo debe mostrar una grilla de líneas cyan muy sutiles (#020408 con líneas rgba(0,200,255,0.04)) en todo el viewport. La grilla no debe distraer — debe ser apenas perceptible.

- [ ] **Step 3: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: replace noise texture with cyan grid background"
```

---

### Task 3: Nav — estilo cyberpunk

**Files:**
- Modify: `portfolio-mockup.html` (bloque `/* ─── NAV ───────────────────────────────── */`)

- [ ] **Step 1: Actualizar estilos del nav**

Localizar el bloque `/* ─── NAV ───────────────────────────────── */` y reemplazar todos los estilos del nav por:
```css
/* ─── NAV ───────────────────────────────── */
nav {
  position: fixed; top: 0; width: 100%; z-index: 100;
  padding: 0 2rem;
  display: flex; align-items: center; justify-content: space-between;
  height: 64px;
  background: rgba(2,4,8,0.85);
  backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid var(--border-cyan);
}
.nav-brand {
  display: flex; align-items: center; gap: 10px;
  text-decoration: none;
}
.nav-monogram {
  width: 34px; height: 34px; border-radius: 8px;
  background: var(--cyan);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.8rem; color: var(--bg);
  letter-spacing: 0.05em;
  box-shadow: 0 0 14px rgba(0,200,255,0.5);
}
.nav-name { font-size: 0.9rem; font-weight: 600; color: var(--text); }

.nav-links {
  display: flex; align-items: center; gap: 0.25rem;
}
.nav-links a {
  text-decoration: none; color: rgba(0,200,255,0.55); font-size: 0.82rem;
  padding: 6px 14px; border-radius: 8px;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 0.04em;
  transition: color .2s, background .2s;
}
.nav-links a:hover { color: var(--cyan); background: var(--cyan-dim); }

.lang-btn {
  display: flex; align-items: center;
  border: 1px solid var(--border-cyan); border-radius: 8px;
  overflow: hidden; margin-left: 0.5rem;
  font-size: 0.75rem; font-weight: 600;
  font-family: 'Share Tech Mono', monospace;
}
.lang-btn button {
  background: none; border: none; cursor: pointer;
  padding: 5px 11px; color: var(--muted); transition: all .2s;
}
.lang-btn button.active { background: var(--cyan); color: var(--bg); }
```

- [ ] **Step 2: Verificar visualmente**

Refrescar el navegador. La barra de nav debe mostrar: monograma FF en cyan brillante con glow, links en fuente monospace cyan semitransparente, borde inferior cyan sutil. El fondo del nav debe ser casi negro con blur.

- [ ] **Step 3: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: cyberpunk nav — cyan glow monogram, mono links"
```

---

### Task 4: Hero — base (pill, rol, desc, botones, stats)

**Files:**
- Modify: `portfolio-mockup.html` (bloque `/* ─── HERO ──────────────────────────────── */`)

- [ ] **Step 1: Reemplazar todos los estilos del hero**

Localizar el bloque `/* ─── HERO ──────────────────────────────── */` y reemplazarlo completo por:
```css
/* ─── HERO ──────────────────────────────── */
#hero {
  min-height: 100vh;
  display: grid; place-items: center;
  padding: 8rem 2rem 5rem;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.hero-inner { max-width: 820px; position: relative; z-index: 2; }

.hero-pill {
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid var(--border-cyan);
  background: var(--cyan-dim);
  border-radius: 99px; padding: 6px 18px;
  font-size: 0.72rem; font-weight: 600;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--cyan); margin-bottom: 2rem;
  font-family: 'Share Tech Mono', monospace;
}
.hero-pill-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 6px var(--cyan);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.5; transform: scale(1.4); }
}

.hero-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(3rem, 9vw, 6.5rem);
  font-weight: 900; line-height: 1;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 1.25rem;
}
.hero-name .cyan {
  color: var(--cyan);
  text-shadow: 0 0 20px rgba(0,200,255,0.5), 0 0 40px rgba(0,200,255,0.2);
}

.hero-role {
  font-size: clamp(0.85rem, 2vw, 1rem);
  color: rgba(0,200,255,0.6);
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
}
.hero-role strong { color: var(--text); font-weight: 400; }

.hero-desc {
  font-size: 1.05rem; color: var(--muted); line-height: 1.8;
  max-width: 600px; margin: 0 auto 2.5rem;
}

.hero-cta {
  display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
  margin-bottom: 3.5rem;
}
.btn-gold {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--cyan);
  color: var(--bg); font-weight: 700; font-size: 0.88rem;
  padding: 13px 26px; border-radius: var(--radius);
  text-decoration: none; transition: transform .2s, box-shadow .2s;
  font-family: 'Share Tech Mono', monospace; letter-spacing: 0.05em;
  box-shadow: 0 0 0 0 rgba(0,200,255,0);
}
.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,200,255,0.4);
}
.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid var(--border-cyan); color: var(--cyan);
  font-weight: 500; font-size: 0.88rem;
  padding: 13px 26px; border-radius: var(--radius);
  text-decoration: none; transition: transform .2s, background .2s;
  backdrop-filter: blur(8px);
  background: var(--cyan-dim);
  font-family: 'Share Tech Mono', monospace; letter-spacing: 0.05em;
}
.btn-ghost:hover { transform: translateY(-2px); background: rgba(0,200,255,0.14); }

/* Stats bar */
.hero-stats {
  display: flex; justify-content: center;
  gap: 0; border: 1px solid var(--border-cyan);
  border-radius: var(--radius-lg);
  background: rgba(0,200,255,0.03);
  backdrop-filter: blur(12px);
  overflow: hidden;
  max-width: 540px; margin: 0 auto;
}
.stat-item {
  flex: 1; padding: 1.25rem 1.5rem; text-align: center;
  border-right: 1px solid var(--border-cyan);
}
.stat-item:last-child { border-right: none; }
.stat-num {
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.9rem; font-weight: 400; color: var(--cyan);
  line-height: 1;
  text-shadow: 0 0 12px rgba(0,200,255,0.4);
}
.stat-lbl {
  font-size: 0.65rem; color: rgba(0,200,255,0.5);
  margin-top: 4px; line-height: 1.3;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 0.08em; text-transform: uppercase;
}
```

- [ ] **Step 2: Verificar visualmente**

Refrescar. El hero debe mostrar: badge en monospace cyan, botones con fondo cyan y glow, barra de estadísticas con borde cyan y números en monospace. El nombre aún no tiene el glow (eso es el Task 5).

- [ ] **Step 3: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: hero base styles — cyan buttons, mono stats, pill"
```

---

### Task 5: Hero — nombre con glow y scan-line

**Files:**
- Modify: `portfolio-mockup.html` (HTML del h1, CSS de #hero, animación scanline)

- [ ] **Step 1: Agregar el span .cyan al h1 en el HTML**

Localizar en el HTML (sección `<!-- HERO -->`):
```html
<h1 class="hero-name">Felipe Fuentes Soto</h1>
```
Reemplazar por:
```html
<h1 class="hero-name">Felipe <span class="cyan">Fuentes</span> Soto</h1>
```

- [ ] **Step 2: Agregar la animación scan-line al bloque CSS del hero**

Después del bloque `/* ─── HERO ──────────────────────────────── */`, añadir justo antes de `/* ─── SECTIONS ── */`:
```css
/* Scan-line */
#hero::after {
  content: '';
  position: absolute; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,200,255,0.45), transparent);
  animation: scanline 5s linear infinite;
  pointer-events: none; z-index: 3;
  top: 0;
}
@keyframes scanline {
  0%   { top: 0%;   opacity: 1; }
  90%  { opacity: 0.3; }
  100% { top: 100%; opacity: 0; }
}
```

- [ ] **Step 3: Verificar visualmente**

Refrescar. El nombre debe mostrar "Fuentes" en cyan brillante con halo de luz. Una línea horizontal translúcida cyan debe bajar lentamente de arriba a abajo del hero en loop cada 5 segundos.

- [ ] **Step 4: Verificar toggle ES/EN no afectado**

Hacer clic en el botón EN. El nombre sigue siendo "Felipe Fuentes Soto" (no cambia — correcto, es nombre propio). Los demás textos del hero deben cambiar a inglés normalmente.

- [ ] **Step 5: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: hero name cyan glow + scan-line animation"
```

---

### Task 6: Hero — rol con separador // monospace

**Files:**
- Modify: `portfolio-mockup.html` (HTML del párrafo `.hero-role`)

- [ ] **Step 1: Actualizar el HTML del rol del hero**

Localizar en el HTML:
```html
<p class="hero-role">
  <strong data-es="Especialista en RRHH & Remuneraciones" data-en="HR & Payroll Specialist">Especialista en RRHH & Remuneraciones</strong>
  &nbsp;·&nbsp;
  <span data-es="Ingeniero Civil Industrial" data-en="Civil Industrial Engineer">Ingeniero Civil Industrial</span>
</p>
```
Reemplazar por:
```html
<p class="hero-role">
  <strong data-es="Especialista en RRHH & Remuneraciones" data-en="HR & Payroll Specialist">Especialista en RRHH & Remuneraciones</strong>
  <span style="color:rgba(0,200,255,0.3); margin: 0 0.5rem;">//</span>
  <span data-es="Ingeniero Civil Industrial" data-en="Civil Industrial Engineer">Ingeniero Civil Industrial</span>
</p>
```

- [ ] **Step 2: Verificar visualmente**

El rol debe mostrar el separador `//` en cyan semitransparente en lugar del `·`. La fuente debe ser monospace (aplicada en Task 4).

- [ ] **Step 3: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: hero role — // separator, mono font"
```

---

### Task 7: About / KPI Cards y eyebrows

**Files:**
- Modify: `portfolio-mockup.html` (bloques CSS `/* ─── ABOUT */`, `/* ─── SECTIONS */`)

- [ ] **Step 1: Actualizar el eyebrow (etiqueta de sección)**

Localizar el bloque `.eyebrow` en el CSS y reemplazar por:
```css
.eyebrow {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.18em; color: var(--cyan); margin-bottom: 1rem;
  font-family: 'Share Tech Mono', monospace;
}
.eyebrow::before {
  content: '//'; color: rgba(0,200,255,0.4);
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.8rem;
}
```

- [ ] **Step 2: Actualizar chips y KPI cards**

Localizar el bloque `.chip` y los estilos `.kpi-card`, `.kpi-num`, `.kpi-label` y reemplazarlos por:
```css
.about-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1.5rem; }
.chip {
  font-size: 0.75rem; font-weight: 500;
  padding: 5px 13px; border-radius: 99px;
  border: 1px solid var(--border-cyan);
  background: var(--cyan-dim); color: var(--cyan-light);
  font-family: 'Share Tech Mono', monospace;
}

.kpi-grid { display: grid; gap: 1rem; }
.kpi-card {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.5rem;
  position: relative; overflow: hidden;
  transition: border-color .3s;
}
.kpi-card::before {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--cyan), transparent);
}
.kpi-card:hover { border-color: var(--border-cyan); }
.kpi-num {
  font-family: 'Share Tech Mono', monospace;
  font-size: 2.2rem; font-weight: 400; color: var(--cyan); line-height: 1;
  text-shadow: 0 0 10px rgba(0,200,255,0.35);
}
.kpi-label { font-size: 0.82rem; color: var(--muted); margin-top: 6px; }
```

- [ ] **Step 3: Verificar visualmente**

Los eyebrows de sección deben mostrar el prefijo `//` en cyan. Los chips deben ser cyan. Los KPI cards deben tener borde superior cyan y números con glow sutil.

- [ ] **Step 4: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: about section — cyan eyebrows, chips, KPI cards"
```

---

### Task 8: Experience — timeline cyberpunk

**Files:**
- Modify: `portfolio-mockup.html` (bloque `/* ─── EXPERIENCE ────────────────────────── */`)

- [ ] **Step 1: Actualizar estilos de la timeline**

Localizar el bloque `/* ─── EXPERIENCE ────────────────────────── */` y reemplazar todos sus estilos por:
```css
/* ─── EXPERIENCE ────────────────────────── */
.tl-wrap { margin-top: 3rem; position: relative; }
.tl-wrap::before {
  content: '';
  position: absolute; left: 0; top: 8px; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--cyan), transparent);
}

.tl-item { position: relative; padding-left: 2.5rem; margin-bottom: 2rem; }

.tl-dot {
  position: absolute; left: -5px; top: 8px;
  width: 11px; height: 11px; border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 0 3px rgba(0,200,255,0.15), 0 0 14px rgba(0,200,255,0.5);
}

.tl-card {
  background: var(--bg-1); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.5rem 1.75rem;
  transition: border-color .3s, transform .3s;
}
.tl-card:hover { border-color: var(--border-cyan); transform: translateX(6px); }

.tl-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 1rem; flex-wrap: wrap; margin-bottom: 0.75rem;
}
.tl-role {
  font-size: 1.05rem; font-weight: 700; color: var(--text);
}
.tl-badge {
  font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--cyan);
  background: var(--cyan-dim); border: 1px solid var(--border-cyan);
  padding: 3px 10px; border-radius: 99px; white-space: nowrap;
  font-family: 'Share Tech Mono', monospace;
}
.tl-company { font-size: 0.85rem; color: var(--cyan-light); margin-bottom: 0.75rem; font-weight: 500; }
.tl-list { padding-left: 1.1rem; }
.tl-list li { font-size: 0.85rem; color: var(--muted); line-height: 1.7; margin-bottom: 3px; }
```

- [ ] **Step 2: Verificar visualmente**

La línea vertical del timeline debe ser cyan con degradado. Los puntos deben tener halo cyan brillante. Los badges de fecha deben ser monospace cyan. Al hacer hover en una card debe desplazarse 6px a la derecha.

- [ ] **Step 3: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: experience timeline — cyan glow dots, mono badges"
```

---

### Task 9: Education y Skills

**Files:**
- Modify: `portfolio-mockup.html` (bloques `/* ─── EDUCATION */` y `/* ─── SKILLS */`)

- [ ] **Step 1: Actualizar estilos de education**

Localizar `/* ─── EDUCATION ─────────────────────────── */` y reemplazar los estilos `.edu-card`, `.edu-icon`, `.edu-inst`, `.edu-year` por:
```css
.edu-grid { display: grid; gap: 0.875rem; margin-top: 3rem; }
.edu-card {
  display: flex; align-items: center; gap: 1.25rem;
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.25rem 1.5rem;
  transition: border-color .3s;
}
.edu-card:hover { border-color: var(--border-cyan); }
.edu-icon {
  width: 44px; height: 44px; border-radius: 10px; flex-shrink: 0;
  background: var(--cyan-dim); border: 1px solid var(--border-cyan);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
}
.edu-body { flex: 1; }
.edu-degree { font-size: 0.92rem; font-weight: 600; }
.edu-inst { font-size: 0.78rem; color: var(--cyan-light); margin-top: 2px; }
.edu-year {
  font-size: 0.72rem; font-weight: 600; color: var(--muted);
  background: rgba(0,200,255,0.04); border: 1px solid var(--border);
  padding: 4px 10px; border-radius: 99px; white-space: nowrap;
  font-family: 'Share Tech Mono', monospace;
}
```

- [ ] **Step 2: Actualizar estilos de skills**

Localizar `/* ─── SKILLS ────────────────────────────── */` y reemplazar los estilos de `.skill-fill`, `.skill-pct`, `.tag-item` por:
```css
.skills-layout {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 2.5rem; margin-top: 3rem;
}

.skills-block-title {
  font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--muted); margin-bottom: 1.25rem;
  font-family: 'Share Tech Mono', monospace;
}

.skill-row { margin-bottom: 1.1rem; }
.skill-meta {
  display: flex; justify-content: space-between;
  font-size: 0.84rem; font-weight: 500; margin-bottom: 7px;
}
.skill-pct {
  font-size: 0.72rem; color: var(--cyan); font-weight: 600;
  font-family: 'Share Tech Mono', monospace;
}
.skill-track {
  height: 4px; background: rgba(0,200,255,0.08);
  border-radius: 99px; overflow: hidden;
}
.skill-fill {
  height: 100%; border-radius: 99px;
  background: linear-gradient(90deg, var(--cyan), var(--cyan-light));
  transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
}

.tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.tag-item {
  font-size: 0.78rem; font-weight: 500;
  padding: 6px 14px; border-radius: 99px;
  border: 1px solid var(--border);
  color: var(--muted);
  transition: border-color .2s, color .2s, background .2s;
  cursor: default;
}
.tag-item:hover {
  border-color: var(--border-cyan);
  color: var(--cyan-light);
  background: var(--cyan-dim);
}
```

- [ ] **Step 3: Verificar visualmente**

Las barras de habilidades deben ser cyan con degradado a cyan-light. Los íconos de educación deben tener fondo cyan-dim. Hacer scroll hasta Skills y verificar que las barras se animan con cyan al entrar en viewport.

- [ ] **Step 4: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: education and skills — cyan bars, mono percentages"
```

---

### Task 10: Strengths, Contact y Footer

**Files:**
- Modify: `portfolio-mockup.html` (bloques `/* ─── STRENGTHS */`, `/* ─── CONTACT */`, `/* ─── FOOTER */`)

- [ ] **Step 1: Actualizar estilos de Strengths**

Localizar `/* ─── STRENGTHS ─────────────────────────── */` y reemplazar `.str-card` y `.str-card:hover`:
```css
#strengths { background: var(--bg-1); }

.str-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 1rem; margin-top: 3rem;
}
.str-card {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.5rem 1.25rem;
  text-align: center;
  transition: border-color .3s, transform .3s, box-shadow .3s;
}
.str-card:hover {
  border-color: var(--border-cyan);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,200,255,0.1);
}
.str-icon {
  font-size: 1.75rem; margin-bottom: 0.6rem; display: block;
  filter: drop-shadow(0 0 6px rgba(0,200,255,0.3));
}
.str-name { font-size: 0.82rem; font-weight: 600; color: var(--text); line-height: 1.3; }
```

- [ ] **Step 2: Actualizar estilos de Contact**

Localizar `/* ─── CONTACT ───────────────────────────── */` y reemplazar los estilos `.contact-wrap`, `.contact-link`:
```css
.contact-wrap {
  max-width: 680px; margin: 3rem auto 0;
  background: linear-gradient(135deg, var(--bg-1), var(--bg-2));
  border: 1px solid var(--border-cyan);
  border-radius: var(--radius-lg); padding: 3rem 2.5rem;
  text-align: center; position: relative; overflow: hidden;
}
.contact-wrap::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at top, rgba(0,200,255,0.05), transparent 60%);
  pointer-events: none;
}
.contact-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem; font-weight: 700; margin-bottom: 0.75rem;
}
.contact-sub { color: var(--muted); font-size: 0.95rem; margin-bottom: 2rem; line-height: 1.7; }

.contact-items { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
.contact-link {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(0,200,255,0.04); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 11px 20px;
  text-decoration: none; color: var(--text); font-size: 0.85rem;
  transition: border-color .2s, background .2s;
  font-family: 'Share Tech Mono', monospace;
}
.contact-link:hover { border-color: var(--border-cyan); background: var(--cyan-dim); }
.contact-icon { font-size: 1rem; }
```

- [ ] **Step 3: Actualizar footer**

Localizar `/* ─── FOOTER ────────────────────────────── */` y reemplazar:
```css
footer {
  border-top: 1px solid var(--border-cyan);
  padding: 2rem;
  text-align: center; color: var(--muted-2); font-size: 0.78rem;
  position: relative; z-index: 1;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 0.06em;
}
footer span { color: var(--muted); }
```

- [ ] **Step 4: Verificar visualmente**

Las cards de Strengths deben tener sombra cyan al hover. El bloque de Contacto debe tener borde cyan, gradiente sutil interno y links en monospace. El footer debe tener borde superior cyan y fuente monospace.

- [ ] **Step 5: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: strengths, contact, footer — cyan reskin complete"
```

---

### Task 11: Sistema Parallax JS

**Files:**
- Modify: `portfolio-mockup.html` (bloque `<script>` al final del body)

- [ ] **Step 1: Agregar el script de parallax al bloque `<script>` existente**

Localizar el `<script>` al final del archivo. Después del cierre de la función `document.querySelectorAll('.reveal').forEach(...)` y antes de `</script>`, agregar:

```js
/* ─── PARALLAX ─── */
(function() {
  const layers = [
    { el: document.querySelector('.orb-1'),    speed: 0.12 },
    { el: document.querySelector('.orb-2'),    speed: 0.18 },
    { el: document.querySelector('.hero-pill'),speed: 0.28 },
    { el: document.querySelector('.hero-stats'),speed: 0.45 },
  ].filter(l => l.el);

  const hero = document.getElementById('hero');
  let ticking = false;

  function applyParallax() {
    const scrollY = window.scrollY;
    const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
    if (scrollY > heroBottom) { ticking = false; return; }

    layers.forEach(({ el, speed }) => {
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }, { passive: true });
})();
```

- [ ] **Step 2: Verificar el parallax visualmente**

Abrir el archivo en el navegador. Hacer scroll lento desde el hero. Verificar que:
- Los orbs (`.orb-1`, `.orb-2`) se mueven más lento que el resto del contenido
- El badge `.hero-pill` se desplaza ligeramente más lento que el texto principal
- Las estadísticas `.hero-stats` también tienen un pequeño retraso
- En las secciones inferiores (About, Experience, etc.) el efecto cesa completamente

- [ ] **Step 3: Verificar que el toggle ES/EN sigue funcionando**

Hacer clic en EN → todos los textos cambian al inglés. Clic en ES → vuelven al español. El parallax no interfiere.

- [ ] **Step 4: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: parallax depth layers — 4-layer scroll system"
```

---

### Task 12: Orbs — actualizar colores y añadir tercera orb

**Files:**
- Modify: `portfolio-mockup.html` (CSS bloque `/* ─── GLOW ORBS */` y HTML de los divs `.orb`)

- [ ] **Step 1: Actualizar estilos de los orbs**

Localizar `/* ─── GLOW ORBS ─────────────────────────── */` y reemplazar:
```css
.orb {
  position: fixed; border-radius: 50%; filter: blur(90px);
  pointer-events: none; z-index: 0;
  will-change: transform;
}
.orb-1 {
  width: 600px; height: 600px;
  top: -200px; right: -150px;
  background: radial-gradient(circle, rgba(0,200,255,0.10) 0%, transparent 70%);
}
.orb-2 {
  width: 500px; height: 500px;
  bottom: 20%; left: -200px;
  background: radial-gradient(circle, rgba(0,80,180,0.12) 0%, transparent 70%);
}
```

- [ ] **Step 2: Verificar visualmente**

Los halos de luz difusa en el hero deben ser cyan (no dorado). El orb superior derecho debe tener un tono cyan brillante, el inferior izquierdo un azul más profundo.

- [ ] **Step 3: Commit**

```bash
git add portfolio-mockup.html
git commit -m "feat: update glow orbs to cyan color scheme"
```

---

### Task 13: Responsive — verificar mobile

**Files:**
- Modify: `portfolio-mockup.html` (bloque `/* ─── RESPONSIVE ────────────────────────── */`)

- [ ] **Step 1: Actualizar breakpoint de 768px**

Localizar el bloque `@media (max-width: 768px)` y reemplazar por:
```css
@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .skills-layout { grid-template-columns: 1fr; }
  .hero-stats { flex-direction: column; border-radius: var(--radius); }
  .stat-item { border-right: none; border-bottom: 1px solid var(--border-cyan); }
  .stat-item:last-child { border-bottom: none; }
  .nav-links a { display: none; }
  .nav-links a.lang-container { display: flex; }
  .str-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
  .hero-name { font-size: clamp(2.2rem, 10vw, 3.5rem); }
}
```

- [ ] **Step 2: Verificar responsive en DevTools**

Abrir DevTools (F12) → modo móvil → iPhone SE (375px). Verificar:
- Los stats se apilan verticalmente con borde inferior cyan
- El nav solo muestra el toggle de idioma
- El nombre hero no desborda la pantalla

- [ ] **Step 3: Commit final**

```bash
git add portfolio-mockup.html
git commit -m "feat: responsive breakpoints updated for cyberpunk theme"
```

---

## Checklist de verificación final

Antes de dar la tarea por completada, revisar en el navegador:

- [ ] Fondo con grilla cyan sutil visible en toda la página
- [ ] Nav con monograma FF en cyan + glow, links en monospace
- [ ] Hero: nombre "Fuentes" en cyan con halo, scan-line bajando en loop
- [ ] Separador `//` en el rol del hero
- [ ] Stats en monospace cyan con text-shadow
- [ ] Eyebrows de sección con prefijo `//`
- [ ] KPI cards con borde superior cyan
- [ ] Timeline con dots cyan con halo y badges monospace
- [ ] Barras de skills en degradado cyan→cyan-light
- [ ] Parallax activo: los orbs se mueven más lento al scrollear en el hero
- [ ] Toggle ES/EN funcional en ambos sentidos
- [ ] Mobile: se ve correctamente en 375px
