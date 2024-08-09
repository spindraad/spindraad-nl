# base node image
FROM node:20-bullseye-slim AS base

# set for base and all layer that inherit from it
ENV NODE_ENV=production

# Install all node_modules, including dev dependencies
FROM base AS deps

WORKDIR /app

RUN --mount=type=secret,id=FONT_AWESOME_TOKEN \
    export FONT_AWESOME_TOKEN=$(cat /run/secrets/FONT_AWESOME_TOKEN) && \
    echo "//npm.fontawesome.com/:_authToken=${FONT_AWESOME_TOKEN}" > .npmrc \
    && echo "@fortawesome:registry=https://npm.fontawesome.com/" >> .npmrc \
    && echo "@awesome.me:registry=https://npm.fontawesome.com/" >> .npmrc

ADD package.json package-lock.json ./
RUN npm install --include=dev

# Setup production node_modules
FROM base AS production-deps

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json package-lock.json .npmrc ./
RUN npm prune --omit=dev

# Build the app
FROM base AS build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

RUN --mount=type=secret,id=SENDGRID_API_KEY \
    export SENDGRID_API_KEY=$(cat /run/secrets/SENDGRID_API_KEY)

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

CMD ["npm", "start"]
