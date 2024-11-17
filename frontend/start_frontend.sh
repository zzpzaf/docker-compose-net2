#!/bin/sh

# version 0.0.1 - 241117
# ----------------------------------------------------------------
# This is a bash script that starts up both the nginx daemon and 
# the node (express) server (via pm2) that handles Angular SSR requests 
# ----------------------------------------------------------------


# Start NGINX in the background
nginx -g 'daemon off;' &

# Start the Node.js server with PM2 using the config file
pm2 start /usr/share1/pm2.config.js

# Keep the shell script running
pm2 logs