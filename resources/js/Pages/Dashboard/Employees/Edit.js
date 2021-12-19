import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import ServicesTable from "@/Components/Table/ServicesTable";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import EditEmployeeForm from "./components/EditEmployeeForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
function Edit(props) {
    const { employee } = usePage().props;

    console.log(employee);

    return (
        <DashboardLayout>
             <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {" "}
                    Edit Employee
                </h2>
         

           
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <EditEmployeeForm users={props.users}  employee={employee} /> 
                </div>
                </DashboardLayout>
    
    );
}

export default Edit;
