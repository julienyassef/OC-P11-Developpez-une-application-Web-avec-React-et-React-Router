import './About.css'
import pictureAbout from '../assets/pictureAbout.png'
import Collapse from '../components/Collapse'


function About() {
  return (
    <div className='about'>
      <div className='container-banner-about '>
      <div className='darken-banner-about'></div>
      <img className="img-banner-about" src= {pictureAbout} alt="photo montagne"/>
      </div>
      <Collapse/>
    </div>
  )
}
export default About