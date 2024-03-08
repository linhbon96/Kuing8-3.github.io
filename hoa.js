const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Hàm vẽ một cánh hoa hồng
function drawFlower(x, y, angle, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let i = 0; i < Math.PI * 2; i += Math.PI / 10) {
        const x1 = x + size * Math.cos(i + angle);
        const y1 = y + size * Math.sin(i + angle);
        const x2 = x + size * Math.cos(i + angle + Math.PI / 2);
        const y2 = y + size * Math.sin(i + angle + Math.PI / 2);
        ctx.bezierCurveTo(x1, y1, x2, y2, x, y);
    }
    ctx.fillStyle = "#ff0000";
    ctx.fill();
}

// Hàm vẽ bông hoa hồng
function drawRose() {
    for (let i = 0; i < 10; i++) {
        const angle = Math.PI * 2 * i / 10;
        const size = 50 + 20 * Math.random();
        drawFlower(canvas.width / 2, canvas.height / 2, angle, size);
    }
}

drawRose();
