
# Dockerfile
# ---------------------------------------------------------------------------------------------
# Version 0.0.2 frontend with nginx and node - 241116
# ---------------------------------------------------------------------------------------------

# Use Debian 12 (Bookworm) as the base image
FROM arm64v8/debian:bookworm 

# If you wish you can install some basic utiliies / packages
# RUN apt-get update && \
#     apt-get install -y sudo wget curl iputils-ping net-tools lsof software-properties-common unzip p7zip-full bzip2 mc git && \
#     apt-get clean && \
#     rm -rf /var/lib/apt/lists/*


# Install Nginx and Node
RUN apt-get -y update && apt-get -y install nginx nodejs npm && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# configuration and startup index.html
# COPY /usr/share/nginx/html/index.html /usr/share/nginx/html/index.html.org
# COPY ./my-index.html /usr/share/nginx/html/index.html
#- COPY ./my-nginx.conf /etc/nginx/conf.d/default.conf
COPY ./my-default.conf /etc/nginx/sites-available/default


# EXPOSE 80

# *** Add a non-root user ***
# Do NOT create a user home directory and put the user inside the SUDO group 
# RUN useradd -M -p "$(openssl passwd -6 passw01)" debanos && usermod -aG sudo debanos	
# or
# Create a user WITH the default home directory and put the user inside the SUDO group 
# RUN useradd -rm -p "$(openssl passwd -6 passw01)" debanos && usermod -aG sudo debanos	


# Run the Nginx server and Node (Express) server
# CMD ["nginx", "-g", "daemon off;"]
CMD ["sh", "-c", "nginx -g 'daemon off;' & node /usr/share1/nginx/wwwroot/server/server.mjs"]


# Switch to user debanos
# USER debanos

# -----------------------------------------------------------------------------------
#
# Build the Dockerfile by running:
# docker build -t debian12gen_front .  
# or
# docker builder prune
# docker build --no-cache -t debian12gen_front .

# Create and start the container - we have defined the initial command via CMD, so we start the container without using /bin/bash
# docker run -it -d -v ~/DOCKER_SHARE1/debian12gen2/frontend:/usr/share1 -p 8000:80 --name front-nginx1 debian12gen_front


# Jump into the container shell
# docker exec -it debian12.7_gen_img2cont2 /bin/bash

# Change the root password (*** passwd is not a password! *** you will be asked to enter a new password!)
# docker exec -itu 0 front-nginx1 passwd




