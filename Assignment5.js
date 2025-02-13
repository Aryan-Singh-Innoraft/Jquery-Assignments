$(document).ready(function(){
    $(".footer-wrapper").click(function(){
        $("div.popup").removeClass("hidden");
    })
    $(".cross-button").click(function(){
        $("div.popup").addClass("hidden");
    })

})