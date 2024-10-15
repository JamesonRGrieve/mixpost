docker-compose -f docker-compose-nginx.yml down
docker-compose -f docker-compose-nginx.yml pull
docker-compose -f docker-compose-nginx.yml build
docker-compose -f docker-compose-nginx.yml up -d
docker-compose -f docker-compose-nginx.yml logs --follow
