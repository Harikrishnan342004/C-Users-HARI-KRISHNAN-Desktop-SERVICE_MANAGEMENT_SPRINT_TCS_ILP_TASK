


var form = document.getElementById("form1");

  
function validate(event){

    const Name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    // const address = document.getElementById("address").value;
    // const contact = document.getElementById("phoneno").value;
    
    event.preventDefault()
    document.getElementById("title").style.display = "none";
    form.style.display = "none";




   
    const id = "id" + Math.random().toString(16).slice(2);

    sessionStorage.setItem("userid",id);
    sessionStorage.setItem("name",Name);
    sessionStorage.setItem("password",password);
    document.getElementById("status").innerHTML = `
                    <div class="elevated-box">
                        <h1 style= color:#218838 >User Registered successfully</h1>
                        <h3 style=font-weight:bold;>User id:  ${id}</h3>
                    </div>`;
        
            

}

form.addEventListener('submit',validate);