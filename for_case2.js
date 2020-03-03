/* カプセル化で安全に */
var Fizzbuzz = function(i){
    var _i = i;
    var message = {
        f: 'fizz',
        b: 'buzz',
        fb: 'fizzbuzz',
        n: _i
    }
    this.calc = function(){
        var result = _i % 15 === 0? 'fb': _i % 3 === 0? 'f': _i % 5 === 0? 'b': 'n';
        return result;
    }
    this.getMsg = function(key){
        var item = message[key] || _i;
        return item;
    }
}
for (var i = 1; i <= 30; i++) {
    var fizzbuzz = new Fizzbuzz(i);
    var ans = fizzbuzz.calc();/*計算処理_どの倍数にあたるか */
    var msg = fizzbuzz.getMsg(ans);/*メッセージの確定 */
    console.log(msg);
}