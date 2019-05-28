console.log("Js file loaded");


const submitButtonClick = () => {
    console.log("submit button clicked");
};

const loadForm = () => {
    let data = [{
        cropName: "ABC",
        price: "142"
    }, {
        cropName: "PQR",
        price: "172"
    }, {
        cropName: "XYZ",
        price: "189"
    }, {
        cropName: "MNO",
        price: "175"
    }];

    let trHtml = "";
    data.forEach(element => {
        trHtml += `<tr>
        <td>${element.cropName}</td>
        <td>${element.price}</td>
        <td>
            <div>

                <select class="form-control" style="width: 55px;" id="sel1">
                    <option selected="selected">0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </td>
        <td>
            -
        </td>
    </tr>`;
    });
    trHtml += `<tr style="font-weight:bold;font-size: 15px">
            <td colspan="3">Total</td>

            <td>0</td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td>
                <button type="button" onclick="submitButtonClick();" class="btn btn-success">Save Record</button>
            </td>

        </tr>`;
    document.getElementById("tableBody").innerHTML = trHtml;
    // console.log($(document));
};