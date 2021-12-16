<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServiceCollection;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ServiceController extends Controller
{
    //
    public function index()
    {
        $services = Service::all();


        return Inertia::render('Dashboard/Services/Index', [
            'services' => $services
        ]);
    }
    public function create()
    {
        return Inertia::render('Dashboard/Services/Create');
    }

    public function store(Request $request)
    {
        $services =    $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'price' => 'required',
        ]);

        Service::create($services);


        return Redirect::route('services')->with('success', 'Services  created.');
    }
    public function destroy(Service $service)
    {
        $service->delete();

        return Redirect::route('services')->with('success', 'Services  deleted.');
    }
    
    public function edit(Service $service)
    {
    
        return Inertia::render('Dashboard/Services/Edit', [
            'service' => new ServiceResource($service)
            
        ]);
    }

    public function update(Service $service, Request $request)
    {
     
         $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'price' => 'required',
        ]);
        $service->update($request->all());
        
        return Redirect::route('services')->with('success', 'Services  updated.');
    }

}
