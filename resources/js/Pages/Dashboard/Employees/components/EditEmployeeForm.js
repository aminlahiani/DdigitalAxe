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
            <div>
                    <Label forInput="employee" value="Select Employee" />
                    <SelectInput
                        name="employee"
                        className="mt-1 block w-full"
                        value={data.user_id}
                        onChange={(e) => setData("user_id", e.target.value)}
                    >
                       
                        {users.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </SelectInput>
                </div>
                <div>
                    <Label forInput="poste" value="Poste" />

                    <Input
                        type="text"
                        name="poste"
                        value={data.poste}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div>
                    <Label forInput="phone" value="Phone" />

                    <Input
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

               
               

                <div className="flex items-center justify-end mt-4">
                    <DeleteButton onDelete={destroy}>
                        Delete le Employee
                    </DeleteButton>

                    <Button className="ml-4" processing={processing}>
                        Modifier le Employee
                    </Button>
                </div>
            </form>
        </>
    );
}
