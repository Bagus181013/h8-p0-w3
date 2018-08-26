//mendapatkan data yang sudah di splice
function dataHandling2(a){
    a.splice(1,1,"Roman Alamsyah Elsharawy");
    a.splice(2,1,"Provinsi Bandar Lampung");
    a.splice(4,1,"Pria");
    a.splice(5,0,"SMA Internasional Metro");

    return a;
}

//mendapatkan bulan
function getMonth(month){
    switch(month){
        case '01' :
          return 'Januari';
          break;
        case '02' : 
          return 'Februari';
          break;
        case '03' :
          return 'Maret';
          break;
        case '04' :
          return 'April';
          break;
        case '05' :
          return 'Mei';
          break;
        case '06' :
          return 'Juni';
          break;
        case '07' :
          return 'Juli';
          break;
        case '08' : 
          return 'Agustus';
          break;
        case '09' :
          return 'September';
          break;
        case '10' :
          return 'Oktober';
          break;
        case '11' :
          return 'November';
          break;
        case '12' :
          return 'Desember';
          break;
        default:
          return 0;
          break;
      }
}


// 1. Input data, lalu data di proses menggunakan function dataHandling2
//     yang di dalamnya fungsi tersebut menggunakan proses splice
//     data menjadi data yang sudah berubah karena proses splice
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
var afterSplice = dataHandling2(input);
console.log(afterSplice);

// 2. merubah nilai dari afterSplice
//    afterSplice yang saat ini tidak sama dengan afterSplice sebelumnya
//    karena sudah di rubah dengan ketentuan
//    data lama ( afterSplice ) = afterSplice[3]-->> data yang berada di index 3 
//    dengan ketentuan index di mulai dari 0,1,2,3
afterSplice = afterSplice[3];

// 3. memproses afterSplice menggunakan split, dengan '/' sebagai pemisahnya
//    split berfungsi untuk membuat data menjadi kata2, tetapi kata2 tersebut
//    tetap bertipe array, sesuai dengan pemisahnya yang tlah kita tentukan sebagai pemisah
var afterSplit = afterSplice.split('/')

// 4. membuat variabel Month menggunakan function getMonth
//    di sini proses pemasukan data untuk function getMonth
//    dengan menentukan index yang akan di proses adalah index 1 
//    dari data '21','05','1989' index ke 1 adalah '05'
var month = getMonth(afterSplit[1]);
console.log(month);

// 5. proses menggunakan sort tetap hasil yang descending, dengan ketentuan di dalam function dan return
var afterSorting = afterSplit.sort(function(a,b){
  return b - a;
});
console.log(afterSorting);

// 6. proses menggabungkan dengan join, yang dimana '-' sebagai penggabung
afterSplit = afterSplice.split('/');
var afterJoin = afterSplit.join("-");
console.log(afterJoin);

// 7. proses mengambil irisan dari sebuah array menggunakan slice
//    dengan ketentuan mengambil index ke 1 dari data input 
//    pada index ke 1, di ambil dari irisan ke 0 sampai dengan irisan ke 15
var afterSlice = dataHandling2(input)[1];
afterSlice = afterSlice.slice(0,15);
console.log(afterSlice);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */