import React from "react";

import EditProjectForm from "./components/EditProjectForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";
function Edit() {
  
 
    return (
        <DashboardLayout>

         <Breadcrumb/>
         
                <div className=" mt-5">
                 <EditProjectForm />
                </div>
                </DashboardLayout>
    
    );
}

export default Edit;
