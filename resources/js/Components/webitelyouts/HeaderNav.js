/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLinkWebsite from "@/Components/NavLinkWebsite";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

const navigation = [
    { name: "home1", href: "home1", current: true },
    { name: "home", href: "home", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function HeaderNav() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="flex">
                                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex  text-white ">
                                        <NavLinkWebsite
                                            href={route("home")}
                                            active={route().current("home")}
                                        >
                                            Accueil
                                        </NavLinkWebsite>
                                        <NavLinkWebsite
                                            href={route("about")}
                                            active={route().current("about")}
                                        >
                                            A Propos
                                        </NavLinkWebsite>
                                        <NavLinkWebsite
                                            href={route("service")}
                                            active={route().current("service")}
                                        >
                                            Services
                                        </NavLinkWebsite>
                                        <NavLinkWebsite
                                            href={route("blog")}
                                            active={route().current("blog")}
                                        >
                                            Article
                                        </NavLinkWebsite>
                                        <NavLinkWebsite
                                            href={route("contact")}
                                            active={route().current("contact")}
                                        >
                                            Contactez-Nous
                                        </NavLinkWebsite>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                           
                                <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" > <Link
                                            href={route("demande-devi")}
                                            active={route().current("demande-devi")}
                                        >
                                            Demander un devis
                                        </Link></a>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("home")}
                                active={route().current("home")}
                            >
                                Home
                            </ResponsiveNavLink>

                            <ResponsiveNavLink
                                href={route("about")}
                                active={route().current("about")}
                            >
                                About
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("services")}
                                active={route().current("services")}
                            >
                                Services
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("blog")}
                                active={route().current("blog")}
                            >
                                blog
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("contact")}
                                active={route().current("contact")}
                            >
                                Contact
                            </ResponsiveNavLink>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
