const Sequelize     = require('sequelize');
const usuario       = require('../models').user;
module.exports = {
 create2(req, res) {
    
    return usuario
        .create ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            email: req.body.email,
            dni: req.body.dni,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            state: req.body.state,
            town: req.body.town,
            type: req.body.type,
            password: req.body.password,
             
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
         console.log(req)
 },
   
 create(req, res) {
    return usuario
        .create ({
             username: req.params.username,
             status: req.params.status
           
             
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
 },
 list(_, res) {
     
     return usuario.findAll({})
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return usuario.findAll({
         where: {
             username: req.params.username,
         }
     })
     .then(usuario => res.status(200).send(usuario))
     .catch(error => res.status(400).send(error))
  },
};