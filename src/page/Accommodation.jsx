import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./accommodation.css";


import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';



function Accommodation() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fonction asynchrone pour effectuer la requête Fetch
    const fetchData = async () => {
      try {
        // Utilisation de l'API Fetch pour récupérer les données
        const response = await fetch('/data/data.json');

        // Vérifier si la requête a réussi (statut 200)
        if (response.ok) {
          // Convertir la réponse en JSON
          const result = await response.json();
          
          // Mettre à jour l'état avec les données
          setData(result);
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
    // Appeler la fonction fetchData
    fetchData();
  }, []);
  
 
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
