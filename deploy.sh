git pull
docker compose down -v
docker compose -f docker-compose.prod.yml build
docker compose -f docker-compose.prod.yml up