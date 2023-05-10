FROM node:18.16.0

# Create app directory
WORKDIR /frontend-pwa

# Install app dependencies
COPY . .

RUN npm install

RUN apk --update --no-cache add curl

EXPOSE 5173
CMD ["npm", "run", "dev"]
