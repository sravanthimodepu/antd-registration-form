import React , {useState} from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import {Form , Button , Select  , DatePicker , Switch , Input} from 'antd';
import {BiBuildingHouse} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {GrLocationPin} from 'react-icons/gr'
import {GrMapLocation} from 'react-icons/gr'
import {FaCity} from 'react-icons/fa'
import {BiHome} from 'react-icons/bi'
import {BiBuilding} from 'react-icons/bi'
import {BiBuildings} from 'react-icons/bi'
import {TbLocation} from 'react-icons/tb'
import {FormButtons} from './index'

const {TextArea} = Input;

const AddressFirstHolder = ({handleClick , step , stepsArray}) => {
  const {formData , setFormData} = useStateContext()
  const [form] = Form.useForm();
  const onFinish = () => {
    handleClick('next');
   } 
   const pincodeChange = (e) => {
    if(e.target.value.length === 6){
      fetch(`https://api.postalpincode.in/pincode/${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        if(data[0].Status === 'Success'){
            address.pinCode = e.target.value;
            address.city = data[0].PostOffice[0].District;
            address.state = data[0].PostOffice[0].State;
            address.country = data[0].PostOffice[0].Country;

          form.setFieldsValue({
            address_city : data[0].PostOffice[0].District,
            address_state : data[0].PostOffice[0].State,
            address_country : data[0].PostOffice[0].Country
          })
        }
      })
    }

    
   }

   const address = formData.firstHolder.address;
  return (
    <>
   <Form
           form={form}
           name='ThirdHolder'
           onFinish={onFinish}
           autoComplete = "off"
           className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
           initialValues={
            {
              address_addressType : formData.firstHolder.address.addressType || null,
              address_sameAsCorrespondence : formData.firstHolder.address.sameAsCorrespondence || null,
              address_addressLine1 : formData.firstHolder.address.addressLine1 || null,
              address_addressLine2 : formData.firstHolder.address.addressLine2 || null,
              address_pinCode : formData.firstHolder.address.pinCode || null,
              address_city : formData.firstHolder.address.city || null,
              address_state : formData.firstHolder.address.state || null,
              address_country:  formData.firstHolder.address.country || null,
            }
           }
   >

      <Form.Item
      className='relative w-full'
      name='address_addressType'
      rules={[
        {
          required: true,
          
        },
      ]} >
      
      <Select
      optionLabelProp='label'
      allowClear
      showSearch
      placeholder = {<div className='flex gap-1 justify-start'>
          <BiBuildingHouse className=' text-green-500 text-xl mt-3 '/>
          <span>Address Type</span>
          </div>
        }
        size='large'
        onChange={(value)=> {address.addressType = value}}
        >

        <Select.Option value='Home' label={<div className='flex gap-1 justify-start'>
                                     <BiHome className=' text-green-500 text-xl mt-3 '/>
                                    <span>Home</span>
                                    </div>}>Home</Select.Option>
       <Select.Option value='Office' label={<div className='flex gap-1 justify-start'>
                                     <BiBuilding className=' text-green-500 text-xl mt-3 '/>
                                    <span>Office</span>
                                    </div>}>Office</Select.Option>
      <Select.Option value='Others' label={<div className='flex gap-1 justify-start'>
                                     <BiBuilding className=' text-green-500 text-xl mt-3 '/>
                                    <span>Others</span>
                                    </div>}>Others</Select.Option>


          </Select>



      </Form.Item>
      <Form.Item
          className='relative w-full'
          label={<p className=' relative right-0  text-black text-center p-4 pr-1 pl-0 border rounded mt-6 bg-white text-base'>Address Same as Correspondance?:</p>}

          name='address_sameAsCorrespondence'
          >
               <Switch
               defaultChecked = {address.sameAsCorrespondence}
               onChange={(e)=>{address.sameAsCorrespondence = e;}}
               checkedChildren="Yes" unCheckedChildren="No"  />
          

          </Form.Item>
          <Form.Item
          className='relative w-full'
          name='address_addressLine1'
          rules={[
            {
              required: true,
            },
            {
              min: 5,
              message: "You Have to enter a minimum of 5 characters"
            },
            {
              max: 50,
              message: 'max charector limit reached'
            },
            {
              pattern: /^[a-zA-Z0-9\s,'-/]*$/,
              message: 'Only Alphabets and Numbers are allowed'
            }
          ]}>

          
          <TextArea 
          allowClear
          maxLength={150} 
          
          // prefix = {<GrLocationPin className=' text-green-500 text-xl'/>}
          placeholder='Address Line 1'
          onChange={(e)=>{address.addressLine1 = e.target.value}}
          autoSize />
          
            </Form.Item>

            <Form.Item
          className='relative w-full'
          name='address_addressLine2'
          rules={[
            {
              min: 5,
              message: "You Have to enter a minimum of 5 characters"
            },
            {
              max: 50,
              message: 'max charector limit reached'
            },
            {
              pattern: /^[a-zA-Z0-9\s,'-/]*$/,
              message: `No Special Charectors are allowedexcept " ' "  and " - " `
            } 
          ]}>

          
          <TextArea 
          maxLength={100} 
          size='large'
          placeholder="Address-Line-2" 
          onChange={(e)=>{address.addressLine2 = e.target.value}}
          autoSize />
          
            </Form.Item>

          <Form.Item
          name='address_pinCode'
          className='relative w-full'
          rules={[
            {
              required: true,
            },
            {
              pattern: /^[0-9{7}\s]*$/,
              message: ` enter a Valid Pincode`
            } 
          ]}
          >
          <Input
          prefix = {<GoLocation className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "PinCode"
          onChange={(e) => {pincodeChange(e)}}
          allowClear
          />

          



          </Form.Item>

          <Form.Item
          name='address_city'
          className='relative w-full'
          rules={[
            {
              required: true,
            },
          ]}
          >
          <Input
          disabled
          prefix = {<FaCity className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "City"
          onChange={(e) => {console.log(e.target.value)}}
          allowClear
          />

          



          </Form.Item>

          <Form.Item
          name='address_state'
          className='relative w-full'
          rules={[
            {
              required: true,
            }, 
          ]}
          >
          <Input
          disabled
          prefix = {<TbLocation className=' text-green-500 text-xl'/>}	
          size='large'
          placeholder = "State"
          onChange={(e) => {pincodeChange(e)}}
          allowClear
          />
           </Form.Item>


          <Form.Item
          name='address_country'
          className='relative w-full'
          rules={[
            {
              required: true,
            },
          ]}
          >
          <Input
          disabled
          prefix = {<GrMapLocation className=' text-white text-xl'/>}	
          size='large'
          placeholder = "Country"
          onChange={(e) => address.country = e.target.value}
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



          <div className='flex justify-between gap-10'> 
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
    </div>
   </Form>
    </>
  )
}

export default AddressFirstHolder