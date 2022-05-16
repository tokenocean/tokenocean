FROM gcr.io/coinos-326717/github.com/tokenocean/server:base

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV NODE_OPTIONS --openssl-legacy-provider

WORKDIR /app

COPY . .
RUN pnpm install

CMD ["pnpm", "start"]
