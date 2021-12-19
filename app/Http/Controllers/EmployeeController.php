<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    //
    public function index()
    {
        //  $services = Service::all();
        //$employees = Employee::all()->load("user");
        $employees = Employee::all();
        return Inertia::render('Dashboard/Employees/Index',[
            'employees' => $employees
        ]);
    }
    public function create()
    {
        $users = User::all();
        return Inertia::render('Dashboard/Employees/Create', [
            'users' => $users
        ]);
    }
    public function store(Request $request)
    {
        $employee =    $request->validate([
            'user_id' => 'required',
            'phone'  => 'required',
            'poste' => 'required',
        ]);
        Employee::create($employee);


        return Redirect::route('employees')->with('success', 'Employee  created.');
    }

    public function edit(Employee $employee)
    {
        $users = User::all();
        return Inertia::render('Dashboard/Employees/Edit', [
            'employee' => new EmployeeResource($employee),
            'users' => $users
            
        ]);
    }
    
    public function update(Employee $Employee, Request $request)
    {
     
         $request->validate([
            'user_id' => 'required',
            'phone'  => 'required',
            'poste' => 'required',
        ]);
        $Employee->update($request->all());
        
        return Redirect::route('employees')->with('success', 'employees  updated.');
    }
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return Redirect::route('employees')->with('success', 'employees  deleted.');
    }
}
