import Footer from '@/Components/footer/Footer'
import WebsiteLayout from '@/Layouts/Website'
import React from 'react'
import CTA from './Cta'
import HomeHero from './HomeHero'
import HomeDescription from './HomeDescription'
import OurTeam from './OurTeam'
import ProtfolioExemple from './ProtfolioExemple'
import HomeServices from './HomeServices'

function Index() {
    return (
        <div>
            <WebsiteLayout>
            {/* Section  hero */}
            <HomeHero/>
    {/* Section Services */}
            <HomeServices/>
{/* Section Services */}
            <HomeDescription/>
{/* Section team */}
            <OurTeam />
            {/* Section portfolio */}
            <ProtfolioExemple/>
            <CTA/>

            </WebsiteLayout>
        </div>
    )
}

export default Index
