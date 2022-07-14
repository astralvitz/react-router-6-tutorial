import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SharedLayout from './pages/SharedLayout';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import SharedProductLayout from './pages/SharedProductLayout';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';

function App() {
  // normally will use context to store user value
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' elements={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }/>

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;