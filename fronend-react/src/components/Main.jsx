import Button from './Button'
function Main() {
  return (
    <>
    <div className="container">

        <div className="p-5 text-center bg-light-dark rounded">
            <h1 className="text-light">Welcome to My Portal</h1>
            <p className="text-light lead">Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.</p>
             <Button text='Login' className='btn btn-info' url='/login' />

        </div>
    </div>

    </>
  )
}

export default Main