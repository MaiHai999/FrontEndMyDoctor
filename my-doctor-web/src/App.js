
import {Routes , Route} from 'react-router-dom';

import LoginContainer from "./components/Containers/loginContainer";
import RegiterContainer from "./components/Containers/regiterContainer";
import VertificationContainer from './components/Containers/vertificationContainer';
import CallbackGG from './services/CallBackGG';

function App() {
  // Trả về một phần tử JSX
  return (
   <Routes>
    <Route path='/' element={<LoginContainer/>} />
    <Route path='/regiter' element={<RegiterContainer/>} />
    <Route path='/callback' element={<CallbackGG/>} />
    <Route path='/vertification_login' element={<VertificationContainer/>} />
    
    
   </Routes>
  );
}

export default App;
