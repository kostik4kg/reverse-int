module.exports = function reverse (n) {
   if(n < 0){
       n * -1;
   }
    return parseInt(n.toString().split('').reverse().join(''))
}
