import BottomHeader from '@/Components/DashboardLayout/BottomHeader';
import FlashMessages from '@/Components/DashboardLayout/FlashMessages';
import MainMenu from '@/Components/DashboardLayout/MainMenu';
import TopHeader from '@/Components/DashboardLayout/TopHeader';
import React from 'react';

export default function DashboardLayoutDevi({ title, children }) {
  return (
    <div>
   
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="md:flex">
           {/* <TopHeader />
          <BottomHeader />  */}
          </div>
          <div className="flex flex-grow overflow-hidden ">
            <MainMenu className=" flex-shrink-0 hidden w-56 p-12 overflow-y-auto bg-tahiti-800 md:block" />
            {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
            <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-5 bg-tahiti-50">
              {/* <FlashMessages /> */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
