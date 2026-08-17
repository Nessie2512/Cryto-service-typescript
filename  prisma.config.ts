import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // Aponta para a tua string de conexão do arquivo .env
    url: process.env.DATABASE_URL, 
  },
});
