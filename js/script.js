$(document).ready(function(){
    console.log("ready");

    $(".warning .close").click(function(){
        console.log("close warning");
        $(".warning").hide();
        $(".body").addClass("noWarning");
    });

    $(".btnGoToCall").click(function(){
      call();  
    });
});

function call(){
    window.open("https://calendly.com/joshuasanchez-ebooms/llamada-demo?month=2024-07");
}