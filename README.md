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

## 6. Fase 2 — estado de las funciones de IA

### a) Video de saludo con tu voz clonada (ElevenLabs) — falta solo subir los archivos

El código ya está listo para mostrar el video real en cuanto los archivos
existan — no hace falta tocar nada más. Solo copia los 3 videos generados en
ElevenLabs Avatars a la carpeta `assets/video/` con **exactamente** estos
nombres:

```
assets/video/greeting-en.mp4
assets/video/greeting-es.mp4
assets/video/greeting-pt.mp4
```

Mientras un idioma no tenga su archivo, el círculo sigue mostrando "Coming
soon" automáticamente (no rompe nada). En cuanto detecta el archivo, muestra
el video con botón de play, y cambia solo según el idioma que el visitante
elija arriba en el menú.

### b) Agente conversacional (ElevenLabs Conversational AI) — ya está en vivo

Los 3 agentes (EN/ES/PT) están creados y conectados en la tarjeta "Book time
with me" de la sección de contacto — cada uno con tu voz clonada, su propio
saludo, y contexto sobre tu trayectoria. Cambiar el idioma del sitio cambia
automáticamente qué agente responde.

Los agentes guían la conversación hacia un Google Meet de 10 minutos usando
tu link de **Google Calendar → Appointment Schedules** (no usamos Cal.com:
el link nativo de Calendar ya crea el Meet automáticamente y era más simple
de conectar). El agente nunca deriva a WhatsApp para agendar — WhatsApp
queda solo para mensajes rápidos e informales, como pediste.

Para editar el "cerebro" del agente (qué sabe, cómo habla, el link que
comparte), entra a https://elevenlabs.io/app/conversational-ai y abre
"Jimmy Being — Website Assistant (EN/ES/PT)". Ver la sección 7 más abajo
para una guía de qué mirar ahí.

El botón "Email Me" y el de WhatsApp siguen funcionando igual, como
alternativas directas.

---

## 7. Cómo usar la plataforma de ElevenLabs Conversational AI (guía rápida)

Como pediste aprender a manejarla tú mismo, esto es lo importante a tener
en cuenta:

- **Cada agente es independiente.** Hay 3 agentes separados (uno por
  idioma), no uno solo con "modo idioma". Si cambias algo en el agente EN,
  no se refleja en ES ni PT — hay que repetir el cambio en cada uno.
- **Pestaña "Agent"**: ahí está el `System prompt` (las instrucciones que
  definen quién es Jimmy, qué sabe el agente, y cómo debe comportarse) y el
  `First message` (lo primero que dice al abrir el chat). Si quieres que el
  agente sepa algo nuevo de ti, o cambie de tono, es aquí.
- **Pestaña "Voice"**: el `Voice ID` debe ser tu voz clonada, y el `Model`
  debe ser `Flash v2.5` (o `Turbo v2.5`) para ES/PT, y `Flash v2` (o
  `Turbo v2`) está bien para EN — si mezclas mal esto da error de
  validación al guardar.
- **Pestaña "Widget"**: acá están los colores y el estilo visual del chat
  (ya configurados con tu paleta wine/sage/gold). Cuidado: si tocas algo
  acá y guardas, a veces el editor visual puede resetear otros campos que
  no se ven en esa pestaña — después de guardar, siempre vuelve a revisar
  las otras pestañas (Agent, Voice) para confirmar que nada cambió sin que
  lo notaras.
- **Widget embed / agent-id**: el código HTML de tu sitio ya inyecta el
  agente correcto según el idioma (`js/main.js`, función
  `updateAgentWidget`). Si alguna vez duplicas/creas un agente nuevo desde
  cero en ElevenLabs, el `agent-id` cambia y hay que actualizarlo ahí
  también.
- **Pruébalo en la plataforma primero**: cada agente tiene un botón de
  "Test" en el panel de ElevenLabs para conversar con él directo, sin tener
  que publicar el sitio — úsalo para revisar que el tono y las respuestas
  te convencen antes de probarlo en jimmybeing.com.
