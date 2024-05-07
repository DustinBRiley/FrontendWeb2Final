import React from 'react'
import {category} from "./data"

const Category = () => {
  return (
    <div className="flex flex-col mt-5 hide-scroll-bar">
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
            <div className="flex hide-scroll-bar">
                {category.map((item, index) => {
                    return (
                        <div key={index} className="px-3 lg:px-10 hide-scroll-bar">
                            <div className="w-12 h-12 lg:w-24 lg:h24 max-w-xs rounded-full bg-yellow-100 transition-all hover:bg-yellow-400 cursor-pointer mb-1 hide-scroll-bar">
                                <div className="flex justify-center mb-12 hide-scroll-bar">
                                    <img className="rounded-full h-12 w-12 lg:w-24 hide-scroll-bar" src={item.image} alt="img" />
                                </div>
                            </div>
                            <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase hide-scroll-bar'>
                                {item.name}
                            </h1>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Category