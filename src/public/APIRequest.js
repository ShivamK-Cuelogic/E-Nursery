
console.log("APIRequest js file loaded");
const callAPI = params => {
    $.ajax({
        url: "http://localhost:3000/api/crop",
        success: function (result) {
            console.log("result", result);
        }
    });
}