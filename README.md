# Victor Martinez - Psicólogo Clínico

Sitio web profesional construido con React + Vite.

## Cómo correrlo

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Build para producción
npm run build
```

## Estructura del proyecto

```
src/
  components/
    Navbar.jsx       # Navegación + menú hamburguesa
    Navbar.css
    Hero.jsx         # Sección principal
    Hero.css
    Sections.jsx     # Especialidades, Proceso, Quote, Contacto, Footer
    Sections.css
  App.jsx
  main.jsx
  index.css          # Variables globales CSS
```

## Para deployar gratis

Arrastra la carpeta `dist/` (después de `npm run build`) a:
- **netlify.com/drop**
- **vercel.com**
