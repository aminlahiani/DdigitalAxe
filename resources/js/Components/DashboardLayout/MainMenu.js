import React from "react";
import MainMenuItem from "./MainMenuItem";

export default ({ className }) => {
    return (
        <div className={className}>
            <MainMenuItem text="Dashboard" link="dashboard" icon="dashboard" />
            <MainMenuItem text="Employees" link="employees" icon="users" />
            <MainMenuItem text="Clients" link="clients" icon="users" />    
            <MainMenuItem text="Services" link="services" icon="office" />
            <MainMenuItem text="Projects" link="projects" icon="printer" />
            <MainMenuItem text="Devis" link="devis" icon="printer" />
        </div>
    );
};
