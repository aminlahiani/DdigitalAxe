import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import LoadingButton from '@/Components/LoadingButton';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    const onHandleChangeadmin = () => {
        data.email =  'admin@gmail.com'
        data.password = '12345678'
    };
    const onHandleChangeclient = () => {
        data.email =  'client@gmail.com'
        data.password = '12345678'
    };
    const onHandleChangeEmployee = () => {
        data.email =  'employee@gmail.com'
        data.password = '12345678'
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}
                    <LoadingButton
              type="submit"
              loading={processing}
              className="btn-gray-900"
            >
              Login
            </LoadingButton>

                    <Button className="ml-4" processing={processing}>
                        Log in
                    </Button>
                </div>
              
               
                <button  className="ml-4  inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150" onClick={onHandleChangeadmin}>
                        Admin
                    </button>
                    <button  className="ml-4  inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150" onClick={onHandleChangeEmployee}>
                        Employee
                    </button>
                    <button  className="ml-4  inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150" onClick={onHandleChangeclient}>
                        client
                    </button>
            </form>
        </Guest>
    );
}
