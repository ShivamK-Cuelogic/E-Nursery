import crop from "./../components/crop";
import express from "express";

const router = express.Router();


router.use("/crop",crop);


export default router;
