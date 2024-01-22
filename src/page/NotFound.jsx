import './notFound.css'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="notFound-page">
      <p className="txt-404">404</p>
      <p className="txt-notFound">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink className="link-notFound" to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  )
}
export default NotFound