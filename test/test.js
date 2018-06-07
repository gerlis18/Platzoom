const expect = require('chai').expect;
const platzoom = require('..').default;

describe('#platzoom', function () {
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
        const translation = platzoom('Programar');
        expect(translation).to.equal('Program');
    });

    it('Si la palabra inicia con Z, se le añade "pe" al final.', function () {
        const translation = platzoom('Zorro');
        const translation1 = platzoom('Zarpar');

        expect(translation).to.equal('Zorrope');
        expect(translation1).to.equal('Zarppe');
    });

    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con con un guión medio', function () {
        const translation = platzoom('abecedario');
        const translatio1 = platzoom('diezpalabras');

        expect(translation).to.equal('abece-dario');
        expect(translatio1).to.equal('diezpa-labras');
    });

    it('Por último, si la palabra original en un palíndromo, ninguna ragla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
        const translation = platzoom('sometemos');
        const translatio1 = platzoom('oso');

        expect(translation).to.equal('SoMeTeMoS');
        expect(translatio1).to.equal('OsO');
    });
});