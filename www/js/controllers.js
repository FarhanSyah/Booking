angular.module('starter.controllers', ['ionic-datepicker'])
.controller('DashCtrl', function($scope ) {



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
.controller('VenuesListCtrl', ['$scope', '$stateParams', '$filter', function($scope , $stateParams, $filter) {
    var venues    = [{img: 'img/port1.jpg', name: 'Hotel Bintang Lima'},{img: 'img/port2.jpg', name: 'Hotel Bintang Empat'}];
    
    $scope.venues = $filter('filter')(venues, $stateParams.search);
}])
.controller('SearchVenuesCtrl', function($scope, ionicDatePicker) {
    $scope.venues = [{name: 'one', age: 30 },{ name: 'two', age: 27 },{ name: 'three', age: 50 }];
    // $scope.selectedItem = $scope.venues[0];
    $scope.dateval = {};
    var ipObj1 = {
      callback: function (val) {  //Mandatory
        $scope.dateval.text = new Date(val);
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      },
      from: new Date(), //Optional
      to: new Date(2050, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      closeOnSelect: true,       //Optional
      templateType: 'modal',       //Optional
      dateFormat: 'dd-MM-yyyy' //Optional
    };
    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };

})