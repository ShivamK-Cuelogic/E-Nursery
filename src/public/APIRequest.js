
console.log("APIRequest js file loaded");
const getCrops = params => {
    return new Promise((resolve,reject) => {
        $.ajax({
            url: "http://localhost:3000/api/crop",
            success: function (result) {
                console.log("result", result);
                resolve(result);
            }
        });
    })
    
}

const saveRecord = params => {
    console.log("saveRecord",params)
    return new Promise((resolve,reject) => {
        $.ajax({
            url: "http://localhost:3000/api/crop/order",
            method: "POST",
            data: params,
            success: function (result) {
                console.log("result", result);
                resolve(result);
            }
        });
    })
    
}