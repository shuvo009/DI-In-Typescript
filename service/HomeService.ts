import { Controller, Get, Post } from 'inversify-express-utils';
import { injectable, inject, tagged } from 'inversify';
import TYPES from '../constant/types';
import { IHomeService } from "../interface/IHomeService"

@injectable()
export class HomeService implements IHomeService {
    getData(): string {
        return 'I am from Home Service';
    }
}