import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import "./accommodation.css";

import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';

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
            <Collapse key={`description_${accommodation.id}`} title="Description" information={accommodation.description} />
            <Collapse key={`equipements_${accommodation.id}`} title="Équipements" equipements={accommodation.equipments} />
          </>
        )}
      </div>
    </div>
  );
}

export default Accommodation;
