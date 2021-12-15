import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import EmployeesTable from '@/Components/Table/EmployeesTable';

function Index(props) {
    return (
        <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employees</h2>}
    >
        <Head title="Employees" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                  
                    
                      
                            <button className="flex sm:ml-3 mt-4 sm:mt-0 items-end justify-end px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">
                                Ajouter Employee
                                </p>
                            </button>
                        
                
                </div>
             <EmployeesTable/>
                </div>
            </div>
        </div>
    </Authenticated>
    )
}

export default Index
