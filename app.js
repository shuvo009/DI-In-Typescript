"use strict";
require('reflect-metadata');
var inversify_express_utils_1 = require('inversify-express-utils');
var inversify_1 = require('inversify');
var bodyParser = require('body-parser');
var types_1 = require('./constant/types');
var tags_1 = require('./constant/tags');
var HomeController_1 = require("./controllers/HomeController");
var HomeService_1 = require("./service/HomeService");
// load everything needed to the kernel
var kernel = new inversify_1.Kernel();
kernel.bind(types_1.default.HomeService).to(HomeService_1.HomeService);
kernel.bind(inversify_express_utils_1.TYPE.Controller).to(HomeController_1.HomeController).whenTargetNamed(tags_1.default.HomeController);
// start the server
var server = new inversify_express_utils_1.InversifyExpressServer(kernel);
server.setConfig(function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
var app = server.build();
app.listen(3000);
console.log('GetWay Server started on port 3000 :)');
//# sourceMappingURL=app.js.map