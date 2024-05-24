# Use an official Node.js runtime as the base image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built app from the previous stage to the NGINX web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file

# Expose port 80 to the outside world
EXPOSE 80

# Define the command to run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
