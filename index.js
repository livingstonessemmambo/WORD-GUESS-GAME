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
        }else if(btn.innerHTML==='B'){
            word+='b';
        }else if(btn.innerHTML==='O'){
            word+='o';
        }else if(btn.innerHTML==='D'){
            word+='d';
        }else if(btn.innerHTML==='F'){
            word+='f'
        }else if(btn.innerHTML==='Clear'){
            word='';
        }
        if(word==='blood'){
            letterInput1.innerHTML='<h1>B</h1>';
            letterInput2.innerHTML='<h1>L</h1>';
            letterInput3.innerHTML='<h1>O</h1>';
            letterInput4.innerHTML='<h1>O</h1>';
            letterInput5.innerHTML='<h1>D</h1>';
            console.log(word);
            word='';
        }
        if(word==='bold'){
            letterInput1.innerHTML='<h1>B</h1>';
            letterInput6.innerHTML='<h1>O</h1>';
            letterInput7.innerHTML='<h1>L</h1>';
            letterInput8.innerHTML='<h1>D</h1>';
            console.log(word);
            word='';
        }
        if(word==='lod'){
            letterInput7.innerHTML='<h1>L</h1>';
            letterInput9.innerHTML='<h1>O</h1>';
            letterInput10.innerHTML='<h1>D</h1>';
            console.log(word);
            word='';
        }
        if(word==='old'){
            letterInput3.innerHTML='<h1>O</h1>';
            letterInput10.innerHTML='<h1>D</h1>';
            letterInput11.innerHTML='<h1>L</h1>';
            console.log(word);
            word='';
        }
        if(word==='food'){
            letterInput5.innerHTML='<h1>D</h1>';
            letterInput12.innerHTML='<h1>F</h1>';
            letterInput13.innerHTML='<h1>O</h1>';
            letterInput14.innerHTML='<h1>O</h1>';
            console.log(word);
            word='';
        }
        if(word==='flood'){
            letterInput13.innerHTML='<h1>O</h1>';
            letterInput15.innerHTML='<h1>F</h1>';
            letterInput16.innerHTML='<h1>L</h1>';
            letterInput17.innerHTML='<h1>O</h1>';
            letterInput18.innerHTML='<h1>D</h1>';
            console.log(word);
            word='';
        }
        if(word==='odd'){
            letterInput18.innerHTML='<h1>D</h1>';
            letterInput19.innerHTML='<h1>O</H1>';
            letterInput20.innerHTML='<h1>D</H1>';
            console.log(word);
            word='';
        }
        setTimeout(showResult,2000);
        function showResult(){
        if(letterInput1.innerText==='B'&&
        letterInput2.innerText==='L'&&
        letterInput3.innerText==='O'&&
        letterInput4.innerText==='O'&&
        letterInput5.innerText==='D'&&
        letterInput6.innerText==='O'&&
        letterInput7.innerText==='L'&&
        letterInput8.innerText==='D'&&
        letterInput9.innerText==='O'&&
        letterInput10.innerText==='D'&&
        letterInput11.innerText==='L'&&
        letterInput12.innerText==='F'&&
        letterInput13.innerText==='O'&&
        letterInput14.innerText==='O'&&
        letterInput15.innerText==='F'&&
        letterInput16.innerText==='L'&&
        letterInput17.innerText==='O'&&
        letterInput18.innerText==='D'&&
        letterInput19.innerText==='O'&&
        letterInput20.innerText==='D'){
            levelComplete.style.animation='pop 0.8s ease-in-out';
            levelComplete.style.display='block';
        }}
       
    })

})
