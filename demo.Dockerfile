# Start with a basic image with Node.js
FROM node:8.12-alpine

# Install python 3
RUN apk add --update --no-cache python3

# Start up a simple Python HTTP server
CMD python3 -m http.server 8000
