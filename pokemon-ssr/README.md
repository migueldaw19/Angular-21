# IMPORTANTE

### El proyecto usa tailwing, como github no deja guardar el .postcssrc tienes que generarlo con el siguiente contenido

```bash

{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

## SEO Friendly

### En pages/about-page hay un ejemplo de uso de titles y metatags

## Skeleton loader

### En pages/pokemons tienes todo lo necesario para saber como monatar un skeleton

## Query parameters y dinamico

### En pages/pokemons-page está todo (puede ser complejo de entender pero si no está claro ir al curso en la clase 75)

## @let syntax

### En pages/pokemon-page

## Prerending

```bash
ng build
```

### una vez compilado para arrancarlo

```bash
npm run
```

### A partir de angular 20 para prerenderizar puede ocurrir que en paginas que dependa una consulta http de error. Para ello se usa app.routes.server.ts y se configuran aquellas rutas que dependan de ellas. 