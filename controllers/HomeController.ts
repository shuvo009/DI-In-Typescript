import { Controller, Get, Post } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { IHomeService } from "../interface/IHomeService"
import TYPES from '../constant/types';

@injectable()
@Controller('/home')
export class HomeController {
    private _homeService: IHomeService;

    constructor( @inject(TYPES.HomeService) private homeService: IHomeService) {
        this._homeService = homeService;
    }

    @Get('/data')
    public getData(req: any, res: any) {
        var data = this._homeService.getData();
        res.json({ data: data });
    }
}