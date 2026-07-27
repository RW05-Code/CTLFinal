document.getElementById("sub").onclick=function(){
    let firstName=document.getElementById("first").value
    document.getElementById("hello").textContent=`Hello ${firstName}`
}