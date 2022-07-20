import {Request, Response} from "express";
import ApiDataService from "../services/ApiDataService";

class HeroController {

    async findAll( req: Request, res: Response){
        const heroList = await ApiDataService.getHeroList();
        return heroList.length > 0 ? res.status(200).json(JSON.parse(heroList)) : res.status(204).send()
    }

    async findAllWhithDetail( req: Request, res: Response){
        const heroDetailList = await ApiDataService.getHeroDetail();
        return heroDetailList.length > 0 ? res.status(200).json(JSON.parse(heroDetailList)) : res.status(204).send()
    }

    // async findOne( req: Request, res: Response){
    //     const { baseId } = req.params;
    //     const base : any = await BaseModel.findOne({
    //         where: {
    //             id: baseId
    //         }
    //     });
    //     return base ? res.status(200).json(base) : res.status(204).send()
    // }
}

export default new HeroController();