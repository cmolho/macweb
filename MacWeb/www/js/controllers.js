angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
  $scope.signIn = function(user) {
    //Code to submit sign in function, set state to that user
    $state.go('tab.dash');
  };
  $scope.signUp = function() {
    $state.go('signup')
  };
  $scope.enterCode = function() {
    $state.go('activation')
  }
})

.controller('SignUpCtrl', function($scope, $state) {
  $scope.newUser = function(newuser){
    //Code to create a new user and generate an associated code, send validation email with that code
    $state.go('activation')
  }
})

.controller('ActivationCtrl', function($scope, $state) {
  $scope.enterActivation = function(code){
    //Code to check that activation is correct, if yes then send to new page, load that user's data in next page form.
    //newuser data is migrated to a user profile, which contains many more data fields, filled in setup page
    $state.go('setup')
  }
})

.controller('SetUpCtrl', function($scope, $state) {
  $scope.profile = function(user){
    //Code that enters all new user information into their profile database
    $state.go('tab.dash')
  }
})

.controller('DashCtrl', function($scope, Newsfeed) {
  $scope.newsfeed = Newsfeed.all()
})

.controller('ConnectionsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all()
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

.controller('CalendarCtrl', function($scope) {})

.controller('QuestionsControl', function($scope) {})

.controller('ProfileCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };


});
