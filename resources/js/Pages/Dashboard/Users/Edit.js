import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import ServicesTable from "@/Components/Table/ServicesTable";

import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import EditUserForm from "./components/EditUserForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
import UserEditBreadcrumb from "./components/Breadcrumb/UserEditBreadcrumb";
function Edit(props) {
    const { service } = usePage().props;
    console.log(service);
    return (
        <DashboardLayout>
            <UserEditBreadcrumb/>
           
            <div className="mt-5">
                    <EditUserForm />
                </div>
                </DashboardLayout>
    
    );
}

export default Edit;
