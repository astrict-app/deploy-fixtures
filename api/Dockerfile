FROM alpine:3.21@sha256:87a4361f6c819618a6bafa2ed5228714cb0bb22195d2b49c95eb26799990128a
# RUN steps prove commands execute inside rootless BuildKit. Alpine's busybox
# has no httpd applet; busybox-extras does.
RUN apk add --no-cache busybox-extras \
    && mkdir -p /www/api \
    && echo "api ok" > /www/index.html \
    && cp /www/index.html /www/api/index.html
USER 1000
EXPOSE 8080
CMD ["busybox-extras", "httpd", "-f", "-v", "-p", "8080", "-h", "/www"]
