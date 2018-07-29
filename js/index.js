$(function(){
    console.log($(document).width());
    var clientWidth = $(document).width();
    var clientHeight = $(window).height();
    console.log(clientHeight);
    $(".company, .introduce").hide();
    $(".homebtn").click(function () {
        $(".company, .research").show();
        $('body,html').animate({'scrollTop':clientHeight},3000);
        // $(".company").slideDown();
        // $(".home").anmiate({'top',})
    });
    // $(".research").click(function(){
    //     $(".introduce").fadeIn();
    // })
    // $(".position").click(function(){
    //     $(".inner-wrapper").css("width", clientWidth*2);
    //     $(".position").css("width", clientWidth);
        
      
    //     $(this).prev().animate(function(){
    //         $(this).prev().show();
    //         $(this).prev().css("width",clientWidth)
    //     },3000);
    // })
})