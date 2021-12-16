import WebsiteLayout from "@/Layouts/Website";
import React from "react";
import BlogsSection from "./BlogsSection";
import NewsLetter from "./NewsLetter";

function Index() {
    return (
        <div>
            <WebsiteLayout>
                <BlogsSection />
                <NewsLetter />
            </WebsiteLayout>
        </div>
    );
}

export default Index;
