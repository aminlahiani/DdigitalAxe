import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderStats from "@/Components/Table/HeaderStats";
import UsersTable from "@/Components/Table/UsersTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Components/Breadcrumb";

function Index(props) {
    console.log(props.auth.user.role);
    return (
        <DashboardLayout>
            <Breadcrumb/>
           
                <div className="mt-5">
                    <HeaderStats />
                    <div className="mt-5">
                        <button className="flex sm:ml-3 mt-4 sm:mt-0 items-end justify-end px-6 py-3 bg-tahiti-900 hover:bg-tahiti-800  focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white">
                                <Link href={route("users-create")}>
                                    Ajouter Un Utilisateur
                                </Link>
                            </p>
                        </button>
                    </div>
                    <div className="mt-10">
                        <UsersTable users={props.users} />
                    </div>
                </div>
        
        </DashboardLayout>
    );
}

export default Index;
