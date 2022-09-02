import React from 'react'
import {BsGenderAmbiguous} from "react-icons/bs"
// import {HiOutlineUsers} from "react-icons/hi";
import {BsPerson} from "react-icons/bs";
import {BsPersonPlus} from "react-icons/bs";
import {BsCardText} from  "react-icons/bs";
import {FaIdCard} from "react-icons/fa";
import {GiPerson} from "react-icons/gi";
import {BsCalendarDate} from "react-icons/bs";
import { useStateContext } from '../../contexts/ContextProvider';

const FirstHolder = () => {
  const {formData , setFormData} = useStateContext()
  
  return (
    <>
            <form action="" 
            className=' flex flex-col justify-center items-center w-full gap-3 h-full'
            >
            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsGenderAmbiguous/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='salutation' 
              name='firstHolder_salutation'
              defaultValue={formData.firstHolder.salutation}
              onChange = {(e) => {const data = formData;
                data.firstHolder.salutation = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsPerson/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='firstName' 
              name='firstHolder_firstName'
              defaultValue={formData.firstHolder.firstName}
              onChange = {(e) => {const data = formData;
                data.firstHolder.firstName = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsPersonPlus/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='middleName' 
              name='firstHolder_middleName'
              defaultValue={formData.firstHolder.middleName}
              onChange = {(e) => {const data = formData;
                data.firstHolder.middleName = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsPersonPlus/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='lastName' 
              name='firstHolder_lastName'
              defaultValue={formData.firstHolder.lastName}
              onChange = {(e) => {const data = formData;
                data.firstHolder.lastName = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsGenderAmbiguous/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='gender' 
              name='firstHolder_gender'
              defaultValue={formData.firstHolder.gender}
              onChange = {(e) => {const data = formData;
                data.firstHolder.gender = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsGenderAmbiguous/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='pan' 
              name='firstHolder_pan'
              defaultValue={formData.firstHolder.pan}
              onChange = {(e) => {const data = formData;
                data.firstHolder.pan = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsGenderAmbiguous/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='fatherOrHusbandName' 
              name='firstHolder_fatherOrHusbandName'
              defaultValue={formData.firstHolder.fatherOrHusbandName}
              onChange = {(e) => {const data = formData;
                data.firstHolder.fatherOrHusbandName = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsGenderAmbiguous/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='dob' 
              name='firstHolder_dob'
              defaultValue={formData.firstHolder.dob}
              onChange = {(e) => {const data = formData;
                data.firstHolder.dob = e.target.value;
                 setFormData(data)}}/>
              
            </div>

            <div className=" relative w-full flex gap-2">
              <div className=" h-4 p-1  text-white text-3xl mt-1.5">< BsGenderAmbiguous/></div>
              <input type="text"
              className=' text-black p-3 rounded-sm w-full'
              placeholder='cKYC' 
              name='firstHolder_cKYC'
              defaultValue={formData.firstHolder.cKYC}
              onChange = {(e) => {const data = formData;
                data.firstHolder.cKYC = e.target.value;
                 setFormData(data)}}/>
              
            </div>


            


            </form>    
    </>
  )
}

export default FirstHolder