import "./Thumbnail.css"
import { NavLink } from 'react-router-dom'

const Thumbnail = ({id, title, cover}) => {
  return (
    <div className="card">
      <NavLink to={`/accommodation/${id}`}>
        <img className="img-cover" src={cover} alt="photo du logement"/>
        <h2 className="title-accommodation"> {title}</h2>
    </NavLink>
    </div>
  )
}
export default Thumbnail