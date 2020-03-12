const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood=foods.slice(1,4);
console.log(modifiedFood);
foods.splice(1,0,"noodles","icecream");
console.log(foods);
const numberArray = [12,324,213,4,2,3,45,4234];
let iseven=numberArray.filter(function(num){
    return num%2==0;
});
console.log(iseven);
let prime=[];
let nonp=[];
let isprime=numberArray.filter(function(num){
    let c=1;
    for(let i=2;i<=num/2;i++)
    {
        if(num%i==0)
        c=0;
    }
    if(c==1)
    prime.push(num);
    else
    nonp.push(num);
});
console.log(isprime);
console.log("prime num in array \t"+prime);
console.log("Non prime num in array \t"+nonp);

// map
const myArray = [5,4,7,12,3,6,9,3];
let newarray=myArray.map(function(num){
    return num*num;
});
console.log("square of array elements using map \n"+newarray);

// Reduce
let Rearray=[1,5,2,3,4,6,7,8,9,10];
let res=[];
let rarray=Rearray.reduce(function( total,currentValue){
    res.push( currentValue*currentValue);
});

console.log("square of array elements using Reduce \n"+res);

