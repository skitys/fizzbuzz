/* 短い書き方 */
for (var i =1; i <= 100 ; i++) {
    var ans = i % 15 === 0? 'fizzbuzz': i % 3 === 0? 'fizz': i % 5 === 0? 'buzz': i;
    console.log(ans);
}