# Jimmy Being — jimmybeing.com

Sitio web de marca personal de Jaime Pérez Modolo ("Jimmy"). Versión 1 (V1):
sitio completo en 3 idiomas (EN por defecto, ES y PT), con timeline
profesional y espacios reservados ("placeholders") para las funciones de IA
que se agregarán en la Fase 2 (video con tu voz clonada en ElevenLabs y
agente conversacional que agenda reuniones en tu Google Calendar).

Es un sitio 100% estático (HTML + CSS + JS, sin backend ni build), así que
es muy fácil y barato de hospedar.

**Diseño**: la paleta de colores y el ícono de la marca (arriba a la
izquierda del menú) están tomados directamente del logo "Jimmy Being" que
me compartiste (vino/burdeo `#5C2732`, salvia `#7FADA3`, dorado `#EFC868`).
Si el logo cambia, dime y actualizo la paleta.

---

## 1. Estructura de archivos

```
jimmybeing-site/
├── index.html          → toda la estructura de la página
├── css/style.css        → todos los estilos
├── js/translations.js   → TODO el contenido, en inglés/español/portugués
├── js/main.js            → lógica: idioma, timeline, modal de video
└── netlify.toml          → configuración de despliegue en Netlify
```

**Para editar textos, cargos, descripciones, etc: solo edita
`js/translations.js`.** Ahí está organizado por idioma (`en`, `es`, `pt`) y
cada uno tiene la misma estructura, así que si cambias algo en un idioma,
cámbialo también en los otros dos. Editar ese archivo actualiza el sitio
automáticamente — no hace falta tocar `index.html` para cambios de texto
(ver el detalle de cómo funciona esto en la sección "Cómo editar el sitio"
que te mandé por chat).

### Cómo agregar más posts de LinkedIn a un puesto

Cada entrada del timeline tiene un campo `linkedinPosts`, que es una
**lista** (puede tener 0, 1 o varios links):

```js
linkedinPosts: [
  { url: "https://www.linkedin.com/posts/...", title: "Texto opcional a mostrar" },
  { url: "https://lnkd.in/p/xxxxx", title: null },
],
```

- Si `title` tiene texto, ese texto se muestra como el link (entre
  comillas). Úsalo para citar una frase del post.
- Si `title` es `null`, se muestra un link genérico ("LinkedIn post 1",
  "LinkedIn post 2", etc.).
- Si la lista está vacía `[]`, se muestra el botón punteado "Add link"
  como antes.

### Pendiente / a confirmar

- **Sowl Kombuchas**: no pude acceder al contenido de Instagram
  (`instagram.com/sowl.cl`) porque la plataforma bloquea la lectura
  automática. Dejé una descripción genérica marcada con `TODO (please
  confirm/refine)` en `js/translations.js` (busca "Sowl" en los 3
  idiomas) — revísala y ajústala con el detalle real de la marca.
- Todo lo demás que me compartiste (LinkedIn e Instagram personales,
  posts de LinkedIn de Pop Estate y Buk, Instagram de KudozApp y Sowl,
  descripción de KudozApp) ya está integrado en el sitio.

---

## 2. Previsualizar el sitio en tu computador

No necesitas instalar nada especial. Dos opciones:

**Opción rápida:** doble clic en `index.html` y se abre en tu navegador.

**Opción recomendada** (evita problemas menores de caché/rutas): con Python
instalado, abre una terminal en la carpeta del sitio y ejecuta:

```
python3 -m http.server 8000
```

Y visita `http://localhost:8000` en tu navegador.

---

## 3. Cómo publicarlo en Netlify (gratis)

Netlify tiene un plan gratuito más que suficiente para este sitio.

### Opción A — "Arrastrar y soltar" (la más rápida, sin cuenta de GitHub)

1. Ve a **https://app.netlify.com/drop**
2. Inicia sesión o crea una cuenta gratis (con tu email o Google).
3. Arrastra la carpeta completa `jimmybeing-site` (o un .zip con su
   contenido) sobre el recuadro de la página.
4. En segundos tu sitio queda publicado en una URL tipo
   `random-name-123.netlify.app`. Ese es tu sitio en vivo.
5. Para poder actualizarlo después, en el panel del sitio ve a **Site
   configuration → General** y conviene luego conectar un repositorio Git
   (ver Opción B) o simplemente volver a arrastrar la carpeta actualizada.

### Opción B — Conectado a GitHub (recomendado a mediano plazo)

Esto te permite que cada vez que edites el código (tú o yo) y lo subas a
GitHub, el sitio se actualice solo.

