const robot = document.querySelector('.robot')
const button = document.getElementsByTagName('button')

//button[0].innerHTML = button[0].getAttribute
//Challenge: Make the robot move when you click it. Don't forget to share you robot on
//Discord! Feel free to play around with the styling before doing so!
for(let i=0;i<button.length;i++)
    button[i].innerHTML=button[i].id
//declare a variable
let vLeft = 0
let vTop = 0

function moveTop() {
    robot.style.top = (vTop-=50) + 'px'
}
function moveDown() {
    
    robot.style.top = (vTop+=50) + 'px'
}
function moveLeft() {
    robot.style.left = (vLeft-=50) + 'px'
}
function moveRight() {
    
    robot.style.left = (vLeft+=50) + 'px'
}

//document.getElementById('top').setAttribute('left','10px')
//document.getElementById('down').setAttribute('style', 'left:25px;');
document.getElementById('top').addEventListener('click', moveTop)
document.getElementById('down').addEventListener('click', moveDown)
document.getElementById('left').addEventListener('click', moveLeft)
document.getElementById('right').addEventListener('click', moveRight)