import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import Lessons from './pages/lessons';

function App() {
    return (
        <div>
            <Router>
            <Navbar />
                <Routes>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/lessons" element={<Lessons />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
