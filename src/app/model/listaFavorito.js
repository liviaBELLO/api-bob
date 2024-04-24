const mongoose = require('mongoose');

// Define um esquema (schema) para as listas de favoritos
const listaFavorito = new mongoose.Schema({
    nome: {
        required: true,
        type: String
    },
    listaCard: {
        required: true,
        type: [String]}
    }, {
        // Define o nome da coleção no MongoDB como 'lista-favoritos' e desativa a inclusão versionKey
    collection: 'lista-favoritos', versionKey: false
})
// Exporta o modelo 'Lista', que utiliza o esquema 'listaFavorito' definido acima
module.exports = mongoose.model('Lista', listaFavorito)