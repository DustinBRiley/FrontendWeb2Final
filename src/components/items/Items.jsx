import React, { useContext } from 'react'
import { items } from "./data"
import { CartContext } from '../../context/CartContext'

const Items = () => {
    const { search } = useContext(CartContext)
  return (
    <div>
        {/* list of items .map{ItemCard} */}
        <section className='text-gray-600 body-font bg-teal-900'>
                <div className='container px-5 mx-auto'>
                    <div className='flex flex-wrap -m-4'>
                        {items.filter(item => {return item.name.toLowerCase().includes(search.toLowerCase())}).map((item,index)=>{
                            const {image,name,price} = item
                            return (
                                <div key={index} className='p-4 w-full md:w-1/4'>
                                    <div className='h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer'>
                                        <img
                                            className='lg:h-80 h-96 w-full'
                                            src={`/images/${image}.jpg`}
                                            alt="img"
                                        />
                                        <div className='p-6 bg-orange-100'>
                                            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                                                {name.substring(0,25)}
                                            </h1>
                                            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                                                ${price}
                                            </h1>
                                            <div className='flex justify-center'>
                                                <button className='bg-amber-500 hover:bg-yellow-600 w-full text-black py-[4px] rounded-lg font-bold'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Items