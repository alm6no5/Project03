const title = document.getElementById("title");
const message = document.querySelector(".message");
const box = document.getElementById("box");

title.textContent = "Welcome Zaid";
message.textContent = "The DOM was updated successfully.";

title.style.color = "blue";
box.classList.add("active");
