let ary = ['Faysal',1,2,3,4,5,'limon'];
console.log(ary);
//most common replace

// let temp = ary[0]
// ary[0]=ary[6];
// ary[6]=temp;

// let tem = ary[1]
// ary[1]=ary[5];
// ary[5]=tem;

// console.log(ary);

//morden replaces way

[ary[0],ary[6],ary[1],ary[5]] = [ary[6],ary[0],ary[5],ary[1]];
console.log(ary);
let a=10;let b=20;
[a,b] =[b,a];
console.log(a,b);
b=a+(a=b)-b;
console.log(a,b);
