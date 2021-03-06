import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import './styles/style.css'

const App = () => {
  return (
      <Router>
        <Header />
      </Router>
  );
}

export default App;
