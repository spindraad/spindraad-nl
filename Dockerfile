FROM node:20-bullseye-slim

ENV NODE_ENV=production

WORKDIR /app
ADD . .

CMD ["npm", "start"]
