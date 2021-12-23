import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

import DeviTable from "@/Components/Table/DeviTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";


function Index(props) {
    console.log("devi",props);
    return (
        <DashboardLayout>
            <Head title="Devis" />
           
            <Breadcrumb/>
            <div className="mt-5">
                <DeviTable/>
             
        </div>
           
       </DashboardLayout>
    );
}

export default Index;
