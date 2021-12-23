<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\DeviController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;



// admin Pages route

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

//Route::inertia('/dashboard/projects', 'Dashboard/Projects/Index')->name('projects');





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

//clients Route
Route::get('/dashboard/clients', [ClientController::class, 'index'])->name('clients')->middleware(['auth', "admin", 'verified']);
Route::get('/dashboard/clients/create', [ClientController::class, 'create'])->name('client.create');
Route::post('/dashboard/clients/create', [ClientController::class, 'store']);
Route::get('/dashboard/clients/{client}/edit', [ClientController::class, 'edit'])->name('client.edit');
Route::put('dashboard/clients/{client}' , [ClientController::class, 'update'])->name('client.update');
Route::delete('dashboard/clients/{client}' , [ClientController::class, 'destroy'])->name('client.destroy');


Route::get('/dashboard/projects', [ProjectController::class, 'index'])->name('projects');
Route::get('/dashboard/projects/create',  [ProjectController::class, 'create'])->name('project.create');
Route::post('/dashboard/projects/create',  [ProjectController::class, 'store']);
Route::get('/dashboard/projects/{project}/edit',  [ProjectController::class, 'edit'])->name('project.edit');
Route::put('dashboard/projects/{project}' , [ProjectController::class, 'update'])->name('project.update');
Route::delete('dashboard/projects/{project}' , [ProjectController::class, 'destroy'])->name('project.destroy');
 
Route::get('/dashboard/devis', [DeviController::class, 'index'])->name('devis');
//Route::get('/dashboard/devis/view', [DeviController::class, 'view'])->name('devis.view');
Route::get('/dashboard/devis/{devi}', [DeviController::class, 'edit'])->name('devi.edit');