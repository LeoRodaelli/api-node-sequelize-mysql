const database = require('../models')

class TurmaController {

    static async getAllTurmas(req, res) {
      try {
        const allTurmas = await database.Turmas.findAll();
        return res.status(200).json(allTurmas);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async getOneTurma(req, res) {
      const { id } = req.params;
      try {
          const oneTurma = await database.Turmas.findOne( { 
              where: {
                  id: Number(id)
              }
          })
          return res.status(200).json(oneTurma);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }

    static async createTurma(req, res) {
        const newTurma = req.body;
        try {
            const newPersonCreated = await database.Turmas.create(newTurma);
            return res.status(200).json(newPersonCreated);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateTurma(req, res) {
        const { id } = req.params;
        const newInfosTurma = req.body;
        try {
            await database.Turmas.update(newInfosTurma, { where: { id: Number(id) }});
            const updatedTurma = await database.Turmas.findOne( { where: {
                id: Number(id) }});
            return res.status(200).json(updatedTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy( { where: {id: Number(id) }});
            return res.status(200).json({ message: `id ${id} deleted` })

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;