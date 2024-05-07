import React from 'react'
import product from "./data"
import { useNavigate } from 'react-router-dom'

const HomePageProducts = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <h1>
                    Best Selling Products
                </h1>
            </div>
            <section>
                <div className='container'>
                    <div>
                        {product.map((item,index)=>{
                            const {image,title,price} = item
                            return (
                                <div>
                                    <div>
                                        <img onClick={()=>navigate("/productInfo")} src={image} alt="img" />
                                        <div>
                                            <h1>
                                                {title.substring(0,25)}
                                            </h1>
                                            <h1>
                                                ${price}
                                            </h1>
                                            <div>
                                                <button>
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

export default HomePageProducts