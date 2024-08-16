FROM node:20-bullseye-slim

ENV NODE_ENV=production

WORKDIR /app
ADD . .

RUN ls -la
RUN ls -la /app
RUN ls -la /app/node_modules

CMD ["npm", "start"]
