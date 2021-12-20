import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import ServicesTable from "@/Components/Table/ServicesTable";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import EditEmployeeForm from "./components/EditEmployeeForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
import EmployeeEditBreadcrumb from "./components/Breadcrumb/EmployeeEditBreadcrumb";
function Edit(props) {
    const { employee } = usePage().props;

    console.log(employee);

    return (
        <DashboardLayout>
            <EmployeeEditBreadcrumb/>
           
                <div className=" mt-5">
                    <EditEmployeeForm users={props.users}  employee={employee} /> 
                </div>
                </DashboardLayout>
    
    );
}

export default Edit;
