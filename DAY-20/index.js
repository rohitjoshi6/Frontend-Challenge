
for (var i=0; i<document.querySelectorAll(".container-btn").length;i++){

    document.querySelectorAll(".container-btn")[i].addEventListener("click", function(){

        var audio= new Audio('sounds/tom-1.mp3');
        audio.play();

    });
     
}


