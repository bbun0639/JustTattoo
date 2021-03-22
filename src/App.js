import './App.css';
import './components/AppHeader'
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';

const tattoo1 =  {  //send data by object
    title: "แขนเท่ห์ๆ",
    thumbnailUrl: "/images/tattoo-01-small.jpg"
}

function App() {
    return (
        <div className="App">
            <AppHeader />
            <div className="app-grid">
                <TattooItem tattoo={tattoo1} />
            </div>
            {/* <TattooPost/> */}
        </div>
    );
}

export default App;
