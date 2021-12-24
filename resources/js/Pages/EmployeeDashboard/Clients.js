import React from "react";


import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";
import EmployeeClientsTable from "@/Components/EmployeeLogic/EmployeeClientsTable";



function Clients(props) {
    console.log(props);
    return (
        <DashboardLayout>
        
           
    
              <Breadcrumb/>
             
                <div className="mt-5">
                <EmployeeClientsTable clients={props.clients} />
                </div>
          
            
           
       </DashboardLayout>

    )
}
export default Clients;