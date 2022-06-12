<h1 align="center">Angular Boilerplate</h1>

<p align="center">
  <img src="https://img.icons8.com/ios-filled/150/000000/angularjs.png" alt="angular-logo" width="120px" height="120px"/>
  <br>
  <i>Angular starter for enterprise-grade front-end projects, built under a clean architecture 
    <br> that helps to scale and maintain a fast workflow.</i>
  <br>
</p>

<p align="center">
  <a href="https://angularboilerplate.vercel.app"><strong>https://angularboilerplate.vercel.app</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  ·
  <a href="https://github.com/juanmesa2097/angular-boilerplate/issues">Submit an Issue</a>
  <br>
  <br>
</p>
<hr>

## ⚗️ Features

- Lazy loading
- Standalone components
- Dark mode
- Vitest

## 🛠️ Make some initial tweaks

- Change pages routes:

  Go to `src/app/core/utils/router.utils.ts` to find all the registered routes inside a config object.

  For example, you could replace `sign-in` with `SignIn`, `login` or `iniciar_sesion`

- Change your TailwindCSS configuration:

  You can find the config file in the project root, then you can refer to https://tailwindcss.com/docs/configuration to learn how to make your own adjustments.

- Set a default theme (First time load)

  Go to `src\app\@core\services\theme\theme.config.ts` and change the following line of code

  from operating system preference

  ```ts
  export const DEFAULT_BASE_THEME = ThemeList.System;
  ```

  to light mode

  ```ts
  export const DEFAULT_BASE_THEME = ThemeList.Light;
  ```

  or dark mode

  ```ts
  export const DEFAULT_BASE_THEME = ThemeList.Dark;
  ```

## ⛩️ Project structure

```console
├───app
│   ├───@core
│   │   ├───directives
│   │   │   └───click-outside
│   │   ├───guards
│   │   ├───interceptors
│   │   ├───pipes
│   │   │   └───bytes
│   │   ├───services
│   │   │   ├───seo
│   │   │   └───theme
│   │   └───utils
│   ├───@shell
│   │   ├───ft
│   │   └───ui (layout components)
│   │       ├───footer
│   │       ├───header
│   │       ├───layout
│   │       └───not-found
│   ├───components (generic shared components)
│   └───pages
│       ├───auth
│       │   ├───pages
│       │   │   ├───forgot-password
│       │   │   ├───forgot-password-email-sent
│       │   │   ├───password-reset
│       │   │   ├───password-reset-failed
│       │   │   ├───password-reset-succeeded
│       │   │   ├───sign-in
│       │   │   └───sign-up
│       │   └───services
│       ├───dashboard
│       ├───home
│       ├───settings
│       │   └───pages
│       │       ├───account
│       │       ├───appearance
│       │       ├───billing
│       │       ├───blocked-users
│       │       ├───notifications
│       │       ├───security
│       │       └───security-log
│       └───user
│           └───pages
│               ├───my-profile
│               └───overview
├───assets
├───environments
└───theme
    ├───01-base
    ├───02-components
    └───03-utilities
```

## 🧙‍♂️ Commands

| Command | Description                      | NPM           | Yarn       | Pnpm       | Background command                           |
| ------- | -------------------------------- | ------------- | ---------- | ---------- | -------------------------------------------- |
| ng      | See available commands           | npm run ng    | yarn ng    | pnpm ng    | ng                                           |
| start   | Run your app in development mode | npm start     | yarn start | pnpm start | ng serve                                     |
| build   | Build your app for production    | npm run build | yarn build | pnpm build | ng build                                     |
| watch   | Run build when files change.     | npm run watch | yarn watch | pnpm watch | ng build --watch --configuration development |
| test    | Run your unit tests              | npm run test  | yarn test  | pnpm test  | ng test                                      |
| lint    | Use ESLint to lint your app      | npm run lint  | yarn lint  | pnpm lint  | ng lint                                      |
