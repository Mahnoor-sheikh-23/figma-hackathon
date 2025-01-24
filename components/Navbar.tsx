import React from 'react';
import Image from 'next/image';
import firstLogo from "../public/image/first-logo.png";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className='bg-[#F5F5F5]  flex flex-col md:flex-row  md:justify-between'>
        <div className='flex justify-center items-center pl-10'>
          <Image src={firstLogo} alt='' />
        </div>
        <div className='flex md:gap-7 justify-evenly p-3 font-medium text-[11px]'>
          <div className='border-r-2 border-black pr-3 '>
            <Link href={"/items/category?category=all"}>
              Find a Store
            </Link></div>
          <div className='border-r-2 border-black pr-3 '>
          <Link href={"/help"}>
             Help
            </Link>
          </div>
          <div className='border-r-2 border-black pr-3 '>
            <Link href={"/join-us"}>
              Join Us
            </Link>
          </div>
          <div>
            <Link href={"/sign-up"}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
