function setData(dataArr, bars, spend) { 
    const sorted = [...dataArr.sort((a, b)=> b.amount - a.amount)]
    const hundredP = sorted[0].amount;
    sorted.forEach(day => {
    day.percent = String(Math.round((day.amount / hundredP) * 100));
    day.spendID = "spend" + day.day;
    })

    for(let i = 0; i < bars.length; i++) {
        for(let j = 0; j < sorted.length; j++) {

            if(bars[i].id === sorted[j].day) {
                bars[i].style.height = sorted[j].percent+'%'; 
            if(spend[i].id === sorted[j].spendID) {
                spend[i].innerHTML = "£" + sorted[j].amount;
            }
                continue
            }
        }
    };

    const d = new Date();
    let day = d.getDay();

    bars[day].classList.add('today')
}

function barHover(bars, spend){
    for(let i = 0; i < bars.length; i++) {
        bars[i].addEventListener("mouseover", () => {
            spend[i].classList.add('active')
            spend[i].classList.remove('hidden') 
        })
        bars[i].addEventListener("mouseout", () => {
            spend[i].classList.remove('active')
            spend[i].classList.add('hidden') 
        })
    }
}



fetch('./data.json')
.then((response) => response.json())
.then((json) => {

    console.log(json)

    const bars = [...document.querySelectorAll('.bar')]
    const spend = [...document.querySelectorAll('.spend')]


    setData(json, bars, spend)
    barHover(bars, spend)
    

});



