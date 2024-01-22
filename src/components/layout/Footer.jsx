import logo from '../../assets/logoBlack.svg'
import './Footer.css'

function footer() {
  return (
    <div className='footer'>
      <div className='footer-container-txt'>
        <img src={logo} alt="Logo" className="logo-footer" />
        <span className='footer-txt'>© 2020 Kasa. All rights reserved</span>   
      </div>
    </div>
  )
}
export default footer