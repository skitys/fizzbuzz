/* イマイチ */
for (var i = 1; i <= 30; i++) {
    var ans = calc(i);
    var msg = getMsg(ans) || i;
    console.log(msg);
}
function calc(i){
    var result = i % 15 === 0? 0: i % 3 === 0? 1: i % 5 === 0? 2: 3;
    return result;
}
function getMsg(ans){
    var array = ['fizzbuzz','fizz','buzz'],
    item = array[ans];
    return item;
}