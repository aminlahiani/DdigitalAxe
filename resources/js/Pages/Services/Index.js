import WebsiteLayout from "@/Layouts/Website";
import React from "react";
import OurServices from "./OurServices";
import ServicesContact from "./ServicesContact";
import ServicesPage from "./ServicesPage";

function Index() {
    return (
        <div>
            <WebsiteLayout>
                <ServicesPage />

                <OurServices/>
                <ServicesContact/>
            </WebsiteLayout>
        </div>
    );
}

export default Index;
