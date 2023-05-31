import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert'

function App() {
  const [column, setColumn] = useState()
  const [tables, setTables] = useState()

  useEffect(() => {
    axios.get('http://localhost:3005/users')
      .then(res => {
        setColumn(Object.keys(res.data[0]))
        setTables(res.data)
      })
      .catch(err => console.error(err))
  })

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this data?')
    if (confirm) {
      axios.delete(`http://localhost:3005/users/${id}`)
        .then(alert('Data has benn Deleted'))
    } else {
      alert('Your data is Safe')
    }
  }

  return (
    <div className='container table-responsive'>
      <div className='text-end mb-3'>
        <Link to='/addData' className='btn btn-primary'>Add Data</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {column?.map((d, i) => (
              <th scope="col" key={i}>{d}</th>
            ))}
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tables?.map((d, i) => (
            <tr key={i}>
              <th scope="row">{d.id}</th>
              <td>{d.fullName}</td>
              <td>{d.email}</td>
              <td>{d.checked ? 'Checked' : 'No Checked'}</td>
              <td>
                <Link to={`/updateData/${d.id}`}
                  className='btn btn-warning btn-sm'
                >Update</Link>
              </td>
              <td>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => handleDelete(d.id)}
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
