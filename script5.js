//class dengan method, arrow notation

class Bercinta {
  constructor(pria, wanita) {
    this.pria = pria;
    this.wanita = wanita;
    this.bercinta = (kelamin1, aksi, kelamin2) => `${this.pria} sedang ${aksi} ${kelamin1} ke ${kelamin2} ${this.wanita}`;
  }
}

let leony = new Bercinta("ardi", "leony");
console.log(leony.bercinta("kontol", "memasukkan", "vagina"));

console.log("\n");
