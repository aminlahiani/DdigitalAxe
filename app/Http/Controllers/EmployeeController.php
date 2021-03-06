<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Models\Client;
use App\Models\Employee;
use App\Models\Project;
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
            'firstname' =>'required|string|max:255' ,
            'lastname' => 'required|string|max:255'  ,
            'address' => 'string|max:255' ,
            'city' => 'string|max:255' ,
            'region' =>'string|max:255' ,
            'country' => 'string|max:255' ,
            'postal_code' => 'string|max:255' 

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
            'firstname' =>'required|string|max:255' ,
            'lastname' => 'required|string|max:255'  ,
            'address' => 'string|max:255' ,
            'city' => 'string|max:255' ,
            'region' =>'string|max:255' ,
            'country' => 'string|max:255' ,
            'postal_code' => 'string|max:255' 
        ]);
        $Employee->update($request->all());
        
        return Redirect::route('employees')->with('success', 'employees  updated.');
    }
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return Redirect::route('employees')->with('success', 'employees  deleted.');
    }


    public function employeeindex (){
        $projects = Project::all();
        return Inertia::render('EmployeeDashboard/Index',[
            'projects' => $projects
        ]);
    }

    public function employeeclient (){
         $clients = Client::all();
        return Inertia::render('EmployeeDashboard/Clients',[
            'clients' => $clients
        ]);
    }
    
}
