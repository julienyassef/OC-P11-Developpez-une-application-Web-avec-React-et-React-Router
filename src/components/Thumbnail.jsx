import "./Thumbnail.css"
import { NavLink } from 'react-router-dom'

const Thumbnail = ({id, title, cover}) => {
  return (
    <>
      <NavLink to={`/accommodation/${id}`}>
      <div className="card">
        <div className="darken-img"></div>
        <img className="img-cover" src={cover} alt="photo du logement"/>
        <h2 className="title-accommodation"> {title}</h2>
      </div>
    </NavLink>
    </>
  )
}
export default Thumbnail