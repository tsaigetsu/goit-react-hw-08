import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux"
import s from './Navigation.module.css'

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <ul className={s.ul}>
        <li className={s.li}>
          <NavLink to="/" className={s.link}>Home</NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.li}>
            <NavLink to="/contacts" className={s.link}>Contacts</NavLink>
          </li>
        )}
      </ul>
  )
}

export default Navigation