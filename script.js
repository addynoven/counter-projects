const btn = document.querySelectorAll("button");
const count = document.querySelector(".main_count");

btn.forEach((ele) => {
    ele.addEventListener("click", (ele) => {
        if (ele.target.innerHTML === "lower count") {
            count.innerHTML = Number(count.innerHTML) - 1;
        } else {
            count.innerHTML = Number(count.innerHTML) + 1;
        }
    });
});
