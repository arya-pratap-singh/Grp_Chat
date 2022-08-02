const form = document.querySelector(".signup form");
const continuebtn = document.querySelector(".button input");

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
                console.log(data);
            }
        }
    }
   
    let formdata = new FormData(form);
    xhr.send(formdata);

}