import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { ContactModalProvider } from './components/ContactModal.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ContactModalProvider>
        <ScrollToTop />
        <App />
      </ContactModalProvider>
    </BrowserRouter>
  </StrictMode>,
);
