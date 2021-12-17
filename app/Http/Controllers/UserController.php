<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    //
    // public function index()
    // {
    //     $users = User::all();


    //     return Inertia::render('Dashboard/Services/Index', [
    //         'users' => $users
    //     ]);
    // }
    public function create()
    {
        return Inertia::render('Dashboard/Users/Create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        return Redirect::route('dashboard')->with('success', 'user  created.');
    }
}
