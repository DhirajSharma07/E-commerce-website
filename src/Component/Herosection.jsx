import React from 'react'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
 <section className="px-3 py-5 h-screen bg-neutral-100 lg:py-10" id='home'>
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 h-[400px] flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-500">25% OFF</p>
            <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
            <Link to='/shop' className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</Link>
        </div>
        <div className="order-1 lg:order-2">
            <img className="h-80 w-80 object-contain lg:w-[500px] lg:h-[500px]" src="https://cdn.pixabay.com/photo/2020/02/10/12/47/girl-4836394_1280.jpg" />
        </div>
    </div>
</section>   
    </>
  )
}

export default Home
