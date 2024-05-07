import { faMagnifyingGlass, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const Navbar = () => {
  const {userId} = useContext(CartContext)
  const navList = (
    <ul className="flex space-x-4 md:space-x-6 text-custom-mauve font-semibold text-sm md:text-base">
      <li>
        <Link to={"/"} className="hover:text-custom-peach transistion-colors duration-200">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/Shop"} className="hover:text-custom-peach transistion-colors duration-200">
          Shop
        </Link>
      </li>
    </ul>
  )
  return (
    <>
      <nav className="bg-custom-purple-dark sticky top-0 shadow-md">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 flex justify-between items-center py-2 md:py-4">
          <div className="text-left">
            <Link to={"/"}>
              <h2 className="font-bold text-white text-lg md:text-2xl hover:text-gray-700">
                Joe Momma's Shoes
              </h2>
            </Link>
          </div>
          <div>{navList}</div>
          <div className="flex items-center space-x-4">
            <Link to={"/Shop"} className="text-white hover:text-gray-700">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link to={!userId ? "/Login" : "/Account"} className="text-white hover:text-gray-700">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to={"/Checkout"} className="text-white hover:text-gray-700">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar