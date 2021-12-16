<?php

namespace App\Http\Controllers;

use App\Models\Devi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DeviController extends Controller
{
    //
    public function create()
    {
        return Inertia::render('Static/Devis/Index');
    }
  
    public function store(Request $request)
    { 
        $devis =    $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'manager' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
        ]);
       
        Devi::create($devis);
    
      
        return Redirect::route('home')->with('success', 'devi  created.');
    
    }
}
