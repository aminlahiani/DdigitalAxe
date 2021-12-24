import Breadcrumb from '@/Components/Breadcrumb'
import DeviTable from '@/Components/Table/DeviTable'
import DashboardLayout from '@/Layouts/DashboardLayout'
import React from 'react'

function Devis(props) {
    console.log(props)
    return (
        <DashboardLayout>
              <Breadcrumb />

<div className="mt-5">
    <DeviTable devis={props.devis} />
</div>
            </DashboardLayout>
            
    )
}

export default Devis
