# 💼 Lautaro Mejías — Portfolio Personal

Portfolio web personal de **Lautaro Mejías**, Desarrollador Web Junior y estudiante de la Tecnicatura Universitaria en Programación (UTN).

Un sitio moderno, responsive y con modo oscuro/claro, donde presento mi perfil, tecnologías, habilidades, formación, certificados y proyectos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-00e5ff?style=flat-square)
![No dependencias](https://img.shields.io/badge/Zero_Dependencies-0f172a?style=flat-square)

---

## ✨ Características

- **Hero con animación de gradiente** y llamadas a la acción (ver proyectos, contactar, descargar CV).
- **Modo oscuro / claro** con un solo clic, con persistencia visual adaptada por sección.
- **Animaciones al hacer scroll** (fade-in) y barras de habilidades animadas con `IntersectionObserver`.
- **Sección de certificados** con grilla responsive y **visor de imagen (lightbox)** al hacer clic.
- **Sección de proyectos** con tarjetas y links directos a despliegues en Vercel.
- **100% responsive**: adaptado a desktop, tablet y celular (menú hamburguesa en mobile).
- **Sin frameworks ni dependencias**: solo HTML + CSS + JavaScript vanilla.

## 🧭 Secciones

| Sección | Contenido |
|---|---|
| Inicio | Presentación, rol y botones de acción |
| Sobre mí | Perfil profesional y experiencia en ventas / atención al cliente |
| Tecnologías | HTML, CSS, JavaScript, React, MySQL, MongoDB, PostgreSQL, Python, Java, Backend |
| Nivel de habilidades | Barras animadas: HTML 100%, CSS 100%, JavaScript 100%, React 100%, MySQL 90%, Python 90%, Java 60%, MongoDB 60%, PostgreSQL 60% |
| Educación | Tecnicatura en Programación (UTN) + Cursos de Desarrollo Web (Coderhouse) |
| Certificados | Desarrollo Web, JavaScript, React, Backend I, Backend II, Backend III, Desarrollo con IA |
| Proyectos | VigilaSmart y EcoRiego GC (desplegados en Vercel) |
| Contacto | GitHub, LinkedIn, WhatsApp y email directo |

## 🚀 Proyectos destacados

### 📹 VigilaSmart
Página web de instalación de cámaras de seguridad.

🔗 **Demo:** https://vigila-smart.vercel.app/

### 🌱 EcoRiego GC
Página web de EcoRiego GC.

🔗 **Demo:** https://ecoriegogc.vercel.app/

## 🛠️ Tecnologías utilizadas

- **HTML5** — Estructura semántica y accesible.
- **CSS3** — Flexbox, Grid, animaciones, variables y media queries. Sin frameworks.
- **JavaScript (vanilla)** — Menú mobile, toggle de tema, animaciones por scroll y modal de certificados.
- **Google Fonts (Poppins)** — Tipografía principal.
- **Vercel** — Despliegue de los proyectos.

## 📁 Estructura del proyecto

```text
Portfolio/
├── index.html                  # Página principal
├── style.css                   # Estilos (temas, secciones, responsive)
├── script.js                   # Interactividad (menú, tema, animaciones, modal)
├── assets/
│   ├── Certificados/           # Imágenes de certificados
│   │   ├── Certificado Desarrollo Web.png
│   │   ├── Certificado JavaScript.png
│   │   ├── Certificado React.png
│   │   ├── Certificado Backend 1.png
│   │   ├── Certificado Backend 2.png
│   │   ├── Certificado Backend 3.png
│   │   └── Certificado Desarrollo con IA.png
│   └── Lautaro_Mejias_CV.docx  # CV descargable
└── README.md
```

## ▶️ Cómo verlo localmente

No requiere instalación ni build. Solo necesitás un navegador.

**Opción 1 — Doble clic:**
Abrí `index.html` en tu navegador.

**Opción 2 — Servidor local (recomendado):**

```bash
# Con Python
python -m http.server 5500

# Con Node
npx serve .
```

Luego abrí http://localhost:5500 en el navegador.

## ✏️ Cómo personalizarlo

### Agregar un certificado
1. Guardá la imagen en `assets/Certificados/`.
2. Agregá una tarjeta en la sección `#certificados` de `index.html`:
```html
<div class="certificate-card fade-in">
    <img
        src="assets/Certificados/Tu Certificado.png"
        alt="Certificado de ...">
    <h3>
        Título del curso
    </h3>
</div>
```
El modal y la animación funcionan automáticamente.

### Agregar un proyecto
Agregá una tarjeta en `.projects-grid` dentro de la sección `#proyectos`:
```html
<div class="project-card fade-in">
    <div class="project-icon">🚀</div>
    <h3>Nombre del proyecto</h3>
    <p>Descripción breve.</p>
    <a href="https://tu-demo.vercel.app/"
        class="btn btn-primary project-btn"
        target="_blank" rel="noopener">
        Ver página 🚀
    </a>
</div>
```

### Cambiar un nivel de habilidad
Editá el porcentaje y el `data-width` en la sección `#habilidades`:
```html
<span>Python</span>
<span>90%</span>
...
<div class="skill-progress" data-width="90"></div>
```

## 📬 Contacto

- 📧 **Email:** mejiaslauti@gmail.com
- 💻 **GitHub:** https://github.com/LautyM26
- 💼 **LinkedIn:** https://www.linkedin.com/in/lauti-mejias-4194a8339/
- 📱 **WhatsApp:** https://wa.me/542613404730

## 👨‍💻 Autor

**Lautaro Mejías** — Desarrollador Web Junior.

© 2026 Lautaro Mejías | Portfolio Personal.
