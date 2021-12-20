import React from "react";

import { Head } from "@inertiajs/inertia-react";
import CreateEmployeeForm from "./components/CreateEmployeeForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
import EmployeeCreateBreadcrumb from "./components/Breadcrumb/EmployeeCreateBreadcrumb";

function Create(props) {
  
    return (
        <DashboardLayout>
            <EmployeeCreateBreadcrumb/>
           
            
         
                <div className=" mt-5">
                     <CreateEmployeeForm users={props.users} /> 
                </div>
         
            </DashboardLayout>
    );
}

export default Create;
