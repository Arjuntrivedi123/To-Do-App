let myinput = document.getElementById("inp");
let text = document.querySelector(".text");

function ADD() {
    if (myinput.value == "") {
        alert("Please Enter The Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${myinput.value} <i class="fa-solid fa-trash"></i>`;
    
        text.prepend(newEle);
        
        myinput.value = "";

        newEle.querySelector("i").addEventListener("click", function() {
            newEle.remove();
        });
    }
}