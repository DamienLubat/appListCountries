import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

/*Composant*/
const Home = () => {
    return(
        <div className="home">
            <Navigation />
            <Logo />
            <h1>Accueil</h1>
            <p>Voici la liste des pays dans le monde :</p>
            <br/>
            <Countries />
            
        </div>
    )
}

export default Home;