// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (eur) => {
    return eur*oneEuroIs['USD']
}
console.log(fromEuroToDollar(3.5))

const fromDollarToYen = (eur) => {
    let valueIndollar = eur*oneEuroIs['USD']
    let valueInYen = valueIndollar*oneEuroIs['JPY']
    return valueInYen
}
console.log(fromDollarToYen(4.5));


const fromYenToPound = (eur) => {
    let valueInYen = eur*oneEuroIs['JPY']
    let valueInPound = valueInYen*oneEuroIs['GBP']
    return valueInPound
}
console.log(fromYenToPound(5));

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};