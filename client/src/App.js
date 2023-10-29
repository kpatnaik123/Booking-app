import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import LandingScreen from './screens/LandingScreen';
import HomePage from './Order/pages/Home/HomePage';
import FoodPage from './Order/pages/Food/FoodPage'
import CartPage from './Order/pages/Cart/CartPage';
import Profilescreen from './screens/Profilescreen';
import Orderscreen from './screens/Orderscreen';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={Homescreen}/>  
          <Route path="/book/:restaurantid"  exact Component={Bookingscreen} />
          <Route path="/register" exact Component={Registerscreen}/>
          <Route path="/login" exact Component={Loginscreen}/>
          <Route path="/" exact Component={LandingScreen}/>
          <Route path="/profile" exact Component={Profilescreen}/>
          <Route path="/orderPage" exact Component={Orderscreen}/>
          <Route path="/order" exact Component={HomePage}/>
          <Route path="/order/search/:searchTerm" exact  Component={HomePage}/>
          <Route path="/order/tag/:tag" exact Component={HomePage}/>
          <Route path="/order/food/:foodId" exact Component={FoodPage}/>
          <Route path="/order/cart" exact Component={CartPage}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
