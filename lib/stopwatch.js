'use strict';
var Stopwatch = function Stopwatch() {
  // 'var' and 'function' -> Private
  // this.* -> Public

  var verbose = false;
  var elapsed = [];

  function _logIfVerbose(_string) {
    if (verbose) {
      console.log(_string);
    }
  }

  function _getElapsedTime() {
   return elapsed[1] - elapsed[0];
  }

  this.setVerbose = function() {
    verbose = true;
  }

  this.setNonVerbose = function() {
    verbose = false;
  }

  this.start = function() {
    elapsed[0] = new Date();
    _logIfVerbose('Start Time: ' + elapsed[0])
  }

  this.stop = function() {
    elapsed[1] = new Date();
    _logIfVerbose('Stop Time: ' + elapsed[1])
  }

  this.getElapsedTime = function() {
    return _getElapsedTime();
  }

  this.reset = function() {
    elapsed = [];
  }

}



module.exports = Stopwatch;
