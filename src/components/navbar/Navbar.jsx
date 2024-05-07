import { faMagnifyingGlass, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const navList = (
    <ul className="flex space-x-4 md:space-x-6 text-custom-mauve font-semibold text-sm md:text-base">
      <li>
        <Link to={"/"} className="hover:text-custom-peach transistion-colors duration-200">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:text-custom-peach transistion-colors duration-200">
          Products
        </Link>
      </li>
      <li>
        <Link to={"/"} className="hover:text-custom-peach transistion-colors duration-200">
          About
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
                Ecommerce
              </h2>
            </Link>
          </div>
          <div>{navList}</div>
          <div className="flex items-center space-x-4">
            <Link to={"/search"} className="text-white hover:text-gray-700">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link to={"/search"} className="text-white hover:text-gray-700">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to={"/search"} className="text-white hover:text-gray-700">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar