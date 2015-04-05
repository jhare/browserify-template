'use strict';
var angular = require('angular');

var Monkey = require('../core/monkey.js');

var bob = new Monkey();

bob.see();

var myModule = angular.module('myModule', []);

myModule.controller('someCtrl', function someCtrl($scope) {
  console.log('might be here');
});

console.log(myModule);
