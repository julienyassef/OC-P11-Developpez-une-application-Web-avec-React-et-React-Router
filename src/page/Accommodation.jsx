import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import "./accommodation.css";

import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import Host from '../components/Host';
import Tag from '../components/Tag';
import Rating from '../components/Rating';

function Accommodation() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const navigate = useNavigate();

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

          // Filtrer les données pour récupérer le logement correspondant à l'ID de l'URL
          const filteredAccommodation = result.find(item => item.id === id);

          if (filteredAccommodation) {
            // Mettre à jour l'état avec le logement trouvé
            setAccommodation(filteredAccommodation);
          } else {
            console.error('Logement non trouvé');
            //redirige (navigue) vers la page 404 
            navigate('/*');
          }
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    // Appeler la fonction fetchData
    fetchData();
  }, [id, navigate]);

  return (
    <div className="accommodation">
      <div>
        {accommodation && (
          <>
            <Carrousel key={`carrousel_${accommodation.id}`} pictures={accommodation.pictures} />
            <div className="container-accommodation">
              <div className='container-title-accommodation'>
                  <h2 className='title-accommodation-page'>{accommodation.title}</h2>
                  <p className='location-accommodation'>{accommodation.location}</p>
              </div>
              <div className="container-host">
                <Host key={`host_${accommodation.id}`} name={accommodation.host.name} picture={accommodation.host.picture} />
              </div>
              <div className='container-tags-accommodation'>
                  {accommodation.tags.map(tag => (
                      <Tag key={`tag_${tag}`} title={tag} />
                  ))}
              </div>
              <div className="container-rating">
                <Rating key={`rating_${accommodation.id}`} count={accommodation.rating}/>
              </div>
            </div>
            <div className="container-collapse-accommodation">
            <Collapse key={`equipements_${accommodation.id}`} title="Équipements" equipements={accommodation.equipments} />
            <Collapse key={`description_${accommodation.id}`} title="Description" information={accommodation.description} />
            </div> 
          </>
        )}
      </div>
    </div>
  );
}

export default Accommodation;
