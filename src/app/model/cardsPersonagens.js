const mongoose = require('mongoose');

// Define um esquema (schema) para os cards de personagens
const cardPersonagem = new mongoose.Schema({
    imagem_url: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String}
}, {
    // Define o nome da coleção no MongoDB como 'personagens' e desativa a inclusão do campo versionKey
    collection: 'personagens', versionKey: false
})
// Exporta o modelo 'Card', que utiliza o esquema 'cardPersonagem' definido acima
module.exports = mongoose.model('Card', cardPersonagem)