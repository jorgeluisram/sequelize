const Sequelize     = require('sequelize');
const usuario       = require('../models').user;
module.exports = {
 create2(req, res) {
 
    return usuario
        .create ({
            firstName: req.body.firstName,
            lastName: req.body.lastName

             
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
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