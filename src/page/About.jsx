import './About.css'
import pictureAbout from '../assets/pictureAbout.png'
import Collapse from '../components/Collapse'

// Import des données JSON
import dataAbout from '../data/dataAbout.json'

function About() {
  return (
    <div className='about'>
      <div className='container-banner-about '>
      <div className='darken-banner-about'></div>
      <img className="img-banner-about" src= {pictureAbout} alt="photo montagne"/>
      </div>
      {dataAbout.map((item, index) => (
        <Collapse key={index} title={item.title} information={item.information} />
      ))}
    </div>
  )
}
export default About