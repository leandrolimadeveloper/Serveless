<h1 align="center">Aplicação Serverless</h1>
<p align="center">
    <a href="#sobre">Sobre |</a>
    <a href="#tecnologias">Tecnologias |</a>
    <a href="#instalacao">Instalação de dependências e uso</a>
</p>

## 💻 Sobre

O projeto tem como responsabilidade gerar um certificado para um usuário e a possibilidade de pesquisar a validade de um certificado.

## ✨ Tecnologias

-   [Node.js](https://nodejs.org/en/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Serverless Framework](serverless.com/)
-   [Puppeteer](https://github.com/puppeteer/puppeteer)
-   [Amazon Lambda](https://aws.amazon.com/pt/lambda/)

<h2 id="instalacao">🚀 Instalação e uso</h2>
> Este guia assume que você já tenha o Node.js instalado (https://nodejs.org/pt-br).

Clone o repositório e acesse-o.

```bash
$ git clone https://github.com/leandrolimadeveloper/Serverless
$ cd Serverless
```

### Para rodar localmente

-   Rode `yarn` para instalar as dependências
-   Rode `yarn dynamodb:install` para baixar o DynamoDB localmente
-   Rode `yarn dynamo:start` para iniciar o banco de dados em ambiente local
-   Rode, em outro terminal, o `yarn dev` para iniciar a aplicação em ambiente local

### Para fazer o deploy

-   Configurar as credenciais do usuário
-   Rode `yarn deploy` para subir o projeto para AWS Lambda
