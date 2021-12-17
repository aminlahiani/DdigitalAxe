<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RelationControler extends Controller
{
    //
    public function index()
    {
        $user = User::with(['client' => function($q){
            $q->select('logo_url' , 'user_id');
        }])->find(2);
        // client = user-> clinet;
        return response()->json($user);
    }

    public function all()
    {
        $users = User::all();
        return response()->json($users);
    }
  
}
