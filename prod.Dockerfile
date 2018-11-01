# Start with a basic image with Node.js
FROM node:8.12-alpine

# Install python 3
RUN apk add --update --no-cache python3

# Set where to run commands from
RUN mkdir -p /src/app
WORKDIR /src/app

# Copy code into directory
ADD . .

# Build web app into ./build
RUN yarn install --production
RUN yarn build

# Start up a simple Python HTTP server
WORKDIR /src/app/build
CMD python3 -m http.server 8000
