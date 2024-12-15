
window.onload = function(){
    
    const uid = sessionStorage.getItem("userid");
    if(uid){
        document.getElementById("uid").value = uid;

    }
    else{
       
        
        alert("Register befor login");
        window.history.back();
    }

    

   
}

var form = document.getElementById("log");

function validate(event){
    
    event.preventDefault()
    
    const password = sessionStorage.getItem("password");

    const pass = document.getElementById("pass").value;

   
    if(pass === password){

        window.location.href="home.html";
       
    }
    else{
        alert("incorrect password");

    }
        
            

}
form.addEventListener('submit',validate);