import './App.css';
import './components/AppHeader'
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';



function App() {
    const tattooElements = tattoos.map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} />;
    })
    return (
        <div className="App">
            <AppHeader />
            <div className="app-grid">
                {tattooElements}
            </div>
            {/* <TattooPost/> */}
        </div>
    );
}

export default App;
