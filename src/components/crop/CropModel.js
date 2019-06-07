import logger from "./../../lib/logger";
import utilityModel from "./../utility/UtilityModel";
class CropModel {

    getCrops = async () => {
        console.log("CropModel :: getCrops ");
        return new Promise(async (resolve, reject) => {
            try {
                let sql = "SELECT id,cropName,price FROM crop WHERE rowStatus ='1'";
                const result = await utilityModel.execute(sql);
                resolve(result);

            } catch (err) {
                console.error("CropModel :: getCrops : error ", err);
                reject(err);
            }
        });
    }

    addRecords = async params => {
        console.log("CropModel :: addRecords ");
        return new Promise(async (resolve, reject) => {
            try {
                let sql = `INSERT INTO order(name,phoneNumber,amount) VALUES(${params.name},${params.phoneNumber},${params.amount})`;
                const result = await utilityModel.execute(sql);

                sql = `INSERT INTO order_detail(orderId,cropId,quantity,price)
                VALUES`;

                params.crop.forEach(element => {
                    sql += `(${result.insertId},${element.id},${element.value},${element.price}),`
                });
                sql = sql.slice(0,-1);

                await utilityModel.execute(sql);
                resolve(result);

            } catch (err) {
                console.error("CropModel :: addRecords : error ", err);
                reject(err);
            }
        });
    }

}

export default new CropModel();