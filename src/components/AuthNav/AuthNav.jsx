import { NavLink } from "react-router-dom"
import s from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <ul className={s.ul}>
          <li className={s.li}>
            <NavLink to="/login" className={s.link}>Sign In</NavLink>
          </li>
          <li className={s.li}>
            <NavLink to="/register" className={s.link}>Sign Up</NavLink>
          </li>
        </ul>
  )
}

export default AuthNav