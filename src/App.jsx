
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Ring from './pages/ring'
import Home from './components/Home'
import Layout from './layout/layout'
import Chains from './pages/chains'
import Earrings from './pages/earrings'
import Necklaces from './pages/necklaces'
import Charms from './pages/charms'
import Braclet from './pages/braclet'

import Sellcard from './pages/Sellcard'
import Buynow from './payment_gateway/total_bill'
import OrderPlaced from './payment_gateway/order_palced'
import Login from './pages/login'
import Signup from './pages/signup'
import Adminpanel from './admin/adminpanel'

function App() {
  

  return (
    <>
    <Router>

        <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rings" element={<Ring />} />
          <Route path="/chains" element={<Chains/>}/>
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/charms" element={<Charms/>}/>
          <Route path="/braclets" element={<Braclet/>}/>
          <Route path="/sellcard" element={<Sellcard/>}/>
          <Route path="/sign_up" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>

          </Route>



          <Route path='/buynow' element={<Buynow></Buynow>}/>
          <Route path='/order_placed' element={<OrderPlaced></OrderPlaced>}></Route>
          <Route path='/admin_panel' element={<Adminpanel/>}/>

       
      </Routes>
     </Router>
 
    </>
  )
}

export default App
