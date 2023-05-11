import Header from './components/navbar/Navbar';
import Arborist from './screens/Arborist';
import Contact from './screens/Contact';
import Home from './screens/Home';
import NewProject from './screens/NewProject';

function App() {
    return (
        <>
            <Header />
            <Home />
            <NewProject />
            <Arborist />
            <Contact />
        </>
    );
}

export default App;
