var MYAPP = {
    value: {
        text: ['fizzbuzz','fizz','buzz']
    },
    module: {
        calc: function(num){
            var len = MYAPP.value.text.length,
                result = num % 15 === 0? 0: num % 3 === 0? 1: num % 5 === 0? 2: len;
            return result;
        },
        getText: function(index){
            var str = MYAPP.value.text[index];
            return str;
        }
    }
}
for (var i = 1; i <= 30; i++) {
    var result = MYAPP.module.calc(i);
    var answer = MYAPP.module.getText(result) || i;
    console.log(answer);
}