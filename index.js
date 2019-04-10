//Latihan 1
// const express = require("express");
// const app = express();

// app.get('/tes',(req,res)=>
// {
//     res.end("test");
// });

// app.post('/tes',(req,res)=>
// { 
//     res.end("test");
// })



// app.listen('8080',(e)=>{
//     console.log(e)
// })

//latihan2

const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/siswa',(request,response)=>{
    response.end("Menampilkan siswa");
})

app.get('/siswa/:nama',(request,response)=>{
    //Proses dengan siswa bernama x
    let namaSiswa = request.params.nama;
    response.end("Menampilkan siswa dengan nama : "+ namaSiswa);
})

app.post('/siswa',(request,response)=>{
    //Proses dengan siswa bernama x
  
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;
    response.end("Menampilkan siswa dengan nama : "+ namaSiswa+ "Alamat : "+alamatSiswa);
   
})  

app.delete('/siswa/:nama',(request,response)=>{
    //Proses dengan siswa bernama x
    let namaSiswa = request.params.nama;
    response.end("Siswa dengan nama : "+ namaSiswa+" Akan Dihapus dari Sistem");
})

app.put('/siswa/:id',(request,response)=>{
    //Proses dengan siswa bernama x
    let id = request.params.id
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;
    response.end("Siswa dengan ID" + id + "Telah Terupdate" );
  
})  

app.listen('8080',(e)=>{
         console.log(e)
    })
