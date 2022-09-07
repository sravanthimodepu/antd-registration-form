import React from 'react'
import {Form , Button , Select , DatePicker , Input} from 'antd';
import { useStateContext } from '../../contexts/ContextProvider';
import {GiCash} from 'react-icons/gi'
import {BsBank2} from 'react-icons/bs'


import { FormButtons} from './index'

const CapitalContributionCommitment = ({handleClick, step, stepsArray}) => {

  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const onFinish = () => {
    handleClick('next');
   }
   const capitalContributionCommitment = formData.capitalContributionCommitment;
  return (
    <>
    <Form
    form={form}
    name = 'capitalContributionCommitment'
    onFinish={onFinish}
    autoComplete="off"
    className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'

    initialValues={
      {
        capitalContributionCommitment_commitment : formData.capitalContributionCommitment.commitment || null ,
        capitalContributionCommitment_contributionType : formData.capitalContributionCommitment.contributionType || null ,
        capitalContributionCommitment_ifsc : formData.capitalContributionCommitment.ifsc || null ,
        capitalContributionCommitment_bank : formData.capitalContributionCommitment.bank || null ,
        capitalContributionCommitment_branch : formData.capitalContributionCommitment.branch || null ,
        capitalContributionCommitment_accountType : formData.capitalContributionCommitment.accountType || null ,
        capitalContributionCommitment_accountNumber : formData.capitalContributionCommitment.accountNumber || null ,
        capitalContributionCommitment_chequeOrDDNumber : formData.capitalContributionCommitment.chequeOrDDNumber || null ,
        capitalContributionCommitment_amount : formData.capitalContributionCommitment.amount || null 
      }
    }
    
    >
      <Form.Item
      className='relative w-full'
      name="capitalContributionCommitment_commitment"
      rules={[
        {
          required: true,
        },
        {
          pattern : /^[\d]{7,}$/,
          message : 'amount should be 7 digits or higher'
        }
      ]}>
        <Input
        prefix = {<GiCash className=' text-green-500 text-xl'/>}	
        type='number'
        size='large'
        placeholder='Commitment Amount'
        onChange={(e) => {capitalContributionCommitment.commitment = e.target.value}}
        allowClear
        />
      </Form.Item>

      <Form.Item
      name="capitalContributionCommitment_contributionType"
      className='relative w-full'
      rules={[
        {
          required: true,
        }
      ]}>
        <Select
        allowClear
        showSearch
        placeholder = 'Contribution Type'
        size='large'
        onChange={(e) => {capitalContributionCommitment.contributionType = e}}>
          <Select.Option value='first' >First</Select.Option>
          <Select.Option value='Second' >Second</Select.Option>
          <Select.Option value='Third' >Third</Select.Option>

        </Select>
      
      </Form.Item>

      <Form.Item
      className='relative w-full'
      name = 'capitalContributionCommitment_ifsc'
      rules={[
        {
          required: true,
        },
        {
          pattern: /^([a-zA-Z]{4}\d{7})\b$/,
          message: 'Invalid IFSC Code',
        }
      ]}
      >
       <Input
          prefix = {<BsBank2 className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "IFSC Code"
          onChange={(e) => {capitalContributionCommitment.ifsc= e.target.value.toUpperCase() ;}}
          allowClear
          />
      </Form.Item>

      <Form.Item
      className='relative w-full'
      name = 'capitalContributionCommitment_bank'
      rules={[
        {
          required: true,
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
          prefix = {<BsBank2 className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Bank Name"
          onChange={(e) => {capitalContributionCommitment.bank= e.target.value.toUpperCase() ;}}
          allowClear
          />
      </Form.Item>


      <Form.Item
      className='relative w-full'
      name = 'capitalContributionCommitment_branch'
      rules={[
        {
          required: true,
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
          prefix = {<BsBank2 className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Branch Name"
          onChange={(e) => {capitalContributionCommitment.branch= e.target.value.toUpperCase() ;}}
          allowClear
          />
      </Form.Item>












    </Form>











    <div className='flex justify-between gap-10'> 
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
    </div>
    </>
  )
}

export default CapitalContributionCommitment