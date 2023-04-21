# Specify the base image
FROM node:alpine

# Copy package.json and package-lock.json to the container
COPY package*.json ./

RUN rm -rf /src/node_modules
RUN rm -rf /src/package-lock.json

RUN apk --no-cache add curl

# Install app dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Expose the port used by the app
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]