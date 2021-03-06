FROM node:9-slim as scooter-app

ENV PORT 8080
EXPOSE 8080

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

# Bundle app source
COPY . .

# If you are building your code for production
# RUN npm install --only=production
RUN npm install

CMD [ "npm", "start" ]