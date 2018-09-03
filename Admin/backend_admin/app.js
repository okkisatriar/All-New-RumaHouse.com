const mysql = require ('mysql');
const bodyparser = require ('body-parser');
const koneksi = require('cors');
const express = require('express');
const upload = require('express-fileupload');


const app = express();
const dbs = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rumahouse',
        port: '3306'
    }
);

dbs.connect();

app.use(koneksi());
app.use(upload());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// Fungsi Tampilkan List Produk
app.get('/Product', (req, res) =>
{
    var panggilData = `SELECT * FROM table_addproduk`;
    dbs.query(panggilData, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send(result);
        }
    });
});

/** Untuk mengambil data per baris */
app.get('/Product/:id', (req, res) => {
    /** Menyiapkan query untuk ke MySQL */
    var grabData = `SELECT * FROM table_addproduk WHERE id = ${req.params.id}`;
    /** Mengeksekusi query dengan syntax nodeJS */
    dbs.query(grabData, (err, hasilquery) => {
        if(err){
            /** Mengeluarkan pesan error apabila terjadi kesalahan */
            throw err;
        } else {
            /** Menyiapkan hasil query untuk siap dikirim */
            res.send(hasilquery);
        }
    })
});

/** Untuk mengupdate data */
app.post('/Productupdate', (req, res) => {
    var id = req.body.id;
    var posting = req.body.posting;
    var nama = req.body.nama;
    var deskripsi = req.body.deskripsi;
    var tanggaldibuat = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');

// Ketika dapat kiriman yang berbentuk files maka akan dijalankan fungsi ini
    if(req.files){
        var fungsiFile = req.files.file;
        var foto_produk = req.files.file.name;
        fungsiFile.mv("./tampungfile/"+foto_produk, (kaloError) => {
            if(kaloError){
                console.log(kaloError);
                res.send('Upload failed');
            } else {
                res.send('Upload berhasil');
            }
        })
    }

    var queryUpdate = `UPDATE table_addproduk SET posting = "${posting}", nama = "${nama}", deskripsi = "${deskripsi}", foto_produk = "${foto_produk}", tanggaldibuat = "${tanggaldibuat}" WHERE id="${id}"`;
    dbs.query(queryUpdate, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send('Update berhasil !');
        }
    });
});























// Fungsi Tambah data Produk
app.post('/okkisatria', (req, res) => {
    
    var posting = req.body.posting;
    var nama = req.body.nama;
    var harga = req.body.harga;
    var status = req.body.status;
    var deskripsi = req.body.deskripsi;
    var foto_produk = req.files.file.name;
    var posted = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
        
    // console.log(posting);
    // console.log(nama);
    // console.log(status);
    // console.log(deskripsi);
    // console.log(foto_produk);

    if(req.files)
    {
        var fungsifile = req.files.file;

        fungsifile.mv("./tampungfile/"+foto_produk, (error) =>
        {
            if(error)
            {
                console.log(error);
                res.send("Upload Fail")
            }
            else
            {
                res.send("upload Success")
            }
        });
    }

    var tambahdata = `INSERT INTO table_addproduk VALUES ("${''}", "${nama}", "${posting}", "${harga}", "${status}", "${deskripsi}", "${foto_produk}", "${posted}")`;
    dbs.query(tambahdata, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send('Data berhasil disimpan');
            // res.send('Data berhasil diinput');
            console.log('Data berhasil disimpan');
        }
    });
});

// //Product//
// // Fungsi Edit data Produk
// app.get('/Productedit/:id', (req, res) =>
// {
//     var lempardata = `SELECT * FROM table_addproduk WHERE id = ${req.params.id}`;
//     dbs.query(lempardata, (err, result) =>
//     {
//         if (err)
//         {
//             throw err;
//         }
//         else 
//         {
//             res.send(result);
//         }
//     });
// });

// app.post('/Productupdate', (req, res) =>
// {
//     var id = req.body.id;
//     var juduliklan = req.body.juduliklan;
//     var namauser = req.body.namauser;
//     // v
//     var deskripsi = req.body.deskripsi;
//     var posted = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');

