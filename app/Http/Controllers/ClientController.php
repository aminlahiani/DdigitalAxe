<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Models\Client;
use App\Models\Devi;
use App\Models\Employee;
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

    public function edit(Client $client)
    {
        $users = User::all();
        return Inertia::render('Dashboard/Clients/Edit', [
            'client' => new ClientResource ($client),
            'users' => $users
        ]);
    }
    public function update(Client $client , Request $request)
    {
     
         $request->validate([
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
        $client->update($request->all());
        
        return Redirect::route('clients')->with('success', 'client  updated.');
    }

    public function destroy(Client $client)
    {
        $client->delete();

        return Redirect::route('clients')->with('success', 'client  deleted.');
    }

    public function clientdevi()
    {
        $devis = Devi::all();
        $clients = Client::all(); 

        return Inertia::render('ClientDashboard/Devis', [
            'devis' => $devis,
            'clients' => $clients
        ]);
    }
    public function clientemployee()
    {
        //  $services = Service::all();
        //$employees = Employee::all()->load("user");
        $employees = Employee::all();
        return Inertia::render('ClientDashboard/Employees',[
            'employees' => $employees
        ]);
    }
}
