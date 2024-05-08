import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { users } from "./data"

const Login = () => {
    const { setUserId, username, setUsername, password, setPassword } = useContext(CartContext)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        const user = await users.find((user) => user.username.toLowerCase() === username.toLowerCase())
        if(!user) {
            alert("no user with that username found!")
        } else {
            if(user.password === password) {
                setUserId(user._id)
                setUsername("")
                setPassword("")
                navigate("/Account")
            } else {
                alert("wrong password!")
            }
        }
    }

    return (
        <>
            <Layout>
                <div className='h-screen bg-teal-900'>
                    <div id="form" className='text-center'>
                        <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username: </label>
                            <input id='username' value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
                            <br></br>
                            <label htmlFor="password">Password: </label>
                            <input id='password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                            <br></br>
                            <button className='border bg-yellow-700' type='Submit'> Login</button>
                        </form>
                        <Link to={"/Register"}>
                            <button className='border bg-yellow-700'>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login