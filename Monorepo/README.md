## IMPORTANTE

### El proyecto usa tailwing, como github no deja guardar el .postcssrc tienes que generarlo con el siguiente contenido

```bash

{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

# Creamos un proyecto nuevo para que sea monorepo

```bash
ng new apx-workspace --no-create-application 
```

## Se recomienda que el nombre de la libreria empiece por ngx- que es una indicación de que es compatible con Angular

## ng- no se puede poner porque está reservado para Angular y sus librerias

## Para generar nuestra libreria se pone el siguiente comando

```bash
ng generate library my-lib
```

# Comandos de utilidad

## Para hacer el build del proyecto en el monorepo

```bash
ng build my-lib --configuration development
```

## Para testing

```bash
ng test my-lib
```

## Para arrancar el linter para revisar errores y configuraciones

```bash
ng lint my-lib
```
### Comprueba la calidad del código del proyecto angular especificado. Utiliza TSLint como herramienta de linting predeterminada y usa la configuración predeterminada disponible en el archivo tslint.json. Las opciones son parámetros opcionale

## Para probar en el monorepo se tiene que crear como un componente de tipo aplicación

```bash
ng g application apx-testbed-app
```

# Para iniciarlo es muy similar a como arrancamos un proyecto de angular

```bash
ng serve apx-testbed-app
```

## A destacar que cualquier cambio que hagas en el apx-side-menu tienes que volver a hacer el build para que el testbed-menu 

# Publicar a npm

## Primero hay que logearse

```bash

npm login

```

## Para publicar el paquete. Recuerda cambiar la version del package.json del la carpeta dist

```bash
npm publish dist/apx-side-menu/
```

## Para descargar la ultima version de nuestro paquete

```bash

npm update apx-side-menu

```
