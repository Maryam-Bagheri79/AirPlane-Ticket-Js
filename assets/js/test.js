//! Buy Tickets Online : 83

let city = {
    qom: ['قم', 'کهک', 'ونارچ', 'جعفریه'],
    teh: ['ملارد', 'اسلام اباد', 'پاکدشت'],
    esf: ['سلفچگان', 'دلیجان', 'گلپایگان'],
}
let startProvine = prompt('مبدا خود را وارد کنید')

let provineArray = city[startProvine]


provineArray.forEach(function (city) {
    console.log(city)
});