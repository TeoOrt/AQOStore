# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install app dependencies
RUN yarn install --production

# Copy the built React app to the working directory
COPY build/ ./

# Set the command to start the app
CMD ["yarn", "start"]
