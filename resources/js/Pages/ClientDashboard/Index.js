import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import DevisClients from "@/Components/ClientsLogic/DevisClients";
import HeaderStats from "@/Components/Table/HeaderStats";
import UsersTable from "@/Components/Table/UsersTable";
import DashboardLayout from "@/Layouts/DashboardLayout";

function Index(props) {
    console.log(props.auth.user.role);
    return (
        <DashboardLayout>
            <div>
              
                        You're client logged in {props.auth.user.name}!!
                        <DevisClients />
            
            </div>
        </DashboardLayout>
    );
}

export default Index;
