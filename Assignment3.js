$(document).ready(function(){
    $("#btn").click(function(){
        if($("#firstname").val().trim()==="" || $("#lastname").val().trim()===""){
            alert("Please fill all the fields");
        }
    })
})