import {question} from 'readline-sync';

let n:number=Number(question("Nhap so nguyen duong n: "));
let dem:number=0;
for(let i:number=1;i<=n;i++){
    if(n%i==0) dem++;
}
console.log(dem);