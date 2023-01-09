<h1 align="center">Angular Boilerplate</h1>

<p align="center">
  <img src="https://img.icons8.com/ios-filled/150/000000/angularjs.png" alt="angular-logo" width="120px" height="120px"/>
  <br>
  <i>Lightweight & minimalistic Angular starter</i>
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
- OS/Light/Dark modes
- Strongly-typed storage
- TailwindCSS

## 🛠️ Tweaks

- TailwindCSS configuration:

  You can find the `tailwind.config.js` file in the project root, then you can refer to https://tailwindcss.com/docs/configuration to learn how to make your own adjustments.

- Set default theme (first time load)

  Go to `src\app\lib\constants.ts` and choose the default theme.

  OS preference

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'system' as const;
  ```

  Light mode

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'light' as const;
  ```

  Dark mode

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'dark' as const;
  ```

- Enable a new local/session storage item

  Go to `src\app\lib\utils\storage\storage.types.ts` and add a new item name in the `StorageObjectType` type and a new key value pair in the `StorageObjectMap` type.

  ![image](https://user-images.githubusercontent.com/64181348/173276010-a4b95a63-2fe0-4104-9b09-34eeea5f0025.png)

  After that, you can use the new item.
  ![image](https://user-images.githubusercontent.com/64181348/173276575-09322722-387d-4c20-95af-fa9915079e3a.png)

## ⛩️ Project structure

```console
├───app
│   ├───lib
│   │   ├───components
│   │   │   ├───footer
│   │   │   ├───layouts
│   │   │   │   └───layout-horizontal
│   │   │   ├───logo
│   │   │   └───navbar
│   │   ├───guards
│   │   ├───interceptors
│   │   ├───interfaces
│   │   ├───enums
│   │   ├───services
│   │   │   ├───auth
│   │   │   └───theme
│   │   └───utils
│   │       └───storage
│   └───pages
│       ├───auth
│       │   ├───login
│       │   └───register
│       ├───home
│       ├───profile
│       ├───screens
│       │   └───not-found
│       └───settings
│           ├───accessibility
│           ├───account
│           └───appearance
├───assets
├───environments
└───theme
    ├───01-base
    ├───02-components
    ├───03-utilities
    └───tailwindcss
```

## 🧙‍♂️ Commands

| Command       | Description                                                 | NPM              | Yarn          | PNPM          | Background command                              |
| ------------- | ----------------------------------------------------------- | ---------------- | ------------- | ------------- | ----------------------------------------------- |
| ng            | See available commands                                      | npm run ng       | yarn ng       | pnpm ng       | ng                                              |
| start         | Run app in development mode                                 | npm start        | yarn start    | pnpm start    | ng serve                                        |
| build         | Build app for production                                    | npm run build    | yarn build    | pnpm build    | ng build                                        |
| watch         | Run build when files change                                 | npm run watch    | yarn watch    | pnpm watch    | ng build --watch --configuration development    |
| test          | Run unit tests                                              | npm run test     | yarn test     | pnpm test     | ng test                                         |
| test:headless | Run unit tests with headless browser and without watch mode | npm run test:run | yarn test:run | pnpm test:run | ng test --watch=false --browsers ChromeHeadless |
| lint          | Lint code                                                   | npm run lint     | yarn lint     | pnpm lint     | ng lint                                         |
