# Angular Boilerplate

Angular starter for enterprise-grade front-end projects built under a clean architecture that helps to scale and maintain a fast workflow.

## Main features

- Lazy loading.
- Smart and dumb components pattern.
- Components types (e.g. component, page).
- Dynamic titles and content meta tags.
- Global error handler.
- Generic type-safe HTTP service.
- Generic partial UI modules.
- Scalable CSS architecture with [ITCSS](https://itcss.io/).
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) reports improved.
- Authentication based on roles.
- PWA.
- i18n
- SEO good practices.

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
    📁---03-generic
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

## Current page speed insights

### Mobile

![Light house metrics](https://i.imgur.com/ppul95L.png)

### Desktop

![Light house metrics](https://imgur.com/eMCTu25.png)

If you want to check that out by yourself, you can do it [here](https://developers.google.com/speed/pagespeed/insights/?hl=es&url=https%3A%2F%2Fangularboilerplate.netlify.app%2Flogin%3FreturnUrl%3D%252F&tab=desktop)
