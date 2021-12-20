import React from "react";

import { Head } from "@inertiajs/inertia-react";
import CreateClientForm from "./components/CreateClientForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";


function Create(props) {
  
    return (
        <DashboardLayout>
            <Breadcrumb/>
           
            
         
                <div className=" mt-5">
                     <CreateClientForm users={props.users} /> 
                </div>
         
            </DashboardLayout>
    );
}

export default Create;
