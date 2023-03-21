let ary=[1,2,3,4,5,6,7,8,9,10,11,12];
let sum=0;
let sum2=0;
const setTime2 = performance.now();
for (let i = 0; i < ary.length; i++) {
    sum2 += ary[i];
    
}
console.log(sum2);

const endTime2 = performance.now();

console.log(`loop took ${endTime2-setTime2}milliseconds to finish`);


const setTime1 = performance.now();

for (const key in ary) {
  
     sum += ary[key];
}
  console.log(sum);
  const endTime1 = performance.now();
  console.log(`loop took ${endTime1-setTime1}milliseconds to finish`);


