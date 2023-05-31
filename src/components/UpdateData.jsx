import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'

const UpdateData = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3005/users/${id}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3005/users/${id}`, data)
            .then(res => {
                swal("Good job!", "Data Has Been Updated", "success");
                navigate('/')
            })
            .catch(err => console.error(err.massage))
    }

    return (
        <div>
            <h1>Update Your data</h1>
            <form className='container w-50 text-start'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input
                        maxLength={40}
                        type="text"
                        className="form-control"
                        id="name"
                        value={data.fullName && data.fullName}
                        onChange={(e) => setData({ ...data, fullName: e.target.value })} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={data.email && data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked={data.checked}
                        onChange={(e) => setData({ ...data, checked: e.target.checked })} />
                    <label
                        className="form-check-label"
                        htmlFor="exampleCheck1">
                        Check me out</label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleUpdate}
                >Submit</button>
            </form>
        </div>
    )
}

export default UpdateData