class Mobil {
  constructor() {
    this.merk = "";
    this.harga = "";
    this.pabrik = "";
  }
  function() {
    return "mobil " + this.merk + " telah terjual ";
  }
}

let mobilJoni = new Mobil();
mobilJoni.merk = "Honda";
mobilJoni.harga = 125000000;
mobilJoni.pabrik = "Jepang";
console.log(`Joni membeli mobil dengan merk ${mobilJoni.merk} seharga ${mobilJoni.harga}, mobil tersebut berasal dari pabrik di ${mobilJoni.pabrik}`);
