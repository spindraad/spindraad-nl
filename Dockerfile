FROM node:20-bullseye-slim

ENV NODE_ENV=production

WORKDIR /spindraad-app

ADD public /spindraad-app/public
ADD build /spindraad-app/build
ADD node_modules /spindraad-app/node_modules
ADD package.json /spindraad-app/package.json

CMD ["npm", "start"]
