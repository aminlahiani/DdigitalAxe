<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devi extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'company',
        'phone',
        'firstname',
        'lastname',
        'address',
        'city',
        'region',
        'country',
        'postal_code'
    ];
    protected $with = ["services"];

    public function services() {

        return $this->belongsToMany(Service::class);

    }
}
