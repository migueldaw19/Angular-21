# Plugin de traducción NGX Cookie Service

```bash
npm i ngx-cookie-service-ssr
```

## Si se usa este plugin hay que hacer una modificación en el server.ts modificando 

```bash

app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

```

## en

```bash
app.use((req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  console.log('Hola Mundo desde server.ts');
  const cookies = headers.cookie ?? ''; // lang=it;another=cookie
  const langCookie =
  cookies.split(';').find((cookie) => cookie.includes('lang')) ?? 'lang=en'; // lang=it

  const [, lang] = langCookie.split('=');
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});
```

## y en app.routes.server.ts poner lo siguiente

```bash
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];

```

## después de esto se usa el app.ts para recoger la cookie y el service permite el cambio de idioma

# Plugin de traducción NGX translate

```bash
npm i @ngx-translate/core

```

## Aqui está la guia de instalacion https://ngx-translate.org/getting-started/installation/

# Acerca de este plugin

## Recuerda crear los .json en public/assets/i18n sino crearas un bucle de errores

## Tambien hay que importar en cada componentente que quieras traducir con TranslatePipe, TranslateDirective

## recuerda añadir 'localhost', '127.0.0.1' en angular.json en allowedHosts sino el npm run no funcionara

# IMPORTANTE

### El proyecto usa tailwing, como github no deja guardar el .postcssrc tienes que generarlo con el siguiente contenido

```bash

{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

