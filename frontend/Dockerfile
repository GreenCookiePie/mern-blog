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
EXPOSE 3000

# start 
CMD [ "npm", "start" ]


# to build : docker build -t mern-fe .
# to run : docker run -p 5000:5000 --name mern-fe mern-fe