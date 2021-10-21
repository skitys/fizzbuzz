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

  // resize
  var resizeTimer = false
  var screenW = 0
  var resizeFunc = function(){
    if(resizeTimer !== false){
      clearTimeout(resizeTimer)
    }
    resizeTimer = setTimeout(function(){
      if(screenW === window.innerWidth) return
      screenW = window.innerWidth
      console.log('resize fire')
    },200)
  }

  window.addEventListener('DOMContentLoaded', function(){
    var one_to_hundred = new Fizzbuzz(1,100)
    var one_to_thirty = new Fizzbuzz(1,30)
  })
  window.addEventListener('resize', function(){
    resizeFunc()
  })
})