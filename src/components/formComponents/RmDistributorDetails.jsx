import React from 'react'
import { BiIdCard } from "react-icons/bi";
import {CgNametag} from "react-icons/cg";
import {HiOutlineMail} from "react-icons/hi";
import {TbDeviceMobile} from "react-icons/tb";
import { useStateContext } from '../../contexts/ContextProvider'

const RmDistributorDetails = () => {
  const {formData , setFormData} = useStateContext()
  
  return (
    <>
            <form action="" 
            className=' flex flex-col justify-center items-center w-full gap-3 h-full'
            >
              <h1>Rm Details</h1>
            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5"><BiIdCard /></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='RM-EUIN' 
              name='rmDetails_rmEUIN'
              defaultValue={formData.rmDetails.rmEun}
              onChange = {(e) => {const data = formData;
                data.rmDetails.rmEun = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1 text-white text-3xl mt-1.5"><CgNametag /></div>
              <input type="text"
              className=' text-black  p-3 rounded-sm w-full'
              placeholder='Name' 
              name='rmDetails_name'
              defaultValue={formData.rmDetails.name}
              onChange = {(e) => {const data = formData;
                data.rmDetails.name = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1 text-white text-3xl"><HiOutlineMail /></div>
              <input type="text"
              className=' text-black   w-full p-3 rounded-sm'
              placeholder='Email' 
              name='rmDetails_email'
              defaultValue={formData.rmDetails.email}
              onChange = {(e) => {const data = formData;
                data.rmDetails.email = e.target.value;
                 setFormData(data)}}/>
              
            </div>


            <div className=" relative flex gap-2 w-full">
              <div className=" h-4 p-1  text-white text-3xl"><TbDeviceMobile /></div>
              <input type="text"
              className=' text-black  p-3 w-full rounded-sm'
              placeholder='Mobile' 
              name='rmDetails_mobile'
              defaultValue={formData.rmDetails.mobile}
              onChange = {(e) => {const data = formData;
                data.rmDetails.mobile = e.target.value;
                 setFormData(data)}}/>
              
            </div>


            
            <h1>Distributor Details</h1>
            
            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl"><BiIdCard /></div>
              <input type="text"
              className=' text-black w-full  p-3 rounded-sm'
              placeholder='distributor-EUIN' 
              name='distributorDetails_rmEUIN'
              defaultValue={formData.distributorDetails.distributorEun}
              onChange = {(e) => {const data = formData;
                data.distributorDetails.distributorEun = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl"><CgNametag /></div>
              <input type="text"
              className=' text-black  p-3 w-full rounded-sm'
              placeholder='Name' 
              name='distributorDetails_name'
              defaultValue={formData.distributorDetails.name}
              onChange = {(e) => {const data = formData;
                data.distributorDetails.name = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl"><HiOutlineMail /></div>
              <input type="text"
              className=' text-black  p-3 w-full rounded-sm'
              placeholder='Email' 
              name='distributorDetails_email'
              defaultValue={formData.distributorDetails.email}
              onChange = {(e) => {const data = formData;
                data.distributorDetails.email = e.target.value;
                 setFormData(data)}}/>
              
            </div>


            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl"><TbDeviceMobile /></div>
              <input type="text"
              className=' text-black w-full  p-3 rounded-sm'
              placeholder='Mobile' 
              name='distributorDetails_mobile'
              defaultValue={formData.distributorDetails.mobile}
              onChange = {(e) => {const data = formData;
                data.distributorDetails.mobile = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            


            </form>    
    </>
  )
}

export default RmDistributorDetails