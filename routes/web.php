<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\DeviController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\RelationControler;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Static  Pages  route


Route::inertia('/', 'Static/Home/Index')->name('home');
Route::inertia('/about', 'Static/About/Index')->name('about');
Route::inertia('/services', 'Static/Services/Index')->name('service');
Route::inertia('/blog', 'Static/Blog/Index')->name('blog');
Route::inertia('/contact', 'Static/Contact/Index')->name('contact');
//Route::inertia('/demande-devi', 'Static/Devis/Index')->name('demande-devi');


// visiteur route create devis
Route::get('/demande-devi', [DeviController::class, 'create'])->name('demande-devi');

Route::post('/demande-devi', [DeviController::class, 'store']);

//Route::post('/demande-devi/create', [DeviController::class, 'store']);





// client page Route

//Route::inertia('/dashboard/mesdevis', 'Dashboard/Employees/Index')->name('employees');
//Route::inertia('/dashboard/mesproject', 'Dashboard/Employees/Index')->name('employees');
Route::get('/employeedashboard', [EmployeeController::class, 'employeeindex'])->name('employeedashboard');
Route::get('/employeeclients', [EmployeeController::class, 'employeeclient'])->name('employeeclients');

Route::get('/clientdashboard', function () {
    return Inertia::render('ClientDashboard/Index');
})->middleware(['auth', 'verified'])->name('clientdashboard');

Route::get('/dashboard', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/admin.php';
require __DIR__.'/auth.php';


Route::get('/has-one', [RelationControler::class, 'index']);