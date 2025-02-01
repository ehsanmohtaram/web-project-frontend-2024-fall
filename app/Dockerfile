# Step 1: Use an official Node.js image as a base
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Install a web server (e.g., serve) to serve the build files
RUN npm install -g serve

# Step 8: Expose the port that the app will run on
EXPOSE 3000

# Step 9: Start the application using 'serve' to serve the build folder
CMD ["serve", "-s", "build", "-l", "3000"]
