angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, $http) {
    $scope.data = {}
    $scope.login = function() {
       LoginService.urlLogin().success(function(data) {
           $state.go('tab.dash');
       }).error(function(data) {
           var alertPopup = $ionicPopup.alert({
               title: 'Login failed!',
               template: 'Your username/password combination is incorrect.'
           });
       });
   }
})

.controller('RegisterCtrl', function($scope, $state) {

    $scope.Register = function(user) {
      $state.go('tab.dash'); //Need to redirect to main screen.
    };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
