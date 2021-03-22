import './App.css';
import './components/AppHeader'
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';

const tattoos = [
    {
        title: "แขนเท่ห์ๆ",
        thumbnailUrl: "/images/tattoo-01-small.jpg"
    },
    {
        title: "แขนเท่ห์ๆ",
        thumbnailUrl: "/images/tattoo-02-small.jpg"
    }
];

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
