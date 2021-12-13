import WebsiteLayout from "@/Layouts/Website";
import React from "react";
import AboutPage from "./AboutPage";

function Index() {
    return (
        <div>
            <WebsiteLayout>
                <AboutPage />
            </WebsiteLayout>
        </div>
    );
}

export default Index;
