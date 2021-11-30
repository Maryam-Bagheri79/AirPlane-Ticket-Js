
let contureisInput = document.querySelector('.selectInput')

let citySelect = document.querySelector('.citySelect')

let addCitySelect

let cities = {
    Iran: ['Tehran', 'Esfahan', 'Tabriz', 'Mashhad'],
    Turkey: ['Istanbol', 'Ankara', 'Izmir', 'Antalya'],
    Usa: ['New York', 'Los Angeles', 'Chicago', 'San Diego'],
    German: ['Berlin', 'Hamburg', 'Munich', 'Dortmund']
}
contureisInput.addEventListener('change', function () {


    citySelect.innerHTML = ''

    cities[contureisInput.value].forEach(function (city) {

        addCitySelect = `<option value="${city}">${city}</option>`

        citySelect.insertAdjacentHTML('beforeend', addCitySelect)
    });
})