import React from "react";

import { Head } from "@inertiajs/inertia-react";
import ServicesForm from "./components/ServicesForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";

function Create() {
    return (
        <DashboardLayout>
           
           <Breadcrumb/>
         
           <div className=" mt-5">
                           <ServicesForm />
                </div>
         
            </DashboardLayout>
    );
}

export default Create;
