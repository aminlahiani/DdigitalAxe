import React  from 'react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import SelectInput from '@/Components/SelectInput';

import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        role: "",
    });

 

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('users-create'));
    };

    return (
        <DashboardLayout>
            <Head title="Creation Utulisateur" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="nom et prenom" />

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
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="mt-4">
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

                <div className="flex items-center justify-end mt-4">
                
                    <Button className="ml-4" processing={processing}>
                         Creation
                    </Button>
                </div>
            </form>
            </DashboardLayout>
    );
}
