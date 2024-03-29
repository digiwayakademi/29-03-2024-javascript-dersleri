let sonuc;
/*
sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10");
*/
let sayi = 18.12345667;

sonuc = sayi.toPrecision(7);
sonuc = sayi.toFixed(5);

sonuc = Math.round(3.4);


console.log(sonuc);
console.log(typeof sonuc);