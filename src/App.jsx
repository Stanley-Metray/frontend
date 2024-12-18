import { BrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
    return <>
        <BrowserRouter>
            <Header/>     
            <Body/>       
        </BrowserRouter>
    </>
}

export default App;