//     console.log(id);
//     console.log(juduliklan);
//     console.log(namauser);
//     // console.log(foto_produk);
//     console.log(deskripsi);

//     // if(req.files){
//     //     var fungsifile = req.files.file;
//     //     fungsifile.mv("./tampungfile/"+fileNama, (error) =>
//     //     {
//     //         if(err)
//     //         {
//     //             console.log(err);
//     //             res.send("Upload Fail")
//     //         }
//     //         else
//     //         {
//     //             res.send("upload Success")
//     //         }
//     //     });
//     // }
    
//     var update = `UPDATE table_addproduk SET posting="${juduliklan}", nama ="${namauser}", deskripsi="${deskripsi}", foto_produk="${''}", tanggaldibuat="${posted}" WHERE id="${id}"`;

//     dbs.query(update, (err, result) =>
//     {
//         if (err)
//         {
//             throw err;
//         }
//         else
//         {
//             res.send('Update berhasil !');
//         }
//     });
// });

// Fungsi Delete Data Produk
app.post('/Producthapus', (req, res) =>
{
    var idprod=req.body.idprod;
    console.log(req.body.id);
    var hapusdata = `DELETE FROM table_addproduk WHERE id=${idprod}`;
    dbs.query(hapusdata, (err,result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send('Data Terhapus')
        }
    })
})

// Category//
// Fungsi Tambah Category
app.post('/Categorytambah', (req, res) =>
{
    var namacategory = req.body.namacategory;
    // console.log(namacategory)
    var tambahdatacate = `INSERT INTO master_category SET nama_category="${namacategory}"`;
    dbs.query(tambahdatacate, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send('Update database sukses')
        }
    });
});

app.post('/Categoryupdate', (req,res) =>
{
    var id = req.body.id;
    var namacategory = req.body.namacategory;
    var posted = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    var querycate = `UPDATE master_category SET nama_category = "${namacategory}", tanggal_category = "${posted}" WHERE id = "${id}"`
    console.log(id)
    console.log(namacategory)
    dbs.query(querycate, (err, result) =>
    {
        if (err)
        {
            throw err
        }
        else
        {
            res.send(result)
        }
    });
});

app.get('/Categorylist', (req, res) =>
{
    var panggilcategory = `SELECT * FROM master_category`;
    dbs.query(panggilcategory, (err, result) =>
    {
        if (err)
        {
            throw err
        }
        else
        {
            res.send(result)
        }
    });
});

//Fungsi Edit Category 
app.get('/Categoryedit/:id', (req, res) =>
{
    var id = req.params.id;
    var lemparcate = `SELECT * FROM master_category WHERE id = ${id}`;
    dbs.query(lemparcate, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else 
        {
            res.send(result);
        }
    });
});

// Fungsi Hapus Category
app.post('/Categoryhapus', (req, res) =>
{
    var idcate = req.body.idcate;
    console.log(idcate)
    var hapuscate = `DELETE FROM master_category WHERE id = ${idcate}`;
    console.log(idcate)
    dbs.query(hapuscate, (err, result) =>
    {
        if (err)
        {
            throw err
        }
        else
        {
            res.send('Data Terhapus')
        }
    });
});

// Fungsi Login
app.post('/login', (req, res) =>
{
    var inputEmail = req.body.email;
    var idtampil = req.body.id_user;
    var passwordUser = req.body.password;
    var passwordEncrypt = crypto.createHash('sha256' , secret).update(passwordUser).digest('hex');
    
    var getData = 'SELECT * FROM table_user';
    dbs.query(getData, (err,result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {        
            for(i=0 ; i<result.length ; i++)
            {
                if ((inputEmail == result[i].email) && (passwordEncrypt == result[i].password))
                {
                 console.log('Login Sukses')
                 var status = '1';
                 res.send(status);
                 break;
                }
                else if (i === result.length-1)
                {
                 console.log('Login Gagal')
                 var status = '-1';
                 res.send(status);
                 break;
                }
            }
        }
    });
});

var port = 8002;
app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});
