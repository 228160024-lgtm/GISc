<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory as ViewFactory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;

class DestinationController extends Controller
{
    public function index(ViewFactory $view): View
    {
        $destinations = collect(config('destinations'));

        return $view->make('landing', [
            'destinations' => $destinations,
            'primaryDestination' => $destinations->firstWhere('slug', 'medan') ?? $destinations->first(),
        ]);
    }

    public function api(): JsonResponse
    {
        $destinations = collect(config('destinations'))
            ->map(function ($destination) {
                $destination['distance_km'] = null;
                return $destination;
            })
            ->values();

        return response()->json([
            'data' => $destinations,
        ]);
    }
}