1. Crea un repositorio en GitHub y sube el contenido de esta carpeta.
2. En Netlify: **Add new site → Import an existing project → GitHub** →
   selecciona el repositorio.
3. Build command: (dejar vacío) — Publish directory: `.`
4. Deploy. Cada `git push` republicará el sitio automáticamente.

---

## 4. Comprar el dominio jimmybeing.com

Aún no lo tienes registrado, así que estos son los pasos:

1. Ve a un registrador de dominios. Recomendados por simplicidad y precio:
   **Namecheap** (namecheap.com) o **Squarespace Domains**
   (domains.squarespace.com, ex Google Domains). También puedes comprarlo
   directo en Netlify (**Domains → Register a new domain**), lo que
   simplifica el paso 5.
2. Busca `jimmybeing.com` y complétalo con tu información de pago.
   (Considera también registrar `.cl` si te interesa el mercado chileno, y
   las variantes `.com.br` para Brasil dado que planeas contenido en
   portugués — opcional).
3. Compra el dominio (normalmente entre USD $10–15 al año para `.com`).

---

## 5. Conectar el dominio a Netlify

Una vez que tengas el dominio y el sitio publicado en Netlify:

1. En el panel de tu sitio en Netlify: **Domain settings → Add a domain** →
   escribe `jimmybeing.com` → Netlify te detecta si ya lo tienes en otro
   proveedor y te ofrece dos caminos:
   - **Usar los DNS de Netlify** (más simple): Netlify te da 2 "name
     servers" (ej. `dns1.p0X.nsone.net`) que debes copiar y pegar en la
     configuración de tu registrador (Namecheap/Squarespace → Domain →
     Nameservers → Custom). Esto le entrega a Netlify el control total del
     DNS del dominio.
   - **Mantener el DNS actual**: agregas manualmente en tu registrador un
     registro `A` apuntando a la IP de Netlify (`75.2.60.5`) y un `CNAME`
     para `www` apuntando a tu subdominio `algo.netlify.app`.
2. Espera la propagación del DNS (puede tardar entre 10 minutos y 24
   horas).
3. En Netlify, activa **HTTPS** (Netlify emite el certificado SSL gratis
   automáticamente con Let's Encrypt una vez que el DNS propague) y marca
   `www.jimmybeing.com` o `jimmybeing.com` como dominio principal según
   prefieras (recomiendo que uno redirija al otro, Netlify lo deja
   configurado con un clic en "Set as primary domain").

Cuando llegues a este paso y tengas dudas puntuales (ej. capturas de
pantalla del panel de tu registrador), puedes compartírmelas y te guío en
el momento.

---

## 6. Fase 2 — lo que falta para las funciones de IA

Estos dos módulos quedaron con espacios reservados en el sitio, listos para
integrarse cuando tengas las cuentas y credenciales:

### a) Video de saludo con tu voz clonada (ElevenLabs)

- Crea una cuenta en ElevenLabs y clona tu voz (necesitas ~1–3 minutos de
  audio tuyo, limpio, sin ruido de fondo).
- Genera el audio del guion de saludo en los 3 idiomas.
- Puedes usar ese audio solo, o combinarlo con un avatar/video tuyo
  (herramientas tipo HeyGen o Synthesia permiten "doblar" un video tuyo con
  el audio de ElevenLabs, sincronizando labios).
- Cuando tengas los 3 videos (`greeting-en.mp4`, `greeting-es.mp4`,
  `greeting-pt.mp4`), yo reemplazo el círculo "Coming soon" de la portada
  por un reproductor de video real que cambia según el idioma elegido —
  está marcado con un comentario `TODO` en `index.html` para ubicarlo
  rápido.

### b) Agente conversacional que agenda reuniones en tu Google Calendar

- Necesitas: una cuenta de ElevenLabs Conversational AI (o alternativa como
  un agente construido con la API de Claude) + credenciales de Google
  Calendar API (OAuth) conectadas a tu Gmail personal.
- El flujo típico: el agente conversa con el visitante → revisa tu
  disponibilidad vía Google Calendar API → propone horarios → crea el
  evento y envía la invitación.
- Cuando tengas esas cuentas/API keys listas, yo integro el widget del
  agente en la tarjeta "Book time with me" de la sección de contacto (ya
  está marcada con `TODO` en `index.html`).

No hace falta que hagas esto ahora — el sitio funciona perfectamente sin
ello: mientras tanto, el botón "Email Me" en la sección de contacto ya es
funcional y te llega directo al correo.
