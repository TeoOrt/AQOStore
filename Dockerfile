# Stage 1 - Build stage
FROM node:19-alpine as builder

WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --only=production

# Copy the rest of the application files
COPY . .

# Build the application
RUN yarn build

# Stage 2 - Production stage
FROM nginx:1.23.3-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build artifacts from the build stage
COPY --from=builder /app/build /usr/share/nginx/html

# Remove unnecessary files
RUN rm -rf /usr/share/nginx/html/*.map

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
