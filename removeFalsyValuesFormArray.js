let ary = ['Faysal',NaN,'10',true,8,undefined,'limon',null,'','end',false];
//when use 'filter(Boolean)'  filtering value of array and falsy values ignores
let rightValue =ary.filter(Boolean);
console.log(rightValue);

//ignore whites spaces use trim() function
let names =' faysal '.trim();
let size = names.length;
console.log(names);
console.log(size);