const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // watch for incoming requests of moethod GET
  // to the route http://localhost:3050/api
  app.get('/api', DriversController.greeting);

  // create new driver
  app.post('/api/drivers', DriversController.create);

  // edit driver
  app.put('/api/drivers/:id', DriversController.edit);

  // delete driver
  app.delete('/api/drivers/:id', DriversController.delete);

  
  app.get('/api/drivers', DriversController.index);
};
