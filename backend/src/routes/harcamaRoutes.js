const express = require('express');
const router = express.Router();

const harcamaController = require('../controllers/harcamaController');

router.post('/harcama-ekle', harcamaController.harcamaEkle);
router.get('/harcamalari-getir', harcamaController.harcamalariGetir);
router.put('/harcama-guncelle/:id', harcamaController.harcamaGuncelle);
router.delete('/harcama-sil/:id', harcamaController.harcamaSil);

module.exports = router;




















