
import "./App.css";
import {BrowserRouter as Router ,Link,Routes ,Route} from 'react-router-dom'
import Home from './Home'
import Signup from "./Signup";
import Account from './Account'
import ProductRouter from "./ProductRouter";




function App() {
  return (
    
    <Router>
    <div className="App">

<Link to='/'>Home</Link>
<Link to='/signup'>Signup</Link>
<Link to='/account'>Account</Link>
</div>
<Routes>
<Route path="/signup" element={<Signup/>}/>
 
  <Route element={<ProductRouter/>}>
  <Route path='/' element={<Home/>}/>
   <Route path="/account" element={<Account/>}/>
  </Route>
  </Routes>
 </Router>

  )}

export default App;
