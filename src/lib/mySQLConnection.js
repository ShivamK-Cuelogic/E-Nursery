import mysql from "mysql";
import config from "./../../config.json";

const ENABLE_MYSQL_POOL = 1;

let connectObject = {
    connectionLimit: 1000,
    host: config.MYSQL.HOST,
    user: config.MYSQL.USER,
    password: config.MYSQL.PASSWORD,
    database: config.MYSQL.DB,
    port: config.MYSQL.PORT || 3306,
    multipleStatements: true,
    timezone: "utc"
};
let mySqlConnection;
if (parseInt(ENABLE_MYSQL_POOL)) {
    
    connectObject.connectionLimit = config.MYSQL.POOL_CONNECTION_SIZE;
    try {
        mySqlConnection = mysql.createPool(connectObject);
        console.log("MYSQL Connected !!");
    } catch (err) {
        console.log("MYSQL error ",err);
        
    }

} else {
    console.log("MYSQL Connection !");
    mySqlConnection = mysql.createConnection(connectObject);
    mySqlConnection.connect(err => {
        if (err) {
            console.log("MYSQL error ",err);
            //  process.exit();
        }
    });
}


export default mySqlConnection;