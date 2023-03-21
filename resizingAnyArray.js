let ary = ['100',1000,0,3,'look','cut',1,2,3];
// we can use arrays length property
ary.length = 6;
console.log(ary);

//How to flatten a multi-dimensional array

let multiArray = ['hafiz','limon',['moriom','nishat'],['sovro','suhag'],'Ismail','faysal','Dorjoy'];
console.log(multiArray);
let flatArray =  multiArray.flat();
console.log(flatArray);

//if two more nasted arrays in one then use flat(Infinity)

let nastedArray = ['hafiz','limon',['moriom','nishat',['sovro','suhag']],'Ismail','faysal','Dorjoy'];
console.log(nastedArray);
let flatNastedArray =  nastedArray.flat(Infinity);
console.log(flatNastedArray);