FROM --platform=linux/amd64 node:18-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Set the working directory
WORKDIR /app

# Add files and prune dev dependencies
ADD package.json package-lock.json .npmrc node_modules ./
RUN npm prune --omit=dev

# Add the rest of the files
ADD build public ./

# Start the app
CMD ["npm", "start"]
