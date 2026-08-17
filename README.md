# Jesús de la Merced — Sacra Traditio

Landing page informativa de Jesús Nazareno de la Merced, Patrón Jurado de la Ciudad de Guatemala, custodiado en el Templo de Nuestra Señora de las Mercedes (zona 1, Ciudad de Guatemala).

La página presenta la historia de la imagen, su ficha técnica, las tradiciones y leyendas de los devotos, el itinerario procesional del Viernes Santo e información para la visita al templo.

## Secciones

- **Historia** — cronología desde la talla de 1654 (Mateo de Zúñiga) hasta el culto actual de la Asociación de Devotos (JDLM).
- **La imagen** — iconografía del Nazareno barroco guatemalteco.
- **Ficha técnica** — datos de la imagen, marchas oficiales y anda procesional.
- **Tradición y leyenda** — relatos transmitidos entre los fieles de la Merced.
- **Procesión** — recorrido del Viernes Santo con horarios de referencia.
- **Visítanos** — dirección del templo y enlace a su ubicación.

## Stack

- [Astro](https://astro.build) 7
- CSS vanilla por capas: tokens de diseño, reset, layouts, componentes (BEM en español) y features
- Tipografías auto-alojadas con @fontsource-variable: Playfair Display, Source Serif 4 y Montserrat

## Estructura

```text
/
├── public/
├── src
│   ├── components/     # Emblem, Navbar, Footer, Button, Chip, Divider, FactCard, Chronology
│   ├── layouts/        # Layout.astro (HTML base, fuentes y estilos)
│   ├── pages/          # index.astro (página única)
│   └── styles/
│       ├── base/       # tokens y reset
│       ├── layouts/    # contenedor y grid
│       ├── components/ # estilos BEM de componentes
│       └── features/   # hero, navegación, secciones, pie de página
└── package.json
```

## Comandos

| Comando        | Acción                                        |
| :------------- | :-------------------------------------------- |
| `pnpm dev`     | Servidor local de desarrollo en `localhost:4321` |
| `pnpm build`   | Genera el sitio estático en `./dist/`         |
| `pnpm preview` | Previsualiza el build localmente              |