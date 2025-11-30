const destinations = [
  {
    id: 'medan',
    name: 'Medan',
    coords: [3.595196, 98.672223],
    description:
      'Gerbang utama Sumatera Utara dengan akses Kualanamu, kuliner kaya rempah, dan koridor heritage di kawasan Kesawan.',
    green: {
      status: 'Green-ready',
      detail: 'Kereta bandara + bus Trans Metro Deli mendukung mobilitas rendah emisi.',
    },
    highlights: ['Istana Maimun', 'Kesawan City Walk', 'Museum Tjong A Fie'],
    attractions: [
      { name: 'Bandara Kualanamu', coords: [3.6423, 98.8853] },
      { name: 'Istana Maimun', coords: [3.5644, 98.6936] },
    ],
  },
  {
    id: 'binjai',
    name: 'Binjai',
    coords: [3.6006, 98.4854],
    description: 'Kota hijau penyangga Medan dengan fokus pada ruang terbuka dan wisata sungai.',
    green: {
      status: 'Menuju hijau',
      detail: 'Program penghijauan kota dan koneksi KRL ke Medan dalam perencanaan.',
    },
    highlights: ['Taman Balita Binjai', 'Wisata Sungai Bingai', 'Pusat kopi arabika'],
    attractions: [
      { name: 'Tugu Binjai', coords: [3.6027, 98.4827] },
    ],
  },
  {
    id: 'tebingtinggi',
    name: 'Tebing Tinggi',
    coords: [3.3285, 99.162],
    description: 'Kota transit menuju jalur timur Sumatera dengan industri kuliner dan UMKM.',
    green: {
      status: 'Transit ramah',
      detail: 'Pilot city untuk bus rendah emisi di jalur lintas Sumatera.',
    },
    highlights: ['Pusat jajanan Lemang', 'Jalur lintas timur', 'Sentra UMKM kuliner'],
    attractions: [
      { name: 'Alun-alun Tebing Tinggi', coords: [3.3275, 99.163] },
    ],
  },
  {
    id: 'pematangsiantar',
    name: 'Pematang Siantar',
    coords: [2.9595, 99.0682],
    description: 'Kota penyangga Danau Toba dengan budaya multietnik dan jalur trem heritage.',
    green: {
      status: 'Green hub Toba',
      detail: 'Pengurangan emisi transportasi menuju kawasan Danau Toba dan eco-lodge.',
    },
    highlights: ['Kebun Binatang Siantar', 'Jalur ke Parapat', 'Kuliner roti ganda'],
    attractions: [
      { name: 'Kebun Binatang Siantar', coords: [2.958, 99.073] },
    ],
  },
  {
    id: 'padangsidimpuan',
    name: 'Padang Sidimpuan',
    coords: [1.3724, 99.2738],
    description: 'Kota penghasil salak dan kopi Mandailing dengan lanskap pegunungan.',
    green: {
      status: 'Potensi agro hijau',
      detail: 'Pengembangan agrowisata dan energi mikrohidro desa.',
    },
    highlights: ['Agrowisata salak', 'Kopi Mandailing', 'Bukit Simarsayang'],
    attractions: [
      { name: 'Bukit Simarsayang', coords: [1.379, 99.2705] },
    ],
  },
  {
    id: 'tanjungbalai',
    name: 'Tanjung Balai',
    coords: [2.9646, 99.7982],
    description: 'Pelabuhan timur Sumatera dengan wisata bahari dan kuliner laut.',
    green: {
      status: 'Maritim berkelanjutan',
      detail: 'Program kebersihan pesisir dan kapal rendah emisi tahap awal.',
    },
    highlights: ['Pelabuhan Teluk Nibung', 'Kuliner hasil laut', 'Susur Sungai Asahan'],
    attractions: [
      { name: 'Pelabuhan Teluk Nibung', coords: [2.981, 99.803] },
    ],
  },
  {
    id: 'sibolga',
    name: 'Sibolga',
    coords: [1.740, 98.7828],
    description: 'Gerbang laut ke Kepulauan Nias dengan pantai dan selam karang.',
    green: {
      status: 'Ekowisata bahari',
      detail: 'Konservasi terumbu dan pengurangan plastik sekali pakai.',
    },
    highlights: ['Pantai Pandan', 'Pulau Mursala', 'Mercusuar Sibolga'],
    attractions: [
      { name: 'Pantai Pandan', coords: [1.6135, 98.8652] },
    ],
  },
  {
    id: 'gunungsitoli',
    name: 'Gunung Sitoli',
    coords: [1.2897, 97.6114],
    description: 'Ibu kota Nias dengan budaya Megalitik dan destinasi selancar kelas dunia.',
    green: {
      status: 'Surf & culture',
      detail: 'Inisiatif energi surya untuk homestay dan transportasi listrik skala kecil.',
    },
    highlights: ['Museum Pusaka Nias', 'Pantai Sorake', 'Kampung Bawomataluo'],
    attractions: [
      { name: 'Museum Pusaka Nias', coords: [1.2908, 97.6212] },
    ],
  },
];

