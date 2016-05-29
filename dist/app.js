(function () {
  'use strict';

  angular.module('myApp', []).component('avatar', {
    bindings: {
      user: '='
    },
    templateUrl: 'avatar.html'
  }).component('usercard', {
    bindings: {
      user: '='
    },
    templateUrl: 'user.component.html',
    controllerAs: 'usercard'
  }).component('usercards', {
    controllerAs: 'usercards',
    templateUrl: 'users.component.html',
    controller: function (usersData) {
      var self = this;
      usersData.getUsers().then(function (response) {
        return self.users = response;
      });
    }
  }).service('usersData', usersData);

  function usersData($http) {
    this.getUsers = function () {
      return $http.get('http://jsonplaceholder.typicode.com/users/').then(function (res) {
        console.log(res.data);
        return res.data;
      });
    };
  }
})();
//# sourceMappingURL=app.js.map
