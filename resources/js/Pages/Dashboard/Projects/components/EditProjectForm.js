import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import DeleteButton from "@/Components/DeleteButton";
export default function EditProjectForm() {
    const { project , employees, clients, services } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm({
        employee_id: project.data.employee_id || "",
        client_id: project.data.client_id ||"",
        service_id: project.data.service_id ||"",
        name: project.data.name ||"",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    function submit(e) {
        e.preventDefault();
        put(route("project.update", project.data.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this contact?")) {
            Inertia.delete(route("project.destroy", project.data.id));
        }
    }

    return (
        <>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <Label forInput="name" value="Nom de Project" />

                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="description"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="employee_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Service
                                </label>
                                <select
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    name="service_id"
                                    id="service_id"
                                    value={data.service_id}
                                    onChange={(e) =>
                                        setData("service_id", e.target.value)
                                    }
                                >
                                    <option value="">
                                        Selectionné un Service
                                    </option>
                                    {services.map(({ id, name }) => (
                                        <option key={id} value={id}>
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="client_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Selectionné un Client
                                </label>
                                <select
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    name="client_id"
                                    id="client_id"
                                    value={data.client_id}
                                    onChange={(e) =>
                                        setData("client_id", e.target.value)
                                    }
                                >
                                    <option value="">
                                        Selectionné un client
                                    </option>
                                    {clients.map(({ id, company }) => (
                                        <option key={id} value={id}>
                                            {company}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="employee_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Employee
                                </label>
                                <select
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    name="employee_id"
                                    id="employee_id"
                                    value={data.employee_id}
                                    onChange={(e) =>
                                        setData("employee_id", e.target.value)
                                    }
                                >
                                    <option value="">
                                        Selectionné un Employee
                                    </option>
                                    {employees.map(({ id, firstname }) => (
                                        <option key={id} value={id}>
                                            {firstname}
                                        </option>
                                    ))}
                                </select>
                            </div>
                         
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <DeleteButton onDelete={destroy} >
                        Supprimer le Projet 
                    </DeleteButton>

                    <Button className="inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 " processing={processing}>
                        Modifier le Projet
                    </Button>
                </div>
                    </div>
                </div>
            </form>
        </>
    );
}
