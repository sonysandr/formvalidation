
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComp from './LoginComp';

import LoggedUserPage from './pages/LoggedUserPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
       
      <Routes>
      
      <Route path='/' element={<LoginComp/>}/>
        <Route path='/loggeduserpage' element={<LoggedUserPage/>}/>
        
      </Routes> 
      </header>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
