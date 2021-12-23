import WebsiteLayout from "@/Layouts/Website";
import React from "react";


import AboutPage from "./AboutPage";
import OurServices from "./OurServices";

function Index() {
    return (
        <div>
            <WebsiteLayout>
                <AboutPage />

                <OurServices />
            
            </WebsiteLayout>
        </div>
    );
}

export default Index;
