import {question} from 'readline-sync';

let n:number=Number(question("Nhap so nguyen duong n: "));
let dem:number=0;
for(let i:number=1;i<=Math.ceil(n/2);i++){
    if(n%i==0) dem+=i;
}
if(n==dem) console.log("Yes");
else console.log("No");