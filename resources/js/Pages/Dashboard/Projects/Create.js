import React from "react";



import DashboardLayout from "@/Layouts/DashboardLayout";

import CreateProjectForm from "./components/CreateProjectForm";
import Breadcrumb from "@/Components/Breadcrumb";


function Create(props) {
  
    return (
        <DashboardLayout>
    
           
    <Breadcrumb/>
         
                 <div className=" mt-5">
                     <CreateProjectForm services={props.services} employees={props.employees} clients={props.clients} /> 
                </div> 
         
            </DashboardLayout>
    );
}

export default Create;
