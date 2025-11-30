# GISc (Green Indonesia Smart City)

A Laravel-based experience for wisatawan yang ingin menjelajahi destinasi Sumatera bersama Bank Indonesia. Aplikasi ini memuat peta interaktif, deteksi lokasi, label kesiapan green economy, serta estimasi transportasi ke setiap kota.

## Prasyarat
- PHP 8.2+
- Composer
- Node.js 18+ dan npm (opsional untuk build frontend)

## Cara menjalankan
1. Instal dependensi PHP:
   ```bash
   composer install
   cp .env.example .env
   php artisan key:generate
   ```
2. (Opsional) Build aset dengan Vite/Tailwind:
   ```bash
   npm install
   npm run build
   ```
3. Jalankan server pengembangan:
   ```bash
   php artisan serve
   ```
4. Buka `http://127.0.0.1:8000` dan gunakan tombol **Deteksi lokasi saya** untuk menghitung jarak ke destinasi yang dipilih.

## Fitur utama
- Data destinasi Sumatera (Medan, Binjai, Tebing Tinggi, Pematang Siantar, Padang Sidimpuan, Tanjung Balai, Sibolga, Gunung Sitoli)
- Geolokasi wisatawan, marker peta Leaflet, dan perhitungan jarak (haversine)
- Estimasi transportasi serta daftar atraksi hijau yang dapat dipilih langsung dari antarmuka

## Catatan
- Repo ini menyertakan aset CSS/JS siap pakai di `public/css` dan `public/js`, sehingga halaman utama dapat dimuat tanpa proses build.
- Pastikan koneksi internet tersedia untuk memuat tile peta OpenStreetMap dan library Leaflet dari CDN.
