/* Controllers */
const usuarioController = require('../controllers/user');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/user/create', usuarioController.create2);
   app.post('/api/user/:username/status/:status', usuarioController.create);
   app.get('/api/user/', usuarioController.list);
   app.get('/api/usuario/find/username/:username', usuarioController.find);
};