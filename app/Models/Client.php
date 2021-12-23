<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = [
        'logo_url',
        'user_id',
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
    protected $with = ["user"];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
