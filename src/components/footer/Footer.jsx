import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className='body-font bg-yellow-800'>
                <div className='container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col'>
                    <a className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
                        <span className='text-gray-800 text-xl font-bold'>
                            Joe Momma's Shoes
                        </span>
                    </a>
                    <p className='text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
                        © 2024 Joe Momma's Shoes
                        <Link to={"/"} className="text-grey-100 ml-1" rel="noopener noreferrer" target="_blank">
                            @joemommasshoes
                        </Link>
                    </p>
                    <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                        <a className='text-gray-100 cursor-pointer'>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </a>
                        <a className='ml-3 text-gray-100 cursor-pointer'>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <a className='ml-3 text-gray-100 cursor-pointer'>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer