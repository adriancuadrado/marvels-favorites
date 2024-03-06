# ZARA WEB CHALLENGE - Adrian Cuadrado

Puedes ver la aplicacióon desplegada en el siguiente enlace:  
https://zara-web-challenge-adrian-cuadrado.vercel.app/

No verás una barra roja como la que se muestra en el diseño del Figma cuando está cargando porque con el SSR de NextJS la pantalla que carga el usuario aparecerá directamente con los datos, asi que no tiene sentido mostrar una barra de cargando cuando los datos ya aparecen cargados.

Los personajes favoritos se almacenan en el localstorage del navegador, lo que significa que seguirán seleccionados tras recargar la pagina.

Cuando se pasa el raton por encima de una card en modo desktop, se muestra de color rojo la parte inferior de la card, y cuando el raton sale de la card se vuelve a mostrar negro. Este comportamiento no puede reproducirse de forma correcta en la version mobile porque no hay raton en este caso. Puedes ver que esto mismo sucede tambien en el ejemplo que provee MDN del uso de :hover en el CSS. Verás que no funciona del todo bien, como si se quedara todo el rato detectando :hover cuando el raton no está encima cuando lo pruebas en modo mobile. https://developer.mozilla.org/en-US/docs/Web/CSS/:hover

## Como ejecutar la aplicación

Primero debes acceder a https://developer.marvel.com/account para obtener las claves publica y privada que necesitas para ejecutar la aplicación. Tendrás que crearte una cuenta si no la tienes.

El siguiente paso es crear un archivo `.env.local` y editarlo para incluir las keys que debes obtener, tal y como se indica en el ficher `.env`:

```
NEXT_PUBLIC_KEY=<TU CLAVE PÚBLICA DE LA API DE MARVEL>
PRIVATE_KEY=<TU CLAVE PRIVADA DE LA API DE MARVEL>
```

Instala las dependencias:

```sh
npm install
```

Para ejecutar el proyecto en modo desarrollo:

```sh
npm run dev
```

Para ejecutar el proyecto en modo producción:

```sh
npm run build
npm run start
```

Para ejecutar los tests:

```sh
npm test
```

> El test de `layout.jsx` no se incluye porque no se considera buena practica testearlo

Para ejecutar el linter y comprobar la calidad del codigo:

```sh
npm run lint
```

> Por defecto NextJS incluye el plugin `eslint-plugin-jsx-a11y` para comprobar los problemas de accesibilidad que pudiera haber. Para comprobar que esta web es accesible, basta con ejecutar `npm run lint` y comprobar que no se muestran errores.

## Frameworks y librerias utilizados

- ReactJS
- NextJS
- Jest

## Estructura del proyecto

```
src/
├── api.js
├── app
│   ├── favicon.ico
│   ├── favorites
│   │   └── page.jsx
│   ├── global.css
│   ├── [id]
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── layout.jsx
│   ├── layout.module.css
│   ├── page.jsx
│   └── page.module.css
├── components
│   ├── Banner
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── Card
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── Comic
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── ComicCarousel
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── ExternalImage
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── Heart
│   │   ├── constants.js
│   │   ├── empty-heart.svg
│   │   ├── empty-thick-heart.svg
│   │   ├── full-heart.svg
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── HeartCounter
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── Logo
│   │   ├── index.jsx
│   │   └── logo.svg
│   ├── Results
│   │   ├── index.jsx
│   │   └── index.module.css
│   └── Search
│       ├── index.jsx
│       ├── index.module.css
│       └── magnifying-glass.svg
├── state
│   ├── characters
│   │   ├── Context.jsx
│   │   ├── Provider.jsx
│   │   └── reducer.js
│   └── favorites
│       ├── Context.jsx
│       ├── Provider.jsx
│       └── reducer.js
└── utils
    ├── formatters.js
    └── getServerSideQueryParams.js
```
