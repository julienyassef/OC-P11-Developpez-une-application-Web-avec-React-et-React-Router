import "./Host.css";

function Host({ name, picture }) {
  // Diviser le nom en deux parties (nom et prénom)
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="container-host">
      <div className="container-host-name">
        <p className="name-host">{firstName}</p>
        <p className="name-host">{lastName}</p>
      </div>
      <img className="picture-host" src={picture} alt={`photo de ${name}`} />
    </div>
  );
}

export default Host;

