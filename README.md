# Crypto Service TypeScript 🛡️

Uma aplicação demonstrativa desenvolvida com **NestJS**, **Prisma** e **SQLite**, concebida para ilustrar as melhores práticas na encriptação e decifração de dados sensíveis em tempo de execução (*runtime encryption*) antes da sua persistência na base de dados.

O objetivo principal deste projeto é servir como modelo arquitetural para a manipulação segura de dados críticos (como documentos de identificação e cartões de crédito), garantindo que as informações sensíveis nunca sejam gravadas em texto limpo (*plain text*).

---

## 🚀 Tecnologias Utilizadas

O ecossistema do projeto foi selecionado para garantir robustez, tipagem estática e facilidade de configuração local:

*   **[NestJS](https://nestjs.com)** – Framework progressivo em Node.js para a construção de aplicações escaláveis e eficientes.
*   **[Prisma ORM](https://prisma.io)** – ORM de última geração para Node.js e TypeScript, facilitando a modelação e migração de dados.
*   **[SQLite3](https://sqlite.org)** – Base de dados relacional leve executada localmente, ideal para ambientes de desenvolvimento rápidos e testes isolados.
*   **Node.js Crypto Module** – Módulo nativo do Node.js utilizado para implementar o algoritmo de criptografia simétrica `aes-256-ctr` com chaves derivadas por `scrypt`.

---

## 🔒 Arquitetura de Segurança

A aplicação implementa os seguintes conceitos de segurança da informação:
1.  **Algoritmo Avançado:** Utilização do `aes-256-ctr` para garantir uma cifragem simétrica rápida e segura.
2.  **Criptografia Dinâmica:** Geração de um Vetor de Inicialização (`IV`) único para cada operação de cifragem, prevenindo ataques de análise de padrões textuais.
3.  **Segurança em Camadas:** Os dados são cifrados na camada de serviço imediatamente antes de chegarem ao repositório do Prisma e decifrados em tempo de execução antes de serem retornados ao cliente.

---

## 📦 Configuração e Instalação

Siga os passos abaixo para clonar, configurar e executar o projeto no seu ambiente local.

### 1. Requisitos Prévios
Certifique-se de que tem o **Node.js** (versão 18 ou superior) e o **npm** instalados na sua máquina.

### 2. Instalar as Dependências
Instale todos os pacotes necessários definidos no `package.json`:
```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente
Crie um ficheiro `.env` na raiz do projeto e configure a string de conexão para o seu ficheiro SQLite local (ou valide se já existe):
```env
DATABASE_URL="file:./dev.db"
```

### 4. Preparar a Base de Dados (Prisma)
Execute as migrações para criar as tabelas necessárias no SQLite e, em seguida, gere o cliente do Prisma:
```bash
# Executa as migrações locais e aplica o schema
npx prisma migrate dev --name init

# Gera o Prisma Client com base no schema.prisma
npx prisma generate
```

---

## 🛠️ Execução da Aplicação

Após concluir a configuração da base de dados, pode iniciar o servidor em ambiente de desenvolvimento:

```bash
# Inicia a aplicação em modo de observação (watch mode)
npm run start:dev
```
O servidor será iniciado por padrão em `http://localhost:3000`.

---

## 🧪 Testes

O projeto vem configurado com testes unitários e de integração utilizando Jest para validar os fluxos de criptografia:

```bash
# Executa os testes unitários
npm run test

# Executa os testes de ponta a ponta (e2e)
npm run test:e2e
```

---

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).

---
Desenvolvido como um guia prático para segurança de dados em TypeScript por [Nessie2512](https://github.com/Nessie2512).
