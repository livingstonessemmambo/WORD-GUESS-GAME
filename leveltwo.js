let letterInput1=document.querySelector('.letter-input1');
let letterInput2=document.querySelector('.letter-input2');
let letterInput3=document.querySelector('.letter-input3');
let letterInput4=document.querySelector('.letter-input4');
let letterInput5=document.querySelector('.letter-input5');
let letterInput6=document.querySelector('.letter-input6');
let letterInput7=document.querySelector('.letter-input7');
let letterInput8=document.querySelector('.letter-input8');
let letterInput9=document.querySelector('.letter-input9');
let letterInput10=document.querySelector('.letter-input10');
let letterInput11=document.querySelector('.letter-input11');
let letterInput12=document.querySelector('.letter-input12');
let letterInput13=document.querySelector('.letter-input13');
let letterInput14=document.querySelector('.letter-input14');
let letterInput15=document.querySelector('.letter-input15');
let letterInput16=document.querySelector('.letter-input16');
let letterInput17=document.querySelector('.letter-input17');
let letterInput18=document.querySelector('.letter-input18');
let letterInput19=document.querySelector('.letter-input19');
let letterInput20=document.querySelector('.letter-input20');
let letterInput21=document.querySelector('.letter-input21');
let letterInput22=document.querySelector('.letter-input22');
let levelComplete=document.querySelector('.level-complete');

let letterButton=document.querySelectorAll('.letter');

let menu=document.querySelector('.menu');
let menuButton=document.querySelector('.menu-button');
let closeMenuButton=document.querySelector('.close-button');


menuButton.addEventListener('click',()=>{
    menu.style.display='block';
})
closeMenuButton.addEventListener('click',()=>{
    menu.style.display='none';
})
let word='';
letterButton.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.style.animation='wrong 0.2s ease'
        if(btn.innerHTML==='L'){
            word+='l';
        }else if(btn.innerHTML==='I'){
            word+='i';
        }else if(btn.innerHTML==='G'){
            word+='g';
        }else if(btn.innerHTML==='H'){
            word+='h';
        }else if(btn.innerHTML==='T'){
            word+='t'
        }else if(btn.innerHTML==='Clear'){
            word='';
        }else if(btn.innerHTML==='E'){
            word+='e';
        }
        console.log(word)
        if(word==='light'){
            letterInput1.innerHTML='<h1>L</h1>';
            letterInput2.innerHTML='<h1>I</h1>';
            letterInput3.innerHTML='<h1>G</h1>';
            letterInput4.innerHTML='<h1>H</h1>';
            letterInput5.innerHTML='<h1>T</h1>';
            console.log(word);
            word='';
        }
        if(word==='get'){
            letterInput7.innerHTML='<h1>G</h1>';
            letterInput9.innerHTML='<h1>E</h1>';
            letterInput10.innerHTML='<h1>T</h1>';
            console.log(word);
            word='';
        }
        if(word==='let'){
            letterInput6.innerHTML='<h1>L</h1>';
            letterInput9.innerHTML='<h1>E</h1>';
            letterInput8.innerHTML='<h1>T</h1>';
            console.log(word);
            word='';
        }
        if(word==='legit'){
            letterInput12.innerHTML='<h1>L</h1>';
            letterInput14.innerHTML='<h1>I</h1>';
            letterInput22.innerHTML='<h1>G</h1>';
            letterInput15.innerHTML='<h1>E</h1>';
            letterInput5.innerHTML='<h1>T</h1>';
            console.log(word);
            word='';
        }
        if(word==='leg'){
            letterInput19.innerHTML='<h1>L</h1>';
            letterInput20.innerHTML='<h1>E</h1>';
            letterInput13.innerHTML='<h1>G</h1>';
            console.log(word);
        }
        if(word==='eight'){
            letterInput13.innerHTML='<h1>G</h1>';
            letterInput15.innerHTML='<h1>E</h1>';
            letterInput16.innerHTML='<h1>I</h1>';
            letterInput17.innerHTML='<h1>H</h1>';
            letterInput18.innerHTML='<h1>T</h1>';
            console.log(word);
            word='';
        }
        if(word==='hit'){
            letterInput4.innerHTML='<h1>H</h1>';
            letterInput11.innerHTML='<h1>I</H1>';
            letterInput21.innerHTML='<h1>T</H1>';
            console.log(word);
            word='';
        }
        setTimeout(showResult,2000);
        function showResult(){
        if(letterInput1.innerText==='L'&&
        letterInput2.innerText==='I'&&
        letterInput3.innerText==='G'&&
        letterInput4.innerText==='H'&&
        letterInput5.innerText==='T'&&
        letterInput6.innerText==='L'&&
        letterInput7.innerText==='G'&&
        letterInput8.innerText==='T'&&
        letterInput9.innerText==='E'&&
        letterInput10.innerText==='T'&&
        letterInput11.innerText==='I'&&
        letterInput12.innerText==='L'&&
        letterInput13.innerText==='G'&&
        letterInput14.innerText==='I'&&
        letterInput15.innerText==='E'&&
        letterInput16.innerText==='I'&&
        letterInput17.innerText==='H'&&
        letterInput18.innerText==='T'&&
        letterInput19.innerText==='L'&&
        letterInput20.innerText==='E'
        &&
        letterInput21.innerText==='T'
        &&
        letterInput22.innerText==='G'){
            levelComplete.style.animation='pop 0.8s ease-in-out';
            levelComplete.style.display='block';
        }}
       
    })

})
