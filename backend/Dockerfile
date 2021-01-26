# base image
FROM node:14.15

# set working directory in container
WORKDIR /app

# install node_modules
COPY package*.json ./
RUN npm install

# copy src code
COPY ./ ./

# ports
EXPOSE 5000

# start 
CMD [ "npm", "start" ]


# to build : docker build -t mern-be .
# to run : docker run -p 5000:5000 --name mern-be mern-be