# GISc

GISc (Green Indonesia Smart City) adalah halaman web sederhana untuk memperkenalkan destinasi wisata berkelanjutan di regional Sumatera bersama Bank Indonesia. Fitur utama:

- Daftar 8 kota fokus: Medan, Binjai, Tebing Tinggi, Pematang Siantar, Padang Sidimpuan, Tanjung Balai, Sibolga, dan Gunung Sitoli.
- Deteksi lokasi pengunjung menggunakan geolokasi browser (contoh titik awal Bandara Kualanamu).
- Peta interaktif berbasis Leaflet dengan penanda kota dan titik wisata.
- Estimasi jarak dan opsi transportasi beserta kisaran ongkos dan catatan green economy per kota.

## Cara menjalankan

1. Buka `index.html` langsung di browser modern, atau gunakan server statis seperti:

   ```bash
   python -m http.server 8000
   ```

2. Akses `http://localhost:8000` dan aktifkan tombol **Deteksi lokasi saya** jika ingin menghitung jarak dari posisi Anda.

Pastikan koneksi internet tersedia untuk memuat peta OpenStreetMap (CDN Leaflet).
