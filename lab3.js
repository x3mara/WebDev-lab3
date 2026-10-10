let label = document.getElementById("quantity_label")

let b_update = document.getElementById("update")
let b_reset = document.getElementById("reset")
let b_i1 = document.getElementById("i1")
let b_i2 = document.getElementById("i2")
let b_i3 = document.getElementById("i3")
let current_count = 0;

b_update.addEventListener("click",update)
b_reset.addEventListener("click",reset)
b_i1.addEventListener("click",(event) => add(1))
b_i2.addEventListener("click",(event) => add(2))
b_i3.addEventListener("click",(event) => add(3))

function update(){
    label.textContent = current_count
}

function reset(){
    current_count = 0;
}

function add(x){
    current_count += x;
    console.log(current_count)
}