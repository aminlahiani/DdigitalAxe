/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function DeviHeader() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className=" mx-auto">
    
         

         

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Devis gratuit projet </span>{' '}
                <span className="block text-indigo-600 xl:inline">Web, Mobile, Digital</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Parlez-nous de votre projet/besoin digital.<br/>

Nous sommes une agence de communication digitale. Nous écrivons votre histoire et lui attribuons de l'attractivité en ligne. Parlez-nous !

              </p>
           
            </div>
          </main>
      
      </div>
     
    </div>
  )
}
