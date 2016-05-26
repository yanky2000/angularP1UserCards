var app = angular.module('myApp', []);

app.service('usersData', function ($http) {
  this.getUsers = function () {
    return $http.get('http://jsonplaceholder.typicode.com/users/');
  }
})

  .service('uploadUsers', function () {
    return
  })

app.component('avatar', {
  bindings: {
    user: '='
  },
  restrict: 'E',
  templateUrl: 'avatar.html'
})

  .component('usercard', {
    bindings: {
      user: '=',
    },
    restrict: 'E',
    templateUrl: 'user.component.html'
  })

  .component('usercards', {
    templateUrl: 'users.component.html',
    controller: function (usersData) {
      var self = this;

      usersData.getUsers().then(function (res) {
        console.log(res.data[0]);
        return self.users = res.data;
      });

      // this.users = [{
      //   fullName: 'Иванов Иван',
      //   avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
      //   birthdate: '1976-10-10',
      //   gender: 'мужской',
      //   address: 'ул. Звенигороская, 47б',
      //   email: 'ivanov@mail.ru'
      // }, {
      //     fullName: 'Петров Петр',
      //     avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
      //     birthdate: '1957-01-14',
      //     gender: 'мужской',
      //     address: 'ул.Пушкиская, 13',
      //     email: 'ivanov@mail.ru'
      //   }, {
      //     fullName: 'Натальина Наталья',
      //     avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
      //     birthdate: '1990-07-03',
      //     gender: 'женский',
      //     address: 'ул. Лермонтова, 59',
      //     email: 'ivanov@mail.ru'
      //   }];
    }
  });
