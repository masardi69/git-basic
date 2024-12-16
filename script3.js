class Mobil {
  constructor(merk, harga) {
    this.merk = merk;
    this.harga = harga;
  }
  //fungsi kembalian
  jumlahKembalian(bayar) {
    return bayar - this.harga;
  }
}

let mobilHendrik = new Mobil("pagero sport", 123000000);
console.log(`hendrik membeli mobil dengan merk ${mobilHendrik.merk},\n  seharga ${mobilHendrik.harga} \n`);
let kembalian = mobilHendrik.jumlahKembalian(123000000);
if (kembalian == 0) {
  console.log("anda membayar dengan uang pas ");
} else {
  console.log(`jumblah kembalian = ${kembalian}`);
}
