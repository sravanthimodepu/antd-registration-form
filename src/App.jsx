import React, {useEffect} from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {Tooltip } from 'antd';

import './App.css'
import { Navbar , Footer , Sidebar , ThemeSettings } from './components'
import { Home , InvestorOnboarding , CaptureVerification , QualityCheck ,
        ProductionReports , ControlPanel , Tasktracker , Notes , Calender ,
         Line , Area , Bar , Pie , Financials , Pyramid } from './pages'


import { useStateContext } from './contexts/ContextProvider' ; 
const App = () => {
    const {activeMenu} = useStateContext();
    const {setActiveMenu} = useStateContext();


  return (
    <div>
        <BrowserRouter>

            {/*  This div is the entire Webpage */}
            <div className="flex relative dark:bg-main-dark-bg">
                
                {/* Settings button at the bottom right */}
                <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                  <Tooltip title={"text"} placement="top">
                    <button type='button' className='text-3xl p-3
                    hover:drop-shadow-xl hover:bg-light-gray text-white'
                    style={{background: 'black',
                    borderRadius: '50%'}} >
                        <FiSettings />
                    </button>
                    </Tooltip>  
                </div>
                
                {/* Side Bar Component */}

                {activeMenu ? (
                    <div className='w-72 fixed sidebar
                    dark:bg-secodary-dark-bg
                    bg-white'>
                        <Sidebar/>
                    </div>
                ): (
                    <div className='w-0 dark:bg-secodary-dark-bg'>
                        <Sidebar/>
                    </div>
                )}

                {/* Navbar Component */}

                <div className={
                    `dark:bg-main-bg
                     bg-main-bg 
                     min-h-screen
                     w-full
                     ${activeMenu ? 'md:ml-72': 'flex-2'}` 
                }>
                    <div className='fixed md:static
                    bg-main-bg dark:bg-main-bg
                    navbar w-full '>
                        <Navbar/>
                    </div>
                <div>
                    <Routes>
                        {/* Dashboard or Home*/}
                        <Route path= '/' element={<Home/>} />
                        <Route path= '/Home' element={<Home/>} />
                        {/* Pages*/}
                        <Route path= '/InvestorOnboarding' element={<InvestorOnboarding />} />
                        <Route path= '/CaptureVerification' element={<CaptureVerification />} />
                        <Route path= '/QualityCheck' element={<QualityCheck/>} />
                        <Route path= '/ProductionReports' element={<ProductionReports/>} />
                        <Route path= '/ControlPanel' element={<ControlPanel/>} />
                        {/* Apps */}
                        <Route path= '/tasktracker' element={<Tasktracker/>} />
                        <Route path= '/Notes' element={<Notes/>} />
                        <Route path= '/Calender' element= {<Calender/>} />

                        {/* Reports */}

                        <Route path= '/line' element={<Line/>} />
                        <Route path= '/area' element={<Area/>} />
                        <Route path= '/bar' element={<Bar/>} />
                        <Route path= '/pie' element={<Pie/>} />
                        <Route path= '/financial' element={<Financials/>} />
                        <Route path= '/pyramid' element={<Pyramid/>} />




                    </Routes>
                </div>
            </div>

         </div>
        </BrowserRouter>
    </div>
  )
}

export default App