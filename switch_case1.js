var Calc = function(num){
    if(!(this instanceof Calc)){
        return new Calc();
    }
    this.fb = num % 15 === 0? 0: num % 3 === 0? 1: num % 5 === 0? 2: -1;
}
for (var i = 1; i <= 30; ++i){
    var calc = new Calc(i),
    answer;
    switch(calc.fb){
        case 0:
            answer = 'fizzbuzz';
            break;
        case 1:
            answer = 'fizz';
            break;
        case 2:
            answer = 'buzz';
            break;
        default:
            answer = i;
    }
    console.log(answer);
}