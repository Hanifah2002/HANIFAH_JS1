// 1. If Else, Nested If

// - If Else
// const soalSatuIfElse = prompt("Masukan nama anda");
// if((soalSatuIfElse == "") || (soalSatuIfElse == null)){
//     alert("Nama tidak boleh kosong");
// }else {
//     alert("Nama anda " + soalSatuIfElse);
// }

// - Nested If
// const soalSatuNestedIf = prompt("Masukan nama anda");
// if((soalSatuNestedIf == "") || (soalSatuNestedIf == null)){
//     alert("Nama tidak boleh kosong");
// }else {
//     const umur = prompt("Masukan umur anda");
//     if(umur > 20){
//         alert("Nama anda " + soalSatuNestedIf + ", umur " + umur + " tahun " +"anda sudah dewasa")
//     }else if(umur > 12){
//         alert("Nama anda " + soalSatuNestedIf + ", umur " + umur + " tahun " + "anda sudah remaja")
//     }else {
//         alert("Nama anda " + soalSatuNestedIf + ", umur " + umur + " tahun " + "anda masih anak - anak")
//     }
// }

// 2. Switch Case
// const soalDuaSwitchCase = prompt("Masukan hari *huruf kecil semua*");
// switch (soalDuaSwitchCase) {
//     case "senin":
//         alert("Monday");
//         break;
//     case "selasa":
//         alert("Tuesday");
//         break;
//         case "rabu":
//         alert("Wednesday");
//         break;
//     case "kamis":
//         alert("hursday");
//         break;
//         case "jumat":
//         alert("Friday");
//         break;
//     case "sebtu":
//         alert("Saturday");
//         break;
//     case "minggu":
//         alert("Sunday");
//         break;
//     default:
//         alert("Hari salah")
// }

// 3.for Statement
// const soalTigaFor = prompt("Masukan nama anda");
// const soalTigaForCetakNama = parseInt(prompt("Masukan berapa kali anda akan cetak nama *masukan angka saja*"));
// for (let index = 1; index <= soalTigaForCetakNama; index++) {
//     document.body.innerHTML += index + ". " + soalTigaFor + " | ";  
// }

// 4. While, Do While

// - While
// let inginMencobaLagi = true
// while(inginMencobaLagi){
//     const soalEmpatWhile = prompt("Masukan nama anda");
//     if((soalEmpatWhile == "") || (soalEmpatWhile == null)){
//         alert("Nama tidak boleh kosong");
//     }else {
//         const umur = prompt("Masukan umur anda");
//         if(umur > 20){
//             alert("Nama anda " + soalEmpatWhile + ", umur " + umur + " tahun " +"anda sudah dewasa")
//         }else if(umur > 12){
//             alert("Nama anda " + soalEmpatWhile + ", umur " + umur + " tahun " + "anda sudah remaja")
//         }else {
//             alert("Nama anda " + soalEmpatWhile + ", umur " + umur + " tahun " + "anda masih anak - anak")
//         }
//     }
//     inginMencobaLagi = confirm("Ingin mencoba Lagi?");
//     if(inginMencobaLagi == true){
//         inginMencobaLagi = true;
//     }else {
//         inginMencobaLagi = false;
//     }
// }

// - Do While
// const soalEmpatDoWhile = prompt("Masukan nama anda");
// const soalEmpatDoWhileCetakNama = parseInt(prompt("Masukan berapa kali anda akan cetak nama *masukan angka saja*"));
// console.log(typeof(soalEmpatDoWhileCetakNama))
// let nilaiAwal = 1;
// do {
//     document.body.innerHTML += nilaiAwal + ". " + soalEmpatDoWhile + " | ";
//     nilaiAwal++;
// }while (nilaiAwal <= soalEmpatDoWhileCetakNama)


// 5.Function 
// const keliling = parseInt(prompt("Masukan nilai keliling lingkaran *hanya angka*"));
// function HitungLingkaran(jariJari){
//     const pi = 3.14;
//     const hasil = jariJari / (2 * pi);
//     alert("Hasilnya : " + hasil);
// }
// HitungLingkaran(keliling);


// Note *Jika ingin dijalankan komentarkan terlebih dahulu soal yang lain*
