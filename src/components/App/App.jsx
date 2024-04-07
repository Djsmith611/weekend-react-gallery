import GalleryList from "../GalleryList/GalleryList.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    return (
      <div data-testid="app">
        <Header/>
        <GalleryList/>
        <Footer/>
      </div>
    );
}

export default App;
