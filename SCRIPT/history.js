const date = sessionStorage.getItem("date");
const uname = sessionStorage.getItem("uname");
const uid = sessionStorage.getItem("uid");
const type = sessionStorage.getItem("type");
const stat = sessionStorage.getItem("stat");
const time = sessionStorage.getItem("time");

if(uname){

    document.getElementById("histroy").innerHTML = `<table style="width:100%">
<tr>
  <th>USER ID</th>
  <th>USER NAME</th> 
  <th>SERVICE DATE</th>
  <th>SLOT</th>
  <th>TYPE OF SERVICE</th> 
  <th>STATUS</th>
</tr>
<tr>
  <td>${uid}</td>
  <td>${uname}</td>
  <td>${date}</td>
   <td>${time}</td>
  <td>${type}</td>
  <td style=color:#28a745>${stat}</td>
</tr>
</table>`

}

      