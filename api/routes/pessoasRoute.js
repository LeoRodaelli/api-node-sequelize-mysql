const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()
router
    .get('/pessoas', PessoaController.getAllPeople)
    .get('/pessoas/:id', PessoaController.GetOnePerson)
    .post('/pessoas', PessoaController.createPerson)
    .put('/pessoas/:id', PessoaController.updatePerson)
    .delete('/pessoas/:id', PessoaController.deletePerson)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.GetOneMatricula)
    .post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula)
module.exports = router

