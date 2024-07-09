$(document).ready(function(){
    console.log("ready");


        $(".section1 .left, .section1 .flex3").fadeOut();
    setTimeout(function () {
        $(".section1 .left, .section1 .flex3, .section1 .line2").fadeIn(1000);
        $(".section2, .reserve, .aboutUs, .partner").fadeIn();

        resize();
    }, 1000);

    $(".warning .close").click(function(){
        console.log("close warning");
        $(".warning").hide();
        $(".body").addClass("noWarning");
    });

    $(".btnGoToCall").click(function(){
      call();  
    });

    $(".step .box").hover(function(){
        $(this).addClass("hover");
        //setTimeout(function(){ resize(); }, 600);
        resize();
    }, function() {
        $(this).removeClass("hover");
        //setTimeout(function(){ resize(); }, 600);
        resize();
    });

    $(".iconsSteps i").click(function(){
       console.log("click");

        let step = $(this).attr("step");
        $(".steps .step").addClass("hide");
        $(".steps .step"+step).removeClass("hide");
        resize();
    });
    
});

$(window).on("resize", function() {
    resize();
});

function resize() {    
    $(".step1 .bomb").css("marginTop", $(".step1 .box").height() / 2 - 30);
    $(".step2 .bomb").css("marginTop", $(".step2 .box").height() / 2 - 30);
    $(".step3 .bomb").css("marginTop", $(".step3 .box").height() / 2 - 30);
}

function call(){
    window.open("https://calendly.com/joshuasanchez-ebooms/llamada-demo?month=2024-07");
}