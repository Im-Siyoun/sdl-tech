import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './routes/landingPage';
import { MainLayout } from './layouts/MainLayout';
import { CeoPage } from './routes/CeoPage';
import { BusinessPage } from './routes/BusinessPage';
import { AboutPage } from './routes/AboutPage';
import { GlobalPage } from './routes/GlobalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<MainLayout />}>
        <Route path="*" />

        <Route path="/about/ceo" element={<CeoPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/global" element={<GlobalPage />} />
      </Route>
    </Routes>
  );
}

export default App;
