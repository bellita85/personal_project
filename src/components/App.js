// Fichero src/components/App.js
import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { Route, Routes } from 'react-router-dom';
import Anniversary from './Events/Anniversary';
import Birthay from './Events/Birthay';
import Christening from './Events/Christening';
import Communion from './Events/Communion';
import LeisureFamily from './Events/LeisureFamily';
import Wedding from './Events/Wedding';
import Working from './Events/Working';
import LeisureFriends from './Events/LeisureFriends';

function App() {


  return (
    <div>
     
<Routes>
  <Route path='/wending' element={<Wedding></Wedding>}></Route>
  <Route path='/communion' element={<Communion></Communion>}></Route>
  <Route path='/christening' element={<Christening></Christening>}></Route>
  <Route path='/leisureFamily' element={<LeisureFamily></LeisureFamily>}></Route>
  <Route path='/leisureFriends' element={<LeisureFriends></LeisureFriends>}></Route>
  <Route path='/birthay' element={<Birthay></Birthay>}></Route>
  <Route path='/anniversary' element={<Anniversary></Anniversary>}></Route>
  <Route path='/working' element={<Working></Working>}></Route>
  <Route path='/' element={<><Header></Header><Main></Main></>}></Route>
</Routes>
<Footer></Footer>

    </div>
  );
}

export default App;
