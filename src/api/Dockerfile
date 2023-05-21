FROM node:18.15.0-alpine AS base

# Directory used in container
WORKDIR /usr/api/

# Copy everything
COPY . .

# Install TypeScript. Needed for build process.
RUN npm i -D typescript@5.0.4

# Compile to JavaScript build 
RUN npm run build


##################
### PROD IMAGE ###
##################
FROM node:18.15.0-alpine as prod
ENV NODE_ENV=production

# Add curl for health check
RUN apk --update --no-cache add curl

# Directory used in container
WORKDIR /usr/api/

# Install packages. Needed even for compiled build.
COPY package.json .
RUN npm i

# Copy compiled build from base
COPY --from=base /usr/api/dist .
# Copy swagger over too
COPY --from=base /usr/api/public ./public

CMD [ "node", "server.js" ]
