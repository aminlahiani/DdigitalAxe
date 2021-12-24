import React from "react";
import MainMenuItem from "./MainMenuItem";
import { usePage } from "@inertiajs/inertia-react";
export default ({ className }) => {
    const { auth } = usePage().props;
    console.log("dsfd", auth);
    return (
        <>
            {auth.user.role === "0" ? (
                <div className={className}>
                    <MainMenuItem
                        text="Dashboard"
                        link="dashboard"
                        icon="dashboard"
                    />
                    <MainMenuItem
                        text="Employees"
                        link="employees"
                        icon="users"
                    />
                    <MainMenuItem text="Clients" link="clients" icon="users" />
                    <MainMenuItem
                        text="Services"
                        link="services"
                        icon="office"
                    />
                    <MainMenuItem
                        text="Projects"
                        link="projects"
                        icon="printer"
                    />
                    <MainMenuItem text="Devis" link="devis" icon="printer" />
                </div>
            ) : auth.user.role === "1" ? (
                <div className={className}>
                    <MainMenuItem
                        text="Projects"
                        link="employeedashboard"
                        icon="dashboard"
                    />
                       <MainMenuItem
                        text="Client"
                        link="employeeclients"
                        icon="dashboard"
                    />
                    
                </div>
            ) : (
                <div className={className}>
                    <MainMenuItem
                        text="Dashboard"
                        link="clientdashboard"
                        icon="dashboard"
                    />
                </div>
            )}
        </>
    );
};
