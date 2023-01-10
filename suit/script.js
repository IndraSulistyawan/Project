

function pilcom() {
    // angka yang dikeluarkan oleh math random adalah dari 0-1 
    const com = Math.random();

    if(com < 0.34) return 'batu';
    if(com >= 0.34 && com < 0.64) return 'gunting';
    return 'kertas'
}

// bisa juga 
/* function pilcom() {
    cons com = Math.random()
    if(com < 0.34){
       com = 'batu'
    }else if(com >= 0.34 && com < 0.64){
        com = 'gunting'
    }else{
        com = 'kertas'
    }
}
 */

//membuat rule pada game
function hasil(com, player) {
    if(player == com) return 'Draw';
    if(player == 'batu') return (com == 'gunting') ? 'Win' : 'Lose';
    if(player == 'gunting') return (com == 'kertas') ? 'Win' : 'Lose';
    if(player == 'kertas') return (com == 'batu') ? 'Win' : 'Lose';
}
//akhir rule

//membuat function untuk saat putar() jalan h1.info kosong terlebih dahulu
function clear() {
    //menangkap .info lalu membuat inner html ""
    const info = document.querySelector('.info').innerHTML = ""
}

//membuat function untuk com supaya seperti mengacak pilihan
function putar(){ 
    
    
    //menangkap element yang diperlukan
    const imgKomputer = document.querySelector('.pilcom')
    const gambar = ['batu', 'gunting', 'kertas']
    //menggunakan let karena value dari i akan berubah i++
    let i = 0;
    //const new date adalah mengambil waktu saat ini, atau saat function dijalankan
    //getTime untuk merubah waktu yang diambil menjadi milisecond
    const waktu = new Date().getTime();
    const imgkom = document.querySelector('.pilicom')
    const imgPlayer = document.querySelector('.piliplayer')
    
    //menggunakan set interval digunakan untuk mengambil fungsi beberapa kali dalam satuan milidetik
    //****setinterval(namaFunction(){    syntax code   }, 100(waktu yang diinginkan))}**********************8
    setInterval(function() {
        //////jika waktu sekarang dalam mili detik -(dikurang) waktu(pada var) > (lebih dari) 1000 milisecond(1 detik)
        if(new Date().getTime() - waktu > 1000){
            //hapus interval
            clearInterval;
            //return digunakan untuk keluar dari function
            return;
        }
        //loop untuk merubah gambar secara terus menerus dan berulang ulang
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        /////jika i (yang sudah ++) ==(sama dengan) panjang/isi dari ARRAY var gambar. ubah/tugaskan i = 0 
        if(i == gambar.length) i = 0;


        //memanggil function
        clear();
        //membuat display com dan player menjadi tanda tanya 
        imgkom.setAttribute('src', 'img/tanda-tanya.png')
        imgPlayer   .setAttribute('src', 'img/tanda-tanya.png')

        //setiap berapa milisecond interval berulang
    }, 100)}

    

// MENGGUNAKAN EVENT LOOP
const player = document.querySelectorAll('#player img');
// untuk setiap element pada pilihanPlayer 
//pil pada function merepresentasikan 1 buah element di dalamnya
player.forEach(function(pil) {
// console.log(pil) //expect img src alt class
    pil.addEventListener('click', function() {

    //comp diambil  pilcom
    const comp = pilcom();
    // pil player  diambil dari className batu
    const pilihanPlayer = pil.className;
    //gethasil didapatkan dari function hasil
    const getHasil = hasil(comp, pilihanPlayer);
    console.log('com : ' + comp)
    console.log('player: ' + pilihanPlayer)
    console.log(getHasil)
    

    //memanggil function interval
    putar();


    //set di gunakan untuk membuat sebuah output dalam waktu yang di tentukan dalam milisecond atau //// untuk menjeda sebuah function selama waktu tertentu

    //setTimeOut(function(){   syntax code  }, 1000(dalam milisecond))*****************************8
    setTimeout(function(){

        const imgcom = document.querySelector('.pilcom')
        //menambahkan attribute src dengan value img/ + sesuai var + png
        imgcom.setAttribute('src', 'img/' + comp + '.png'); 
        const imgkom = document.querySelector('.pilicom')
        imgkom.setAttribute('src', 'img/' + comp + '.png'); 
    
        //mengambil h1.info 
        const info = document.querySelector('.info')
        info.innerHTML = getHasil
    
        const imgPlayer = document.querySelector('.piliplayer')
        imgPlayer.setAttribute('src', 'img/' + pilihanPlayer + '.png')

        //menambahkan waktu tertentu dalam milisecond
        }, 1000)
    })

})










