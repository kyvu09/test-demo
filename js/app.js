
let count = 0;
const add = document.getElementById("add-btn");
const cartDisplay = document.getElementById("cart-count");

add.addEventListener("click", function () {
    if (count < 5) {
        count = count + 1;
        cartDisplay.innerText = count;
        if (count === 5) {
            add.innerText = "đã hết hàng";
            add.style.backgroundColor = "gray";
            add.disabled = true;
        }
    }

});




