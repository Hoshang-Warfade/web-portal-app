import {Link} from 'react-router-dom'
function Button(props) {
  return (
    <>  <Link className={props.className} to={props.url}>
                {props.text}
            </Link></>
  )
}

export default Button