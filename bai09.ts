import {question} from 'readline-sync';

let w:number=Number(question("w = "));
let h:number=Number(question("h = "));
for(let i:number=1;i<=h;i++){
    let s:String="";
    if(i==1 || i==h){
        for(let j:number=1; j<=w;j++){
            s+="* ";
        }
    }
    else{
        for(let j:number=1; j<=w;j++){
            if(j==1 || j==w){
                s+="* ";
            }
            else s+="  ";
        }    
    }
    console.log(s);
}