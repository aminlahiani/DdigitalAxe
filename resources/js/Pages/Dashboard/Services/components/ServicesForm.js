import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function ServicesForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        price: "",
       
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("services-create"));
    };

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
                            <div className="col-span-6 sm:col-span-6">
                                <Label
                                    forInput="description"
                                    value="Description"
                                />

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
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Button
                                className="ml-4  bg-tahiti-900 hover:bg-tahiti-800 "
                                processing={processing}
                            >
                                creation d'Un Service
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
