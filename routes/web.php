<?php

use App\Http\Controllers\ClientController;
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
Route::inertia('/demande-devi', 'Static/Devis/Index')->name('demande-devi');






// admin Pages route
Route::get('/dashboard/clients', [ClientController::class, 'index'])->name('clients')->middleware(['auth', "admin", 'verified']);
//Route::get('/dashboard/clients', 'App\Http\Controllers\ClientController@index');
Route::inertia('/dashboard/employees', 'Dashboard/Employees/Index')->name('employees');
Route::inertia('/dashboard/services', 'Dashboard/Services/Index')->name('services');
Route::inertia('/dashboard/projects', 'Dashboard/Projects/Index')->name('projects');
Route::inertia('/dashboard/devis', 'Dashboard/Devis/Index')->name('devis');

// client page Route

//Route::inertia('/dashboard/mesdevis', 'Dashboard/Employees/Index')->name('employees');
//Route::inertia('/dashboard/mesproject', 'Dashboard/Employees/Index')->name('employees');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
