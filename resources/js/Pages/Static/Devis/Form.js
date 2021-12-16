import React from 'react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import {  Link, useForm } from '@inertiajs/inertia-react';

export default function Form() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        manager: '',
        phone: '',
    });


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
   
    const submit = (e) => {
        e.preventDefault();

        post(route('demande-devi'));
    };

    return (
    <>
         

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="Sociétenom" value="Société nom" />

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
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="nometprenom" value="Nom et Prenom" />

                    <Input
                       type="text"
                       name="manager"
                        value={data.manager}
                        className="mt-1 block w-full"
                      
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="Telephone" value="Telephone" />

                    <Input
                      type="text"
                      name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        Demander Un Devi
                    </Button>
                </div>
            </form>
        </>
    );
}
