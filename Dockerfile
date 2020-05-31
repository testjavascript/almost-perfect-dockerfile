FROM node:12-slim AS base
LABEL Description="Some desc"
WORKDIR "/app"
#ADD VERSION .

FROM base AS build
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM build AS prod
COPY --from=build /app/dist/ /app/dist/
RUN npm ci --production && npm cache clean --force
USER node
EXPOSE 3000
CMD node dist/index.js
EXPOSE 3000