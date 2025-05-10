import {Request, Response} from 'express';

export const home = (req: Request, res: Response) => {
    // res.render('pages/page);
    res.send("Home no controller!")
}


export const dogs = (req: Request, res: Response) => {
    // res.render('pages/dogs);
}
export const cats = (req: Request, res: Response) => {
    // res.render('pages/cats);
}
export const fishs = (req: Request, res: Response) => {
    // res.render('pages/fishs);
}