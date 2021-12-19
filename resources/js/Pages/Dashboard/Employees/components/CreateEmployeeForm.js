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
        phone: ""
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
                <div>
                    <Label forInput="employee" value="Select Employee" />
                    <SelectInput
                        name="employee"
                        className="mt-1 block w-full"
                        value={data.user_id}
                        onChange={(e) => setData("user_id", e.target.value)}
                    >
                        <option value="">Selectionné role</option>
                        {users.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </SelectInput>
                </div>
                <div>
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
                <div>
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

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        creation d'Un Employee
                    </Button>
                </div>
            </form>
        </>
    );
}
