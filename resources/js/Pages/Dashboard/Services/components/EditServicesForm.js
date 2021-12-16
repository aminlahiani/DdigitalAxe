import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import DeleteButton from "@/Components/DeleteButton";
export default function EditServicesForm() {
    const { service } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm({
        name: service.data.name || "",
        description: service.data.description || "",
        price: service.data.price || "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    function submit(e) {
        e.preventDefault();
        put(route("service-update", service.data.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this contact?")) {
            Inertia.delete(route("service-destroy", service.data.id));
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
                    <Label forInput="description" value="Description" />

                    <Input
                        type="text"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="mt-4">
                    <Label forInput="price" value="Prix" />

                    <Input
                        type="number"
                        name="price"
                        value={data.price}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <DeleteButton onDelete={destroy}>
                        Delete le Service
                    </DeleteButton>

                    <Button className="ml-4" processing={processing}>
                        Modifier le Service
                    </Button>
                </div>
            </form>
        </>
    );
}
