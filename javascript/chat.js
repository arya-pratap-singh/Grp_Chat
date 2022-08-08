const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
senBtn = form.querySelector("button");


form.onsubmit = (e)=>{
    e.preventDefault();
}


senBtn.onclick = ()=>{

    
    let xhr = new XMLHttpRequest();
    xhr.open("POST","php/insert-chat.php",true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                inputField.value = "";
            }
        }
    }
    let formdata = new FormData(form);
    xhr.send(formdata);


}