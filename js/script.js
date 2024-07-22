$(document).ready(function(){
    console.log("ready");

    $(".section1 .left, .section1 .flex3").fadeOut();
    setTimeout(function () {
        $(".section1 .left, .section1 .flex3, .section1 .line2").fadeIn(1000);
        $(".section2, .reserve, .aboutUs, .partner, .topfixed .close").fadeIn();

        setTimeout(function(){
            resize();
        }, 600)
    }, 1000);

    $(".warning .close").click(function(){
        console.log("close warning");
        $(".warning").hide();
        $("body").addClass("noWarning");
    });

    $(".btnGoToCall").click(function(){
      call();  
    });

    $(".step .box").hover(function(){
        if(window.outerWidth >= 900){
            $(this).addClass("hover");
            setTimeout(function(){ resize(); }, 300);
            resize();
        }
    }, function() {
        if(window.outerWidth >= 900){
            $(this).removeClass("hover");
            setTimeout(function(){ resize(); }, 300);
            resize();
        }
    });

    $(".iconsSteps i").click(function(){
       //console.log("click");

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

    $(".header .menu").click(function(){
        console.log("show menu");
        $("body").addClass("showMenu");
    });
    $(".divMenu .close").click(function(){
        hideMenu();
    });
    
    setTimeout(function () {
        $("body > .footer").addClass("show");
    }, 2500);
    
    startCarousel();
    startAnimationBackground();
    startNumbers();
    resize();

    
if(window.outerWidth >= 900){ // this is important
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > positions.aboutUs)
        {
            // Show reserve
            if(!$(".divAboutUs").hasClass("show")){
                $(".divAboutUs").addClass("show");
            }
            hideSection2();
        }
        else if(scrollTop > positions.reserve)
        {
            // Show reserve
            if(!$(".divReserve").hasClass("show")){
                $(".divReserve").addClass("show");
            }
        }
        else if(scrollTop > positions.section2)
        {
            // Show section2
            if(!$(".divSection2").hasClass("show")){
                $(".divSection2").addClass("show");
                startCarousel();
            }
            hideAboutUs();
        }
        else 
        {
            hideSection2();
            if($(".divReserve").hasClass("show")){
                $(".divReserve").removeClass("show");
            }
            hideAboutUs();
        }
    
        function hideSection2() {
            if($(".divSection2").hasClass("show")){
                $(".divSection2").removeClass("show");
                stopCarousel();
            }
        }
        function hideAboutUs() {
            if($(".divAboutUs").hasClass("show")){
                $(".divAboutUs").removeClass("show");
            }
        }
    });
}
else {
    $("body").addClass("mobile");
}
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
    $(".divAboutUs").addClass("moveBG");
    setTimeout(function(){
        $(".divAboutUs").removeClass("moveBG");
    }, 5000);
}

// About us numbers
function startNumbers(){
    let index = -1;
    changeNumbers();
    setInterval(function(){
        changeNumbers();
    }, 1500);
    function changeNumbers(){
        // Ir al siguiente numero
        index++;
        if(index == 4) index = 0;
        $(".aboutus .numbers").removeClass("step1 step2 step3 step4");
        $(".aboutus .numbers").addClass("step"+(index+1));
        //$(".aboutus .numbers .content").hide();
        //$(".aboutus .numbers .content").eq(index).fadeIn();
    }
}

let positions = {}
function resize() {    
    $(".step1 .bomb").css("marginTop", $(".step1 .box").height() / 2 - 30);
    $(".step2 .bomb").css("marginTop", $(".step2 .box").height() / 2 - 30);
    $(".step3 .bomb").css("marginTop", $(".step3 .box").height() / 2 - 30);
    //$(".steps").css("marginBottom", $(".step3 .box").height() / 2 - 30);

    positions.section2 = $(".divSection2").position().top - 450;
    positions.reserve = $(".divReserve").position().top - 450;
    positions.aboutUs = $(".aboutUs").position().top - 450;
    
}

function call(){
    window.open("https://calendly.com/joshuasanchez-ebooms/llamada-demo?month=2024-07");
}

function hideMenu(){
    console.log("hide menu");
    $("body").removeClass("showMenu");
}

function goTo(section){
    console.log("goTo");
    switch(section){
        case "aboutUs":
            location.href = "#divAboutUs";
            break;

        case "ourProcess":
            location.href = "#divReserve";
            break;
    }

    hideMenu();

    let minus = 90;
    if(window.outerWidth > 900){
        // Desktop
        minus = 50;
    }
    $("body").scrollTop($("body").scrollTop() - minus);
}