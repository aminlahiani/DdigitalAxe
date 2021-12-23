import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import ServicesTable from "@/Components/Table/ServicesTable";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import EditClientForm from "./components/EditClientForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

import Breadcrumb from "@/Components/Breadcrumb";
function Edit(props) {
    console.log(props)
    const { client } = usePage().props;
console.log(client)

    return (
        <DashboardLayout>

            <Breadcrumb/>
           
                <div className=" mt-5">
                    <EditClientForm users={props.users}  client={client} /> 
                </div>
                </DashboardLayout>
    
    );
}

export default Edit;
