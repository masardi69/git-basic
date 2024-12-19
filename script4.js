class Mobil {
  constructor(merk, harga) {
    this.merk = merk;
    this.harga = harga;
  }
  jumlahKembalian(bayar) {
    return bayar - this.harga;
  }
}

let mobilJoni = new Mobil("toyota", 100000000);
console.log(`joni membeli mobil ${mobilJoni.merk}, seharga ${mobilJoni.harga}, \n joni membayar sebesar Rp 200000000, \n`);
console.log(" joni mendapat kembalian sejumlah" + mobilJoni.jumlahKembalian(200000000));
