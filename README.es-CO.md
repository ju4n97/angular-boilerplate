<p align="center">
  <img src="https://api.iconify.design/logos:angular-icon.svg" alt="Angular brand" width="100" height="100"/>
</p>

<h1 align="center">Angular Boilerplate</h1>

<br>

<p align='center'>
  <a href="https://angularboilerplate.vercel.app/">Sitio en vivo (Demo)</a>
</p>

<br>

<p align='center'>
  <a href="https://github.com/juanmesa2097/angular-boilerplate/blob/main/README.md">English</a> |
  <strong>Español</strong> 
</p>

<br>

Este es un iniciador de Angular altamente imperativo diseñado para mantenerse al día con las últimas características y mejores prácticas de Angular. Proporciona las características mínimas necesarias para eliminar la sobrecarga innecesaria y mantener la flexibilidad y escalabilidad. El objetivo es mantener una base de código liviana mientras se proporciona un conjunto sólido de características. Este enfoque permite a otros desarrolladores elegir las tecnologías que desean utilizar, como bibliotecas de componentes de IU, gestión de estado, renderización del lado del servidor (SSR), etc. Al mantener el boilerplate flexible, los desarrolladores pueden personalizar fácilmente el código y adaptarlo a sus necesidades únicas del proyecto.

## ⚗️ Features

- [Angular 16](https://angular.io/docs)
- [PNPM](https://pnpm.io/), [esbuild](https://esbuild.github.io/)
- [Components independientes](https://angular.io/guide/standalone-components)
- [Señales](https://angular.io/guide/signals)
- [Carga diferida](https://angular.io/guide/lazy-loading-ngmodules)
- [PWA](https://angular.io/guide/service-worker-getting-started)
- [I18n](https://ngneat.github.io/transloco/)
- [TailwindCSS](https://tailwindcss.com/)
- Temas OS/Light/Dark
- Liviano, rápido y construído con tecnología de última generación.

## ✅ Listo para usar

### Marcos de IU

- [TailwindCSS](https://tailwindcss.com/)

### Íconos

- [Iconify](https://iconify.design) - usar íconos de cualquier conjunto de íconos [🔍Icônes](https://icones.netlify.app/).
- [@iconify/tailwind](https://docs.iconify.design/usage/css/tailwind/) - Íconos en CSS puro.

### Complementos

- <https://github.com/ngneat/transloco>
- <https://github.com/tailwindlabs/tailwindcss>
  - <https://github.com/tailwindlabs/tailwindcss-aspect-ratio>
  - <https://github.com/tailwindlabs/tailwindcss-forms>
  - <https://github.com/tailwindlabs/tailwindcss-typography>
  - <https://github.com/tailwindlabs/prettier-plugin-tailwindcss>
- <https://github.com/iconify/iconify>
  - <https://github.com/iconify/iconify/tree/main/plugins/tailwind>

## ⚙ Requisitos previos

- Node.js ([^16.14.0 || ^18.10.0](https://angular.io/guide/versions)): <https://nodejs.org/en/>
- PNPM: <https://pnpm.io/es/>
- Docker (opcional): <https://www.docker.com/>

## 🏹 Iniciar desarrollo

> **Nota:**
> Tiene tres opciones para comenzar un nuevo proyecto basado en esta plantilla:
>
> 1. Crear un nuevo repositorio de GitHub a partir de esta plantilla.
> 2. Clonar este repositorio para comenzar con un historial de git limpio.
> 3. Crear nuevo proyecto en StackBlitz.

### Utilizando plantilla de GitHub

[Crear un repositorio de esta plantilla en GitHub](https://github.com/juanmesa2097/angular-boilerplate/generate).

---

### Clonando el repositorio localmente

```sh
npx degit juanmesa2097/angular-boilerplate my-app && cd my-app && ./scripts/rename_project.sh my-app
```

### Instalar dependencias

```sh
pnpm install # run `pnpm install -g pnpm` if you don't have pnpm installed
```

### Ejecutar proyecto

```sh
pnpm start
```

---

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://analogjs.org/new)

## 📝 Checklist

Por favor revise esta lista de verificación y modifíquela según sea necesario para cumplir con los requisitos de su proyecto.

- [ ] Ejecute el script `./scripts/rename_project.sh` para renombrar el proyecto.
- [ ] Cambie el título en `src/index.html` y el favicon en `src/favicon.ico` para que coincidan con su proyecto.
- [ ] Decida si desea continuar utilizando [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) y [lint-staged](https://github.com/okonet/lint-staged) para su proyecto.
- [ ] Limpie el archivo README para proporcionar instrucciones claras sobre su proyecto.
- [ ] Modifique las páginas del proyecto para cumplir con sus requisitos específicos.

## 📦 Despliegue en Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/juanmesa2097/angular-boilerplate)

## 📦 Despliegue en Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/juanmesa2097/angular-boilerplate)

## 🐳 Docker

Crear una imagen del proyecto.

```sh
docker build -t angular-boilerplate:latest .
```

Ejecutar la imagen del proyecto.

```sh
docker run --rm -p 8080:80 -d angular-boilerplate:latest
```

## 🧙‍♂️ Comandos

| Comando         | Descripción                                                               | npm                     | yarn                     | pnpm                     |
| --------------- | ------------------------------------------------------------------------- | ----------------------- | ------------------------ | ------------------------ |
| `start`         | Inicia el servidor de desarrollo                                          | `npm start`             | `yarn start`             | `pnpm run start`         |
| `build`         | Compila el código de producción                                           | `npm run build`         | `yarn build`             | `pnpm run build`         |
| `watch`         | Compila el código de producción y lo vigila para detectar cambios         | `npm run watch`         | `yarn run watch`         | `pnpm run watch`         |
| `test`          | Ejecuta las pruebas unitarias                                             | `npm run test`          | `yarn run test`          | `pnpm run test`          |
| `test:headless` | Ejecuta las pruebas unitarias en modo sin cabeza                          | `npm run test:headless` | `yarn run test:headless` | `pnpm run test:headless` |
| `lint`          | Ejecuta el linter                                                         | `npm run lint`          | `yarn run lint`          | `pnpm run lint`          |
| `lint:fix`      | Ejecuta el linter y corrige cualquier error de lint                       | `npm run lint:fix`      | `yarn run lint:fix`      | `pnpm run lint:fix`      |
| `lint:staged`   | Ejecuta el linter en los archivos en cola                                 | `npm run lint:staged`   | `yarn run lint:staged`   | `pnpm run lint:staged`   |
| `stylelint`     | Ejecuta el linter de estilos                                              | `npm run stylelint`     | `yarn run stylelint`     | `pnpm run stylelint`     |
| `stylelint:fix` | Ejecuta el linter de estilos y corrige cualquier error de lint de estilos | `npm run stylelint:fix` | `yarn run stylelint:fix` | `pnpm run stylelint:fix` |
| `format`        | Formatea el código con Prettier                                           | `npm run format`        | `yarn run format`        | `pnpm run format`        |
