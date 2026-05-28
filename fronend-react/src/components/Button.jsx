

function Button(props) {
  return (
    <>  <a className={props.className} href='#'>
                {props.text}
            </a></>
  )
}

export default Button