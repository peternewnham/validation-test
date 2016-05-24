FROM gcr.io/google_appengine/nodejs

# install node
RUN install_node v6.2.0

# copy application code
COPY . /app/

# install dependencies.
RUN npm --unsafe-perm install --production

EXPOSE 8080