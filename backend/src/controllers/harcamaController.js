const harcamaService = require('../services/harcamaService');

async function harcamaEkle(req, res) {
  try {
    await harcamaService.harcamaEkle(req.body);
    res.status(201).json({ message: 'Harcama eklendi.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function harcamalariGetir(req, res) {
  try {
    const harcamalar = await harcamaService.harcamalariGetir();
    res.status(200).json(harcamalar);
  } catch (error) {
    res.status(500).json({ message: 'Harcamalar getirilemedi.' });
  }
}

async function harcamaGuncelle(req, res) {
  try {
    await harcamaService.harcamaGuncelle(req.params.id, req.body);
    res.status(200).json({ message: 'Harcama güncellendi.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function harcamaSil(req, res) {
  try {
    await harcamaService.harcamaSil(req.params.id);
    res.status(200).json({ message: 'Harcama silindi.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  harcamaEkle,
  harcamalariGetir,
  harcamaGuncelle,
  harcamaSil
};