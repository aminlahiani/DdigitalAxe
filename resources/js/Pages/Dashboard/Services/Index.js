import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import ServicesTable from "@/Components/Table/ServicesTable";
import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";

function Index(props) {
    return (
        <DashboardLayout>
         
                 <Breadcrumb/>
                 <div className="mt-5">
                <button className="flex sm:ml-3 mt-4 sm:mt-0 items-end justify-end px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">
                        <Link href={route("services-create")}>
                            Ajouter Un Service
                        </Link>
                    </p>
                </button>
                </div>
                <div className="mt-5">
                <ServicesTable services={props.services} />
            </div>
        </DashboardLayout>
    );
}

export default Index;
