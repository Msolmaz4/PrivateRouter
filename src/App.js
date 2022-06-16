
import "./App.css";
import {BrowserRouter as Router ,Link,Routes ,Route} from 'react-router-dom'
import Home from './Home'
import Signup from "./Signup";
import Account from './Account'




function App() {
  return (
    
    <Router>
    <div className="App">

<Link to='/'>Home</Link>
<Link to='/signup'>Signup</Link>
<Link to='/account'>Account</Link>
</div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/account" element={<Account/>}/>
  </Routes>
 </Router>

  )}

export default App;
