var Services = {
    "AC & Appliances": ["AC Repair","TV Repair","Fridge Repair","Washing Machine Repair"],
    "House Cleaning" : ["1BHK","2BHK","3BHK","Bathroom Cleaning"],
    "Vehicle Repair" : ["Two Wheeler","Three Wheeler","Four Wheeler"],
    "PickUp & Drop"  : ["Furniture", "Grossery", "Vehicle"]
      
  }

  var uname = sessionStorage.getItem("name");
  var uid = sessionStorage.getItem("userid");

    


  if(uid){
     document.getElementById("name").innerHTML = `<center><h2 style=color:white;>Welcome ${uname}</h2></center>`

  }
 
  window.onload = function() {
    const uname = sessionStorage.getItem("name");

    if(uname){
      var Stype = document.getElementById("type");
      var Service = document.getElementById("service");
      
      for (var x in Services) {
        Stype.options[Stype.options.length] = new Option(x, x);
      }
      Stype.onchange = function() {
        //empty Chapters- and Topics- dropdowns
        Service.length = 1;
        var selectedcategory = Services[this.value];
        if(selectedcategory){
            for(var i=0; i<selectedcategory.length; i++){
                Service.options[Service.options.length] = new Option(selectedcategory[i],selectedcategory[i])
            }
        }
        
      }

    }

    else{
      alert("Before Enter Register and Login");
      location.replace("index.html");
    }
    
    
  
  }

  var form = document.getElementById("form1");


  function validate(event){

    const date = document.getElementById("date").value;
    const uname = sessionStorage.getItem("name");
    const uid = sessionStorage.getItem("userid");
    const type = document.getElementById("type").value;
    const stat = "Payment success";
    const time = document.getElementById("timeslot").value;
    sessionStorage.setItem("date",date);
    sessionStorage.setItem("uname",uname);
    sessionStorage.setItem("uid",uid);
    sessionStorage.setItem("type",type);
    sessionStorage.setItem("stat",stat);
    sessionStorage.setItem("time",time);

    event.preventDefault()
    document.getElementById("title").style.display = "none";
    form.style.display = "none";


   


   
    var ServieId = "Ser" + Math.random().toString(16).slice(2)
    document.getElementById("status").innerHTML = `<div class="elevated-box">
                                    <h1 style= color:#218838 >Service Booking Confirmed</h1>
                                    <h3 style=font-weight:bold;>Service id:  ${ServieId}</h3>
                                    <p style=font-weight:bold;>Service date: ${date}</p>
                                    <p style=font-weight:bold;>Time Slot: ${time}</p>
                                    </div>`;

    
   

}

function logout(){
  sessionStorage.clear();
  
}


form.addEventListener('submit',validate);

  