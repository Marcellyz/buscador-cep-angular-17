# Buscador de CEP 🏠✨

Este projeto foi desenvolvido utilizando Angular na versão 17.3.6. Trata-se de um site que realiza consulta de Código de Endereçamento Postal(CEP), ele foi feita uma chamada de API da ViaCep, um webservice gratuito de alto desempenho para consulta de Código de Endereçamento Postal (CEP) do Brasil. 
  
O objetivo do site é fornecer uma consulta interativa e didática do CEP.
## 📍Stack utilizada

<div> 
  
  <img align="inline_block" alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img align="inline_block" alt="saas" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
  <img align="inline_block" alt="angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  <img align="inline_block" alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── form/
│   │   └── header/
│   ├── models/
│   │   └── ViaCepResults.ts/
│   │   ├── page/
│   │   │   └── home/
│   │   └── services/
│   │   │   ├── via-cep-service.service.spec.ts
│   │   │   └── via-cep-service.service.ts
│   └── ... (demais diretórios e arquivos)
├── assets/
└── ... (demais diretórios e arquivos)
```

##  📋 Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em seu ambiente:

- Node.js (versão 18.x ou superior)
- npm (geralmente instalado junto com o Node.js)
- Angular CLI versão 15 (ferramenta do Angular para criar componentes, classes e etc.)

## 🔧 Instalação

Siga os passos abaixo para configurar o projeto em sua máquina local.
### 1. Clone o repositório

Clone este repositório usando o comando:

```bash
git clone https://github.com/Marcellyz/weather-app.git
```
### 2. Navegue até o diretório do projeto

```bash
cd buscador-cep-angular-17
````

### 3. Instale as dependências

Use o npm para instalar as dependências necessárias:

```bash
npm install
````
ou 
```bash
npm i 
````

### 4. Iniciar a aplicação localmente

Para rodar a aplicação localmente em um servidor de desenvolvimento, execute:

```bash
ng serve
```
Abra o navegador e acesse http://localhost:4200/ (o porto pode variar). A aplicação será recarregada automaticamente sempre que houver mudanças nos arquivos do projeto.

## ⚙️ Build

Para criar uma versão de produção otimizada do projeto, use o comando:

```bash
ng build
````
Os arquivos gerados estarão no diretório dist/. Você pode usar esses arquivos para hospedar a aplicação em um servidor web.

## 🖇️ Contribuição ❤️💡📝🤩

Contribuições são bem-vindas!❤️💡

Esse README pode ser ajustado de acordo com as necessidades específicas do seu projeto.

---
⌨️ com ❤️ por [Marcellyz](https://gist.github.com/Marcellyz) 😊
