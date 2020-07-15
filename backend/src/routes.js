const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Get all Devs
routes.get("/devs", DevController.index);

// Post route to Add new Devs
routes.post("/devs", DevController.store);

// Put route to Edit Devs information
routes.put("/devs/:github_username", DevController.update);

// Delete route to Delete Devs from database
routes.delete("/devs/:github_username", DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;