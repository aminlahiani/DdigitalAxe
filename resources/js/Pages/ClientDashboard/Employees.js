import Breadcrumb from "@/Components/Breadcrumb";
import ClientsEmployeesTable from "@/Components/ClientsLogic/ClientsEmployeesTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";

function Employees(props) {
    return (
        <DashboardLayout>
            <Breadcrumb />
            <div className="mt-5">
                <ClientsEmployeesTable  employees={props.employees}/>
            </div>
        </DashboardLayout>
    );
}

export default Employees;
