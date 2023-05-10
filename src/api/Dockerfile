FROM node:18.16.0

# Create api directory
WORKDIR /api

# Install app dependencies
# where available (npm@5+)
COPY . .

RUN npm install

RUN apk --update --no-cache add curl

EXPOSE 3004
CMD ["npm", "run", "dev" ]
