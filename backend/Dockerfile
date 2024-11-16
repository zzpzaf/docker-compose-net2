
# Dockerfile
# Version 0.0.1 backend Dockerfile with JAVA OpenJDK version 17 from eclipse-temurin:17  - 240928
# ---------------------------------------------------------------------------------------------

FROM arm64v8/debian:bookworm

# Java Installation and related settings
ENV JAVA_HOME=/opt/java/openjdk
COPY --from=eclipse-temurin:17 $JAVA_HOME $JAVA_HOME
ENV PATH="${JAVA_HOME}/bin:${PATH}"

# Install Supervisor
RUN apt-get update && apt-get install -y supervisor && mkdir -p /var/log/supervisor

# Copy the supervisor configuration file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy the script that monitors and runs the most recent jar and make it executable
COPY run_jar.sh /usr/local/bin/run_jar.sh
RUN chmod +x /usr/local/bin/run_jar.sh

# Expose port 8080 to other containers within the same Docker network (no host mapping)
EXPOSE 8080  

# Keep the container running by tailing /dev/null
# CMD ["tail", "-f", "/dev/null"]

# Set the entrypoint to Supervisor
CMD ["/usr/bin/supervisord"]