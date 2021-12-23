import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import DeleteButton from "@/Components/DeleteButton";
import SelectInput from "@/Components/SelectInput";
export default function EditClientForm() {
    const { client , users } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm({
        user_id: client.data.user_id || "",
        company : client.data.firstname || "",
        logo_url : client.data.logo_url || "",
        phone: client.data.phone || "",
        firstname :  client.data.firstname || "",
        lastname : client.data.lastname || "",
        address:  client.data.address || "",
        city:  client.data.address || "",
        region : client.data.region || "",
        country:   client.data.country || "",
        postal_code:  client.data.postal_code || "",

    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    function submit(e) {
        e.preventDefault();
        put(route("client.update", client.data.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this Client?")) {
            Inertia.delete(route("client.destroy", client.data.id));
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
                    <Label forInput="logo_url" value="Logo_Url" />

                    <Input
                        type="text"
                        name="logo_url"
                        id="logo_url"
                        value={data.logo_url}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <Label forInput="company" value="Nom de la Société" />

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
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <DeleteButton onDelete={destroy} >
                        Supprimer le client 
                    </DeleteButton>

                    <Button className="inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 " processing={processing}>
                        Modifier le client
                    </Button>
                </div>
                </div>
                </div>
            </form>
        </>
    );
}
