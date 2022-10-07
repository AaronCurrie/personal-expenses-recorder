function setBars(dataArr, bars) { 
    const sorted = [...dataArr.sort((a, b)=> b.amount - a.amount)]
    const hundredP = sorted[0].amount;
    sorted.forEach(day => {
    day.percent = String(Math.round((day.amount / hundredP) * 100));
    })

    for(let i = 0; i < bars.length; i++) {
        for(let j = 0; j < sorted.length; j++) {
            if(bars[i].id === sorted[j].day) {
                bars[i].style.height = sorted[j].percent+'%'; 
                continue
            }
        }
    };

    const d = new Date();
    let day = d.getDay();

    bars[day].classList.add('today')
}



fetch('./data.json')
.then((response) => response.json())
.then((json) => {

    console.log(json)

    const bars = [...document.querySelectorAll('.bar')]
    const spend = [...document.querySelectorAll('.spend')]

    setBars(json, bars)

    

});



