import { Routes , Route } from 'react-router-dom';

import StartingPage from "./Pages/Starting Page/StartingPage";
import Categories from './Pages/Categories/Categories';
import Main from './Pages/Main/Main';

function App() {

  return (
    <div>
      <Routes>

        <Route path="/" exact element={<StartingPage/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Main' element={<Main/>}/>
        
          
      </Routes>
    </div>
  );
}

export default App;