function MainController($scope) {
    $scope.contact = {
      name: 'Ryan Friedlinghaus'
      phone: '8008675309'
      email: 'ryan@wcc.com'
    };    
}

angular
    .module('app')
    .controller('MainController', MainController);
