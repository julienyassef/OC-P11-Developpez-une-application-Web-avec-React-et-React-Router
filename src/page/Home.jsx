import "./home.css"
import Thumbnail from '../components/Thumbnail'
import SloganBanner from '../components/SloganBanner'

// Import des données JSON
import data from '../data/data.json'

function Home() {
  return (
    <div className="home">
      <SloganBanner/>
      <div className="container-thumbnail">
      {data.map(item => (
        <Thumbnail
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
      </div>
    </div>
  )
}
export default Home