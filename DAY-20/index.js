
for (var i=0; i<document.querySelectorAll(".container-btn").length;i++){

    document.querySelectorAll(".container-btn")[i].addEventListener("click", handleClick);
    
    function handleClick(){
        alert("I got clicked");
    }
}


