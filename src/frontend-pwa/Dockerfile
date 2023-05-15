##################
### BASE IMAGE ###
##################
FROM node:18.15.0-alpine AS base

# Directory used in container
WORKDIR /usr/frontend-pwa/

# Copy in files
# .dockerignore excludes node_modules
COPY . .

#################
### DEV IMAGE ###
#################
FROM base AS dev

# Node environment should be dev
ENV NODE_ENV=dev

WORKDIR /usr/frontend-pwa/

# Add curl for health check
RUN apk --update --no-cache add curl

# Install packages
RUN npm i 

# Expose the default port
EXPOSE 5173 

# Run dev environment
CMD ["npm", "run", "dev"]
