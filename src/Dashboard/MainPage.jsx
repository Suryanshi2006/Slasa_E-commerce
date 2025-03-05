import React, { createContext } from 'react'


const MyContext=createContext();


import Sidebar from './Sidebar';
import Dashboard from './Dashboard';






const MainPage = () => {
  const values=[];
  return (
   <>
  
   <MyContext.Provider value={values}>

 <section className='main flex'>
  <div className="sidebarWrapper w-[15%]">
    <Sidebar/>
  </div>

  <div className='content_Right w-[85%] py-20'>
<Dashboard/>
  </div>

 </section>
 </MyContext.Provider>

   </>
  )
}

export default MainPage
