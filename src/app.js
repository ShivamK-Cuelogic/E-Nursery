import express from "express";
import cors from "cors";



const app = express();
app.use(cors());
app.use(express.json())


app.get("/ping", (req, res, next) => {
    
    res.send(`{
        "status": "OK",
        "status_code": 200  
    }`);
});


export default app;