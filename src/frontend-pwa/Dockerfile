##################
### BASE IMAGE ###
##################
FROM node:18.15.0-alpine AS base

# Directory used in container
WORKDIR /usr/app/

# Copy in files
# .dockerignore excludes node_modules
COPY . .

#################
### DEV IMAGE ###
#################
FROM base AS dev

# Node environment should be dev
ENV NODE_ENV=dev

WORKDIR /usr/app/

# Add curl for health check
RUN apk --update --no-cache add curl

# Install packages
RUN npm i 

# Expose the default port
EXPOSE 5173 

# Run dev environment
CMD ["npm", "run", "dev"]

#########################
### PROD IMAGE Part 1 ###
#########################
FROM base as prod-part1

# Set Node environment as prod
ENV NODE_ENV=prod

WORKDIR /usr/app

# Retrieve copied files from base
COPY --from=base /usr/app .

# Install packages, Node excludes dev dependancies
RUN npm i 

# Build the product
RUN npm run build

#########################
### PROD IMAGE Part 2 ###
#########################
FROM nginx:stable-alpine3.17-slim as prod

# Add curl for health check
RUN apk --update --no-cache add curl

# Copy built files and config file
COPY --from=prod-part1 /usr/app/dist /usr/share/nginx/html
COPY --from=prod-part1 /usr/app/nginx.conf /etc/nginx/nginx.conf

# Expose the default port
EXPOSE 5173 

# Run the Nginx server
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
