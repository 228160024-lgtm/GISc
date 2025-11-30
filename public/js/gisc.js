(function() {
    const destinations = window.GISC_DESTINATIONS || [];
    const map = L.map('map', {
        zoomControl: false,
        worldCopyJump: true,
    }).setView(destinations[0]?.coordinates || [3.5952, 98.6722], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    let currentMarker = null;
    let attractionMarkers = [];

    const formatCurrency = (number) =>
        new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);

    function clearAttractions() {
        attractionMarkers.forEach(marker => marker.remove());
        attractionMarkers = [];
    }

    function renderAttractions(attractions) {
        const container = document.getElementById('attractions-list');
        container.innerHTML = '';
        attractions.forEach(attraction => {
            const card = document.createElement('div');
            card.className = 'attraction';
            card.innerHTML = `
                <div class="badge">${attraction.category}</div>
                <h4>${attraction.name}</h4>
                <p class="muted">${attraction.lat.toFixed(3)}, ${attraction.lng.toFixed(3)}</p>
            `;
            container.appendChild(card);
        });
    }

    function updateTransportInfo(destination) {
        const transport = destination.transports?.[0];
        if (!transport) return;

        document.getElementById('transport-mode').textContent = transport.mode;
        document.getElementById('transport-price').textContent = formatCurrency(transport.price);
        document.getElementById('transport-availability').textContent = transport.availability;
    }

    function setDistance(distanceKm) {
        const pill = document.getElementById('distance-pill');
        if (distanceKm == null) {
            pill.textContent = 'Jarak belum dihitung';
            return;
        }
        pill.textContent = `Perkiraan jarak ${distanceKm.toFixed(1)} km`;
    }

    function loadDestination(slug) {
        const destination = destinations.find((d) => d.slug === slug) || destinations[0];
        if (!destination) return;

        if (currentMarker) currentMarker.remove();
        clearAttractions();

        currentMarker = L.marker(destination.coordinates).addTo(map);
        map.setView(destination.coordinates, 11);

        destination.attractions?.forEach((attraction) => {
            const marker = L.circleMarker([attraction.lat, attraction.lng], {
                radius: 8,
                fillColor: '#12b48b',
                color: '#7dd56f',
                weight: 2,
                opacity: 0.9,
                fillOpacity: 0.7,
            }).addTo(map);
            marker.bindPopup(`<strong>${attraction.name}</strong><br/><small>${attraction.category}</small>`);
            attractionMarkers.push(marker);
        });

        renderAttractions(destination.attractions || []);
        updateTransportInfo(destination);
        setDistance(destination.distance_km ?? null);
    }

    function geoLocate() {
        if (!navigator.geolocation) {
            alert('Peramban Anda tidak mendukung geolokasi.');
            return;
        }

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const userMarker = L.circleMarker([latitude, longitude], {
                radius: 10,
                fillColor: '#1e90ff',
                color: '#4fc3f7',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8,
            }).addTo(map);
            userMarker.bindPopup('Lokasi Anda');
            map.setView([latitude, longitude], 10);

            destinations.forEach((destination) => {
                const distanceKm = haversine(latitude, longitude, destination.coordinates[0], destination.coordinates[1]);
                destination.distance_km = distanceKm;
            });

            setDistance(destinations[0]?.distance_km ?? null);
        }, () => alert('Tidak dapat mendeteksi lokasi.')); 
    }

    function haversine(lat1, lon1, lat2, lon2) {
        const toRad = deg => deg * Math.PI / 180;
        const R = 6371;
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    document.getElementById('locate-btn')?.addEventListener('click', geoLocate);

    document.querySelectorAll('.select-destination').forEach((button) => {
        button.addEventListener('click', () => loadDestination(button.dataset.slug));
    });

    loadDestination(destinations[0]?.slug);
})();
