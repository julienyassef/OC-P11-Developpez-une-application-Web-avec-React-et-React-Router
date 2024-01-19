import './NavBar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'




function NavBar() {
  return (
    <div className='header'>
        <img src={logo} alt="Logo" className="logo" />
        <div className='container-link'>
            <NavLink   className={({ isActive }) => isActive ? 'link-active' : 'link'}
            to="/">Accueil</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'link-active' : 'link'}
            to="/about">A Propos</NavLink>
        </div>
    </div>
  )
}
export default NavBar

