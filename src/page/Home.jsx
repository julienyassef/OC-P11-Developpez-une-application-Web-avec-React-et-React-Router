import "./home.css"
import { useEffect, useState } from 'react';

import Thumbnail from '../components/Thumbnail'
import SloganBanner from '../components/SloganBanner'


function Home() {
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