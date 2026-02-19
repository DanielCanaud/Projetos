let prevbButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicators')
let dots = indicators.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0;
let firstposition = 0
let lastposition = items.length - 1

function setSlider(){
   let itemOld = container.querySelector(' .list .item.active')
    itemOld.classList.remove('active') 


    let dotsOld = indicators.querySelector(' ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicators.querySelector('.number').innerHTML = '0' + (active + 1)
}


nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastposition ? 0 :  active + 1
    setSlider()
    items[active].classList.add('active')
}
prevbButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstposition ?  lastposition :  active - 1
    setSlider()
    items[active].classList.add('active')  
}



