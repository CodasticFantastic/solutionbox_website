#!/bin/sh
set -e

# Ustawienie prawidłowych właścicieli i uprawnień dla folderu uploads
mkdir -p /app/uploads /app/uploads/images /app/uploads/documents
chown -R node:node /app/uploads
chmod -R 777 /app/uploads

# Wykonaj migracje i seedowanie bazy danych
npx prisma migrate deploy
npx prisma db seed

# Uruchom aplikację
exec npm run start
