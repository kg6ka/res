'use strict';

app.service('userStorage', [function(){
	var user = {
		name: 'David',
		surname: 'Conrad',
		email: 'admin@gmail.com',
		number: '380174567483',
		password: 'admin1234'
	};

	return {
		setUser: function (info) {
				user = info;
		},
		getUser: function () {
				return user;
		}
	};
}]);