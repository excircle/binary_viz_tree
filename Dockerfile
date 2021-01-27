FROM node:15.3.0-buster
RUN apt update -y
RUN apt install vim curl wget net-tools netcat git tree -y
RUN mkdir /code
WORKDIR /code