'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers : {
      Authorization: function (req, authOrSecDef, scopesOrApiKey, cb) {
          console.log(req);
          console.log(authOrSecDef);
          console.log(req.swagger.params);
          cb(null);
      }
  }
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // enable SwaggerUI
  app.use(swaggerExpress.runner.swaggerTools.swaggerUi());

  // enable oAuth2
  // app.use(swaggerExpress.runner.swaggerTools.swaggerSecurity({
  //   oauth2: function (req, def, scopes, callback) {
  //     // Do real stuff here
  //   }
  // }));
  //
  // // Validate Swagger requests
  // app.use(swaggerExpress.runner.swaggerTools.swaggerValidator({
  //   validateResponse: true
  // }));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
