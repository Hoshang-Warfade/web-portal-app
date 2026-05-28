import {useState} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()  
    console.log(formData)
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:8000/api/v1/register/', formData)
      console.log(response.data)
      setError({})
      setSuccess(true)
    } catch (error) {
        setError(error.response.data)
      console.error('Error registering user:', error.response.data)
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark p-4 rounded">
                <h3 className="text-center text-light">Create Account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control mb-3" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
                        {error.username && <div className="text-danger">{error.username}</div>}
                         </div>
                    <div className="mb-3">
                        <input type="email" className="form-control mb-3" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                        {error.email && <div className="text-danger">{error.email}</div>}
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control mb-3" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                        {error.password && <div className="text-danger">{error.password}</div>}
                    </div>
                    {success && <div className="alert alert-success">User registered successfully!</div>}
                    {loading ? <button className="btn btn-primary w-100" disabled><FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button> : <button type="submit" className="btn btn-primary w-100">Register</button>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register