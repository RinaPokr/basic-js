const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
 let res = 0; 
 if (!!backyard) {
   
 
 let m = backyard.length;
 if (!!backyard[0]) { 
   n = backyard[0].length;
 for (let i=0; i < m; i++) {
   for (let j=0; j < n; j++) {
     if (backyard[ i ][j] === '^^') {
       res += 1;
     }
   }
 }
}
 }
 return res;
};
