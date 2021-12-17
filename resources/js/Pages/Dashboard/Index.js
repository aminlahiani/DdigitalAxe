import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import EmployeesDashbord from "@/Components/EmployeeLogic/EmployeesDashbord";
import DevisClients from "@/Components/ClientsLogic/DevisClients";
import HeaderStats from "@/Components/Table/HeaderStats";
import UsersTable from "@/Components/Table/UsersTable";
import DashboardLayout from "@/Layouts/DashboardLayout";

function Index(props) {
    console.log(props.auth.user.role);
    return (
        <DashboardLayout>
            <div>
                {props.auth.user.role === "0" ? (
                    <div>
                      
                        <HeaderStats />
                        <div className="mt-10">
                        <button className="flex sm:ml-3 mt-4 sm:mt-0 items-end justify-end px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">
                        <Link href={route("users-create")}>
                            Ajouter Un Utilisateur
                        </Link>
                    </p>
                </button>
                </div>
                <div className="mt-10">
                        <UsersTable />
                        </div>
                    </div>
                ) : props.auth.user.role === "1" ? (
                    <div>
                        You're employee logged in {props.auth.user.name}!
                        <EmployeesDashbord />
                    </div>
                ) : (
                    <div>
                        You're client logged in {props.auth.user.name}!!
                        <DevisClients />
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}

export default Index;
