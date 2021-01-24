import { generate } from "rxjs";

import {Request, Response} from 'express';
import { COURSES } from './db-data';

export function getCourses(req: Request, res: Response) {

    setTimeout(() => {

        res.status(200).json({payload: Object.values(COURSES)});

    }, 500);

}
