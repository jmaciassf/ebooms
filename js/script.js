$(document).ready(function(){
    console.log("ready");


    $(".section1 .left, .section1 .flex3").fadeOut();
    setTimeout(function () {
        $(".section1 .left, .section1 .flex3, .section1 .line2").fadeIn(1000);
        $(".section2, .reserve, .aboutUs, .partner").fadeIn();

        setTimeout(function(){
            resize();
        }, 600)
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
        setTimeout(function(){ resize(); }, 300);
        resize();
    }, function() {
        $(this).removeClass("hover");
        setTimeout(function(){ resize(); }, 300);
        resize();
    });

    $(".iconsSteps i").click(function(){
       console.log("click");

        let step = $(this).attr("step");
        $(".steps .step").addClass("hide");
        $(".steps .step"+step).removeClass("hide");
        resize();

        if(event && event.type)
            stopCarousel();
    });

    startCarousel();
    resize();
});

$(window).on("resize", function() {
    resize();
});

let carouselInterval;
function startCarousel(){
    let stepIndex = 0;
    carouselInterval = setInterval(function(){
        console.log("interval");
        // Ir al siguiente paso
        stepIndex++;
        if(stepIndex == 4) stepIndex = 1;
        $(".iconsSteps i[step="+stepIndex+"]").click();
    }, 3000);
}
function stopCarousel(){
    clearInterval(carouselInterval);
}

function resize() {    
    $(".step1 .bomb").css("marginTop", $(".step1 .box").height() / 2 - 30);
    $(".step2 .bomb").css("marginTop", $(".step2 .box").height() / 2 - 30);
    $(".step3 .bomb").css("marginTop", $(".step3 .box").height() / 2 - 30);
}

function call(){
    window.open("https://calendly.com/joshuasanchez-ebooms/llamada-demo?month=2024-07");
}