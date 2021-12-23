<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Devi;
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
        return Inertia::render('Static/Devis/Index',);
    }
  
    public function store(Request $request)
    { 
        $devis =    $request->validate([
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
       
        Devi::create($devis);
    
      
        return Redirect::route('home')->with('success', 'devi  created.');
    
    }
}
