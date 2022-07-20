import express from "express";
import HeroController from "./controllers/HeroController";
import fs from "fs"

const data = fs.readFileSync('herolist.json', 'utf8');

const router = express.Router();

// READ
router.get("/heroes",  HeroController.findAll)

router.get("/heroes/detail",  HeroController.findAllWhithDetail)

export {router};