// Controller -> ficam os metodos para ser utilizados ao trabalhar com os dados
const database = require('../models')

class PessoaController {
    static async getAllPeople(req, res) {
        try {
            const allPeople = await database.Pessoas.findAll();
            return res.status(200).json(allPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async GetOnePerson(req, res) {
        const { id } = req.params;
        try {
            const onePerson = await database.Pessoas.findOne( { 
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(onePerson);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPerson(req, res) {
        const newPerson = req.body;
        try {
            const newPersonCreated = await database.Pessoas.create(newPerson);
            return res.status(200).json(newPersonCreated);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePerson(req, res) {
        const { id } = req.params;
        const newInfos = req.body;
        try {
            await database.Pessoas.update(newInfos, { where: { id: Number(id) }});
            const updatedPerson = await database.Pessoas.findOne( { where: {
                id: Number(id) }});
            return res.status(200).json(updatedPerson);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePerson(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy( { where: {id: Number(id) }});
            return res.status(200).json({ message: `id ${id} deleted` })

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async GetOneMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const oneMatricula = await database.Matriculas.findOne( { 
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(oneMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createMatricula(req, res) {
        const { estudanteId } = req.params;
        const newMatricula = { ...req.body, estudanteId: Number(estudanteId) }
        try {
            const newMatriculaCreated = await database.Matriculas.create(newMatricula);
            return res.status(200).json(newMatriculaCreated);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const newInfosMatricula = req.body;
        try {
            await database.Matriculas.update(newInfosMatricula, { 
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }});
            const updatedMatricula = await database.Matriculas.findOne( { where: {
                id: Number(matriculaId) }});
            return res.status(200).json(updatedMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy( { where: {id: Number(matriculaId) }});
            return res.status(200).json({ message: `id ${matriculaId} deleted` })

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;