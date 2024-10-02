## Sol Nascente - Back-end

Este é um projeto de back-end para um sistema fictício de um hotel-fazenda, desenvolvido em **Node.js**, utilizando o framework **Express** e o banco de dados **PostgreSQL**. O projeto faz uso do **Prisma** como ORM (Object-Relational Mapping) para interagir com o banco de dados.

## Arquitetura das Pastas

O projeto é organizado da seguinte forma:

- **src**: Pasta que contém o código fonte do projeto.
  - **index.ts**: Arquivo principal do projeto, responsável por iniciar o servidor Express.
  - **controllers**: Controladores que lidam com as requisições e respostas.
  - **models**: Modelos que definem a estrutura dos dados.
  - **repositories**: Repositórios que gerenciam a persistência dos dados.
  - **services**: Serviços que tratam a lógica de negócios.
  - **utils**: Funções utilitárias do projeto.
  - **scripts**: Scripts responsáveis por realizar tarefas específicas.
    - **seedDB.ts**: Script que popula o banco de dados com dados iniciais.
    - **resetDB.ts**: Script que reseta o banco de dados.
  - **prisma**: Pasta com as configurações do Prisma.
    - **schema.prisma**: Arquivo que define a estrutura do banco de dados.
- **dist**: Pasta que contém o código compilado do projeto.
- **node_modules**: Pasta que contém as dependências do projeto.
- **package.json**: Arquivo que define as dependências e scripts do projeto.

## Instalação

Para instalar o projeto, execute o seguinte comando:

```bash
npm run setup
```

Este comando irá instalar as dependências, gerar o banco de dados, e popular o banco de dados para testes.

## Configuração

O projeto utiliza variáveis de ambiente para configurar a conexão com o banco de dados e outras definições. Você deve criar um arquivo `.env` com as seguintes variáveis:

```bash
  PORT=<número> # Ex.: 4000, 3333, etc.
  DATABASE_URL="postgresql://<postgres_user>:<postgres_password>@localhost:<port:5432>/sol_nascente_dev?schema=public"
```

## Execução

Para executar o projeto, utilize o seguinte comando:

```bash
  npm run dev
```

Este comando irá iniciar o projeto como desenvolvedor, deverá aparecer no seu terminal o seguinte:

```bash
  > back-end@1.0.0 dev
  > npx nodemon ./src/index.ts

  [nodemon] 3.1.4
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: ts,json
  [nodemon] starting `ts-node ./src/index.ts`
  Server is running on port 4000
```

Após isto, o servidor estará online no endereço `http://localhost:4000` para receber requisições. Quaisquer alterações feitas e salvas irão reiniciar o servidor automaticamente. Para fechar o servidor, aperte `ctrl + c` no terminal.

## Comandos

O projeto inclui os seguintes comandos:

- npm run build: Compila o código TypeScript e executa as migrações do Prisma para deploy.
- npm run start: Inicia o servidor após o deploy.
- npm run dev: Inicia o servidor em modo de desenvolvimento.
- npm run setup: Instala as dependências, gera o banco de dados a partir das migrações do Prisma, e popula o banco de dados para testes.
- npm run reset-db: Reseta o banco de dados e executa as migrações do Prisma.

## Tecnologias

- Node.js
- Express
- PostgreSQL
- Prisma
- TypeScript
- Joi

## Contribuição

Contribuições são bem-vindas! Se você encontrar um bug ou tiver uma sugestão, por favor, abra uma issue ou envie um pull request.
