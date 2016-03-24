# ng-docker
AngularJS Webpack Docker Starter

- git clone ...
- npm i
- npm run typings

The RxJS type definition from DefinitelyTyped does appear to be outdated.

Instead, use the type definition provided by the npm package.

- typings install --save --ambient npm:rx/ts/rx.all.d.ts

Remote VM

docker-machine ls

eval $(docker-machine env app)

#build
npm run build:prod && TAG=1.2.1 docker-compose build

#build
npm run build:prod && TAG=1.2.2 docker-compose build

#build
npm run build:prod && TAG=1.2.3 docker-compose build

#upgrade
TAG=1.2.1 docker-compose stop app && TAG=1.2.1 docker-compose rm -f app && TAG=1.2.2 docker-compose up -d

#rollback
TAG=1.2.2 docker-compose stop app && TAG=1.2.2 docker-compose rm -f app && TAG=1.2.1 docker-compose up -d

#upgrade
TAG=1.2.1 docker-compose stop app && TAG=1.2.1 docker-compose rm -f app && TAG=1.2.2 docker-compose up -d

#upgrade
TAG=1.2.2 docker-compose stop app && TAG=1.2.2 docker-compose rm -f app && TAG=1.2.3 docker-compose up -d

#rollback
TAG=1.2.3 docker-compose stop app && TAG=1.2.3 docker-compose rm -f app && TAG=1.2.1 docker-compose up -d

#down
TAG=1.2.1 docker-compose down
