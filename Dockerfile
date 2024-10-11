# Start from Ubuntu 22.04
FROM ubuntu:22.04

# Set maintainer label
LABEL maintainer="Dima Botezatu [dima@inovector.com]"

# Set working directory
WORKDIR /var/www/html

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=UTC

# Set timezone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install dependencies
RUN apt update --fix-missing && \
    apt install -y curl nginx supervisor zip unzip mysql-client cron vim ffmpeg software-properties-common && \
    add-apt-repository ppa:ondrej/php && \
    apt update && \
    apt install -y php8.2 php8.2-fpm php8.2-cli php8.2-mysql php8.2-gd php8.2-curl php8.2-bcmath \
    php8.2-mbstring php8.2-mysqli php8.2-redis php8.2-xml php8.2-zip php8.2-intl && \
    apt-get -y autoremove && \
    apt clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# COPY docker/configuration files
COPY docker/nginx/default.conf /etc/nginx/sites-available/default
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf

COPY docker/php.ini /etc/php/8.2/fpm/conf.d/99-app.ini

RUN mkdir -p /var/run/php

COPY docker/supervisord.conf /etc/supervisor/supervisord.conf

# Set up cron
COPY docker/crontab /etc/cron.d/mixpost_crontab
RUN chmod 0644 /etc/cron.d/mixpost_crontab && \
    crontab /etc/cron.d/mixpost_crontab && \
    touch /var/log/cron.log

# COPY docker/and set up scripts
COPY docker/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

COPY docker/wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    php -r "unlink('composer-setup.php');"

# Set Mixpost versions
ARG MIXPOST_APP_VERSION=^1.0
ARG MIXPOST_PACKAGE_VERSION=^1.2

# Install Mixpost
RUN echo "Download & Install Mixpost package v${MIXPOST_PACKAGE_VERSION}" && \
    rm -rf /var/www/html/* && \
    composer create-project "inovector/MixpostApp:${MIXPOST_APP_VERSION}" . && \
    composer require "inovector/mixpost:${MIXPOST_PACKAGE_VERSION}"

# COPY docker/.env file
COPY .env.example /var/www/html/.env
RUN rm /var/www/html/.env

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port
EXPOSE 80

# Set entrypoint
ENTRYPOINT ["start.sh"]