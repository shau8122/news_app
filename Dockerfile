











# Use the specified node image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json (and package-lock.json if available) to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy all files from current directory to the working directory in the container
COPY . .

# Build the next.js application
RUN npm run build

# Set the start command to run your app using the next.js start command
CMD ["npm", "run", "dev"]
