import './SloganBanner.css'
import pictureHome from '../assets/pictureHome.png'

function SloganBanner() {
  return (
    <div className='container-banner-slogan'>
        <img className="img-banner-slogan" src= {pictureHome} alt="Slogan Banner"/>
        <h1 className="title-slogan">Chez vous,<br className="mobile-break"/> partout et ailleurs</h1>
    </div>
  )
}
export default SloganBanner