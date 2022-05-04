import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

/*Composant*/
const Home = () => {
    return(
        <div className="home">
            <Navigation />
            <Logo />
            <Countries />
            <h1>Accueil</h1>
            <p>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.</p>
        </div>
    )
}

export default Home;