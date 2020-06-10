# syntax = docker/dockerfile:1.0-experimental

#✅ Prefer small images
FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
ARG SOME_SECRETY_KEY
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm install
COPY src tsconfig*.json ./
RUN npm run build

FROM build AS dev
EXPOSE 9229
CMD ["npm", "run", "start:dev"]

FROM build AS prod
EXPOSE 3000/tcp
COPY --from=build /usr/src/app/dist ./dist/
COPY --from=build /usr/src/app/package.json ./
RUN npm ci --production && npm cache clean --force
USER node
CMD ["node", "dist/index.js"]