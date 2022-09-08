import React  from 'react'
import axios from 'axios';
import {Form , Button , Select , DatePicker , Input, InputNumber} from 'antd';
import { useStateContext } from '../../contexts/ContextProvider';
import {GiCash} from 'react-icons/gi'
import {BsBank2 , BsCurrencyExchange , BsPinMapFill} from 'react-icons/bs'
import {IoCashOutline} from 'react-icons/io5'
import {MdOutlineFormatListNumbered} from 'react-icons/md'


import { FormButtons} from './index'

const CapitalContributionCommitment = ({handleClick, step, stepsArray}) => {


  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const capitalContributionCommitment = formData.capitalContributionCommitment;
 
 
  const onifscchange=(e)=>{
    if(e.target.value.length===11){
    axios.get(`https://ifsc.razorpay.com/${e.target.value}`).then((res)=>{
      capitalContributionCommitment.ifsc = e.target.value;
      capitalContributionCommitment.bank = res.data.BANK;
      capitalContributionCommitment.branch = res.data.BRANCH;
      form.setFieldsValue({
        capitalContributionCommitment_ifsc : e.target.value,
        capitalContributionCommitment_bank : res.data.BANK,
        capitalContributionCommitment_branch : res.data.BRANCH
      })
    }).catch((err)=>{
      alert('Invalid IFSC Code');
      form.setFieldsValue({
        capitalContributionCommitment_ifsc : '',
        capitalContributionCommitment_bank : '',
        capitalContributionCommitment_branch : '',
      })
      // setInvalidIfsc(()=> !invalidIfsc);
    })
  }
  else if(e.target.value.length===0){
    capitalContributionCommitment.ifsc = '';
    capitalContributionCommitment.bank = '';
    capitalContributionCommitment.branch = '';
    form.setFieldsValue({
      capitalContributionCommitment_ifsc : '',
      capitalContributionCommitment_bank : '',
      capitalContributionCommitment_branch : ''
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
    name = 'capitalContributionCommitment'
    onFinish={onFinish}
    autoComplete="off"
    className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'

    initialValues={
      {
        capitalContributionCommitment_commitment : formData.capitalContributionCommitment.commitment || null ,
        capitalContributionCommitment_amountInWords : formData.capitalContributionCommitment.amountInWords || null,
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
      label={<span className='text-white'>Commitment</span>}
      className='relative w-full'
      name="capitalContributionCommitment_commitment"
      rules={[
        {
          required: true,
        },
        {
          validator: (_, value) => 
          value && value>=10000000
          ? Promise.resolve() 
          : Promise.reject('Minimum commitment is 1,00,00,000')

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
      label={<span className='text-white'>amount in words</span>}
      className='relative w-full'
      name="capitalContributionCommitment_amountInWords"
      rules={[
        {
          required: true,
          message: 'Please input amount in words',
        },
          
      ]}>
        <Input
        prefix = {<GiCash className=' text-green-500 text-xl'/>}	
        size='large'
        placeholder='Commitment Amount in words'
        onChange={(e) => {capitalContributionCommitment.amountInWords = e.target.value}}
        allowClear
        />
      </Form.Item>


      <Form.Item
      label={<span className='text-white'>Contribution Type</span>}
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
        placeholder = 'Select Contribution Type'
        size='large'
        onChange={(e) => {capitalContributionCommitment.contributionType = e}}>
          <Select.Option value='first' >First</Select.Option>
          <Select.Option value='Second' >Second</Select.Option>
          <Select.Option value='Third' >Third</Select.Option>

        </Select>
      
      </Form.Item>

      <Form.Item
      label={<span className='text-white'>IFSC CODE</span>}
      className='relative w-full'
      name = 'capitalContributionCommitment_ifsc'
      rules={[
        {
          required: true,
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
          disabled
          prefix = {<BsCurrencyExchange className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Bank Name"
          onChange={(e) => {capitalContributionCommitment.bank= e.target.value.toUpperCase() ;}}
          allowClear
          />
      </Form.Item>


      <Form.Item
      label={<span className='text-white'>Bank Branch</span>}
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
          disabled
          prefix = {<BsPinMapFill className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "Branch Name"
          onChange={(e) => {capitalContributionCommitment.branch= e.target.value.toUpperCase() ;}}
          allowClear
          />
      </Form.Item>


      <Form.Item
      label={<span className='text-white'>Account Type</span>}
      className='relative  w-full'
      name = 'capitalContributionCommitment_accountType'
      rules={[
        {
          required: true,
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
        onChange={(e) => {capitalContributionCommitment.accountType = e}}>
          <Select.Option value='Savings' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>Savings</span>
                                    </div>}>Savings</Select.Option>
          <Select.Option value='Current' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>Current</span>
                                    </div>}>Current</Select.Option>
          <Select.Option value='Recurring' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>Recurring</span>
                                    </div>}>Recurring</Select.Option>
          <Select.Option value='Fixed' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>Fixed</span>
                                    </div>}>Fixed</Select.Option>
          <Select.Option value='NRE' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>NRE</span>
                                    </div>}>NRE</Select.Option>
          <Select.Option value='NRO' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>NRO</span>
                                    </div>}>NRO</Select.Option>
          <Select.Option value='FCNR' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>FCNR</span>
                                    </div>}>FCNR</Select.Option>
          <Select.Option value='Others' label={<div className='flex gap-1 justify-start'>
                                     <IoCashOutline className=' text-green-500 text-xl mt-3 '/>
                                    <span>Others</span>
                                    </div>}>Others</Select.Option>
        </Select>
        
        </Form.Item>
        <Form.Item
        label={<span className='text-white'>Account Number</span>}
        className='relative w-full'
        name = 'capitalContributionCommitment_accountNumber'
        rules={[
          {
            required: true,
          },
          {
            pattern: /^[0-9]{9,18}$/,
            message: 'Invalid Account Number',
          }
        ]}
        >
          <Input
            prefix = {<MdOutlineFormatListNumbered className=' text-green-500 text-xl'/>}
            size='large'
            placeholder = "Enter Account Number"
            onChange={(e) => {capitalContributionCommitment.accountNumber= e.target.value ;}}
            allowClear
            />


        </Form.Item>

        <Form.Item
        label={<span className='text-white'>Cheque or DD number</span>}
        className='relative w-full'
        name = 'capitalContributionCommitment_chequeOrDDNumber'
        rules={[
          {
            required: true,
          },
          {
            pattern: /^[0-9]{6}$/,
            message: 'Invalid Checque or DD Number',
          }
        ]}
        >
          <Input
            maxLength={6}
            prefix = {<MdOutlineFormatListNumbered className=' text-green-500 text-xl'/>}
            size='large'
            placeholder = "Enter Cheque or DD Number"
            onChange={(e) => {capitalContributionCommitment.chequeOrDDNumber= e.target.value ;}}
            allowClear
            />


        </Form.Item>

        <Form.Item
      label={<span className='text-white'>Amount</span>}
      className='relative w-full'
      name="capitalContributionCommitment_amount"
      rules={[
        {
          required: true,
        },
        {
          validator: (_, value) => 
          value && value>=2500000
          ? Promise.resolve() 
          : Promise.reject('Minimum Payable is 25,00,000')

        }
          
      ]}>
        <Input
        prefix = {<GiCash className=' text-green-500 text-xl'/>}	
        type='number'
        size='large'
        placeholder='Payable Amount'
        onChange={(e) => {capitalContributionCommitment.amount = e.target.value}}
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

export default CapitalContributionCommitment