const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#666666",
"#737373",
"#808080",
"#8c8c8c",
"#999999",
"#a6a6a6",
"#b3b3b3",
"#bfbfbf",
"#cccccc",
"#d9d9d9",
"#e6e6e6",
"#f2f2f2",
"#ffffff",
"#e2e2e2",
"#c6c6c6",
"#a9a9a9",
"#8d8d8d",
"#717171",
"#555555",
"#383838",
"#1c1c1c",
"#000000"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
