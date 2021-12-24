import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import EmployeesProjects from "@/Components/EmployeeLogic/EmployeesProjects";
import DevisClients from "@/Components/ClientsLogic/DevisClients";
import HeaderStats from "@/Components/Table/HeaderStats";
import UsersTable from "@/Components/Table/UsersTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";

function Index(props) {
    console.log(props.auth.user.role);
    console.log(props)
    return (
        <DashboardLayout>
           
              
            <Breadcrumb/>
            <div className="mt-10">
                         <EmployeesProjects projects={props.projects} /> 
            
            </div>
        </DashboardLayout>
    );
}

export default Index;
