import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import ScorePage from './pages/ScorePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="/score" element={<ScorePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
