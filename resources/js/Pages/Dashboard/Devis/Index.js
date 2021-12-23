import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

import DeviTable from "@/Components/Table/DeviTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";


function Index(props) {

    return (
        <DashboardLayout>
            <Head title="Devis" />

            <Breadcrumb />

            <div className="mt-5">
                <DeviTable devis={props.devis} />
            </div>
        </DashboardLayout>
    );
}

export default Index;
