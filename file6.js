class Kelamin {
  constructor(nama, ukuran) {
    this.nama = nama;
    this.ukuran = ukuran;
    this.kentu = (istri) => `nama saya ${this.nama}, saya memasukkan kontol saya yang berukuran ${this.ukuran} cm ke dalam vagina ${istri}`;
  }
}

let ardi = new Kelamin("ardi", 22);
console.log(ardi.kentu("bernica Leony"));
