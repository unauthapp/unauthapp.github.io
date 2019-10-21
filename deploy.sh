echo "Pull latest master"
git pull

echo "NPM Install"
npm i

echo "React build"
npm run build

echo "Backing up landing page"
docker cp unauth_nginx:/usr/share/nginx/html ~/html.bkp

echo "Remove current build"
docker exec -t unauth_nginx rm -rf /usr/share/nginx/html

echo "Move new build to docker"
docker cp build unauth_nginx:/usr/share/nginx/html

