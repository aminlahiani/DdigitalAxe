/* This example requires Tailwind CSS v2.0+ */
const clinets = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
];
export default function ProjectTable() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                    <th className="font-normal text-left pl-4">
                                    Nom de Projet
                                    </th>
                                    <th className="font-normal text-left pl-12">
                                        Client
                                    </th>
                                    <th className="font-normal text-left pl-12">
                                        Status
                                    </th>
                                    <th className="font-normal text-left pl-20">
                                        Budget
                                    </th>
                                    <th className="font-normal text-left pl-20">
                                        Date limite
                                    </th>
                                    <th className="font-normal text-left pl-16">
                                        employees
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="text-sm font-medium text-gray-900">
                                            Projet de developpement web
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-4 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img
                                                    className="w-full h-full"
                                                    src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                                                />
                                            </div>
                                            <div className="pl-4">
                                                <p className="font-medium">
                                                    Sociéte nom 
                                                </p>
                                                <p className="text-xs leading-3 text-gray-600 pt-2">
                                                    amin lahiani
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-12">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      en progress
                      </span>
                                    </td>
                                    <td className="pl-20">
                                        <p className="font-medium">13,000 DT</p>
                                        
                                    </td>
                                    <td className="pl-20">
                                        <p className="font-medium">22.12.21</p>
                                        <p className="text-xs leading-3 text-gray-600 mt-2">
                                            34 days
                                        </p>
                                    </td>
                                    <td className="pl-16">
                                        <div className="flex items-center">
                                            <img
                                                className="shadow-md w-8 h-8 rounded-full"
                                                src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                                            />
                                            <img
                                                className="shadow-md w-8 h-8 rounded-full -ml-2"
                                                src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                                            />
                                            <img
                                                className="shadow-md w-8 h-8 rounded-full -ml-2"
                                                src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                                            />
                                            <img
                                                className="shadow-md w-8 h-8 rounded-full -ml-2"
                                                src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a
                                            href="#"
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
