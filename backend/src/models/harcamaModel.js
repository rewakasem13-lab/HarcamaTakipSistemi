const db = require('../config/db');

async function harcamaEkle(data) {
  const { baslik, tutar, kategori, tarih, aciklama } = data;

  const sql = `
    INSERT INTO harcamalar (baslik, tutar, kategori, tarih, \`açıklama\`)
    VALUES (?, ?, ?, ?, ?)
  `;

  const [result] = await db.query(sql, [baslik, tutar, kategori, tarih, aciklama]);
  return result;
}

async function harcamalariGetir() {
  const [rows] = await db.query('SELECT * FROM harcamalar ORDER BY tarih DESC');
  return rows;
}

async function harcamaGuncelle(id, data) {
  const { baslik, tutar, kategori, tarih, aciklama } = data;

  const sql = `
    UPDATE harcamalar
    SET baslik=?, tutar=?, kategori=?, tarih=?, \`açıklama\`=?
    WHERE id=?
  `;

  const [result] = await db.query(sql, [baslik, tutar, kategori, tarih, aciklama, id]);
  return result;
}

async function harcamaSil(id) {
  const sql = 'DELETE FROM harcamalar WHERE id=?';
  const [result] = await db.query(sql, [id]);
  return result;
}

module.exports = {
  harcamaEkle,
  harcamalariGetir,
  harcamaGuncelle,
  harcamaSil
};