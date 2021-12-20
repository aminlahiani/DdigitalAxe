import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import DeleteButton from "@/Components/DeleteButton";
import SelectInput from "@/Components/SelectInput";
export default function EditEmployeeForm() {
    const { employee , users } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm({
        poste: employee.data.poste || "",
        phone : employee.data.phone ||  "",
        user_id: employee.data.user_id,
        firstname :  employee.data.firstname || "",
        lastname : employee.data.lastname || "",
        address:  employee.data.poste || "",
        city:  employee.data.address || "",
        region : employee.data.region || "",
        country:   employee.data.country || "",
        postal_code:  employee.data.postal_code || "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    function submit(e) {
        e.preventDefault();
        put(route("employee.update", employee.data.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this Employee?")) {
            Inertia.delete(route("employee.destroy", employee.data.id));
        }
    }

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
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <Input
                        type="text"
                        name="address"
                        value={data.address}
                        handleChange={onHandleChange}
                        id="address"
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
                        Supprimer le Utilisateur 
                    </DeleteButton>

                    <Button className="inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 " processing={processing}>
                        Modifier le Utilisateur
                    </Button>
                </div>
                </div>
                </div>
            </form>
        </>
    );
}
