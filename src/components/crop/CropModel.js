import logger from "./../../lib/logger";
import utilityModel from "./../utility/UtilityModel";
class CropModel {

    getCrops = async () => {
        console.log("CropModel :: getCrops ");
        return new Promise(async(resolve,reject) => {
            try {
                let sql = "SELECT cropName,price FROM crop WHERE rowStatus ='1'";
                const result = await utilityModel.execute(sql);
                resolve(result);
    
            } catch (err) {
                console.error("CropModel :: getCrops : error ",err);
                reject(err);
            }
        });
    }

}

export default new CropModel();