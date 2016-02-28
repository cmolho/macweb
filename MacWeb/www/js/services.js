angular.module('starter.services', [])

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Jack Chen',
    face: 'img/ben.png',
    major: 'Economics'
  }, {
    id: 1,
    name: 'Clay Whipp',
    face: 'img/max.png',
    major: 'Math'
  }, {
    id: 2,
    name: 'Dinyan Chen',
    face: 'img/adam.jpg',
    major: 'Neuroscience'
  }, {
    id: 3,
    name: 'Sunakshi Wadhwa',
    face: 'img/perry.png',
    major: 'Economics'
  }, {
    id: 4,
    name: 'Cody Molho',
    face: 'img/mike.png',
    major: 'Computer Science'
  }];

  return {
    all: function() {
      return friends;
    }
  };
})

.factory('Newsfeed', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var newsfeed = [{
    time: '1:00 PM',
    text: 'Clay Whipp has just declared a Math major!'
  }, {
    time: '12:30 PM',
    text: 'New group event for Economics majors scheduled'
  }, {
    time: '12:10 PM',
    text: 'news'
  }, {
    time: '11:45 AM',
    text: 'news'
  }, {
    time: '11:20 AM',
    text: 'news'
  }];

  return {
    all: function() {
      return newsfeed;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Sunakshi Wadhwa',
    lastText: 'Hi, I have some questions about economics major.',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Jack Chen',
    lastText: 'Want to do Macathon together? I don\'t have a team yet.',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Dingyan Chen',
    lastText: 'Have you ever used AndroidStudio?',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Clay Whipp',
    lastText: 'Could I have some advice on internship applications?',
    face: 'img/perry.png'
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
