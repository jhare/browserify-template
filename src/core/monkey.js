'use strict';

function Monkey(options) {

  console.log('i got options');

  this.see = function() {
    console.log('monkey see');
  }

  this.do = function() {
    console.log('monkey do');
  }
}

module.exports = Monkey;
