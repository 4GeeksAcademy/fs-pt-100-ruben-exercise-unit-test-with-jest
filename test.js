// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 150,05 JPY", function() {

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(4.5);

    // Si 1 euro son 1.07 dólares que a su vez son 156,5 yens, entonces 4.5 euros debe ser (4.5 * 1.07 * 156,5)
    const expected = 4.5 * 1.07 * 156.5;

    // Hago mi comparación (la prueba)
    expect(yens).toBe(expected); 
})

test("One JPY should be 0,0052 GBP", function() {

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(5);

    // Si 1 euro son 156,5 yens que a su vez son 0,89 pounds, entonces 5 euros debe ser (5 * 156,5 * 0,89)
    const expected = 5 * 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected); 
})