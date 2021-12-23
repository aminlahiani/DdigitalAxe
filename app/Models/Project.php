<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = ['name','client_id', 'employee_id' , 'service_id'];

    protected $with = ["client" , "employee" , "service"];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
 

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
  

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

}
