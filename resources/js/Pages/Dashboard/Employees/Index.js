import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import EmployeesTable from "@/Components/Table/EmployeesTable";

function Index(props) {
    console.log(props)
    return (
        <DashboardLayout>
         
                <h1 className="mb-8 text-3xl font-bold">Employee</h1>
                <button className="flex sm:ml-3 mt-4 sm:mt-0 items-end justify-end px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">
                        <Link href={route("employee.create")}>
                            Ajouter Un Employee
                        </Link>
                    </p>
                </button>
                <div className="mt-10">
                  <EmployeesTable employees={props.employees}/> 
            
            </div>
        </DashboardLayout>
    );
}

export default Index;
