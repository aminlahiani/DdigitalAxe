import React from "react";

import { Head } from "@inertiajs/inertia-react";
import CreateEmployeeForm from "./components/CreateEmployeeForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

function Create(props) {
  
    return (
        <DashboardLayout>
           
            <h1 className="mb-8 text-3xl font-bold">Creation du Employee</h1>
         
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                     <CreateEmployeeForm users={props.users} /> 
                </div>
         
            </DashboardLayout>
    );
}

export default Create;
