import axios from 'axios'
import React  , {useEffect , useState}from 'react'
import {IoRefreshSharp} from 'react-icons/io5'

const ApplicationSelector = ({setApplictionSelected}) => {
    const [applicationsData , setApplictionsData ] = useState('')
    let temp = []
    for(let i =0 ; i<10 ; i++){
            temp.push(i)
    }
    
  return (
    <div
        style={{ height:500 , maxHeight: 500 , width: 500 , maxWidth:500}}
        className=' bg-slate-400 border rounded-3xl shadow-2xl shadow-slate-200 mt-3 overflow-y-auto overflow-x-hidden'
        >
        <div
        className=' flex justify-center bg-white m-4 rounded-3xl shadow-2xl shadow-gray-50'
        >
        <h1 className=' text-slate-500 text-2xl' >Select an Application</h1>
        </div>   
        <div  style={{left: "85%"}} className=' relative flex flex-row'>
        <button className=' text-validus-blue' >Refresh</button>
        <IoRefreshSharp className=' text-xl text-validus-blue'/>
         </div>     

                   {/* List of Aplications */}
            <div> 
                {/* Map function */}
                {temp.map((item)=>(
                    <div
                    key={item}
                    onClick={()=>setApplictionSelected(true)}
            className='m-5 h-20 bg-white rounded-xl  cursor-pointer ' 
            >
            </div>
                ))}
            

            </div>
                    

        </div>
  )
}

export default ApplicationSelector