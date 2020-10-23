# Angular Boilerplate

Angular starter for large front-end projects built under a clean architecture that helps to scale and maintain a fast workflow.

## Main features

- Angular components types (e.g. component, page).
- Smart and dumb components pattern.
- Lazy loading.
- Lazy loading - preload strategies.
- with dynamic titles and content meta tags.
- Global error handler.
- Generic type-safe HTTP service.
- Generic partial UI modules.
- Scalable CSS architecture with [ITCSS](https://itcss.io/).
- [Webpack bundler analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) ready to use.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) reports improved to the maximum.
- Authentication scheme based on roles, JWT interceptor, role guard, auth guard, and no-auth guard.
- PWA (Progressive web app).
- Offline first
- i18n - three sample languages (english, spanish, french, japanese).
- SEO good practices.
- Code quality and best practices on each language.

### Project structure

```
📁---app
  📁---@core
    📁---enums
    📁---guards
    📁---handlers
    📁---interceptors
    📁---interfaces
    📁---services
    🟥---core.module.ts

  📁---@ui
    📁---layout
      📁---components
        📁---footer
        📁---navbar
    🟥---layout.module.ts

    ➕---additional UI modules

  📁---features
    📁---_auth
      📁---components
      📁---pages
      📁---shared
      🟥---auth-routing.module.ts
      🟥---auth.module.ts

    📁---dashboard
      📁---components
      📁---pages
      📁---shared
      🟥---dashboard-routing.module.ts
      🟥---dashboard.module.ts

    ➕---additional feature modules

  📁---public
    📁---pages
      📁---home
      📁---internal-server-error
      📁---not-found
      ➕---additional public components
    🟥---public-routing.module.ts
    🟥---public.module.ts

📁---assets
  📁---animations
  📁---icons
  📁---css
    📁---01-settings
    📁---02-tools
    📁---04-elements
    📁---05-objects
    📁---06-components
    📁---07-trumps
    🗄️---styles.scss
  ➕---additional assets

📁---environments
  🗄️---environment.prod.ts
  🗄️---environment.ts
  ➕---additional environments
```

## Current page speed insights (Will be improved)

### Mobile

![Light house metrics](https://i.imgur.com/ppul95L.png)

### Desktop

![Light house metrics](https://imgur.com/eMCTu25.png)

If you want to check that out by yourself, you can do it [here](https://developers.google.com/speed/pagespeed/insights/?hl=es&url=https%3A%2F%2Fangularboilerplate.netlify.app%2Flogin%3FreturnUrl%3D%252F&tab=desktop)
