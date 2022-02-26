let a=document.querySelectorAll('[value]')
for(let i=0;i<a.length;i++){
    a[i].addEventListener('click',function(){
        a[i].style.width='40%';
        for(let j=0;j<a.length;j++){
            if(j!=i){
                a[j].style.width='2rem'
            }else{
                continue;
            }
        }
    })
}

// let a=3;
// let b=new Number(3);
// let c=3;

// console.log(a==b);
// console.log(a===b);