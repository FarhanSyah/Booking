angular.module('starter.controllers', ['ion-datetime-picker'])
.controller('DashCtrl', function($scope ) {

    // $scope.venues = [{name: 'one', age: 30 },{ name: 'two', age: 27 },{ name: 'three', age: 50 }];
    // $scope.selectedItem = $scope.venues[0];
    $scope.swiper = {};
 
    $scope.onReadySwiper = function (swiper) {
 
        swiper.on('slideChangeStart', function () {
            console.log('slide start');
        });
         
        swiper.on('onSlideChangeEnd', function () {
            console.log('slide end');
        });     
    };
})
.controller('AccountCtrl', function($scope ) {})
.controller('SearchVenuesCtrl', function($scope ) {})