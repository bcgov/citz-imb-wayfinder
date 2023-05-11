FROM node:18.16.0-alpine

RUN apk --update --no-cache add curl

# Create app directory
WORKDIR /frontend-pwa

# Install app dependencies
COPY . .

RUN npm install

EXPOSE 5173
CMD ["npm", "run", "dev"]
