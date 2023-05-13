# ;-------------;
# ; Build stage ;
# ;-------------;
FROM node:20-alpine as builder

WORKDIR /app

RUN npm i -g pnpm

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
