//Importa o modelo de Card do diretório '../model/cardsPersonagens'
const Card = require("../model/cardsPersonagens");

//Função para salvar um novo Card
//Criando uma nova instância do Card com os dados recebidos da requisição
exports.saveCard = async (req, res) => {
  const card = new Card({
    imagem_url: req.body.imagem_url,
    name: req.body.name,
    description: req.body.description,
  });

  // Tenta salvar um Card n BD e se a operação for bem sucedida, retorna o card salvo com status 200(Ok)
  //Se ocorrer um erro, retorna uma mensagem de erro com status 400(Bad Request)
  try {
    const saveCard = await card.save();
    res.status(200).json(saveCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//Função assincrona para obter todos os cards
exports.getAllCards = async (req, res) => {
  //Tenta encontrar todos os cards no banco de dados e irá retornar os cards encontrados
  //Se ocorrer um erro , retorna uma mensagem de erro com status 500(Internal Server Error)
  try {
    const card = await Card.find();
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Função assincrona para excluier um card com base no Id fornecido
exports.deleteCard = async (req, res) => {
  try {
    //Obtem o Id do card a ser excluido dos parârametros da requisição
    const id = req.params.id;
    //Tenta encontrar e excluir o card com Id fornecido
    const card = await Card.findByIdAndDelete(id);
    //Se o card for encontradio e excluido com sucesso, retorna uma mensagem "O card {nomeDoCard} foi excluido"
    res.send(`O card ${card.name} foi excluído`);
    //Se ocorrer um erro, retorna uma mensagem de erro com status 400
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
