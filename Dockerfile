FROM node:8.15.0
ARG GIT_COMMIT
ENV GIT_COMMIT ${GIT_COMMIT}

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

# Increase security by running app as non-root user
ENV user react-london-app
RUN groupadd --system $user \
  && useradd --system --create-home --gid $user $user \
  && chown $user  --recursive .
USER $user

EXPOSE 8080
CMD [ "make", "start-production" ]
