import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import { GlobalContextProvider } from './context/GlobalContext';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <MainPage />
      </GlobalContextProvider>
    </Router>
  );
}

export default App
