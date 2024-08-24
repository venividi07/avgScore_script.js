function calcAverage(scor1, scor2, scor3) {
    media = (scor1 + scor2 + scor3) / 3;
    return media;       
}
function checkWinner(avgDelfinii, avgKoalas) {
        if (avgDelfinii >= avgKoalas * 2) {
            console.log(`Delfinii castiga (${avgDelfinii} vs ${avgKoalas})`);
        }
        else if (avgKoalas >= avgDelfinii * 2) {
            console.log(`Koalas castiga (${avgKoalas} vs ${avgDelfinii})`);
        }
        else {
            console.log('Nici o echipa nu castiga');
        }
}
//date test 1
console.log(`Scorul mediul pentru Delfini este ${calcAverage(44, 23, 71)}`);
console.log(`Scorul mediul pentru Koalas este ${calcAverage(65, 54, 49)}`);
checkWinner(46, 56);
//Date test 2
console.log(`Scorul mediul pentru Delfini este ${calcAverage(85, 54, 41)}`);
console.log(`Scorul mediul pentru Koalas este ${calcAverage(23, 34, 27)}`);
checkWinner(60, 28);