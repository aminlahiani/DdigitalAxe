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
                <div>
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

                <div className="mt-4">
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
                <div className="mt-4">
                <SelectInput
            
              label="Role"
              name="country"
           
              value={data.role}
              onChange={e => setData('role', e.target.value)}
            >
              <option value="">Selectionné role</option>
              <option value="0">admin</option>
              <option value="1">Employee</option>
              <option value="2">Client</option>
            </SelectInput>
            </div>

                <div className="flex items-center justify-end mt-4">
                    <DeleteButton onDelete={destroy}>
                        Supprimer le Utilisateur 
                    </DeleteButton>

                    <Button className="ml-4" processing={processing}>
                        Modifier le Utilisateur
                    </Button>
                </div>
            </form>
        </>
    );
}
