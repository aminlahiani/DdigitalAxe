import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";
import SelectInput from "@/Components/SelectInput";

export default function CreateClientForm({ users }) {
    console.log(users);

    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: "",
        company : "" ,
        logo_url : "",
        phone: "",
        firstname : '',
        lastname : '',
        address: '',
        city: '',
        region :'',
        country:  '',
        postal_code: '',
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
                
                  <div className="col-span-6 sm:col-span-3">
                <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                        Client
                      </label>
                <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="user_id"
            id="user_id"
                        value={data.user_id}
                        onChange={(e) => setData("user_id", e.target.value)}
                    >
                        <option value="">Selectionné un client</option>
                        {users.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <Label forInput="phone" value="Logo_Url" />

                    <Input
                        type="text"
                        name="phone"
                        value={data.logo_url}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <Label forInput="phone" value="Nom de la Société" />

                    <Input
                        type="text"
                        name="phone"
                        value={data.company}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <Label forInput="poste" value="Telephone" />

                    <Input
                        type="text"
                        name="poste"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
            <Label forInput="firstname" value="Nom" />
             
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
            <Label forInput="lastname" value="Prenom" />
             
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
                          <option value="Tunisia">Tunisia</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                    <Label forInput="address" value="Street address" />
                     
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
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
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
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
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
                      <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
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
              
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4  bg-tahiti-900 hover:bg-tahiti-800 " processing={processing}>
                        creation d'Un Employee
                    </Button>
                </div>
                </div>
                </div>
            </form>
        </>
    );
}
