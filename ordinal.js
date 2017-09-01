// getting the ordianl of a number

var getOrdinal = function(n) {
   var s=["th","st","nd","rd"],
       v=n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
}

console.log(getOrdinal(10));

// return 10th
