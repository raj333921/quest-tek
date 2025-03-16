'use client'

import React,{ useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import * as Constants from "../constants";

import { useNavigate } from 'react-router-dom';

const Header = () => {
const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    if(event.target.id === Constants.COMPANY){
    navigate(Constants.COMPANY); // Navigate to the new path
    }else if(event.target.id === Constants.LOGIN){
    navigate(Constants.LOGIN);
    }
  };
const callsToAction = [
]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
        <h1 className="text-xl/8 font-semibold text-yellow-600">
                       {Constants.COMPANYNAME}
                      </h1>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                   <a href="/" className="text-sm/6 font-semibold text-gray-900">
                    Jobs
                  </a>
                  <a onClick={handleClick} id={Constants.COMPANY} className="text-sm/6 font-semibold text-gray-900">
                    Company
                  </a>
                   <a onClick={handleClick} id={Constants.LOGIN} className="text-sm/6 font-semibold text-gray-900">
                                  Log In
                            </a>
                </PopoverGroup>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <h1 className="text-base/7 font-semibold text-yellow-600">
                                   {Constants.COMPANYNAME}
                                  </h1>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Jobs
                </a>
                <a
                 onClick={handleClick} id={Constants.COMPANY}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                 onClick={handleClick} id={Constants.LOGIN}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                    Log In
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
export default Header;