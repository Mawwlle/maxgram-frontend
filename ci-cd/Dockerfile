FROM node:20.6.1-alpine as builder

WORKDIR /app

COPY package.json yarn.lock tsconfig.json /app/

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

ADD . /app/

RUN yarn build:webpack

FROM nginx:stable

ADD ./ci-cd/vhost.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/ /app/
