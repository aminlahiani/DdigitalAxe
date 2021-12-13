import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLinkWebsite({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-white-900 focus:outline-none focus:border-white-700 transition duration-150 ease-in-out'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-white-500 hover:text-white-700 hover:border-gray-300 focus:outline-none focus:text-white-700 focus:border-white-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
