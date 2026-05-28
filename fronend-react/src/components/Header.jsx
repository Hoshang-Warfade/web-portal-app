import Button from './Button'
import { Link } from 'react-router-dom'
function Header() {
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
            <Button text='Login' className='btn btn-info' url='/login' />
            <Button text='Sign Up' className='btn btn-light ms-2' url='/register' />
        </div>

    </nav>
   </>
  )
}

export default Header