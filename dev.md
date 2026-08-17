# 1. Empurra a tabela "User" para a memória partilhada do SQLite
npx prisma db push

# 2. Reconstrói o Prisma Client com a nova estrutura v7
npx prisma generate
