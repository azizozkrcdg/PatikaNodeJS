const pi = 3.14;
const arguments = process.argv.slice(2);

let daireninAlani = function(r) {
    return pi * (r*r);
};

let alan = daireninAlani(arguments[0]*1);
console.log(`Yarıçapı ${r} olan dairenin alanı : ${alan}`);

//komutu çalıştırmak için terminal ekranında 'node {dosyaAdi}.js {yarıçap}'