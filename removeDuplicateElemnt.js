// const ary =[22, 3,66,99,66,33,66,99,1,4,3];
const ary =[22,33,66,55,44,99,88,77,0];
//remove duplicates
console.log([...new Set(ary)]);

const ary2 = [22,33,66,55,44,99,88,77,0];

const isItSame=(ary,ary2)=>{
    return ary.length === ary2.length && ary.every((v,i)=>
   v===ary[i] );
};

console.log(isItSame(ary,ary2));

//array elements shuffling

const Number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(Number.sort(()=>Math.random() - 0.5 ))

//using -> , operator
let x = 1;
x=(x++,x);
console.log(x);