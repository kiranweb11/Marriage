function post()
{
    var man=document.getElementById("name").value;
    var boss=document.getElementById("pass").value;
    if(man=="kiran"&& boss=="kiran"){
        document.getElementById("login").action="sub/index.html";
    }
    else{
        alert("Enter Valid Username or Password")
    }
 };
