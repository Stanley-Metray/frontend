import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Search from './Search';

const Body = () => {
    return <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='*' element={<Error/>} />
        </Routes>
    </>
}

export default Body;