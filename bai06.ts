import {question} from 'readline-sync';

let n:number=Number(question("Nhap so nguyen duong n: "));
let conf:number=0;
if(n==0) console.log("Yes");
else{
for(let i:number=1;i<=Math.ceil(n/2);i++){
    if(i**2==n) {
        conf=1;
        break;
    }
}
if(conf==1)  console.log("Yes");
else console.log("No");
}