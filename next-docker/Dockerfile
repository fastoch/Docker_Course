# set the latest Node.js version as the base image
FROM node
# set the working directory inside the container
WORKDIR /app
# copy the package.json and package-lock.json files to the container
COPY package*.json ./
# install the dependencies
RUN npm install
# copy the rest of the application code to the container
COPY . .
# expose port 3000 for the application to listen on
EXPOSE 3000
# start the application in development mode
CMD ["npm", "run", "dev"]