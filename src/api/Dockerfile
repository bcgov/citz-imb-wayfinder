FROM node:18.16.0

# Create api directory
WORKDIR /api

# Install app dependencies
# where available (npm@5+)
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

EXPOSE 3004
CMD ["npm", "run", "dev" ]