const map = L.map('map').setView([-0.5, 99], 6.4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

const destinationLayer = L.layerGroup().addTo(map);
let userMarker;
let userLocation;

const destinationSelect = document.getElementById('destinationSelect');
const cityName = document.getElementById('cityName');
const cityDescription = document.getElementById('cityDescription');
const ecoStatus = document.getElementById('ecoStatus');
const attractionsEl = document.getElementById('attractions');
const transportList = document.getElementById('transportList');
const travelDistance = document.getElementById('travelDistance');
const locationStatus = document.getElementById('locationStatus');

function populateDestinations() {
  destinations.forEach((d) => {
    const option = document.createElement('option');
    option.value = d.id;
    option.textContent = d.name;
    destinationSelect.appendChild(option);
  });
}

function haversineDistance(a, b) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);

  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function renderEcoStatus(green) {
  ecoStatus.innerHTML = '';
  const statusPill = document.createElement('div');
  statusPill.className = 'pill';
  statusPill.textContent = green.status;
  ecoStatus.appendChild(statusPill);

  const detailPill = document.createElement('div');
  detailPill.className = 'pill neutral';
  detailPill.textContent = green.detail;
  ecoStatus.appendChild(detailPill);
}

function renderAttractions(highlights) {
  attractionsEl.innerHTML = '';
  highlights.forEach((item) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = item;
    attractionsEl.appendChild(chip);
  });
}

function renderTransport(distanceKm, destination) {
  transportList.innerHTML = '';

  const options = buildTransportOptions(distanceKm, destination);
  options.forEach((opt) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'transport-item';

    const title = document.createElement('h4');
    title.textContent = opt.mode;
    wrapper.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'transport-meta';
    meta.textContent = opt.time;
    wrapper.appendChild(meta);

    const cost = document.createElement('div');
    cost.textContent = opt.cost;
    wrapper.appendChild(cost);

    const note = document.createElement('div');
    note.className = 'transport-meta';
    note.textContent = opt.note;
    wrapper.appendChild(note);

    transportList.appendChild(wrapper);
  });
}

