document.documentElement.addEventListener('mousemove', MouseMove)

function MouseMove(event) {
    const clientX = event.clientX
    const clientY = event.clientY
    console.log(clientX, clientY)
}