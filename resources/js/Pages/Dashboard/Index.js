import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import EmployeesDashbord from "@/Components/EmployeeLogic/EmployeesDashbord";
import DevisClients from "@/Components/ClientsLogic/DevisClients";
import HeaderStats from "@/Components/Table/HeaderStats";

function Index(props) {
    console.log(props.auth.user.role);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b bg-indigo-200">
                            {props.auth.user.role === "0" ? (
                                <div>
                                    You're admin logged in{" "}
                                    {props.auth.user.name}!
                                    <HeaderStats/>
                                </div>
                            ) : props.auth.user.role === "1" ? (
                                <div>
                                    You're employee logged in{" "}
                                    {props.auth.user.name}!
                                    <EmployeesDashbord/>
                                </div>
                            ) : (
                                <div>
                                    You're client logged in{" "}
                                    {props.auth.user.name}!!
                                    <DevisClients/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default Index;
