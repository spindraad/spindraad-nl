FROM node:20-bullseye-slim

ENV NODE_ENV=production

WORKDIR /spindraad-app
ADD . /app

RUN ls -la
RUN ls -la /app
RUN ls -la /app/node_modules

CMD ["npm", "start"]
