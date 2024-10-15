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

# Install basic dependencies
RUN apt update --fix-missing && apt install -y curl zip unzip gpg software-properties-common

# Import the missing GPG keys
RUN gpg --keyserver keyserver.ubuntu.com --recv-keys 71DAEAAB4AD4CAB6 4F4EA0AAE5267A6C && \
    gpg --armor --export 71DAEAAB4AD4CAB6 4F4EA0AAE5267A6C | apt-key add -

# Add the Ondrej PHP PPA
RUN add-apt-repository -y ppa:ondrej/php

# Update and install PHP and other dependencies
RUN apt update && apt install -y supervisor mysql-client cron vim ffmpeg php8.2 php8.2-fpm php8.2-cli php8.2-mysql php8.2-gd \
    php8.2-curl php8.2-bcmath php8.2-mbstring php8.2-mysqli php8.2-redis php8.2-xml php8.2-zip php8.2-intl && \
    apt-get -y autoremove && apt clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# PHP
RUN mkdir -p /var/run/php
COPY docker/php.ini /etc/php/8.2/fpm/conf.d/99-app.ini

# Supervisor
COPY docker/supervisord.conf /etc/supervisor/supervisord.conf

# Cron
COPY docker/crontab /etc/cron.d/mixpost_crontab
RUN chmod 0644 /etc/cron.d/mixpost_crontab && \
    crontab /etc/cron.d/mixpost_crontab && \
    touch /var/log/cron.log

# COPY docker/and set up scripts
COPY docker/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    php -r "unlink('composer-setup.php');"

# Set Mixpost versions
ARG MIXPOST_APP_VERSION=^1.0
ARG MIXPOST_PACKAGE_VERSION=^1.2

# Install Laravel and Mixpost
RUN echo "Download & Install Mixpost package v${MIXPOST_PACKAGE_VERSION}" && \
    rm -rf /var/www/html/* && \
    composer create-project "inovector/MixpostApp:${MIXPOST_APP_VERSION}" . && \
    composer require "inovector/mixpost:${MIXPOST_PACKAGE_VERSION}"

RUN sed -i 's|^listen =.*|listen = 9000|' /etc/php/8.2/fpm/pool.d/www.conf && \
    echo "listen.owner = www-data" >> /etc/php/8.2/fpm/pool.d/www.conf && \
    echo "listen.group = www-data" >> /etc/php/8.2/fpm/pool.d/www.conf && \
    echo "listen.mode = 0660" >> /etc/php/8.2/fpm/pool.d/www.conf

# Set permissions
RUN chown -R www-data:www-data /var/www/html && chown -R www-data:www-data /var/run/php

# Set entrypoint
ENTRYPOINT ["/usr/local/bin/start.sh"]
