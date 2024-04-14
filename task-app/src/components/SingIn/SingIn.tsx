import React from 'react'
import "./SingIn.css"
import { cn } from '@bem-react/classname'
import Back from "../../img/back.png"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const SingIn = () => {
    const cnSingIn = cn("SingIn")
    const dispatch = useDispatch()
  return (
    <div className={cnSingIn()}>
        <Link to="/">
            <img src={Back} className={cnSingIn("Back")} />
        </Link>
        <div className={cnSingIn("Form")}>
            <input className={cnSingIn("Input")} placeholder="Email" type="email" />
            <input className={cnSingIn("Input")} placeholder='Password' type='password'  />
            <Link to="/">
                <button onClick={() => {dispatch({type:"LOGIN", payload:true})}} className={cnSingIn("Button")}>Sing In</button>
            </Link>
        </div>
    </div>
  )
}

export default SingIn