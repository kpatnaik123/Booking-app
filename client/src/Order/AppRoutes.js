import React from 'react'
import HomePage from './pages/Home/HomePage'
import Header from './components/Header/Header';
import { Route, Routes} from 'react-router-dom';

function AppRoutes() {
  return (
    <div>
      <Header/>
      {/* <Routes>
        <Route path='/order/tag/:tag' element={<HomePage/>}/>
      </Routes> */}
    </div>
  )
}

export default AppRoutes
