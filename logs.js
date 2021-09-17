let card = document.getElementById('card')
let singleLogCard = document.getElementsByClassName('log-card')[0]
let verticalLine = document.getElementById('vertical-line')
verticalLine.style.left = ((card.clientWidth - singleLogCard.clientWidth) / 2 + 15) + 'px'