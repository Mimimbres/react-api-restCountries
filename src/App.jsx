import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CountriesPage } from './pages/CountriesPage';
import { CountriesDetailPage } from './pages/CountriesDetailPage';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:id" element={<CountriesDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
