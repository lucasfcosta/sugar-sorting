'use strict';
var Stopwatch = function Stopwatch() {
  // 'var' and 'function' -> Private
  // this.* -> Public
  var _verbose = false;
  var _elapsed = [];

  function _logIfVerbose(_string) {
    if (_verbose) {
      console.log(_string);
    }
  }

  function _getElapsedTime() {
   return _elapsed[1] - _elapsed[0];
  }

  this.setVerbose = function() {
    _verbose = true;
  }

  this.setNonVerbose = function() {
    _verbose = false;
  }

  this.start = function() {
    _elapsed[0] = new Date();
    _logIfVerbose('Start Time: ' + _elapsed[0])
  }

  this.stop = function() {
    _elapsed[1] = new Date();
    _logIfVerbose('Stop Time: ' + _elapsed[1])
  }

  this.getElapsedTime = function() {
    return _getElapsedTime();
  }

  this.reset = function() {
    _elapsed = [];
  }

}



module.exports = Stopwatch;
