// Importa o pacote dotenv para carregar variáveis de ambiente de um arquivo .env
require('dotenv').config();

var express = require('express')
const mongoose = require('mongoose');




// Obtém a string de conexão do MongoDB 
const mongoString = "mongodb+srv://emerson:admin123@api-bob.al8iezv.mongodb.net/?retryWrites=true&w=majority&appName=api-bob";
// Conecta-se ao banco de dados MongoDB utilizando a string de conexão fornecida
mongoose.connect(mongoString);
const database = mongoose.connection;

// Define um evento para lidar com erros de conexão com o banco de dados
database.on('error', (error) => {
    console.log(error)
});
// Define um evento para lidar com a conexão bem-sucedida ao banco de dados
database.once('connected', () => {
    console.log('Banco de dados conectado');
})

// Cria uma instância do aplicativo Express
const app = express()

// Habilita o uso de URL encoded e JSON para analisar as requisições HTTP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Importa os controladores responsáveis por lidar com as requisições relacionadas a cartões e listas favoritas
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// Define a porta em que o servidor irá escutar
var port = 8080;
// Importa as rotas definidas no arquivo routes.js
const routes = require('./routes/routes');

app.use(routes);
app.listen(port);

// Exibe uma mensagem indicando que o servidor está conectado e ouvindo na porta especificada
console.log('Conectado a porta' + " " + port);
