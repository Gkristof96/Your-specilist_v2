import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import ContactScreen from './screens/ContactScreen'
import ErrorScreen from './screens/ErrorScreen'
import HomeScreen from './screens/HomeScreen'
import OfferScreen from './screens/OfferScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import './styles/style.css'
import ProvidersListScreen from './screens/ProvidersListScreen'
import ProfileScreen from './screens/ProfileScreen'
import Footer from './components/Footer'

const App = () => {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomeScreen}/>
          <Route path='/login'  component={LoginScreen}/>
          <Route path='/register' component={RegisterScreen} /> 
          <Route path='/contact' component={ContactScreen}/>
          <Route path='/providers' component={ProvidersListScreen}/>
          <Route path='/profile' component={ProfileScreen}/>
          <Route path='/offer' component={OfferScreen}/>
          <Route component={ErrorScreen}/>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
