import React from 'react'
import Button from './layouts/Button'

const Navbar = () => {
    const menu = ["Home","About","Info","Blog","Contact"]
  return (
     <section className='bg-black py-6'>
           <div className="container mx-auto flex justify-between">
                <div className="">
                    <h3 className='text-primary text-3xl font-bold'> ATK .</h3>
                </div>
                <div className="text-white">
                     <ul className='flex gap-x-10 mt-2'>
                         {
                            menu.map((el) => {
                                return(
                                    <li className='hover:text-primary duration-300'>{el}</li>
                                )
                            })

                         }
                     </ul>
                </div>
                <div className="">
                    <Button 
                    text={`Download Resume`}
                    className={`text-white`}
                    />
                </div>
           </div>
     </section>
  )
}

export default Navbar