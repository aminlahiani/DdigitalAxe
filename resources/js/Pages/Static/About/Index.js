import WebsiteLayout from "@/Layouts/Website";
import React from "react";

import AboutContact from "./AboutContact";
import AboutPage from "./AboutPage";
import OurServices from "./OurServices";

function Index() {
    return (
        <div>
            <WebsiteLayout>
                <AboutPage />

                <OurServices />
                <AboutContact />
            </WebsiteLayout>
        </div>
    );
}

export default Index;
