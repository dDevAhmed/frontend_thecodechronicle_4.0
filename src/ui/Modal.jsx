/* eslint-disable react/prop-types */
'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

export default function Modal({ children, showModal, setShowModal }) {

  return (
    <Dialog open={showModal} onClose={setShowModal} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 md:p-10">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm md:max-w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 w-full md:w-2/3 lg:w-1/3"
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
