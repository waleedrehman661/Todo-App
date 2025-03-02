var inputbox = document.querySelector("#input");
var addbtn =document.querySelector("#add");
var list = document.querySelector("#list");

function Todo(){
    var inputvalue =inputbox.value;
    if(inputvalue.length == 0 ){
        alert("Please return the Value");
    }
     else{
        var li= document.createElement("li");
        li.innerHTML = `${inputvalue} <i class="fa-regular fa-xmark"></i>`;
        list.appendChild(li);
        inputvalue =""
     }
}