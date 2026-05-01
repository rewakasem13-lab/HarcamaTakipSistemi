const harcamaService = require('../services/harcamaService');

describe('Harcama Service Validation Tests', () => {
  test('Geçerli harcama verisi kabul edilmeli', () => {
    const data = {
      baslik: 'Yemek',
      tutar: 150,
      kategori: 'Gıda',
      tarih: '2026-05-01',
      aciklama: 'Öğle yemeği'
    };

    const result = harcamaService.validateHarcama(data);
    expect(result.valid).toBe(true);
  });

  test('Başlık boş ise hata dönmeli', () => {
    const data = {
      baslik: '',
      tutar: 150,
      kategori: 'Gıda',
      tarih: '2026-05-01'
    };

    const result = harcamaService.validateHarcama(data);
    expect(result.valid).toBe(false);
  });

  test('Tutar 0 veya negatif ise hata dönmeli', () => {
    const data = {
      baslik: 'Market',
      tutar: 0,
      kategori: 'Alışveriş',
      tarih: '2026-05-01'
    };

    const result = harcamaService.validateHarcama(data);
    expect(result.valid).toBe(false);
  });
});