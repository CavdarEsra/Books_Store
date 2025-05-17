import React from 'react'
import filter from "../assets/features/filter.png"
import rating from "../assets/features/rating.png"
import wishlist from "../assets/features/wishlist.png"
import secure from "../assets/features/secure.png"


function Features() {
  return (
    <section className='max-padd-container py-16'>
      <div className='max-padd-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12'>
        <div className='flexCenter flex-col gap-3'>
          <img src={filter} alt="featureIcon" height={44} width={44} />
          <div className='flexCenter flex-col'>
            <h5 className='h5'>Advanced Search and Filters</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none' />
          </div>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut.</p>
        </div>
        <div className='flexCenter flex-col gap-3'>
          <img src={rating} alt="featureIcon" height={44} width={44} />
          <div className='flexCenter flex-col'>
            <h5 className='h5'>Use Reviews and Ratings</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none' />
          </div>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut.</p>
        </div>
        <div className='flexCenter flex-col gap-3'>
          <img src={wishlist} alt="featureIcon" height={44} width={44} />
          <div className='flexCenter flex-col'>
            <h5 className='h5'>Wishlist and Favorites</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none' />
          </div>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut.</p>
        </div>
        <div className='flexCenter flex-col gap-3'>
          <img src={secure} alt="featureIcon" height={44} width={44} />
          <div className='flexCenter flex-col'>
            <h5 className='h5'>Secure Online Payments</h5>
            <hr className='w-8 bg-secondary h-1 rounded-full border-none' />
          </div>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut.</p>
        </div>
      </div>
    </section>
  )
}

export default Features