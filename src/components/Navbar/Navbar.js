import React from 'react'

export default function Navbar() {
  return (
    <div className='px-2 sm:px-0 pt-6 fixed sticky top-0 z-50 bg-white-100'>
      <div className='max-w-7xl mx-auto'>
        <nav
          className='relative flex items-center justify-between sm:h-10 md:justify-center'
          aria-label='Global'>
          {/* LOGO */}
          <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <h1 className='h-8 w-auto mb-4 sm:h-6'>Note.App</h1>
            </div>
          </div>
          {/* SHOPPING CART */}
          <div className='md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
            <span className='inline-flex rounded-md'>Full Stack/</span>
            <span className='inline-flex rounded-md'>Note App/</span>
            <span className='inline-flex rounded-md'>Canberk Kaya</span>
          </div>
        </nav>

        {/* DIVIDER */}
        <div className='relative'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'>
            <div className='w-full border-t border-gray-300' />
          </div>
        </div>
      </div>
    </div>
  )
}
