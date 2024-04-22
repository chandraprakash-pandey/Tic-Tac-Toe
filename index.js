var boxes = document.querySelectorAll(".box");
var reset =  document.querySelector(".Reset");

const winPattern =  [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

for(var i = 0; i < 9 ; i++){
    boxes[i].addEventListener("click", function(){
        console.log("clicked");
    })
}