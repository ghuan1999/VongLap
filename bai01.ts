import {question} from 'readline-sync';
let n:number=Number(question("n = "));
let s:String="";
for(let i:number=1;i<n;i++){
    s+=("Kmin " + i +", ");
}
s+=("Kmin " + n);
console.log(s);