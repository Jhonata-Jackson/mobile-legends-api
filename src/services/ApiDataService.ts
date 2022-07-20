import axios from "axios";
import fs from "fs"

const baseHeroUrl = 'https://mapi.mobilelegends.com/hero/list'
const baseHeroDetailUrl = 'https://mapi.mobilelegends.com/hero/detail'

class ApiDataService {

    async getHeroList( ){

        // TODO - CRIAR CACHE PARE REQUESTS

        // const heroList = await (await axios.get(baseHeroUrl))?.data?.data;
        
        // if(heroList){
        //     fs.writeFile('heroList.json', JSON.stringify(heroList), function (err) {
        //         if (err) return console.log(err);
        //         console.log('>>>>> Generate Hero List <<<<<');
        //     });
        // }

        return fs.readFileSync('heroList.json', 'utf8');
    }

    async getHeroDetail( ){

        // TODO - CRIAR CACHE PARE REQUESTS

        // const heroList = await (await axios.get(baseHeroUrl))?.data?.data;
        // let herosWithDetail = []
        
        // if(heroList){
        //     herosWithDetail = heroList.map(async(hero: any) => {
        //         return await (await axios.get(`${baseHeroDetailUrl}?id=${hero.heroid}`)).data.data
        //     })
        // }

        // const total = await Promise.all(herosWithDetail)
        
        // fs.writeFile('heroDetailList.json', JSON.stringify(total), function (err) {
        //     if (err) return console.log(err);
        //     console.log('>>>>> Generate Detail List <<<<<');
        // });

        return fs.readFileSync('heroDetailList.json', 'utf8');
    }
}

export default new ApiDataService();