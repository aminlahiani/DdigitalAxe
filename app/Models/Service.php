<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'price',
 
    ];
  
    public function devis()
    {
        return $this->belongsToMany(Devi::class);
    }
    // public function employees()
    // {
    //     return $this->belongsToMany(Employee::class);
    // }

}
