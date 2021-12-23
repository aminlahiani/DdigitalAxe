<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Resources\DeviResource;
use App\Models\Client;
use App\Models\Devi;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DeviController extends Controller
{
    //
    public function index()
    {
        $devis = Devi::all();
        $clients = Client::all();
        return Inertia::render('Dashboard/Devis/Index',[
            'devis' => $devis,
            'clients' => $clients
        ]);
    }
    public function create()
    {  
          $services = Service::all();
        return Inertia::render('Static/Devis/Index',[
            'services' => $services
        ]);
    }
  
    public function store(Request $request)
    { 
        $devis =    $request->validate([
            'services'  => 'required',
            'company'  => 'required',
            'phone'  => 'required',
            'firstname' =>'required|string|max:255' ,
            'lastname' => 'required|string|max:255'  ,
            'email'  => 'required',
            'address' => 'string|max:255' ,
            'city' => 'string|max:255' ,
            'region' =>'string|max:255' ,
            'country' => 'string|max:255' ,
            'postal_code' => 'string|max:255' 
        ]);
       
      $devi = Devi::create($devis);
      foreach( $request->services as $serv) {
$service = Service::where("id",$serv)->first();
    $devi->services()->attach($service);
    $devi->save();
      }

      
        return Redirect::route('home')->with('success', 'devi  created.');
    
    }
    // public function view()
    // {
    //     return Inertia::render('Dashboard/Devis/View',);
    // }
    public function edit(Devi $devi)
    {
  
        return Inertia::render('Dashboard/Devis/View', [
         
            'devi' => new DeviResource ($devi),
     
        ]);
    }
}
