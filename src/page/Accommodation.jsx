import { useParams } from 'react-router-dom';
import "./accommodation.css";


import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';

import data from '../data/data.json'; // <== il faut le fetch ;)

function Accommodation() {
  const { id } = useParams();

  // useEffect(() => {
  //   // va être lancé à la fin du chargement de la page
  //   // fetch
  //   // ajout au state "data"
  // }, [])

  // useEffect(() => {
  //   // vérifié si dans data y'a bien un logement avec id === id
  //   // si oui ok letzgoo on fait rien :D
  //   // si non ==> redirection 404
  // }, [id, data])

  // Filtrer les données pour récupérer seulement celles qui correspondent à l'ID de l'URL
  const filteredData = data.filter(item => item.id === id);

  const accommodation = filteredData[0];

  return (
    <div className="accommodation">
      <div>
        <Carrousel key={`description_${accommodation.id}`} pictures= {accommodation.pictures}/>
        <Collapse key={`description_${accommodation.id}`} title="Description" information={accommodation.description} />
        <Collapse key={`equipements_${accommodation.id}`} title="Équipements" equipements={accommodation.equipments} />
      </div>
    </div>
  );
}

export default Accommodation;
