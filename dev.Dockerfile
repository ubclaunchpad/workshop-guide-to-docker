# Start with a basic image with Node.js
FROM node:8.12-alpine

# Set where to run commands from (mount code here!)
RUN mkdir -p /src/app
WORKDIR /src/app

# install dependencies and run app when container starts
CMD yarn install && yarn start
