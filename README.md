
# API Bob Esponja


## Descrição

API desenvolvida durante o curso técnico no SENAI.

## Stack utilizada



**Back-end:** Node, Express e MongoDB



## Rotas

### Personagens: 
#### Retorna todos os personagens 


```
  GET /personagens
```


##### Exemplo:
```
  [
    {
        "_id": "662f9048699a36303d04eec7",
        "imagem_url": "https://i.imgur.com/ZgEYW2y.png",
        "name": "Bob Esponja",
        "description": "Bob Esponja é uma esponja marinha bondosa, otimista, alegre, ingênua e amigável que mora na cidade submarina da Fenda do Biquíni"
    },
    {
        "_id": "662f9057699a36303d04eec9",
        "imagem_url": "https://i.imgur.com/qApYPq1.png",
        "name": "Patrick Estrela",
        "description": "Patrick Estrela é o melhor amigo de Bob Esponja. Ele é uma estrela do mar estúpida, mas bem-intencionada."
    },
    {
        "_id": "662f906a699a36303d04eecb",
        "imagem_url": "https://i.imgur.com/tPP1PNp.png",
        "name": "Lula Molusco",
        "description": "Lula Molusco é um polvo ranzinza, sempre de mal com tudo e com todos. Ele é o antipático vizinho do Bob."
    }
  ]
```

### Lista de favoritos: 

#### Retorna todas as listas de favoritos da API

```
  GET /lista-favoritos
``` 

#### Envia os dados para o banco de dados

```
  POST /lista-favorito/salvar
```

#### Altera parcialmente a lista de favorito pelo ID

```
  PATCH /lista-favorito/alterar/:id
```

#### Deleta uma lista de favorito pelo o ID

```
  DELETE /lista-favorito/deletar/:id
```


## Rodando localmente

Clone o projeto

```bash
  git clone: https://github.com/liviaBELLO/api-bob.git
```

Entre no diretório do projeto

```bash
  cd api-bob
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```



## Autores

- [Emerson](https://www.github.com/Emerson757)
- [Cauã](https://www.github.com/CauaSilvaChz)
- [Livia](https://www.github.com/liviaBELLO)
- [Leonardo](https://www.github.com/leoguims)

