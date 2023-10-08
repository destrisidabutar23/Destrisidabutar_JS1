// if, else, nested if

let cuaca = "hujan";

if (cuaca === "cerah") {
    console.log("Cuaca cerah, bagus untuk bermain di luar.");
} else if (cuaca === "hujan") {
    console.log("Cuaca hujan, lebih baik tinggal di dalam rumah.");
} else if (cuaca === "berawan") {
    console.log("Cuaca berawan, mungkin akan ada sedikit matahari.");
} else {
    console.log("Cuaca tidak dikenal, periksa lagi nanti.");
}

// Switch case

let buah = "Anggur";

switch (buah) {
    case "Apel":
        console.log("Buah ini adalah Apel.");
        break;
    case "Jeruk":
        console.log("Buah ini adalah Jeruk.");
        break;
    case "Pisang":
        console.log("Buah ini adalah Pisang.");
        break;
    case "Anggur":
        console.log("Buah ini adalah Anggur.");
        break;
    default:
        console.log("Buah ini tidak dikenal.");
}

// for statement
let daftarBuah = ["Apel", "Jeruk", "Pisang", "Anggur", "Mangga"];

for (let i = 0; i < daftarBuah.length; i++) {
    console.log(daftarBuah[i]);
}

//  while

let nilai = 5;

while (nilai <= 10) {
    if (nilai % 2 !== 0) {
        console.log("Bilangan ganjil: " + nilai);
    }
    nilai++;
}


// do while
let angka = 1;

do {
    console.log("Iterasi ke-" + angka);
    angka++;
} while (angka <= 5);


//function

function sapaan(nama) {
    console.log("Halo, " + nama + "!");
}
sapaan("Destri");



