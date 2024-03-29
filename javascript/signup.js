const form = document.querySelector(".signup form");
const continuebtn = form.querySelector(".button input");
const errorText = form.querySelector(".error-text");

form.onsubmit = (e)=>{
    e.preventDefault();
}

continuebtn.onclick = ()=>{
    

    let xhr = new XMLHttpRequest();
    xhr.open("POST","php/signup.php",true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                if(data == "success"){
                   location.href = "users.php";
                }
                else{
                   
                    errorText.textContent = data;
                    errorText.style.display = "block";
                    
                }
            }
        }
    }
   
    let formdata = new FormData(form);
    xhr.send(formdata);

}