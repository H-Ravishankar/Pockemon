import './App.css'
import React from 'react'

import Pockedex from './components/pockedex/pockedex'
import Search from './components/search/Search'
import Pockemonlist from './components/PockemonList/pockemonList'
import CustomRoutes from './routes/CustomRoutes'

function App() {


  return (
    <div >
       
       <div className=' text-center '>  
       <div className='text-5xl m-2  bg-slate-950 text-white p-2'>
          <Pockedex/> 
       </div>
      
       
       </div>
         {/* <Pockemonlist/>    */}
         <CustomRoutes/>

          
    </div>
  )
}

export default App
