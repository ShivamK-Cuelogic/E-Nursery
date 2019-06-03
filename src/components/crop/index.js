import express from "express";
import cropController from "./CropController";

const router = express.Router();


router.get("/", cropController.getCrops);


export default router;