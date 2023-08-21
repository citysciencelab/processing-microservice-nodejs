FROM node:16.13.2

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

ENV DEBUG=*

# Run the app
CMD [ "npm", "start" ]



