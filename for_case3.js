/* update 2021 10 21 */
(function(){
  var Fizzbuzz = function(s,f){
    if(!(this instanceof Fizzbuzz)){
      return new Fizzbuzz(s,f)
    }
    var _ = this
    _.joken = {
      // 1から100まで
      start: s,
      end : f
    }
    _.text = {}
    _.init()
    _.calc(_.joken)
  }
  Fizzbuzz.prototype = {
    init: function(){
      var _ = this
      _.text = {
        fz:'Fizz',
        bz:'Buzz',
        fzbz:'FizzBuzz'
      } 
      //console.log(_.text)
    },
    calc: function(o){
      var _ = this,
      s = o.start,
      f = o.end,
      t = _.text,
      answer = 0
      for(var i = s; i <= f; i++){
        answer =
        n % 15 === 0? t.fz:
        n % 3 === 0? t.bz:
        n % 5 === 0? t.fzbz:
        i;
        _.show(answer)
      }
    },
    show: function(t){
      // alertなど随時書き換える
      console.log(t)
    }
  }
  window.addEventListener('DOMContentLoaded', function(){
    new Fizzbuzz(1,100)
  })
})