import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import EmployeesTable from "@/Components/Table/EmployeesTable";
import EmployeeBreadcrumb from "./components/Breadcrumb/EmployeeBreadcrumb";

function Index(props) {
    console.log(props)
    return (
        <DashboardLayout>
         
         <EmployeeBreadcrumb/>
         <div className="mt-5">
                <button className="flex sm:ml-3 mt-4 sm:mt-0 items-end justify-end px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">
                        <Link href={route("employee.create")}>
                            Ajouter Un Employee
                        </Link>
                    </p>
                </button>
                <div className="mt-5">
                  <EmployeesTable employees={props.employees}/> 
            
            </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;
