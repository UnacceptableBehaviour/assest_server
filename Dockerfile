FROM node

RUN npm install --global http-server

WORKDIR /assest_server

# cors no HTTPS
#EXPOSE 8000
#ENTRYPOINT ["http-server","-p","8000","--cors"]

# http-server  --cors -S -C ./scratch/asCerts/server.crt -K ./scratch/asCerts/server.key
EXPOSE 8080
ENTRYPOINT ["http-server","--cors","-p","8080","-S","-C","./scratch/asCerts/server.crt","-K","./scratch/asCerts/server.key"]

# build with
# docker build . -t asset_server

# run with, add -d for detached mode
# docker run --name map_assets --mount type=bind,source="$(pwd)",target=/assest_server -p8080:8080 asset_server --rm
