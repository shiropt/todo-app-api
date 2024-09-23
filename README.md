## DB の作成

- コンテナを起動
  $ docker-compose up

- コンテナに入る
  $ docker-compose exec db bash

- postgreSQL に接続

$ psql -U root

- DB を作成
  $ CREATE DATABASE todo_app_db;

- DBが作成されているかを確認
  $ \l

- migration
  $ npx prisma migrate dev
  $ yarn prisma:seed

- database reset
  $ yarn prisma:reset
