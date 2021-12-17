/* This example requires Tailwind CSS v2.0+ */
const users = [
    {
        id: 1,
    },
];
export default function UsersTable() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                    <th className="font-normal text-left pl-12">
                                        Nom et Prenom
                                    </th>
                                    <th className="font-normal text-left pl-4">
                                        email
                                    </th>

                                    <th className="font-normal text-left pl-12">
                                        Role
                                    </th>

                                    <th className="font-normal text-left pl-20"></th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                {users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                                    >
                                        <td className="pl-12">
                                            <p className="text-sm font-medium leading-none text-gray-800">
                                                Ahmed Masmoudi
                                            </p>
                                        </td>
                                        <td className="pl-12">
                                            <p className="text-sm font-medium leading-none text-gray-800">
                                                aahmedmasmoudi@gmailcom
                                            </p>
                                        </td>
                                        <td className="pl-12">
                                            <p className="text-sm font-medium leading-none text-gray-800">
                                                Admin
                                            </p>
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
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
