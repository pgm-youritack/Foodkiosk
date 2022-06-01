import './App.css';
import {Route,Routes} from 'react-router-dom';
import Foodkiosk from './pages/Foodkiosk';
import NotFound from './pages/NotFound';
import Choose  from './pages/Choose';
import ROUTES from './routes';

function App() {
  return (
  <div>
    <Routes>
      <Route path={ROUTES.BASE} element={<Choose/>}></Route>
      <Route path={ROUTES.KIOSK} element={<Foodkiosk/>}></Route>
      <Route path="*" element={<NotFound />}/>

      
    </Routes>
  </div>
  );
}

export default App;
