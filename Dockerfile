FROM node:argon

ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies if changed
COPY package.json /usr/src/app/
RUN npm install --production

# Bundle app source
COPY . /usr/src/app

# Build assets
RUN make build-production

EXPOSE 8080
CMD [ "make", "start-production" ]
