import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
      <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Live logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          LIVE
        </p>
      </Link>
      <div className='flex justify-between gap-5'>
        {/* clerk */
                <SignedIn>
                <UserButton afterSignOutUrl="/sign-in" />
              </SignedIn>}

        <MobileNav></MobileNav>
      </div>
    </nav>
  )
}

export default Navbar