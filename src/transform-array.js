const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
 if (Array.isArray(arr)) {
   
 for (let index = 0; index < arr.length; index++) {
   const element = arr[index];
   switch (element) {
   case '--discard-next':
     index++;
     break;
   case '--discard-prev':
   if (arr[index - 2] == '--discard-next') {
       break;
     } else {
       res.pop();
     }  
   
     break;
   case '--double-next':
    if (arr[index + 1] !== undefined) {
      res.push(arr[index + 1]);
     }
     break;
   case '--double-prev':
     if (arr[index - 2] == '--discard-next') {
       break;
     } else {
     if (arr[index - 1] !== undefined) {  
       res.push(arr[index - 1]);
     } 
     }
     break;
   default:
     res.push(element);
 }
   
 }
 } else {
   throw  new Error('Error');
 }
 return res;
 };