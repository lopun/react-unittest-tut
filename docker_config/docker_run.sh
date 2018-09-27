#!/bin/bash

cd ..

docker run -it --name react-unittest -p 18000:3000 -v ${pwd}:/home/app lopun/react-web-base:0.1

docker exec -it react-unittest /home/app/docker_config/start_up.sh