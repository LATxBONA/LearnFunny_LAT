

function correctAnswer() {
    alert("Bạn đã trả lời đúng!");
}

function askAgain() {
    document.getElementById("dialog").classList.add("hidden");
    document.getElementById("secondDialog").classList.remove("hidden");
}

function moveDialog() {
    let dialog = document.getElementById("secondDialog");
    let x = Math.random() * (window.innerWidth - dialog.offsetWidth);
    let y = Math.random() * (window.innerHeight - dialog.offsetHeight);
    dialog.style.left = x + "px";
    dialog.style.top = y + "px";
}
