import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/:id' element={<Detail/>} />
        <Route path='/edit/:id' element={<UpdateProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
