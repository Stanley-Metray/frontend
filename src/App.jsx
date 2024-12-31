import { Routes, Route } from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import UserLayout from './Layouts/UserLayout';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return <>
        <HomeLayout/>
        <div> {/* Main Layout */}
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                    {/* User Routes */}
                    <Route path="/user" element={<UserLayout />}>
                        <Route index element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                    </Route>

                    {/* Fallback for unmatched routes */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
    </>
}

export default App;