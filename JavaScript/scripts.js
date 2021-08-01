$(document).ready(function () {
    $.get("places.json", function (data, status) {
        console.log("Status: " + status);
        // console.log("Data: " + data);
        console.log(data[0], data[3]);

        $("#imageSubmit").click(convertImageToBase64);

    });
});


function convertImageToBase64() {
    let imageFile = $("#spotImage").prop("files")[0];
    console.log(imageFile);
    // if (imageFile) {          
    //     $("#preview").attr("src", URL.createObjectURL(imageFile));
    // }
    let imagebase64 = "";
    let reader = new FileReader();
    reader.onloadend = function () {
        imagebase64 = reader.result;
        // console.log(imagebase64);
        $("#imageBase64").text(imagebase64);
        $("#preview2").attr("src", imagebase64);
    }
    reader.readAsDataURL(imageFile);

}