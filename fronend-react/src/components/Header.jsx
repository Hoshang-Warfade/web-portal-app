import Button from './Button'
function Header() {
  return (
   <>
   <nav className='navbar container pt-3 pb-3  align-items-start'>
    
        <a href='#'>
            <img src="logo.jpg"
                className='navbar-brand logo'
                style={{ width: '200px', height: 'auto' }}
                alt='My Portal'
            />
        </a>

        <div>
            <Button text='Login' className='btn btn-info' />
            <Button text='Sign Up' className='btn btn-light ms-2' />
        </div>

    </nav>
   </>
  )
}

export default Header