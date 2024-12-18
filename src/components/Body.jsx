import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Body = () => {

    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

        <ol>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ol>
    </>
}

export default Body;