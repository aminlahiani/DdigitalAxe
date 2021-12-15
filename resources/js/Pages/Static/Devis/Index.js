import WebsiteLayout from '@/Layouts/Website'
import React from 'react'
import DeviForm from './DeviForm'
import DeviHeader from './DeviHeader'
import DevisHero from './DevisHero'


function Index() {
    return (
        <div>
            <WebsiteLayout>
                <DeviHeader/> 
                <DeviForm/>
            <DevisHero/>
            </WebsiteLayout>
        </div>
    )
}

export default Index