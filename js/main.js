$(document).ready(function(){
    
    /* Controling side bar by clicking on toggle icon */
    $(".toggler-container").on("click",function(){
        
        var sidebarMarginL = parseInt($(".side-elements").css("margin-left"));
        var vw = $(window).width(); 
        if(sidebarMarginL == (-0.8*vw)){
                console.log(sidebarMarginL)
            $(".side-elements").css("margin-left","0vw")
            $(".side-element").css("display","block");
            $("body").css({
                height:"100%",
                overflow:"hidden",
            });
            $(".toggler-container").css({
                "border-radius": "50%",
                "background-color": "rgb(211, 210, 211,.5)",
                color: "rgb(122, 121, 122)"
            })
            $(".shadow-slider").css("right","0vw")
            /*$(".slider").css({
                "z-index": "-1",
            }) */ 
       }
       else{
        $(".side-elements").css("margin-left","-80vw")
        $(".side-element").css("display","none");
        $("body").css({
            height:"100%",
            overflow:"scroll",  
        });
        $(".toggler-container").css({
            "border-radius": "50%",
            "background-color": "#ffffff",
            color: "rgb(122, 121, 122)"
        })
        $(".shadow-slider").css("right","-21vw")
        /*$(".slider").css({
            "z-index": "0",
        })*/
        console.log("TTT")
       }
    });
    /* Closing sidebar by clicking on body */
    $("body").on("click",function(){
        var sidebarMarginL = parseInt($(".side-elements").css("margin-left"));
        var vw = $(window).width();
        if(sidebarMarginL !== (-0.8*vw)){
            $(".side-elements").css("margin-left","-80vw")
            $(".side-element").css("display","none");
            $("body").css({
                height:"100%",
                overflow:"scroll",
            });
            $(".shadow-slider").css("right","-21vw")
            $(".toggler-container").css({
                "border-radius": "50%",
                "background-color": "#ffffff",
                color: "rgb(122, 121, 122)"
            })
            /*$(".slider").css({
                "z-index": "0",
            })*/
       }
    });
    /*$('.slider-bx').bxSlider();*/
    $('.slider-bx').bxSlider({
        auto:false,
        pager:false,
        border:false,
        infiniteLoop:true,
    })
    console.log($('.slider-img span').height());
    console.log($('.slider-img span h3').height());
  });