function buildTransportOptions(distanceKm, destination) {
  const distanceAvailable = Number.isFinite(distanceKm);
  const displayDistance = distanceAvailable ? `${distanceKm.toFixed(1)} km` : 'aktifkan lokasi';

  const baseCityNote = `${destination.name} mendukung wisata hijau, pilih moda yang minim emisi.`;

  const taxiCost = distanceAvailable
    ? `IDR ${(Math.max(60000, distanceKm * 7500)).toLocaleString('id-ID')} (taksi bandara / sewa)`
    : 'IDR 60.000+ (perkiraan taksi / sewa)';

  const rideHailingCost = distanceAvailable
    ? `IDR ${(Math.max(45000, distanceKm * 6500)).toLocaleString('id-ID')} (ride-hailing)`
    : 'IDR 45.000+ (ride-hailing)';

  const busCost = distanceAvailable
    ? `IDR ${(30000 + distanceKm * 1800).toLocaleString('id-ID')} (bus/travel)`
    : 'IDR 30.000+ (bus / travel umum)';

  const options = [
    {
      mode: 'Taksi / sewa harian',
      time: distanceAvailable ? `Perjalanan sekitar ${displayDistance}` : 'Estimasi jarak menunggu lokasi Anda',
      cost: taxiCost,
      note: 'Cocok jika membawa barang, bisa digabung dengan kunjungan antar kota.',
    },
    {
      mode: 'Ride-hailing / car share',
      time: distanceAvailable ? `Waktu tempuh 1-3 jam tergantung jarak ${displayDistance}` : 'Lihat aplikasi lokal untuk estimasi real-time',
      cost: rideHailingCost,
      note: 'Pilih kendaraan listrik jika tersedia untuk jejak karbon lebih rendah.',
    },
    {
      mode: 'Bus / travel',
      time: distanceAvailable ? `Ekonomi: ${Math.max(1, Math.round(distanceKm / 40))} - ${Math.max(2, Math.round(distanceKm / 30))} jam` : 'Rute lintas Sumatera tersedia',
      cost: busCost,
      note: baseCityNote,
    },
  ];

  if (destination.id === 'medan') {
    options.unshift({
      mode: 'Kereta Bandara Kualanamu',
      time: '30-45 menit KNO - Medan',
      cost: 'IDR 80.000 (kelas eksekutif) / IDR 50.000 (premium)',
      note: 'Sambung dengan bus rendah emisi Trans Metro Deli atau jalan kaki di pusat kota.',
    });
  }

  return options;
}

function updateDestination(id) {
  const destination = destinations.find((d) => d.id === id);
  if (!destination) return;

  cityName.textContent = destination.name;
  cityDescription.textContent = destination.description;
  renderEcoStatus(destination.green);
  renderAttractions(destination.highlights);

  // Map markers
  destinationLayer.clearLayers();
  const destMarker = L.marker(destination.coords, { title: destination.name });
  destMarker.bindPopup(`<b>${destination.name}</b><br>${destination.green.status}`);
  destMarker.addTo(destinationLayer);

  destination.attractions.forEach((spot) => {
    if (!spot.coords) return;
    const circle = L.circleMarker(spot.coords, {
      radius: 7,
      color: '#3cd18c',
      fillColor: '#3cd18c',
      fillOpacity: 0.6,
    }).bindPopup(`<b>${spot.name}</b>`);
    circle.addTo(destinationLayer);
  });

  map.setView(destination.coords, 9);

  let distanceKm;
  if (userLocation) {
    distanceKm = haversineDistance(userLocation, destination.coords);
    travelDistance.textContent = `${distanceKm.toFixed(1)} km dari posisi Anda`;
  } else {
    travelDistance.textContent = 'Aktifkan lokasi untuk hitung jarak';
  }

  renderTransport(distanceKm, destination);
}

function setUserLocation(lat, lon) {
  userLocation = [lat, lon];
  locationStatus.textContent = `Lokasi terdeteksi: ${lat.toFixed(4)}, ${lon.toFixed(4)}. Pilih kota untuk hitung jarak.`;

  if (userMarker) {
    userMarker.setLatLng(userLocation);
  } else {
    userMarker = L.marker(userLocation, { icon: L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      shadowSize: [41, 41],
    }) })
      .addTo(map)
      .bindPopup('Lokasi Anda');
  }

  map.setView(userLocation, 10);

  if (destinationSelect.value) {
    updateDestination(destinationSelect.value);
  }
}

function requestLocation() {
  if (!navigator.geolocation) {
    locationStatus.textContent = 'Perangkat Anda tidak mendukung geolokasi.';
    return;
  }

  locationStatus.textContent = 'Meminta lokasi...';
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      setUserLocation(latitude, longitude);
    },
    () => {
      locationStatus.textContent = 'Tidak bisa mendapatkan lokasi. Pastikan izin aktif.';
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

populateDestinations();
destinationSelect.addEventListener('change', (e) => updateDestination(e.target.value));
document.getElementById('detectLocation').addEventListener('click', requestLocation);

// Set default selection
if (destinations.length) {
  destinationSelect.value = destinations[0].id;
  updateDestination(destinations[0].id);
}
