import './App.css';
import './components/AppHeader'
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';

function App() {

    const textInput = <input type="text" />
    const okBtn = (
        <button>
            สักหน่อยไหมล่ะ
        </button>
    );

    return (
        <div className="App">
            <AppHeader />
            <div className="app-grid">
                <TattooItem title="แขนเท่ห์ๆ" thumbnailUrl="/images/tattoo-01-small.jpg" />
                <TattooItem title="มือเท่ห์ๆ" thumbnailUrl="/images/tattoo-02-small.jpg" />
                <TattooItem title="คอเท่ห์ๆ" thumbnailUrl="/images/tattoo-03-small.jpg" />
                <TattooItem title="หลังเท่ห์ๆ" thumbnailUrl="/images/tattoo-04-small.jpg" />
            </div>
            {/* <TattooPost/> */}
        </div>
    );
}

export default App;
