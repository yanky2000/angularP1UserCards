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
      console.log(usersData); //выводит: getUsers {users: Object}
      return this.users = usersData;
    }
  }).service('usersData', getUsers);

  function getUsers($http) {
    var self = this;
    //this.users = {};

    $http.get('http://jsonplaceholder.typicode.com/users/').then(function (res) {
      return self.users = res.data;
    });
  }
})();
//# sourceMappingURL=app.js.map
