FROM alpine:3.4
MAINTAINER Ryan Stanley <ryan.stanley@alum.cs.umass.edu>

# install dependencies
RUN apk --no-cache add \
    apache2 \
    mercurial \
    openjdk8-jre \
    py-pip && \
    pip install cheetah

COPY . /src
WORKDIR /src

# build and deploy
RUN ./dockerdeploy.sh /var/www/localhost/htdocs/
WORKDIR /var/www/localhost/htdocs/

# necessary to run apache in the foreground on alpine
# http://forum.alpinelinux.org/forum/general-discussion/cant-foreground-apache
RUN mkdir -p /run/apache2

ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-d .", "-DFOREGROUND"]
