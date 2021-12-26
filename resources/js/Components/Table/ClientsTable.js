/* This example requires Tailwind CSS v2.0+ */

import { Link } from "@inertiajs/inertia-react";

export default function ClientsTable({ clients }) {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                    <th className="font-normal text-left pl-4">
                                        Société
                                    </th>
                                    <th className="font-normal text-left pl-12">
                                        Directeur
                                    </th>
                                    <th className="font-normal text-left pl-12">
                                        Address
                                    </th>
                                   
                                    <th className="font-normal text-left pl-20">
                                        Statut
                                    </th>
                                 
                                    <th className="font-normal text-left pl-20"></th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                {clients.map((client) => (
                                    <tr
                                        key={client.id}
                                        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                                    >
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
                                                        {client.company}
                                                    </p>
                                                    <p className="text-xs leading-3 text-gray-600 pt-2">
                                                        {client.phone}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pl-12">
                                            <p className="text-sm font-medium leading-none text-gray-800">
                                                {client.firstname}{" "}
                                                {client.lastname}
                                            </p>
                                            <p className="text-xs leading-3 text-gray-600 mt-2">
                                                {client.user.email}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {client.address}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {client.city},{client.region},
                                                {client.country},
                                                {client.postal_code}
                                            </div>
                                        </td>
                                     
                                        <td className="pl-20">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Active
                                            </span>
                                        </td>
                                     
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a
                                                href="#"
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                <Link
                                                    href={route(
                                                        "client.edit",
                                                        client.id
                                                    )}
                                                >
                                                    Edit
                                                </Link>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
