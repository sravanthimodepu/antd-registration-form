import React from 'react'
import axios from 'axios';
import {Form , Button , Select , DatePicker , Input, InputNumber} from 'antd';
import { useStateContext } from '../../contexts/ContextProvider';
import {MdOutlineFormatListNumbered} from 'react-icons/md'
import {IoCashOutline} from 'react-icons/io5'
import {BsBank2 , BsCurrencyExchange , BsPinMapFill} from 'react-icons/bs'

import { FormButtons} from './index'


const BankDetails = ({handleClick, step, stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const bankDetails = formData.bankDetails

  const onifscchange=(e)=>{
    if(e.target.value.length===11){
    axios.get(`https://ifsc.razorpay.com/${e.target.value}`).then((res)=>{
      console.log(res.data)
      bankDetails.ifsc = e.target.value;
      bankDetails.bank = res.data.BANK;
      bankDetails.branch = res.data.BRANCH;
      bankDetails.micr = res.data.MICR;
      form.setFieldsValue({
        bankDetails_ifsc : e.target.value,
        bankDetails_bank : res.data.BANK,
        bankDetails_branch : res.data.BRANCH,
        bankDetails_micr : res.data.MICR
      })
    }).catch((err)=>{
      alert('Invalid IFSC Code');
      form.setFieldsValue({
        bankDetails_ifsc : '',
        bankDetails_bank : '',
        bankDetails_branch : '',
        bankDetails_micr : ''
      })
      // setInvalidIfsc(()=> !invalidIfsc);
    })
  }
  else if(e.target.value.length===0){
    bankDetails.ifsc = '';
    bankDetails.bank = '';
    bankDetails.branch = '';
    bankDetails.micr = '';
    form.setFieldsValue({
      bankDetails_ifsc : '',
      bankDetails_bank : '',
      bankDetails_branch : '',
      bankDetails_micr : ''
    })
  }
}

const onFinish = () => {
  handleClick('next');
 }



  return (
    <>
    <Form
    // layout='vertical'
    labelCol={{ span: 9 }}
    wrapperCol={{ span: 14 }}
    form={form}
    name = 'bankDetails'
    onFinish={onFinish}
    autoComplete="off"
    className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'

    initialValues={
      {
        bankDetails_accountNumber : formData.bankDetails.accountNumber || null ,
        bankDetails_accountType : formData.bankDetails.accountType || null ,
        bankDetails_ifsc : formData.bankDetails.ifsc || null ,
        bankDetails_bank : formData.bankDetails.bank || null ,
        bankDetails_branch : formData.bankDetails.branch || null ,
        bankDetails_micr : formData.bankDetails.micr || null,
        bankDetails_paymentMode : formData.bankDetails.paymentMode || null 
      }
    }>

        <Form.Item
        label={<span className='text-white'>Account Number</span>}
        className='relative w-full'
        name = 'bankDetails_accountNumber'
        rules={[
          {
            required: true,
            message: 'Please input your Account Number!',
          },
          {
            pattern: /^[0-9]{9,18}$/,
            message: 'Invalid Account Number',
          }
        ]}
        >
          <Input
          maxLength={18}
            prefix = {<MdOutlineFormatListNumbered className=' text-green-500 text-xl'/>}
            size='large'
            placeholder = "Enter Account Number"
            onChange={(e) => {bankDetails.accountNumber= e.target.value ;}}
            allowClear
            />


         </Form.Item>

         <Form.Item
      label={<span className='text-white'>Account Type</span>}
      className='relative  w-full'
      name = 'bankDetails_accountType'
      rules={[
        {
          required: true,
          message: 'Please select your Account Type!',
        }
      ]}
      >
        <Select
        optionLabelProp='label'
        allowClear
        showSearch
        placeholder = {<div className='flex gap-1 justify-start'>
        <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
        <span>Select Account Type</span>
        </div>
      }
        size='large'
        onChange={(e) => {bankDetails.accountType = e}}>
          <Select.Option value='Savings' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>Savings</span>
                                    </div>}>Savings</Select.Option>
          <Select.Option value='Current' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>Current</span>
                                    </div>}>Current</Select.Option>
          <Select.Option value='NRE' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>NRE</span>
                                    </div>}>NRE</Select.Option>
          <Select.Option value='NRO' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>NRO</span>
                                    </div>}>NRO</Select.Option>
          <Select.Option value='Others' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>Others</span>
                                    </div>}>Others</Select.Option>
        </Select>
        
        </Form.Item>

        <Form.Item
      label={<span className='text-white'>IFSC CODE</span>}
      className='relative w-full'
      name = 'bankDetails_ifsc'
      rules={[
        {
          required: true,
          message: 'Please input your IFSC Code!',
        },
        {
          pattern: /^([a-zA-Z]{4}\d{7})\b$/,
          message: 'Invalid IFSC Code',
        },
      ]}
      >
       <Input
          prefix = {<BsBank2 className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "IFSC Code"
          onChange={(e) => {onifscchange(e);}}
          allowClear
          />
      </Form.Item>
      <Form.Item
      label={<span className='text-white'>Bank</span>}
      className='relative w-full'
      name = 'bankDetails_bank'
      rules={[
        {
          required: true,
          message: 'Please input your Bank Name!',
        },
        {
          min: 3,
          message: 'Bank Name should be atleast 3 characters long',
        },
        {
          pattern: /^[a-zA-Z ]*$/,
          message: 'Invalid Bank Name',
        }
      ]}
      >
       <Input
          disabled
          prefix = {<BsCurrencyExchange className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Bank Name"
          onChange={(e) => {bankDetails.bank= e.target.value.toUpperCase() ;}}
          allowClear
          />
      </Form.Item>
      <Form.Item
      label={<span className='text-white'>Bank Branch</span>}
      className='relative w-full'
      name = 'bankDetails_branch'
      rules={[
        {
          required: true,
          message: 'Please input your Bank Branch!',
        },
        {
          min: 3,
          message: 'Branch Name should be atleast 3 characters long',
        },
        {
          pattern: /^[a-zA-Z -/]*$/,
          message: 'Invalid Branch Name',
        }
      ]}
      >
       <Input
          disabled
          prefix = {<BsPinMapFill className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Branch Name"
          onChange={(e) => {bankDetails.branch= e.target.value.toUpperCase() ;}}
          allowClear
          />
      </Form.Item>

      <Form.Item
      label={<span className='text-white'>MICR code</span>}
      className='relative w-full'
      name = 'bankDetails_micr'
      rules={[
        {
          required: true,
          message: 'Please input your MICR Code!',
        },
        {
          min: 3,
          message: 'Branch Name should be atleast 3 characters long',
        },
      ]}
      >
       <Input
          type='number'
          disabled
          prefix = {<BsBank2 className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "enter micr code"
          onChange={(e) => {bankDetails.micr= e.target.value ;}}
          allowClear
          />
      </Form.Item>

      
      <div
             className='relative w-full  mt-5 flex justify-center gap-32'>
              <div>
              <Button
              type='secondary'
              onClick={()=>handleClick('back')}
              >
                Back
              </Button>
              </div>
              <div>
              <Button
              type='primary'
              htmlType='submit'
              >
                Next
              </Button>
              </div>
          </div>

    </Form>
    </>
  )
}

export default BankDetails