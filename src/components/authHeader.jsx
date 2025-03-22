'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PropTypes } from 'prop-types'
import * as Constants from "../constants";

import { useNavigate } from 'react-router-dom';

const AuthHeader = ({name}) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    if (event.target.id === Constants.LOGOUT) {
      navigate(Constants.HOME); // Navigate to the new path
    }
  };

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
            <a className="text-sm/6 font-semibold text-yellow-600">
                {name}
            </a>
            <a onClick={handleClick} id={Constants.LOGOUT} className="text-sm/6 font-semibold text-gray-900">
              Log out
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
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-yellow-600 hover:bg-gray-50"
                >
                    {name}
                </a>

              </div>
              <div className="py-6">
                <a
                  onClick={handleClick} id={Constants.LOGOUT}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursorPointer"
                >
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

AuthHeader.propTypes = {
  name: PropTypes.string
}
export default AuthHeader;