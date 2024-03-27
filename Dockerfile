# Use a slim Node.js image for efficiency
FROM node:18.19-alpine

# Set working directory
WORKDIR /app

# Copy package.json first to cache dependencies
COPY package.json ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the Nuxt application
RUN yarn build

# Expose default Nuxt port (can be customized)
EXPOSE 3000

# Start the application
CMD [ "node", ".output/server/index.mjs" ]
