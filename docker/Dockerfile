FROM node:6.9.5-wheezy

RUN mkdir -p /nodejs/code
RUN cd /nodejs && npm install nodejieba
WORKDIR /nodejs/code
VOLUME /nodejs/code

CMD ["npm", "start"]
