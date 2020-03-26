const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const SessionCOontroller = require('./controllers/SessionController');

const connection = require('./banco/conection');

const routes = express.Router();

routes.post('/sessions', SessionCOontroller.create);

routes.get('/ongs',  OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',  IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);



module.exports = routes;