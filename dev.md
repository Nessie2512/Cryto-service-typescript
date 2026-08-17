# 1. Empurra a tabela "User" para a memória partilhada do SQLite
npx prisma db push

# 2. Reconstrói o Prisma Client com a nova estrutura v7
npx prisma generate

# Environment variables declared in this file are NOT automatically loaded by Prisma.
# Please add `import "dotenv/config";` to your `prisma.config.ts` file, or use the Prisma CLI with Bun
# to load environment variables from .env files: https://pris.ly/prisma-config-env-vars.

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"
DATABASE_URL="file:local.db?mode=memory&cache=shared"
