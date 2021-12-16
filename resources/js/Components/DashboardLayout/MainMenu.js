import React from "react";
import MainMenuItem from "./MainMenuItem";

export default ({ className }) => {
    return (
        <div className={className}>
            <MainMenuItem text="Dashboard" link="dashboard" icon="dashboard" />
            <MainMenuItem text="Clients" link="dashboard" icon="users" />
            <MainMenuItem text="Employees" link="dashboard" icon="users" />
            <MainMenuItem text="Services" link="services" icon="office" />
            <MainMenuItem text="Projects" link="projects" icon="printer" />
            <MainMenuItem text="Devis" link="dashboard" icon="printer" />
        </div>
    );
};
