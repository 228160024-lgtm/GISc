<?php

return [
    [
        'slug' => 'medan',
        'name' => 'Medan',
        'coordinates' => [3.5952, 98.6722],
        'eco_level' => 'green-ready',
        'description' => 'Kota hub Sumatera Utara dengan wisata sejarah dan kuliner legendaris.',
        'attractions' => [
            ['name' => 'Istana Maimun', 'category' => 'heritage', 'lat' => 3.5805, 'lng' => 98.6814],
            ['name' => 'Masjid Raya Al-Mashun', 'category' => 'heritage', 'lat' => 3.5881, 'lng' => 98.6769],
            ['name' => 'Rahmat Gallery', 'category' => 'museum', 'lat' => 3.5885, 'lng' => 98.6669],
        ],
        'transports' => [
            ['mode' => 'KRL Bandara', 'price' => 50000, 'availability' => 'setiap 30 menit'],
            ['mode' => 'Bus Rapid Transit', 'price' => 8000, 'availability' => 'setiap 10 menit'],
            ['mode' => 'Taxi EV', 'price' => 120000, 'availability' => 'on-demand'],
        ],
    ],
    [
        'slug' => 'binjai',
        'name' => 'Binjai',
        'coordinates' => [3.6000, 98.4800],
        'eco_level' => 'green-in-progress',
        'description' => 'Gerbang agro-wisata dengan taman kota dan kuliner rambutan.',
        'attractions' => [
            ['name' => 'Taman Merdeka', 'category' => 'nature', 'lat' => 3.6011, 'lng' => 98.4855],
            ['name' => 'Kebun Rambutan', 'category' => 'agro', 'lat' => 3.6232, 'lng' => 98.4701],
        ],
        'transports' => [
            ['mode' => 'Commuter', 'price' => 15000, 'availability' => 'setiap 40 menit'],
            ['mode' => 'Shuttle EV', 'price' => 30000, 'availability' => 'on-demand'],
        ],
    ],
    [
        'slug' => 'tebing-tinggi',
        'name' => 'Tebing Tinggi',
        'coordinates' => [3.3300, 99.1300],
        'eco_level' => 'green-ready',
        'description' => 'Kota transit ekonomi dengan akses ke Danau Toba.',
        'attractions' => [
            ['name' => 'Waterfront Bah Bolon', 'category' => 'nature', 'lat' => 3.3305, 'lng' => 99.132],
        ],
        'transports' => [
            ['mode' => 'Kereta Api', 'price' => 40000, 'availability' => 'tiap 1 jam'],
            ['mode' => 'Travel', 'price' => 75000, 'availability' => 'tiap 2 jam'],
        ],
    ],
    [
        'slug' => 'pematang-siantar',
        'name' => 'Pematang Siantar',
        'coordinates' => [2.9595, 99.0682],
        'eco_level' => 'green-champion',
        'description' => 'Kota hijau dengan trem bersejarah dan akses ke Danau Toba.',
        'attractions' => [
            ['name' => 'Kebun Binatang Siantar', 'category' => 'nature', 'lat' => 2.9763, 'lng' => 99.0732],
            ['name' => 'Taman Bunga Pematang', 'category' => 'nature', 'lat' => 2.9465, 'lng' => 99.0702],
        ],
        'transports' => [
            ['mode' => 'LRT Pariwisata', 'price' => 55000, 'availability' => 'tiap 45 menit'],
            ['mode' => 'Bus Hijau', 'price' => 15000, 'availability' => 'tiap 20 menit'],
        ],
    ],
    [
        'slug' => 'padang-sidimpuan',
        'name' => 'Padang Sidimpuan',
        'coordinates' => [1.3867, 99.2735],
        'eco_level' => 'green-in-progress',
        'description' => 'Kota kuliner kopi dan rempah dengan jalur pegunungan Mandailing.',
        'attractions' => [
            ['name' => 'Alun-Alun Psp', 'category' => 'heritage', 'lat' => 1.385, 'lng' => 99.271],
        ],
        'transports' => [
            ['mode' => 'Bus Antar Kota', 'price' => 90000, 'availability' => 'tiap 2 jam'],
            ['mode' => 'Carpool', 'price' => 60000, 'availability' => 'on-demand'],
        ],
    ],
    [
        'slug' => 'tanjung-balai',
        'name' => 'Tanjung Balai',
        'coordinates' => [2.9667, 99.8],
        'eco_level' => 'green-in-progress',
        'description' => 'Pelabuhan pesisir dengan ekowisata mangrove dan kuliner laut.',
        'attractions' => [
            ['name' => 'Kawasan Mangrove', 'category' => 'eco', 'lat' => 2.97, 'lng' => 99.82],
        ],
        'transports' => [
            ['mode' => 'Kapal Penyebrangan', 'price' => 70000, 'availability' => 'tiap 3 jam'],
            ['mode' => 'Angkot EV', 'price' => 8000, 'availability' => 'tiap 15 menit'],
        ],
    ],
    [
        'slug' => 'sibolga',
        'name' => 'Sibolga',
        'coordinates' => [1.7400, 98.7800],
        'eco_level' => 'green-ready',
        'description' => 'Gerbang wisata bahari dan selam di pantai barat Sumatera.',
        'attractions' => [
            ['name' => 'Pantai Ujung', 'category' => 'marine', 'lat' => 1.7408, 'lng' => 98.7799],
            ['name' => 'Pulau Mursala', 'category' => 'marine', 'lat' => 1.5797, 'lng' => 98.6848],
        ],
        'transports' => [
            ['mode' => 'Ferry', 'price' => 95000, 'availability' => 'tiap 4 jam'],
            ['mode' => 'Bus Pariwisata', 'price' => 110000, 'availability' => 'harian'],
        ],
    ],
    [
        'slug' => 'gunung-sitoli',
        'name' => 'Gunung Sitoli',
        'coordinates' => [1.2459, 97.6150],
        'eco_level' => 'green-ready',
        'description' => 'Ibu kota Nias dengan budaya megalitik dan surfing Lagundri.',
        'attractions' => [
            ['name' => 'Museum Pusaka Nias', 'category' => 'culture', 'lat' => 1.2954, 'lng' => 97.6068],
            ['name' => 'Pantai Lagundri', 'category' => 'marine', 'lat' => 0.7833, 'lng' => 97.769],
        ],
        'transports' => [
            ['mode' => 'Ferry Ekowisata', 'price' => 180000, 'availability' => 'harian'],
            ['mode' => 'Rental EV', 'price' => 350000, 'availability' => 'on-demand'],
        ],
    ],
];
