var canvas = document.querySelector('canvas');
    canvas.width = 800;
    canvas.height = 600;

var ctx = canvas.getContext('2d');

function circlesValue(r, x, y) {

    this.r = r;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.circles = function() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'green';
        ctx.stroke(); 

    }

    this.move = function() {

        if (this.x + r > canvas.width || this.x - r < 0) {
            this.dx = -this.dx;
        }

        if (this.y + r > canvas.height || this.y - r < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        this.circles();

    }

}

list = [];

for (var i = 0; i < 300; i++) {
    r = 5;
    x = Math.random() * (canvas.width - r * 2) + r;
    y = Math.random() * (canvas.height - r * 2) + r;
    dx = (Math.random() - 0.5) * 2;
    dy = (Math.random() - 0.5) * 2;
    list.push(new circlesValue (r, x, y));
}

function draw() {

    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < list.length; i++) {
        list[i].move();
    }

}

draw();


