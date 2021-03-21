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
import ProfileEditScreen from './screens/ProfileEditScreen'
import ProviderScreen from './screens/ProviderScreen'
import ProviderRatingScreen from './screens/ProviderRatingScreen'
import PasswordChangeScreen from './screens/PasswordChangeScreen'
import GalleryUploadScreen from './screens/GalleryUploadScreen'
import AddProfessionScreen from './screens/AddProfessionScreen'
import DeleteProfileScreen from './screens/DeleteProfileScreen'
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
          <Route path='/providers' exact component={ProvidersListScreen}/>
          <Route path='/providers/search/:profession?/:city?' exact component={ProvidersListScreen}/>
          <Route path='/providers/page/:pageNumber' exact component={ProvidersListScreen}/>
          <Route path='/providers/search/:profession?/:city?/page/:pageNumber' exact component={ProvidersListScreen}/>
          <Route path='/provider/:id' exact component={ProviderScreen} />
          <Route path='/provider/:id/rating' component={ProviderRatingScreen} />
          <Route path='/profile' exact component={ProfileScreen}/>
          <Route path='/profile/edit' component={ProfileEditScreen}/>
          <Route path='/profile/password/change' component={PasswordChangeScreen}/>
          <Route path='/profile/gallery/upload' component={GalleryUploadScreen}/>
          <Route path='/profile/professions' component={AddProfessionScreen}/>
          <Route path='/profile/delete' component={DeleteProfileScreen}/>
          <Route path='/offer' component={OfferScreen}/>
          <Route component={ErrorScreen}/>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
