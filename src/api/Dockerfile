FROM node:18.16.0-alpine

RUN apk --update --no-cache add curl

# Create api directory
WORKDIR /api

# Install app dependencies
# where available (npm@5+)
COPY . .

RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev" ]
