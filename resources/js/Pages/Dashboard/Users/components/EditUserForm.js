import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import DeleteButton from "@/Components/DeleteButton";
import SelectInput from "@/Components/SelectInput";

export default function EditUserForm() {
    const { user } = usePage().props;
    console.log(user)
    const { data, setData, put, processing, errors, reset } = useForm({
        name: user.data.name || "",
        email: user.data.email || "",
        role: user.data.role || "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    function submit(e) {
        e.preventDefault();
        put(route("user.update", user.data.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this contact?")) {
            Inertia.delete(route("user.destroy", user.data.id));
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
                    <Label forInput="name" value="Nom de Service" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
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
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Role
                      </label>
                <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  
           
              name="role"
              id="role"
              value={data.role}
              onChange={e => setData('role', e.target.value)}
            >
              <option value="">Selectionné role</option>
              <option value="0">admin</option>
              <option value="1">Employee</option>
              <option value="2">Client</option>
            </select>
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
