'use strict';

$(function () {

    var users = [{
        fullName: 'Иванов Иван',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
        birthdate: '1976-10-10',
        gender: 'мужской',
        address: 'ул. Звенигороская, 47б',
        email: 'ivanov@mail.ru'
    }, {
        fullName: 'Петров Петр',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
        birthdate: '1957-01-14',
        gender: 'мужской',
        address: 'ул.Пушкиская, 13',
        email: 'ivanov@mail.ru'
    }, {
        fullName: 'Натальина Наталья',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
        birthdate: '1990-07-03',
        gender: 'женский',
        address: 'ул. Лермонтова, 59',
        email: 'ivanov@mail.ru'
    }];

    var root = 'http://jsonplaceholder.typicode.com';
    // var root = ' http://test-api.javascript.ru/vyang/users';

    // $.ajax({
    //   url: root + '/users/',
    //   method: 'GET'
    // }).then(function(data) {
    //   console.log(data);
    // });
});