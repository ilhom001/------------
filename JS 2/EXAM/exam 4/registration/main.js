




let registrationForm=document.querySelector(".resgitrastion")
let formLogin=document.querySelector(".formLogin");
let dialogReg=document.querySelector(".dialogReg");
let formReg=document.querySelector(".formReg");
let dialogLog=document.querySelector(".dialogLog");
let formLoginBtn=document.querySelector(".formLoginBtn");
dialogReg.showModal()
formLoginBtn.onclick=()=>{
    dialogLog.showModal();
    dialogReg.close();
}
formReg.onsubmit=(event)=>{
    event.preventDefault();
    if(formReg["inpName"].value.length>0){
        window.location.href="../FirstPage/firstPage.html"
    }
    else{
        alert("Please fill all fields");
    }
}
formLogin.onsubmit=(e)=>{
    e.preventDefault()
    console.log(formLogin["inpPassword"].value);
    
    if(formLogin["inpName"].value=="Ilhom" && formLogin["inpPassword"].value=='2211'){
        window.location.href="../w Adminca/admin.html"
    }
    else{
        alert("Invalid login or password")
    }
}


let back=document.querySelector('.Back')
back.onclick=()=>{
    window.location.href="../first file/first1.html"
}