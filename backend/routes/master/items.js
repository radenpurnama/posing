var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');


const sequelize = new Sequelize('miniposdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

});

const items = sequelize.define('tblmstbarang',{
    tmb_id: {
        type:  Sequelize.STRING,
        primaryKey: true
    },
    tmb_kode : Sequelize.STRING,
    tmb_nama : Sequelize.STRING,
    tmb_keterangan: Sequelize.STRING,
    tmb_nobarcode: Sequelize.STRING,
    tmb_mfg_date: Sequelize.STRING,
    tmb_exp_date: Sequelize.STRING,
    tmb_no_lot: Sequelize.STRING,
    tmb_image: Sequelize.STRING,
    tmb_warna: Sequelize.STRING,
    tmb_size: Sequelize.STRING,
    tmb_berat: Sequelize.STRING,
    tmb_status: Sequelize.STRING,
    segment1: Sequelize.STRING,
    segment2: Sequelize.STRING,
    segment3: Sequelize.STRING,
    segment4: Sequelize.STRING,
    segment5: Sequelize.STRING,
    creation_date: Sequelize.STRING,
    created_by : Sequelize.STRING,
    last_updated_date : Sequelize.STRING,
    last_updated_by :Sequelize.STRING,
    tmst_id :Sequelize.STRING,
    tmkat_id :Sequelize.STRING,
    tmb_harga_beli :Sequelize.STRING,
    tmb_stock :Sequelize.STRING,
    tmb_harga_jual :Sequelize.STRING,
    tmb_stock_min :Sequelize.STRING,
    tmb_qty1 :Sequelize.STRING,
    tmb_qty2 :Sequelize.STRING,
    tmb_harga_jual2 :Sequelize.STRING,
    tmb_qty3 :Sequelize.STRING,
    tmb_harga_jual3 :Sequelize.STRING,
    tmb_hitung_stock :Sequelize.STRING,
    tc_id :Sequelize.STRING,
    tmb_harga_grosir :Sequelize.STRING,
    tmb_harga_ecer :Sequelize.STRING
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true    
});

router.get('/', function(req, res, next) {
    sequelize
        .authenticate()
        .then(() => {
        console.log('Connection has been established successfully.');
      })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    items.findAll().then(item=>{
        res.json({ response: "00", data: item });
    });  
//    res.send('respond with a resource');
});

    
router.get('/:id', function(req,res){
    var id = req.params.id;
    items.findById(id).then(item => {
        res.json({ response: "00", data: item });
    }); 
        
})




//create or update
router.post('/', function(req,res){
    var nama = req.body.itemName;
    var kode = req.body.itemKode;
    var nomor = req.body.itemNomor;

    
    items.create({tmb_kode:kode, tmb_nama: nama, tmb_nobarcode: nomor}).then(result=>{
        res.json({response:"00", data: result})
    });


})

module.exports = router;
