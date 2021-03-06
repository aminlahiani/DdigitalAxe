import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import ServicesTable from "@/Components/Table/ServicesTable";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import EditServicesForm from "./components/EditServicesForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
function Edit(props) {
    const { service } = usePage().props;
    console.log(service);
    return (
        <DashboardLayout>
             <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {" "}
                    Edit Services
                </h2>
         

           
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <EditServicesForm />
                </div>
                </DashboardLayout>
    
    );
}

export default Edit;
