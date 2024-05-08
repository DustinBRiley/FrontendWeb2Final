import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import {users} from "./data"

const Register = () => {
    const { username, setUsername, password, setPassword } = useContext(CartContext)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        const user = users.find((user) => user.username === username)
        if(!user) {
            const user = {
                username: username,
                password: password
            }
            await fetch("https://cord-nutritious-chasmosaurus.glitch.me/users", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            navigate("/Login")
        } else {
            alert("username already exists!")
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
                            <button className='border bg-yellow-700' type='Submit'>Register</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Register