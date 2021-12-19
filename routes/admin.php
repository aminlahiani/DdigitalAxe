<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;



// admin Pages route
Route::get('/dashboard/clients', [ClientController::class, 'index'])->name('clients')->middleware(['auth', "admin", 'verified']);
//Route::get('/dashboard/clients', 'App\Http\Controllers\ClientController@index');

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




Route::get('/dashboard/users/create', [UserController::class, 'create'])->name('users-create');
Route::post('/dashboard/users/create', [UserController::class, 'store']);
Route::get('/dashboard/users/{user}/edit', [UserController::class, 'edit'])->name('user.edit');
Route::put('dashboard/users/{user}' , [UserController::class, 'update'])->name('user.update');
Route::delete('dashboard/users/{user}' , [UserController::class, 'destroy'])->name('user.destroy');

//employees Route
Route::get('/dashboard/employees', [EmployeeController::class, 'index'])->name('employees');
Route::get('/dashboard/employees/create', [EmployeeController::class, 'create'])->name('employee.create');
Route::post('/dashboard/employees/create', [EmployeeController::class, 'store']);

Route::get('/dashboard/employees/{employee}/edit', [EmployeeController::class, 'edit'])->name('employee.edit');
Route::put('dashboard/employees/{employee}' , [EmployeeController::class, 'update'])->name('employee.update');
Route::delete('dashboard/employees/{employee}' , [EmployeeController::class, 'destroy'])->name('employee.destroy');