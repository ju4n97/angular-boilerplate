FROM node:20-alpine as base

WORKDIR /app

# ;-------------;
# ; Build stage ;
# ;-------------;
FROM base as builder

RUN npm i -g pnpm

COPY .npmrc package.json pnpm-lock.yaml ./
COPY . .

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile && \
    pnpm build

# ;---------------;
# ; Runtime stage ;
# ;---------------;
FROM nginx:stable-alpine as runtime

COPY --from=builder /app/dist/angular-boilerplate /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
