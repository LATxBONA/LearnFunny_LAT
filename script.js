function correctAnswer() {
    alert("Bạn đã trả lời đúng!");
}

function askAgain() {
    document.getElementById("dialog").classList.add("hidden");
    document.getElementById("secondDialog").classList.remove("hidden");
}

function moveDialog() {
    let dialog = document.getElementById("secondDialog");
    let safeZone = 40; // Khoảng cách an toàn từ mép màn hình
    
    // Tính toán giới hạn di chuyển
    let maxWidth = window.innerWidth - dialog.offsetWidth - safeZone;
    let maxHeight = window.innerHeight - dialog.offsetHeight - safeZone;
    
    // Đảm bảo dialog không di chuyển ra khỏi vùng nhìn thấy được
    let x = Math.min(Math.max(safeZone, Math.random() * maxWidth), maxWidth);
    let y = Math.min(Math.max(safeZone, Math.random() * maxHeight), maxHeight);
    
    dialog.style.left = x + "px";
    dialog.style.top = y + "px";
}

// Thêm xử lý cho thiết bị cảm ứng
document.addEventListener('DOMContentLoaded', function() {
    let moveButton = document.getElementById('moveButton');
    moveButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        moveDialog();
    });
});