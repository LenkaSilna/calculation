import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Calculations } from './pages/Calculations';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculations" element={<Calculations />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
