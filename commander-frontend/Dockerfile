# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app/commander-frontend

# install app dependencies
COPY package*.json ./
RUN npm install --silent

# start app
CMD ["npm", "start"]