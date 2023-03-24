import HomeHeader from '@/Components/HomeHeader'
import HomeSearch from '@/Components/HomeSearch'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  
  return (
    <>
    {/* Header Section */}
      <HomeHeader/>

    {/* Body Section */}
      <div className='flex flex-col items-center mt-24'>
        <Image width="300" height="100" alt='Google Logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"/>
      </div>
      <HomeSearch/>
    </>
  )
}
