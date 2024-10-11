#!/bin/sh

php artisan config:cache
php artisan cache:clear
php artisan route:cache

if [ ! -f /var/www/html/storage/logs/installed-do-not-delete ]; then
    # Wait for MySQL
    /usr/local/bin/wait-for-it.sh mysql:3306 -t 60

    php /var/www/html/artisan migrate --force

    php /var/www/html/artisan mixpost-auth:create --admin

    echo "Mixpost installation completed.\nThis file is intended to avoid repeated installation when the image is rebuilt or the container is started..\nDon't delete it!" >> /var/www/html/storage/logs/installed-do-not-delete
fi

service cron start

/usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf &

echo "Mixpost has started!"

tail -f /dev/null