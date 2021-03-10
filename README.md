<h1 align="center">
    🚀 NLW 4
</h1>

<p align="center">Aplicação Next Level Week 4ª Edição</p>

### 💻 Projeto

API para checar o NPS( Net Promoter Score ) de uma empresa.
O NPS ou Net Promoter Score é uma metodologia criada por Fred Reichheld em 2003.
Com o NPS, é possível mensurar o nível de lealdade e de satisfação dos seus clientes.
E, por isso, o NPS tem se tornado uma métrica tão importante na busca pelo sucesso do cliente. 



### ✅ Demonstração
![NPS API](https://github.com/satel61/nps-api-node/blob/main/nps-node.gif)

### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://yarnpkg.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 📗 Rodando a Aplicação

```bash
# Clone este repositório
$ git clone https://github.com/satel61/nps-api-node

# Instale as dependências
$ yarn

# Cria as tabelas no banco SQLITE
$ yarn typeorm migration:run 

# Execute a aplicação
$ yarn dev
```

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Sqlite
- Typescript
- Node.Js
- Express
- Insomnia