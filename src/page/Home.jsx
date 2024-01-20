import "./home.css"
import Thumbnail from '../components/Thumbnail'
import SloganBanner from '../components/SloganBanner'

function Home() {
  return (
    <div className="home">
      <SloganBanner/>
      <Thumbnail/>
    </div>
  )
}
export default Home