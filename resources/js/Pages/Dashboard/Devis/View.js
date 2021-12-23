import ModalFacture from '@/Components/ModalFacture'
import DashboardLayout from '@/Layouts/DashboardLayout'
import DashboardLayoutDevi from '@/Layouts/DashboardLayoutDevi'
import React from 'react'
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

function View(props) {
    const { devi } = usePage().props;
    console.log(devi)
    console.log(props)
    return (
        <DashboardLayoutDevi>

            <ModalFacture devi={devi}/>
            
        </DashboardLayoutDevi>
    )
}

export default View
