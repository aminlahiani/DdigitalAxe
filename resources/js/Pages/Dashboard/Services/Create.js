import React from "react";

import { Head } from "@inertiajs/inertia-react";
import ServicesForm from "./components/ServicesForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

function Create() {
    return (
        <DashboardLayout>
           
            <h1 className="mb-8 text-3xl font-bold">Creation du services</h1>
         
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <ServicesForm />
                </div>
         
            </DashboardLayout>
    );
}

export default Create;
