<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ClientController extends Controller
{
    //
    
    public function index()
    {
        $clients = Client::all();
           

        return Inertia::render('Dashboard/Clients/Index', [
            'clients' => $clients
        ]);
    }
    public function create()
    {
        $users = User::all();
        return Inertia::render('Dashboard/Clients/Create', [
            'users' => $users
        ]);
    }
    public function store(Request $request)
    {
        $client =    $request->validate([
            'user_id' => 'required',
            'company'  => 'required',
            'logo_url'  => 'required',
            'phone'  => 'required',
            'firstname' =>'required|string|max:255' ,
            'lastname' => 'required|string|max:255'  ,
            'address' => 'string|max:255' ,
            'city' => 'string|max:255' ,
            'region' =>'string|max:255' ,
            'country' => 'string|max:255' ,
            'postal_code' => 'string|max:255' 

        ]);
        Client::create($client);


        return Redirect::route('clients')->with('success', 'client  created.');
    }
}
