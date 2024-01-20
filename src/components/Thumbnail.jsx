import "./Thumbnail.css"
import { NavLink } from 'react-router-dom'

const Thumbnail = ({id, title, cover}) => {
  return (
    <div className="container-thumbnail">
      <NavLink to={`/${id}`}>
      <div className="card">
        <img className="img-cover" src={cover} alt="photo du logement"/>
        <h2 className="title-accommodation"> {title}</h2>
      </div>
    </NavLink>
    </div>
  )
}
export default Thumbnail