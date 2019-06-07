import logger from "./../../lib/logger";
import responseFormat from "./../../lib/ResponseFormat";
import cropModel from "./CropModel";

class CropController {

    getCrops = async (req, res) => {
        console.log("CropModel :: getCrops ");
        try {
            const result = await cropModel.getCrops();
            const message = result.length + " Records found! ";
            res.status(responseFormat.statusCode["SUCCESS"]).send(responseFormat.getResponseObject("success", responseFormat.statusCode["SUCCESS"], message, result));
        } catch (err) {
            console.log("CropModel :: getCrops : error ",err);
            res.status(responseFormat.statusCode["INTERNAL_SERVER_ERROR"]).send(responseFormat.getResponseObject("error", responseFormat.statusCode["INTERNAL_SERVER_ERROR"], err.message, null));
        }
    }

    addRecords = async (req, res) => {
        console.log("CropModel :: addRecords ");
        try {
            const result = await cropModel.addRecords(req.body);
            const message =" Records added successfully! ";
            res.status(responseFormat.statusCode["SUCCESS"]).send(responseFormat.getResponseObject("success", responseFormat.statusCode["SUCCESS"], message, result));
        } catch (err) {
            console.log("CropModel :: addRecords : error ",err);
            res.status(responseFormat.statusCode["INTERNAL_SERVER_ERROR"]).send(responseFormat.getResponseObject("error", responseFormat.statusCode["INTERNAL_SERVER_ERROR"], err.message, null));
        }
    }

}

export default new CropController();