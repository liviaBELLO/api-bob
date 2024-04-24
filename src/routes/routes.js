const express = require('express');

// Importa os controladores responsáveis por lidar com as requisições relacionadas a cartões e listas favoritas
const cardController = require('../app/controller/cardController')
const listaFavoritoController = require("../app/controller/listaFavoritoController")

// Cria um objeto de roteador Express
const router = express.Router();

// Rotas para manipulação de cartões (personagens)

router.post('/personagem/adicionar', cardController.saveCard)

router.get('/personagens', cardController.getAllCards)

router.delete('/personagem/excluir/:id', cardController.deleteCard)


// Rotas para manipulação de listas favoritas
router.post('/lista-favorito/salvar', listaFavoritoController.saveLista)

router.get('/listas-favoritos', listaFavoritoController.getAllLista)

router.delete('/lista-favorito/deletar/:id', listaFavoritoController.deleteLista) 

router.patch('/lista-favorito/alterar/:id', listaFavoritoController.updateLista)


// Exporta o roteador para ser utilizado em outros arquivos
module.exports = router;