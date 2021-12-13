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

// website  Pages  route


Route::inertia('/', 'Home/Index')->name('home');
Route::inertia('/about', 'About/Index')->name('about');
Route::inertia('/services', 'Services/Index')->name('service');
Route::inertia('/blog', 'Blog/Index')->name('blog');
Route::inertia('/contact', 'Contact/Index')->name('contact');




// dashboard Pages route


Route::get('/dashboard/clients', [ClientController::class, 'index'])->name('clients');

//Route::get('/dashboard/clients', 'App\Http\Controllers\ClientController@index');

Route::inertia('/dashboard/employees', 'Dashboard/Employees/Index')->name('employees');
Route::inertia('/dashboard/services', 'Dashboard/Services/Index')->name('services');
Route::inertia('/dashboard/blogs', 'Dashboard/Blogs/Index')->name('blogs');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
