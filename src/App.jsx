import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
    return <>
        <BrowserRouter>
            <Header />
            <Body />
            <Footer />
        </BrowserRouter>
    </>
}

export default App;