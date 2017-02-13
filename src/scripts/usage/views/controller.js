function guideCtrl(){
    new Swiper(".swiper-container");
}

function homeCtrl($scope,$timeout,getData){
    getData.success(function(data){
        $scope.data=data.data;
        //console.log($scope.data);
    });
    var sum;
    var mySwiper = new Swiper("#swiper-main", {
        onSlideChangeStart: function (swiper) {
            sum = swiper.activeIndex;
            $("nav li").eq(sum).addClass("active").siblings().removeClass()
        }
    });
    $("li").click(function () {
        var ind = $(this).index();
        $(this).addClass("active").siblings().removeClass();
        mySwiper.slideTo(ind, 1000, false);
    });
    new Swiper("#swiper-container");
    var height=$(".home-section").height();
    console.log(height);
    $("#home-scroll").height(height);
    $timeout(function(){
        new IScroll("#home-scroll");
    },1000)
}
angular.module("myApp")
    .controller("guideCtrl",guideCtrl)
    .controller("homeCtrl",homeCtrl);