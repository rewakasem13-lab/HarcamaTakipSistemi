const harcamaModel = require('../models/harcamaModel');

function validateHarcama(data) {
  const { baslik, tutar, kategori, tarih } = data;

  if (!baslik || !tutar || !kategori || !tarih) {
    return {
      valid: false,
      message: 'Başlık, tutar, kategori ve tarih zorunludur.'
    };
  }

  if (Number(tutar) <= 0) {
    return {
      valid: false,
      message: 'Tutar 0’dan büyük olmalıdır.'
    };
  }

  return { valid: true };
}

async function harcamaEkle(data) {
  const validation = validateHarcama(data);
  if (!validation.valid) {
    throw new Error(validation.message);
  }

  return await harcamaModel.harcamaEkle(data);
}

async function harcamalariGetir() {
  return await harcamaModel.harcamalariGetir();
}

async function harcamaGuncelle(id, data) {
  const validation = validateHarcama(data);
  if (!validation.valid) {
    throw new Error(validation.message);
  }

  return await harcamaModel.harcamaGuncelle(id, data);
}

async function harcamaSil(id) {
  if (!id) {
    throw new Error('ID gereklidir.');
  }

  return await harcamaModel.harcamaSil(id);
}

module.exports = {
  validateHarcama,
  harcamaEkle,
  harcamalariGetir,
  harcamaGuncelle,
  harcamaSil
};