// INI ADALAH VERSI PANJANG DARI 3 EVENT
// // menangkap class batu dari html
// const batu = document.querySelector('.batu')
// // membuat event listener
// batu.addEventListener('click', function() {
//     //comp diambil  pilcom
//     const comp = pilcom();
//     // pil player  diambil dari className batu
//     const pilihanPlayer = batu.className;
//     //gethasil didapatkan dari function hasil
//     const getHasil = hasil(comp, pilihanPlayer);
//     console.log('com : ' + comp)
//     console.log('player: ' + pilihanPlayer)
//     console.log(getHasil)
//     const imgcom = document.querySelector('.pilcom')
//     //menambahkan attribute src dengan value img/ + sesuai var + png
//     imgcom.setAttribute('src', 'img/' + comp + '.png'); 
//     const imgkom = document.querySelector('.pilicom')
//     imgkom.setAttribute('src', 'img/' + comp + '.png'); 
    
//     const info = document.querySelector('.info')
//     info.innerHTML = getHasil

//     const imgPlayer = document.querySelector('.piliplayer')
//     imgPlayer.setAttribute('src', 'img/' + pilihanPlayer + '.png')
// })

// const pGunting = document.querySelector('.gunting')
// // membuat event listener
// pGunting.addEventListener('click', function() {
//     //comp diambil  pilcom
//     const comp = pilcom();
//     // pil player  diambil dari className batu
//     const pilihanPlayer = pGunting.className;
//     //gethasil didapatkan dari function hasil
//     const getHasil = hasil(comp, pilihanPlayer);
//     console.log('com : ' + comp)
//     console.log('player: ' + pilihanPlayer)
//     console.log(getHasil)
    
//     const imgcom = document.querySelector('.pilcom')
//     //menambahkan attribute src dengan value img/ + sesuai var + png
//     imgcom.setAttribute('src', 'img/' + comp + '.png'); 
//     const imgkom = document.querySelector('.pilicom')
//     imgkom.setAttribute('src', 'img/' + comp + '.png'); 
    
//     const info = document.querySelector('.info')
//     info.innerHTML = getHasil

//     const imgPlayer = document.querySelector('.piliplayer')
//     imgPlayer.setAttribute('src', 'img/' + pilihanPlayer + '.png')
// })

// const pKertas = document.querySelector('.kertas')
// // membuat event listener
// pKertas.addEventListener('click', function() {
//     //comp diambil  pilcom
//     const comp = pilcom();
//     // pil player  diambil dari className batu
//     const pilihanPlayer = pKertas.className;
//     //gethasil didapatkan dari function hasil
//     const getHasil = hasil(comp, pilihanPlayer);
//     console.log('com : ' + comp)
//     console.log('player: ' + pilihanPlayer)
//     console.log(getHasil)

//     const imgcom = document.querySelector('.pilcom')
//     //menambahkan attribute src dengan value img/ + sesuai var + png
//     imgcom.setAttribute('src', 'img/' + comp + '.png'); 
//     const imgkom = document.querySelector('.pilicom')
//     imgkom.setAttribute('src', 'img/' + comp + '.png'); 
    
//     const info = document.querySelector('.info')
//     info.innerHTML = getHasil
// })