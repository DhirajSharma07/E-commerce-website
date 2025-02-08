import React from 'react'
import { Link } from 'react-router-dom'

function Repairservice() {
    return (
        <section>
            <div className='flex flex-col justify-center text-center items-center  w-full h-[200px] bg-black text-white'>
              <div className='  flex flex-col gap-3 justify-center items-center '>
                <p className=' text-2xl font-bold'>Rapair services</p>
                <h3 className=' text-2xl font-bold'>up to <span className=' text-orange-500 text-2xl font-bold'>75% off</span>-All t-shirt $ Accessories</h3>
                <Link  to='/discountcomp' className=' py-1.5 bg-white text-gray-600 w-28'>Explore More</Link>
              </div>
            </div>
        </section>
    )
}

export default Repairservice
