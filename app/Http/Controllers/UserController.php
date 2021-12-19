<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    //
    public function index()
    {
        $users = User::all();


        return Inertia::render('Dashboard/Index', [
            'users' => $users
        ]);
    }
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
    public function edit(User $user)
    {

        return Inertia::render('Dashboard/Users/Edit', [
            'user' => new UserResource($user)

        ]);
    }
    
    public function update(User $user, Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'role' => 'required',
        ]);
        $user->update($request->all());

        return Redirect::route('dashboard')->with('success', 'users  updated.');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return Redirect::route('dashboard')->with('success', 'user  deleted.');
    }
}
