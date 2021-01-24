# Angular Boilerplate

Angular starter for enterprise-grade front-end projects, built under a clean architecture that helps to scale and maintain a fast workflow.

## ⚗️ Features

- Lazy loading.
- Smart and pure components pattern.
- Components types (e.g. component, page).
- Self-contained components and encapsulated modules.
- Auth scheme
- Settings scheme
- User scheme
- PWA
- i18n
- Dynamic titles and content meta tags.
- TailwindCSS + Autoprefixer + PurgeCSS setup.
- Dark mode and theme configuration.
- Scalable CSS architecture with [ITCSS](https://itcss.io/).
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) reports improved.
- Migration from TSLint to ESLint.
- Husky hooks

## 📄 Pages

- General
  - home
  - not-found
- Auth
  - sign-in
  - sign-up
  - forgot-password
  - forgot-password-email-sent
  - password-reset
  - password-reset-succeeded
  - password-reset-failed
- Settings
  - account
  - appearance
  - billing
  - blocked-Users
  - Notifications
  - security
  - security-log
- User
  - my-profile
  - overview
- Features
  - dashboard

## 🧱 Self-contained components

- breadcrumb
- footer
- header

## 📛 Custom directives

- click-outside (detects when the user clicks outside an element).

## 🧪 Custom pipes

- bytes (transforms a numeric value into bytes, KB, MB, GB, etc.).

## 🛠️ Customizing to your preference

- Change application title:

  Go to `src/index.html` and inside the `title` tag, replace "Angular Boilerplate" with your app name.

- Change paths of the pages:

  Go to `src/app/core/structs/path.enum.ts` to find all the registered routes in an enum file.

  For example, you could replace `sign-in` with `SignIn`, `login` or `iniciar_sesion`

- Change titles, descriptions, and robots of the pages:

  Every page has a `.route` file that contains an exported constant that holds the title, description and a robot's metatag that indicates if it can be indexed or followed by a web crawler.

- Change light and dark mode colors:

  Go to `src/css/01-settings/variables.scss` and tweak it to your preference.

- Change your TailwindCSS configuration:

  Go to `config/tailwind.config.js` and tweak it to your preference. You can refer to https://tailwindcss.com/docs/configuration to learn how to do it.

- Add new PostCSS plugins

  Go to `config/webpack-dev.config.js` for development and testing or to `config/webpack-prod.config.js` for production settings and add the new plugins inside the plugins array.

## ⛩️ Project structure

```console
├───app
│   ├───@components
│   │   ├───breadcrumb
│   │   ├───footer
│   │   └───header
│   ├───@containers
│   │   ├───home
│   │   └───not-found
│   ├───@core
│   │   ├───directives
│   │   │   └───click-outside
│   │   ├───guards
│   │   ├───interceptors
│   │   ├───pipes
│   │   │   └───bytes
│   │   ├───services
│   │   │   └───seo
│   │   ├───structs
│   │   └───utils
│   ├───+auth
│   │   └───pages
│   │       ├───forgot-password
│   │       ├───forgot-password-email-sent
│   │       ├───password-reset
│   │       ├───password-reset-failed
│   │       ├───password-reset-succeeded
│   │       ├───sign-in
│   │       └───sign-up
│   ├───+settings
│   │   └───pages
│   │       ├───account
│   │       ├───appearance
│   │       ├───billing
│   │       ├───blocked-users
│   │       ├───notifications
│   │       ├───security
│   │       └───security-log
│   ├───+user
│   │   └───pages
│   │       ├───my-profile
│   │       └───overview
│   └───features
|       └───dashboard
├───assets
├───css
│   ├───01-settings
│   ├───02-tools
│   ├───03-generic
│   ├───04-elements
│   ├───05-objects
│   ├───06-components
│   └───07-trumps
├───environments
├───locale
└───public
    └───icons
```

## 🧙‍♂️ Commands

| Command      | Description                                      | NPM                | Yarn            | Background command                                              |
| ------------ | ------------------------------------------------ | ------------------ | --------------- | --------------------------------------------------------------- |
| ng           | See available commands                           | npm run ng         | yarn ng         | ng                                                              |
| start        | Run your app in development mode                 | npm start          | yarn start      | ng serve                                                        |
| start:es     | Run your app in development mode in spanish      | npm run start:es   | yarn start:es   | ng serve -c=es --port 4201                                      |
| build        | Build your app                                   | npm run build      | yarn build      | ng build                                                        |
| build:prod   | Build your app ready for production              | npm run build:prod | yarn build:prod | ng build --prod --build-optimizer --aot --stats-json            |
| build:i18n   | Build your multilingual app ready for production | npm run build:i18n | yarn build:i18n | ng build --prod --build-optimizer --aot --stats-json --localize |
| test         | Run your unit tests                              | npm run test       | yarn test       | ng test                                                         |
| lint         | Use ESLint to lint your app                      | npm run lint       | yarn lint       | ng lint                                                         |
| e2e          | Run your e2e integration tests                   | npm run e2e        | yarn e2e        | ng e2e                                                          |
| i18n:extract | Extract i18n messages from i18n directives       | npm run extract    | yarn extract    | ng extract-i18n --output-path locale --ivy                      |
| analyze      | Open webpack-bundle-analyzer                     | npm run analyze    | yarn analyze    | webpack-bundle-analyzer dist/angular-boilerplate/stats.json     |
