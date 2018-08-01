$(function(){
    console.log($(document).width());
    var clientWidth = $(document).width();
    var clientHeight = $(window).height();
    $(".position").css("width",clientWidth);
    $(".position,.home,.company").css("height",clientHeight);
    $(".main-content").css("height",clientHeight);
    $(".main-content").hide();
    $(".inner-wrapper").css({"height":clientHeight,
                           "width": clientWidth*7});
    console.log(clientHeight);
    //除了首页隐藏其他页面
    $(".company, .introduce").hide();
    $(".homebtn,.start-wrap").click(function () {
        $(".company, .research").show();
        $('body,html').animate({'scrollTop':clientHeight},3000);
    });
    $(".company").click(function(){
       $(".main-content").show();
       $('body,html').animate({'scrollTop':clientHeight*2},3000);
       $(".main-content").animate({'scrollLeft':clientWidth*6},3000);
    })
    
    // 首页效果
    

    // 场景切换
    function changeImg(n){

        $(".position").css("transition","2s");

        $(".scene"+n).click(function(){

             if(n==1){

                $(".scene"+n).css("transform","translate(100%,0)");

                $(".scene"+parseInt(parseInt(n)+1)).css("transform","translate(100%,0)");

             }else{

                 $(".scene"+n).css("transform","translate(200%,0)");

                 $(".scene"+parseInt(parseInt(n)+1)).css("transform","translate(100%,0)");

             }
        })
        	
    }
    // changeImg(1);
    // changeImg(2);
    // changeImg(3);
    // changeImg(4);
    // changeImg(5);
    // changeImg(6);


    // 音乐的停止和旋转
    var off = false;
    $(".music-wrap").click(function(){
        if(off){
            $(this).find("audio").get(0).play();
            $(this).find(".music").css("animation","circle 2s linear 1s infinite");

            off = false;
        }else{
            $(this).find("audio").get(0).pause();
            $(this).find(".music").css("animation","unset");
            off = true;
        }
    })

    //光点的流动切换
    $(".pipe .dot").animate("marginTop", "72px");
})