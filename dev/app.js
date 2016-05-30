(function () {
  'use strict';

  angular
    .module('myApp', ['ui.router'])

    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
     // $locationProvider.html5Mode(true);// при включении пропадают usercards
      $urlRouterProvider.otherwise('home');

      $stateProvider
        .state('home', {
          url: '/',
          // template: 'home',
          template: '<usercards></usercards>',
          // controller: function() {}
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'profile.html',
          // controller: function() {}
        })
          .state('profile.settings', {
            url: '/settings',
            templateUrl: 'user.page.html',
            // controller: function() {}
          })
    })


    .component('profile', {
      bindings: {
        user: '='
      },
      templateUrl: 'profile <ui-view></ui-view>'
    })
    .component('avatar', {
      bindings: {
        user: '='
      },
      templateUrl: 'avatar.html'
    })

    .component('usercard', {
      bindings: {
        user: '=',
      },
      templateUrl: 'user.component.html',
      controllerAs: 'usercard',
    })

    .component('usercards', {
      controllerAs: 'usercards',
      templateUrl: 'users.component.html',
      controller: function (getUsers) {
        getUsers.loadData().then(response => this.users = response);
      }
    })

    .service('getUsers', getUsers);

  function getUsers($http) {
    this.loadData = function () {
      return $http
        .get('http://jsonplaceholder.typicode.com/users/')
        .then(res => res.data);
    }
  }

})();