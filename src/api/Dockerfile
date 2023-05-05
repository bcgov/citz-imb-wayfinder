FROM node

# Create api directory
WORKDIR /usr/src/api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

RUN npm i typescript@5.0.4


# Bundle app source
COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/server.js" ]