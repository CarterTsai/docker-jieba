FROM node:6.10.0-alpine

MAINTAINER CarterTsai <hamming1@gmail.com>

RUN apk --update add --virtual build-dependencies \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv

RUN mkdir -p /nodejs/code
RUN cd /nodejs && npm install nodejieba
WORKDIR /nodejs/code
VOLUME /nodejs/code

RUN  rm -rf /var/cache/apk/* \
     && apk del build-dependencies

EXPOSE 3000

CMD ["npm", "start"]
