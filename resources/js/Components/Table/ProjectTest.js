import React,{useState} from "react";

function ProjectTest() {
    const [show, setShow] = useState(null)
    return (
        <>
            <div className="w-full sm:px-6">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Projects</p>
                        <div>
                            <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">New Project</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-4">Project</th>
                                <th className="font-normal text-left pl-12">Client</th>
                                <th className="font-normal text-left pl-12">Status</th>
                                <th className="font-normal text-left pl-20">Budget</th>
                                <th className="font-normal text-left pl-20">Date limite</th>
                                <th className="font-normal text-left pl-16">employees</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                    
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                          
                            <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          
                 
                            <div className="text-sm font-medium text-gray-900">UX Design &amp; Visual Strategy</div>
                           
                          
                        </div>
                      </td>
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">UX Design &amp; Visual Strategy</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Herman Group</p>
                                        </div>
                                    </div>
                                </td>
                                 <td className="pl-12">
                                    <p className="font-medium">en progress</p>
                               
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                             
                            </tr>
                         
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ProjectTest;
