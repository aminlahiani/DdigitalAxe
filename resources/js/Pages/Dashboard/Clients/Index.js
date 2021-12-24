import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import ClientsTable from "@/Components/Table/ClientsTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";



function Index(props) {
    console.log(props);
    return (
        <DashboardLayout>
        
           
    
              <Breadcrumb/>
              <div className="mt-5">
                <button className="flex sm:ml-3 mt-4 sm:mt-0 items-end justify-end px-6 py-3 bg-tahiti-900 hover:bg-tahiti-800 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">
                        <Link href={route("client.create")}>
                            Ajouter Un Client
                        </Link>
                    </p>
                </button>
                <div className="mt-10">
                <ClientsTable clients={props.clients} />
                </div>
              </div>
            
           
       </DashboardLayout>
    );
}

export default Index;
