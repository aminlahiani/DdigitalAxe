import FooterNav from '@/Components/footer/Footer'
import HeaderNav from '@/Components/webitelyouts/HeaderNav'
import React from 'react'

function WebsiteLayout({children}) {
    return (
        <div>
            <HeaderNav/>
            {children}
            <FooterNav/>

        </div>
    )
}

export default WebsiteLayout
