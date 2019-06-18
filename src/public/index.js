console.log("Js file loaded");
let crops;
const submitButtonClick = async () => {
    console.log("submit button clicked");
    const name = $("#name").val();
    const phoneNumber = $("#phone_number").val();
    
    const total = Number(document.getElementById("total").innerHTML);
    console.log("name",name,phoneNumber,total)
    let obj={},cropSelected=[];
    crops.forEach(crop => {
        if(Number($("#select_"+crop.id).find(":selected").text()) !=0) {
            obj={};
            obj.id = crop.id;
            obj.value = Number($("#select_"+crop.id).find(":selected").text());
            obj.price = Number($("#subtotal_"+crop.id).text());
            console.log("obj===>",obj);
            cropSelected.push({ ...obj});
        }
    });

    if(!name || !phoneNumber) {
        alert("Please enter name and phone number");
        return;
    } else if(!cropSelected.length) {
        alert("Please select crop and quantity");
        return;
    }

    let paramObj = {
        name: name,
        phone_number: phoneNumber,
        total: total,
        crop: JSON.stringify(cropSelected)
    };
    console.log("paramObj",paramObj);
    await saveRecord(paramObj);

    console.log("Record saved !!");
    alert("Record saved !!");
    loadForm();


};

const dropdownHandler = event => {
    const id = event.id.replace("select_","");
    const price = $("#price_"+id).html();
    const subTotal = price * event.value;
    $("#subtotal_"+id).html(subTotal);
    updateTotal();
}

const updateTotal = () => {
    let total=0,element;
    let elementsArray = document.getElementsByClassName("subtotal");
    
    for(let i=0; i< elementsArray.length;i++) {
        element = $(elementsArray.item(i));
        total += Number(element[0].innerText);
    }
    $("#total").html(total);

}


const loadForm = async () => {
    
    let data = await getCrops();
    data = data.data;
    crops = data;
    let trHtml = "";
    data.forEach(element => {
        trHtml += `<tr id="row_${element.id}">
        <td>${element.cropName}</td>
        <td id="price_${element.id}">${element.price}</td>
        <td>
            <div>
                <select onchange="dropdownHandler(this);" class="form-control" style="width: 55px;" id="select_${element.id}">
                    <option value="0" selected="selected">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </td>
        <td id="subtotal_${element.id}" class="subtotal">
            0
        </td>
    </tr>`;
    });
    trHtml += `<tr style="font-weight:bold;font-size: 15px">
            <td colspan="3">Total</td>

            <td id="total">0</td>
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