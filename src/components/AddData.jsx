import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddData = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState()

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3005/users', {
            fullName, email, checked
        })
            .then(res => {
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>Make Your data</h1>
            <form className='container w-50 text-start'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input
                        maxLength={40}
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={e => setFullName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        required='required'
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3 form-check">
                    <input
                        required='required'
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="exampleCheck1">
                        Check me out</label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >Submit</button>
                <Link to='/' className='ms-3 btn btn-secondary'>Cancel</Link>
            </form>
        </div>
    )
}

export default AddData