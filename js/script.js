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
        if(!$(".steps .step"+step).hasClass("active")){
            $(".steps .step.active").addClass("exit");
            setTimeout(function(){
                $(".steps .step").addClass("hide").removeClass("exit active").hide();
                $(".steps .step"+step).removeClass("hide").show().addClass("active");
                resize();
            }, 500);
        }
        
        if(event && event.type)
            stopCarousel();
    });

    startCarousel();
    //startAnimationBackground();
    startNumbers();
    resize();
});

$(window).on("resize", function() {
    resize();
});

let carouselInterval;
function startCarousel(){
    let stepIndex = 0;
    start();
    carouselInterval = setInterval(function(){
        start();
    }, 5000);
    function start(){
        // Ir al siguiente paso
        stepIndex++;
        if(stepIndex == 4) stepIndex = 1;
        $(".iconsSteps i[step="+stepIndex+"]").click();
    }
}
function stopCarousel(){
    clearInterval(carouselInterval);
}

function startAnimationBackground(){
    changeBG();
    setInterval(function(){
        changeBG();
    }, 12000);
}
function changeBG(){
    $(".aboutUs").addClass("moveBG");
    setTimeout(function(){
        $(".aboutUs").removeClass("moveBG");
    }, 5000);
}

// About us numbers
function startNumbers(){
    let index = -1;
    changeNumbers();
    setInterval(function(){
        changeNumbers();
    }, 3000);
    function changeNumbers(){
        // Ir al siguiente numero
        index++;
        if(index == 4) index = 0;
        $(".aboutus .numbers .content").hide();
        $(".aboutus .numbers .content").eq(index).fadeIn();
    }
}

function resize() {    
    $(".step1 .bomb").css("marginTop", $(".step1 .box").height() / 2 - 30);
    $(".step2 .bomb").css("marginTop", $(".step2 .box").height() / 2 - 30);
    $(".step3 .bomb").css("marginTop", $(".step3 .box").height() / 2 - 30);
    //$(".steps").css("marginBottom", $(".step3 .box").height() / 2 - 30);
}

function call(){
    window.open("https://calendly.com/joshuasanchez-ebooms/llamada-demo?month=2024-07");
}