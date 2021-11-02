

let bodyElement = document.getElementsByClassName('bodyelement')[0]


let elementHeight = document.body.scrollHeight; 
let elementWidth = document.body.clientWidth; 

console.log('scrollheight', elementHeight)

console.log('element width greater')
bodyElement.style.backgroundPositionY = `${elementHeight-  (elementWidth>700?260:140) }px`

