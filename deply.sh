set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:MariusSMA/vue-jewelry-website.git main:gh-pages

cd -