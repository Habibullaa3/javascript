let width=document.getElementById('width'),
    height=document.getElementById('height'),
    radius=document.getElementById('rad'),
    color=document.getElementById('color'),
    shape=document.getElementById('shape'),
    btns=document.getElementById('btns'),
    reset=document.getElementById('reset'),
    rng=document.getElementById('rng'),
    nat=document.getElementById('nat');


rng.setAttribute('disabled','disabled');
btns.onclick = function btns () {
    
    if(isNaN(width.value) || isNaN(height.value) || isNaN(radius.value))
     {
       alert('BU YERGA FAQAT SON KIRIT');
       width.value='';
       height.value='';
       radius.value='';
       width.focus();
  
    }
    else{
       shape.style.width=width.value + 'px';
       shape.style.height=height.value + 'px';
       shape.style.borderRadius=radius.value + 'px';
       shape.style.background=color.value;
    }
    if(width.value=='' && height.value=='' && radius.value==''){
        rng.setAttribute('disabled','disabled');
    } 
    else {
        rng.removeAttribute('disabled');
    }
 };
reset.onclick = function reset (){
    width.value='';
    height.value='';
    radius.value='';
    color.value='rgb(0,0,0)';
    width.focus();
};

   


nat.innerHTML=rng.value;
rng.addEventListener("input" , function() {
    nat.innerHTML=rng.value;
    shape.style.opacity=(rng.value)/100;
    
}
);

