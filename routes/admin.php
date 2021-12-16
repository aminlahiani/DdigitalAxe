<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;



// admin Pages route
Route::get('/dashboard/clients', [ClientController::class, 'index'])->name('clients')->middleware(['auth', "admin", 'verified']);

//Route::get('/dashboard/clients', 'App\Http\Controllers\ClientController@index');
Route::inertia('/dashboard/employees', 'Dashboard/Employees/Index')->name('employees');

// Services Admin  Route
//index controller to get all the Services
Route::get('/dashboard/services', [ServiceController::class, 'index'])->name('services');

//create controller to get the page create  
Route::get('/dashboard/services/create', [ServiceController::class, 'create'])->name('services-create');

//store controller to create new Service
Route::post('/dashboard/services/create', [ServiceController::class, 'store']);


//edit to get the page edit 
Route::get('dashboard/services/{service}/edit',[ServiceController::class, 'edit'])->name('service.edit');

Route::put('dashboard/services/{service}' , [ServiceController::class, 'update'])->name('service-update');

//delete Services
Route::delete('dashboard/services/{service}' , [ServiceController::class, 'destroy'])->name('service-destroy');
//Route::put('dashboard/services/{service}' , [ServiceController::class, 'update']);

Route::inertia('/dashboard/projects', 'Dashboard/Projects/Index')->name('projects');
Route::inertia('/dashboard/devis', 'Dashboard/Devis/Index')->name('devis');