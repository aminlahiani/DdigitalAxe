import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderStats from "@/Components/Table/HeaderStats";
import UsersTable from "@/Components/Table/UsersTable";
import DashboardLayout from "@/Layouts/DashboardLayout";

function Index(props) {
    console.log(props.auth.user.role);
    return (
        <DashboardLayout>
            <div>
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
                        <UsersTable users={props.users} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;
