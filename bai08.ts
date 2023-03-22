import {question} from 'readline-sync';

let m:number=Number(question("Nhap so nguyen duong m: "));
let n:number=Number(question("Nhap so nguyen duong n: "));
for(let i:number=m; i<=n;i++){
    let conf:number=0;
    let j:number=0;
    for(j=1;j<=Math.ceil(i/2);j++){
        if(j**2==i) {
            console.log(i);
            conf=1;
            break;  
        }
    }
    if(conf==1) break;
}