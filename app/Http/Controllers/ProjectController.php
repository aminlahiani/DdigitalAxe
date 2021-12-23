<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Client;
use App\Models\Employee;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProjectController extends Controller
{
    //
    public function index()
    {
        $projects = Project::all();
           

        return Inertia::render('Dashboard/Projects/Index', [
            'projects' => $projects
        ]);
    }
    public function create()
    {
         $services = Service::all();
         $clients = Client::all();
         $employees = Employee::all();
        return Inertia::render('Dashboard/Projects/Create', [
             'services' => $services,
             'clients' => $clients,
             'employees' => $employees
        ]);
    }
    public function store(Request $request)
    {
        $project =    $request->validate([
            'name' => 'required',
            'client_id'  => 'required',
            'employee_id'  => 'required',
            'service_id'  => 'required',
          

        ]);
        Project::create($project);


        return Redirect::route('projects')->with('success', 'project  created.');
    }
    
    public function edit(Project $project)
    {
        $services = Service::all();
        $clients = Client::all();
        $employees = Employee::all();
        return Inertia::render('Dashboard/Projects/Edit', [
            'project' => new ProjectResource($project),
            'services' => $services,
            'clients' => $clients,
            'employees' => $employees
            
        ]);
    }
    
    public function update( Project $project, Request $request)
    {
     
         $request->validate([
            'name' => 'required',
            'client_id'  => 'required',
            'employee_id'  => 'required',
            'service_id'  => 'required',
        ]);
        $project->update($request->all());
        
        return Redirect::route('projects')->with('success', 'Project  updated.');
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return Redirect::route('projects')->with('success', 'projects  deleted.');
    }
}
