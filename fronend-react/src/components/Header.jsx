import Button from './Button'
import { Link } from 'react-router-dom'
import {useContext}from 'react'
import {AuthContext} from './AuthProvider'
import { useNavigate } from 'react-router-dom'
function Header() {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
   <>
   <nav className='navbar container pt-3 pb-3  align-items-start'>
    
        <Link to='/'>
            <img src="logo.jpg"
                className='navbar-brand logo'
                style={{ width: '200px', height: 'auto' }}
                alt='My Portal'
            />
        </Link>

        <div>
            {!isLoggedIn ? (
                <>
                    <Button text='Login' className='btn btn-info' url='/login' />
                    <Button text='Sign Up' className='btn btn-light ms-2' url='/register' />
                </>
            ) : (
                <button className='btn btn-danger' onClick={() => {
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('refresh_token')
                    setIsLoggedIn(false)
                    navigate('/login')

                }}>Logout</button>
            )}
        </div>

    </nav>
    </>
     )
}

export default Header