$(document).ready(function(){
    console.log("ready");

    $(".warning .close").click(function(){
        console.log("close");
        $(".warning").hide();
    });
});