import WebsiteLayout from "@/Layouts/Website";
import React from "react";
import DeviHeader from "./DeviHeader";
import Form from "./Form";
import { Head } from "@inertiajs/inertia-react";
import CreateDeviForm from "./component/CreateDeviForm";

function Index() {
    return (
        <div>
            <WebsiteLayout>
                <Head title="Demande devi" />
                {/* Section  Devi Header */}
                <DeviHeader />
                {/* Section  Devi Form */}
                <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
     
               
                <CreateDeviForm/>
                </div>
            </WebsiteLayout>
        </div>
    );
}

export default Index;
