import express from "express";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(express.json());


app.get("/ping", (req, res, next) => {
    
    res.send(`{
        "status": "OK",
        "status_code": 200  
    }`);
});

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());


app.use("/", express.static(__dirname + "/public"));

app.get("/",(req,res)=> {
    res.sendFile("./public/index.html", {root: __dirname });
});

app.use("/api",routes);


export default app;