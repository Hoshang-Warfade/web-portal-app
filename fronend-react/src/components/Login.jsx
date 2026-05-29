import  { useState,useContext } from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from './AuthProvider'
function Login() {
  const [formData, setFormData] = useState({
      username: '',
      password: ''
    })

    // eslint-disable-next-line no-unused-vars
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

  
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

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
      const response = await axios.post('http://localhost:8000/api/v1/token/', formData)
      console.log(response.data)
      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)
      setError("")
      setSuccess(true)
      setIsLoggedIn(true)
      navigate('/')

    } catch (error) {
        setError("Invalid credentials")
      console.error('Error logging in user:', error.response.data)
      setSuccess(false)
    }finally{
        setLoading(false)
    }
  }
  
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark p-4 rounded">
                <h3 className="text-center text-light">Account Login </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control mb-3" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
                         </div>
                    <div className="mb-3">
                        <input type="password" className="form-control mb-3" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />

                    </div>
                    {error && <div className="text-danger">{error}</div>}
                   {success && <div className="alert alert-success">User logged in successfully!</div>}
                    {loading ? <button className="btn btn-primary w-100" disabled><FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button> : <button type="submit" className="btn btn-primary w-100">Login</button>}</form>
            </div>
        </div>
    </div>
  )
}

export default Login