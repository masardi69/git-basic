class Mobil {
  constructor(merk, harga, pabrik) {
    this.merk = merk;
    this.harga = harga;
    this.pabrik = pabrik;
  }
}

let mobilErick = new Mobil("kontol", 123000000, "mesir");
let mobilDamar = new Mobil("tempik", 12000000, "irak");

console.log(
  `erick mempunyai mobil bermerk ${mobilErick.merk} seharga ${mobilErick.harga} yang dibuat di ${mobilErick.pabrik}, dan mengalami tabrakan saat balapan dengan mobil Damar yang bermerk ${mobilDamar.merk} seharga ${mobilDamar.harga} hasil pabrikan ${mobilDamar.pabrik}`
);
