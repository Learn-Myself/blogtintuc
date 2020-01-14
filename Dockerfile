FROM node:10

RUN mkdir -p /nest
ADD . /nest

WORKDIR /nest

RUN ls -la

# RUN npm install
RUN npm i -g @nestjs/cli

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]