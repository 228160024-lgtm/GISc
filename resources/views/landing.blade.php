@extends('layouts.app')

@section('content')
<header class="hero">
    <div class="hero__badge">Bank Indonesia x GISc</div>
    <h1 class="hero__title">Green Indonesia Smart City</h1>
    <p class="hero__subtitle">Jelajahi destinasi Sumatera dengan insight hijau, estimasi transportasi, dan peta interaktif.</p>
    <div class="hero__actions">
        <button class="btn btn-primary" id="locate-btn">Deteksi lokasi saya</button>
        <a class="btn btn-secondary" href="#destinasi">Pilih destinasi</a>
    </div>
</header>

<main class="grid">
    <section id="destinasi" class="panel">
        <div class="panel__header">
            <div>
                <p class="eyebrow">Destinasi Sumatera</p>
                <h2>Eksplorasi cepat</h2>
            </div>
            <div class="status-pill">Data kurasi GISc</div>
        </div>
        <div class="destinations">
            @foreach($destinations as $destination)
                <article class="destination" data-slug="{{ $destination['slug'] }}">
                    <div class="destination__title">
                        <h3>{{ $destination['name'] }}</h3>
                        <span class="eco eco--{{ $destination['eco_level'] }}">{{ str_replace('-', ' ', $destination['eco_level']) }}</span>
                    </div>
                    <p class="destination__desc">{{ $destination['description'] }}</p>
                    <div class="destination__meta">
                        <div>
                            <p class="muted">Koordinat</p>
                            <p>{{ $destination['coordinates'][0] }}, {{ $destination['coordinates'][1] }}</p>
                        </div>
                        <div>
                            <p class="muted">Transportasi</p>
                            <p>{{ $destination['transports'][0]['mode'] ?? 'Lokal' }}</p>
                        </div>
                    </div>
                    <button class="btn btn-ghost select-destination" data-slug="{{ $destination['slug'] }}">Pilih</button>
                </article>
            @endforeach
        </div>
    </section>

    <section class="panel map-panel">
        <div class="panel__header">
            <div>
                <p class="eyebrow">Navigasi pintar</p>
                <h2>Peta & estimasi</h2>
            </div>
            <div class="status-pill status-pill--light" id="distance-pill">Jarak belum dihitung</div>
        </div>
        <div id="map" class="map"></div>
        <div class="transport" id="transport-panel">
            <div>
                <p class="muted">Moda</p>
                <h4 id="transport-mode">–</h4>
            </div>
            <div>
                <p class="muted">Estimasi tarif</p>
                <h4 id="transport-price">–</h4>
            </div>
            <div>
                <p class="muted">Ketersediaan</p>
                <h4 id="transport-availability">–</h4>
            </div>
        </div>
    </section>

    <section class="panel attractions" id="attractions-panel">
        <div class="panel__header">
            <div>
                <p class="eyebrow">Sorotan hijau</p>
                <h2>Agenda perjalanan</h2>
            </div>
            <div class="status-pill status-pill--soft">Realtime marker</div>
        </div>
        <div class="attractions__list" id="attractions-list"></div>
    </section>
</main>
@endsection
