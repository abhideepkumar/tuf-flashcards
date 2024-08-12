import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import FlashCardsPage from './pages/flashcards';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/flashcards" element={<FlashCardsPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
