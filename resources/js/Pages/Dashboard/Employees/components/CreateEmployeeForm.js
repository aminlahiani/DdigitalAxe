import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";
import SelectInput from "@/Components/SelectInput";

export default function CreateEmployeeForm({ users }) {
    console.log(users);

    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: "",
        poste: "",
        phone: "",
        firstname : 'firstname',
        lastname : 'lastname',
        address: 'address',
        city: 'city',
        region :'region',
        country:  '1',
        postal_code: 'postal_code',
    });
    console.log(data.user_id);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("employee.create"));
    };

    return (
        <>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                
                  <div className="col-span-6 sm:col-span-4">
                <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                        Employee
                      </label>
                <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="user_id"
            id="user_id"
                        value={data.user_id}
                        onChange={(e) => setData("user_id", e.target.value)}
                    >
                        <option value="">Selectionné Employee</option>
                        {users.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
            <Label forInput="firstname" value="Firstname" />
             
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
            <Label forInput="lastname" value="Lastname" />
             
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
                    <Label forInput="phone" value="Phone" />

                    <Input
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <Label forInput="poste" value="Poste" />

                    <Input
                        type="text"
                        name="poste"
                        value={data.poste}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={data.country}
                        
                        onChange={(e) => setData("country", e.target.value)}

                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                          <option value="">Select Contry</option>
                          <option value="1">Tunisia</option>
                        <option value="2">United States</option>
                        <option value="3">Canada</option>
                        <option value="4">Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
              
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        creation d'Un Employee
                    </Button>
                </div>
                </div>
                </div>
            </form>
        </>
    );
}
