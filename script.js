var inputbox = document.querySelector("#input");
var addbtn =document.querySelector("#add");
var list = document.querySelector("#list");
var removebtn = document.querySelector(".removetodo");
var clearbtn = document.querySelector("#clearbtn");

function Todo(){
    var inputvalue =inputbox.value;
    if(inputvalue.length == 0 ){
        alert("Please return the Value");
    }
     else{
        var li= document.createElement("li");
        li.textContent = inputvalue;
        var removeIcon = document.createElement("span"); 
        removeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="none" stroke="#e01717" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 23L23 9m0 14L9 9"/></svg>`;
        removeIcon.style.cursor = "pointer";   
        list.appendChild(li);
        li.appendChild(removeIcon);
        inputbox.value = "";
    }
    removeIcon.addEventListener("click", function() { 
        li.remove(); 
    });
    clearbtn.addEventListener("click" , function(){
        list.innerHTML="";
    })
}