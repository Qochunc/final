
weath = "winter"
let socket = io();
function setup() {
    side = 10

    frameRate(5);
    createCanvas(40 * side, 40 * side);
    background('#acacac');
}





socket.on("data", nkarel);

function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("red");
            }
            else if (matrix[y][x] == 3) {
                fill("yellow");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);

        }
    }

}
function weather() {
    let body = document.getElementById("body");
    

    if (weath == "winter") {
        weath = "spring"
        body.style.backgroundColor = "green";
       

    }
    else if (weath == "spring") {
        weath = "summer"
        body.style.backgroundColor = "yellow";
    }
    else if (weath == "summer") {
        weath = "autumn"
        body.style.backgroundColor = "red";
    }
    else if (weath == "autumn") {
        weath = "winter"
        body.style.backgroundColor = "blue";
    }

}
setInterval(weather, 5000);

setInterval(
    function () {
        socket.on('send matrix', nkarel)
    }, 1000
)
function kill() {
    socket.emit("kill")
}