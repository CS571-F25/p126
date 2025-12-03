// This component is the main application entry point. It sets up the primary router
// and renders the main App component.
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { FavoritesProvider } from './hooks/useFavorites.jsx';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </HashRouter>
)
