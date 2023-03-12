import logo from './logo.png';
import './App.css';


function Accueil() {
  return (
    <div>
      <img src={logo} alt="Logo du collège" />
      <nav>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/professeurs">Professeurs</a>
        </li>
        <li>
          <a href="/cours">Cours</a>
        </li>
      </ul>
    </nav>
      <p>Bienvenue sur notre application de gestion d'inscriptions à des cours. Vous pouvez utiliser les liens dans le menu de navigation pour accéder aux différentes pages de l'application.</p>
    </div>
    
  );
}




export default Accueil;
