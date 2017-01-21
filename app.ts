import 'reflect-metadata';
import { interfaces, Controller, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Kernel } from 'inversify';
import * as bodyParser from 'body-parser';
import TYPES from './constant/types';
import TAGS from './constant/tags';
import {HomeController} from "./controllers/HomeController";
import {IHomeService} from "./interface/IHomeService";
import { HomeService } from "./service/HomeService"

// load everything needed to the kernel
let kernel = new Kernel();
kernel.bind<IHomeService>(TYPES.HomeService).to(HomeService);
kernel.bind<Controller>(TYPE.Controller).to(HomeController).whenTargetNamed(TAGS.HomeController);


// start the server
let server = new InversifyExpressServer(kernel);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);
console.log('GetWay Server started on port 3000 :)');