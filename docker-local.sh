docker-compose -f docker-compose-local.yml down
docker-compose -f docker-compose-local.yml pull
docker-compose -f docker-compose-local.yml build
docker-compose -f docker-compose-local.yml up -d
docker-compose -f docker-compose-local.yml logs --follow
