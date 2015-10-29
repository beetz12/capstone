angular.module('starter.services', [])


//
// $http.post("http://localhost:8080/register", cred)
// .success(function(response)
// {
//    usr.isAuth = response.data.success;
//    usr.username = response.data.user;
//    usr.password = response.data.password;
//
//    cacheSession();
// })
// .error(function(err)
// {
//    uncacheSession();
// });


.service('LoginService', function($q, $http) {
    return {
      urlLogin: function() {
        return $http ({
          url: 'http://localhost:8080/register',
          method: 'POST',
          data: JSON.stringify({ username: 'user', password: 'test', email:'test@edu'}),
          headers: {'Content-Type': 'application/json'},
        })
      }
    }

      // return {
    //     loginUser: function(name, pw) {
    //         var deferred = $q.defer();
    //         var promise = deferred.promise;
    //
    //         if (name == 'admin' && pw == 'admin') {
    //             deferred.resolve('Welcome ' + name + '!');
    //         } else {
    //             deferred.reject('Wrong credentials.');
    //         }
    //         promise.success = function(fn) {
    //             promise.then(fn);
    //             return promise;
    //         }
    //         promise.error = function(fn) {
    //             promise.then(null, fn);
    //             return promise;
    //         }
    //         // return promise;
    //         // var form = { username: 'user', password: '', opaque: 'someValue', logintype: '1'};
    //
    //
    //     }
    // }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
