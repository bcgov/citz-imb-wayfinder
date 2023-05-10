FROM node:18.16.0

# Create app directory
WORKDIR /frontend-pwa

# Install app dependencies
COPY . .

RUN npm install

EXPOSE 5173
CMD ["npm", "run", "dev"]