import {question} from 'readline-sync';

let h:number=Number(question("Nhap chieu cao h: "));
for(let i:number=1; i<h;i++){
    let s:String="";
    for(let j:number=1; j<=i; j++){
        if(j==1 || j==i){
            s+="* ";
        }
        else s+="  ";
    }
    console.log(s);
}
let s:String="";
for(let i:number=1; i<=h;i++){
    s+="* ";
}
console.log(s);