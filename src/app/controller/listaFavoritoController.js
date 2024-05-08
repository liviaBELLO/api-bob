// Importa o modelo de Lista do diretório '../model/listaFavorito'
const Lista = require('../model/listaFavorito');

// Função assíncrona para salvar uma nova lista de favoritos
exports.saveLista = async (req, res) => {
  try {
    // Verifica se já existe uma lista com o mesmo código
    const existingLista = await Lista.findOne({ codigo: req.body.codigo });
    // Se existir, retorna um erro com status 400
    if (existingLista) {
      return res.status(400).json({ message: 'O código da lista já existe.' });
    }

    // Cria uma nova instância do modelo Lista com os dados recebidos da requisição
    const lista = new Lista({
      codigo: req.body.codigo,
      listaCard: req.body.listaCard,
    });

    // Tenta salvar a lista no banco de dados
    const saveLista = await lista.save();
    // Se a operação for bem sucedida, retorna a lista salva com status 200 (OK)
    res.status(200).json(saveLista);
  } catch (error) {
    // Se ocorrer um erro, retorna uma mensagem de erro com status 400 (Bad Request)
    res.status(400).json({ message: error.message });
  }
}
// Função assíncrona para obter todas as listas de favoritos
exports.getAllLista = async (req, res) => {
  try {
    // Tenta encontrar todas as listas no banco de dados
      const lista = await Lista.find();
      // Retorna as listas encontradas
      res.json(lista);
  } catch (error) {
    // Se ocorrer um erro, retorna uma mensagem de erro com status 500
      res.status(500).json({ message: error.message })
  }
}

// Função assíncrona para excluir uma lista de favoritos com base no ID fornecido
exports.deleteLista = async (req, res) => {
  try {
    // Obtém o ID da lista a ser excluída dos parâmetros da requisição
      const id = req.params.id;
      // Tenta encontrar e excluir a lista com o ID fornecido
      const lista = await Lista.findByIdAndDelete(id);
       // Se a lista for encontrada e excluída com sucesso, retorna uma mensagem de confirmação
      res.send(`A lista com id ${lista.id} foi excluída`)

  } catch (error) {
    // Se ocorrer um erro, retorna uma mensagem de erro com status 400 
      res.status(400).json({ message: error.message })
  }
}

// Função assíncrona para atualizar uma lista de favoritos com base no ID fornecido
exports.updateLista = async (req, res) => {
  try {
    // Obtém o ID da lista a ser atualizada dos parâmetros da requisição
      const id = req.params.id;
    // Obtém os dados atualizados da lista a partir do corpo da requisição
      const dados = req.body;
    // Tenta encontrar e atualizar a lista com o ID fornecido com os dados fornecidos
      const resultado = await Lista.findByIdAndUpdate(
          id, dados
      )
      // Se a lista for atualizada com sucesso, retorna uma mensagem de confirmação
      res.send(`A lista ${resultado.id} foi alterada com sucesso`);

  } catch (error) {
    // Se ocorrer um erro, retorna uma mensagem de erro com status 400 
      res.status(400).json({ message: error.message })
  }
}