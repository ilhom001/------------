let display=document.querySelector('.display')
let buttons=document.querySelectorAll('.buttons div button')
let x=document.querySelector('.x')
let cnt=0

buttons.forEach((el) => {
    el.onclick = () => {
        if (el.value === 'C') {
            display.value = '';
        }
        else if(el.value==='()')
        {
            cnt++;
            if(cnt%2==1)
            {
                display.value+='('
            }
            else{
                display.value+=')'
            }
        } 
        else if (el.value === '=') {
            try {
                display.value = eval(display.value); 
            } catch {
                display.value = 'Error'; 
            }
            
        }
         else {
            display.value += el.value; 

        }
        else  {
            const lastChar = display.value[display.value.length - 1];
            if (!(lastChar === el.value && (el.value === '.' || /[\+\-\*\/]/.test(el.value)))) {
                display.value += el.value; 
            }
        }
        
        
    }
    
});

x.onclick=()=>{
    display.value=display.value.slice(0,-1)

}