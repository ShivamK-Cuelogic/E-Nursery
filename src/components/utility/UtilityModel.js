import logger from "./../../lib/logger";
import sqlConnection from "./../../lib/mySQLConnection";

class UtilityModel {

    execute = (query, paramArray = []) => {
        console.log("MODEL Utility : execute :query ",query);
        
        // return promise reject || resolve
        return new Promise((resolve, reject) => {
            
            sqlConnection.query(query, paramArray, (err, result) => {
                if (err) {
                    console.log("MODEL Utility : execute :: error ",err);
                    reject(err);
                } else if (result) {
                    
                    resolve(result);
                }
            });
        });
    }

}

export default new UtilityModel();