import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Movies from './Movies';

const Body = () => {
    return <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/movies/:genere/:year' element={<Movies/>} />
        </Routes>
    </>
}

export default Body;