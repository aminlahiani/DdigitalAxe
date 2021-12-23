import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";
import SelectInput from "@/Components/SelectInput";
import ServicesDevi from "./ServicesDevi";

export default function CreateDeviForm({ services }) {
    console.log(services);
    const { data, setData, post, processing, errors, reset } = useForm({
        services: [],
        company: "",
        phone: "",
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        address: "",
        city: "",
        region: "",
        postal_code: "",
    });
    console.log(services);
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("demande-devi"));
    };

    console.log(data.services);

    return (
        <>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <Label
                                    forInput="company"
                                    value="Nom de la Société"
                                />

                                <Input
                                    type="text"
                                    name="company"
                                    id="company"
                                    value={data.company}
                                    className="mt-1 block w-full"
                                    autoComplete="description"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Label forInput="phone" value="Telephone" />

                                <Input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={data.phone}
                                    className="mt-1 block w-full"
                                    autoComplete="description"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Label
                                    forInput="firstname"
                                    value="Nom de Directeur"
                                />

                                <Input
                                    type="text"
                                    name="firstname"
                                    value={data.firstname}
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    autoComplete="name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Label
                                    forInput="lastname"
                                    value="Prenom de Directeur"
                                />

                                <Input
                                    type="text"
                                    name="lastname"
                                    value={data.lastname}
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    autoComplete="name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Label forInput="email" value="Email" />

                                <Input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={data.country}
                                    onChange={(e) =>
                                        setData("country", e.target.value)
                                    }
                                    autoComplete="country-name"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="">Select Contry</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="United States">
                                        United States
                                    </option>
                                    <option value="Canada">Canada</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                            </div>

                            <div className="col-span-6">
                                <Label
                                    forInput="address"
                                    value="Street address"
                                />

                                <Input
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    id="address"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    autoComplete="street-address"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    City
                                </label>
                                <Input
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={data.city}
                                    handleChange={onHandleChange}
                                    autoComplete="address-level2"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                    htmlFor="region"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    State / Province
                                </label>
                                <Input
                                    type="text"
                                    name="region"
                                    value={data.region}
                                    handleChange={onHandleChange}
                                    id="region"
                                    autoComplete="address-level1"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                    htmlFor="postal_code"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    ZIP / Postal code
                                </label>
                                <Input
                                    type="text"
                                    name="postal_code"
                                    id="postal_code"
                                    value={data.postal_code}
                                    handleChange={onHandleChange}
                                    autoComplete="postal-code"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="flex col-span-6 sm:col-span-3 lg:col-span-2"
                                >
                                    <div className="flex items-center h-5">
                                        <input
                                            type={"checkbox"}
                                            onChange={(e) => e.target.checked}
                                        />
                                        <input
                                            type="checkbox"
                                            name="comments"
                                            id="comments"
                                            value={service.id}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setData("services", [
                                                        ...data.services,
                                                        service.id,
                                                    ]);
                                                } else {
                                                    setData(
                                                        "services",
                                                        data.services.filter(
                                                            (s) =>
                                                                s != service.id
                                                        )
                                                    );
                                                }
                                            }}
                                            // autoComplete="postal-code"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="comments"
                                            className="font-medium text-gray-700"
                                        >
                                            {service.name}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Button
                                className="ml-4  bg-tahiti-900 hover:bg-tahiti-800 "
                                processing={processing}
                            >
                                Demander Un Devi
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
