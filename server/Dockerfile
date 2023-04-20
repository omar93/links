# Specify the base image
FROM node:19-slim

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Expose the port used by the app
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
