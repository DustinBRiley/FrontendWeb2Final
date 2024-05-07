import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer>
                <div>
                    <a>
                        <span>
                            Ecommerce
                        </span>
                    </a>
                    <p>
                        © 2024 Ecommerce
                        <Link to={"/"} className="" rel="noopener noreferrer" target="_blank">
                            @Ecommerce
                        </Link>
                    </p>
                    <span>
                        <a>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer