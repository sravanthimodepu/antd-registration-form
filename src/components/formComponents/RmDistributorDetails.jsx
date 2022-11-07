import React , {useState , useEffect}from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import { Form , Button , Select } from 'antd';

const RmDistributorDetails = ({handleClick}) => {
  const {formData , setFormData} = useStateContext()
  const [rmFillData , setRmFillData] = useState({});
  const [distributorSelectData , setDistributorSelectData] = useState([]);
  const [distributorFillData , setDistributorFillData] = useState({});
  const [form] = Form.useForm();
  const rmAndDistData = formData;

  const rmData = [
    {id: 1 , rmEun: "RM-123456789" , rmName: "Sri Vishnu Reddy", rmEmail: "srivishnu@gmail.com" , rmMobile: "9999999999" , distID : 1 , distributors : ["D-123453789" , "D-545656765" ]},
    {id: 2 , rmEun: "RM-456776567" , rmName: "Ganesh Sai", rmEmail: "ganeshsai@gmail.com" , rmMobile: "8888888888" , distID : 2 , distributors : ["D-356865539" , "D-222211343"] },
    {id: 3 , rmEun: "RM-345676545" , rmName: "Suram", rmEmail: "suram@gmail.com" , rmMobile: "7777777777" , distID : 3 , distributors: ["D-777946526" , "D-887643596"] },
    {id: 4 , rmEun: "RM-345678655" , rmName: "Sravanthi", rmEmail: "sravanthi@gmail.com" , rmMobile: "6666666666" , distID : 4 , distributors : ["D-345678657" ,"D-247856849" ] } ,
    {id: 5 , rmEun: "RM-247056849" , rmName: "Durga", rmEmail: "durga@gmail.com" , rmMobile: "5555555555" , distID : 5 , distributors : ["D-843878737" ,"D-123452789" ] },
    {id: 6 , rmEun: "RM-843808737", rmName: "Adarsh Kulkarni", rmEmail: "adarsh@gmail.com" , rmMobile: "4444444444" , distID : 6 , distributors: ["D-456770567" , "D-345672245" ] }

  ]
  const distributorData = [
    {rmID : 1 , id: 1 , distEun: "D-123453789" , distName: "Peter Parker", distEmail: "iamnotspiderboy@gmail.com" , distMobile: "1111122222"},
    {rmID : 1 , id: 2 , distEun: "D-545656765" , distName: "Steven Strange", distEmail: "DR.strangeisnotanalias@gmail.com" , distMobile: "1111111111"},
    {rmID : 2 , id: 3 , distEun: "D-356865539" , distName: "Steve Rogers", distEmail: "onyourleft@gmail.com" , distMobile: "2222233333"},
    {rmID : 2 , id: 4 , distEun: "D-222211343" , distName: "Falcon", distEmail: "Don'tyousayit@gmail.com" , distMobile: "6666688888"},
    {rmID : 3 , id: 5 , distEun: "D-777946526" , distName: "Tony Stark", distEmail: "ILU3000@gmail.com" , distMobile: "9999911123"},
    {rmID : 3 , id: 6 , distEun: "D-887643596" , distName: "Natasha Romanoff", distEmail: "blackwidow@gmail.com" , distMobile: "8888823454"},
    {rmID : 4 , id: 7 , distEun: "D-345678657" , distName: "Bruce Banner", distEmail: "Ïamalwaysangry@gmail.com" , distMobile: "7777734567"}, 
    {rmID : 4 , id: 8 , distEun: "D-247856849" , distName: "Thor", distEmail: "imissloki@gmail.com", distMobile: "6666645678"},
    {rmID : 5 , id: 9 , distEun: "D-843878737" , distName: "Clint Barton", distEmail: "iamanavengerbelieveme@gmail.com" , distMobile: "5555556789"},
    {rmID : 5 , id: 10 , distEun: "D-123452789" , distName: "Wanda Maximoff", distEmail: "iwantmychildren@gmail.com" , distMobile: "4444467890"},	
    {rmID : 6 , id: 11 , distEun: "D-456770567" , distName: "Scott Lang", distEmail: "anyonehaveorangeslices@gmail.com" , distMobile: "3333378901"},
    {rmID : 6 , id: 12 , distEun: "D-345672245" , distName: "T'Challa", distEmail: "wakandaforever@gmail.com" , distMobile: "2222289012"}
  ]

  const handleRmchange = function(value , event)  { 
    if(value){
      setDistributorFillData({});
    form.resetFields(['distributorDetails_distributorEun' , 'distributorDetails_distName' , 'distributorDetails_distEmail' , 'distributorDetails_distMobile' , 'rmDetails_rmName' , 'rmDetails_rmEUIN' , 'rmDetails_rmEmail' , 'rmDetails_rmMobile']);
    setRmFillData(rmData.find(rm => rm.id == event.key));
    setDistributorSelectData(distributorData.filter(dist => dist.rmID == event.key));
    }
    else{
      setRmFillData({});
      setDistributorSelectData([]);
      setDistributorFillData({});
    }
  }

  useEffect(() => {
    form.setFieldsValue({
      rmDetails_rmEUIN: rmFillData.rmEun,
      rmDetails_rmName : rmFillData.rmName,
      rmDetails_rmEmail : rmFillData.rmEmail,
      rmDetails_rmMobile : rmFillData.rmMobile,

    })
    rmAndDistData.rmDetails.rmEun = rmFillData.rmEun;
    rmAndDistData.rmDetails.name = rmFillData.rmName;
    rmAndDistData.rmDetails.email = rmFillData.rmEmail;
    rmAndDistData.rmDetails.mobile = rmFillData.rmMobile;

  }, [rmFillData])

  const handleDistchange = (value , event) => {
    if(value){
    console.log(value );	
    console.log(event)
    setDistributorFillData(distributorData.find(dist => dist.distEun == event.key));
    setRmFillData(rmData.find(rm => rm.distributors.includes(event.key)));
    }
    else{
      console.log('field cleared')
    setDistributorFillData({});
    setRmFillData({});
    form.resetFields(['distributorDetails_distributorEun' , 'distributorDetails_distName' , 'distributorDetails_distEmail' , 'distributorDetails_distMobile' , 'rmDetails_rmEUIN' , 'rmDetails_rmName' , 'rmDetails_rmEmail' , 'rmDetails_rmMobile']);
    }
  }

  useEffect	(() => {
    form.setFieldValue({
      distributorDetails_distName : formData.distributorDetails.name || null,
      distributorDetails_distributorEun: formData.distributorDetails.distributorEun|| null,
      distributorDetails_distEmail : formData.distributorDetails.email|| null,
      distributorDetails_distMobile : formData.distributorDetails.mobile|| null,
      rmDetails_rmName : formData.rmDetails.name|| null,
      rmDetails_rmEUIN : formData.rmDetails.rmEun|| null,
      rmDetails_rmEmail : formData.rmDetails.email|| null,
      rmDetails_rmMobile : formData.rmDetails.mobile|| null
    })
  })

  useEffect(() => {
    console.log(distributorFillData)
    form.setFieldsValue({
      distributorDetails_distributorEun: distributorFillData.distEun,
      distributorDetails_distName : distributorFillData.distName,
      distributorDetails_distEmail : distributorFillData.distEmail,
      distributorDetails_distMobile : distributorFillData.distMobile,

    })

    rmAndDistData.distributorDetails.distributorEun = distributorFillData.distEun;
    rmAndDistData.distributorDetails.name = distributorFillData.distName;
    rmAndDistData.distributorDetails.email = distributorFillData.distEmail;
    rmAndDistData.distributorDetails.mobile = distributorFillData.distMobile;
  }, [distributorFillData])

  const onFinish = () => {
  setFormData(rmAndDistData);
  handleClick('next');
  console.log(formData);
  } 
  return (
    <>
            <Form
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 14 }}
            form={form}
            name= 'rmAndDistributorDetails'
            onFinish={onFinish}
            autoComplete = "off"
            className=' flex flex-col justify-center items-center w-full gap-0.5 h-full text-white'
            initialValues={
              {
                distributorDetails_distName : formData.distributorDetails.name || null,
                distributorDetails_distributorEun: formData.distributorDetails.distributorEun|| null,
                distributorDetails_distEmail : formData.distributorDetails.email|| null,
                distributorDetails_distMobile : formData.distributorDetails.mobile|| null,
                rmDetails_rmName : formData.rmDetails.name|| null,
                rmDetails_rmEUIN : formData.rmDetails.rmEun|| null,
                rmDetails_rmEmail : formData.rmDetails.email|| null,
                rmDetails_rmMobile : formData.rmDetails.mobile|| null
              }
            }
            >
              
{/* **************************************DISTRIBUTOR DETAILS***************************************************** */}

              <h1 className='text-white'>Distributor Details</h1>

              <Form.Item
              label={<span className='text-white'>Distributor Name</span>}
              className=" relative w-full"
              name= 'distributorDetails_distName'
              rules={[
                {
                  required: true,
                  message: 'Please input Distributor Name!',
                },
              ]}
              >
                <Select
                
                 optionLabelProp='label'
                  allowClear
                  showSearch
                  placeholder="Distributor Name"
                  onChange={handleDistchange}
                  size='large'>
                    {
                      distributorSelectData.length > 0?
                    distributorSelectData.map((dist, index)=> (
                      <Select.Option key={dist.distEun} label={dist.distName} value={dist.distName}>{`${dist.distName}-${dist.distEun}`}</Select.Option>
                    )):
                    distributorData.map((dist, index)=> (
                      <Select.Option key={dist.distEun} label={dist.distName} value={dist.distName}>{`${dist.distName}-${dist.distEun}`}</Select.Option>
                    ))
                    }
              </Select>
              </Form.Item>
              <Form.Item
              label={<span className='text-white'>Distributor EUIN</span>}
              className=" relative w-full"
              name= 'distributorDetails_distributorEun'
              rules={[
                {
                  required: true,
                  message: 'Please input Distributor EUIN!',
                },
              ]}
              >
                <Select
                  allowClear
                  showSearch
                  placeholder="Select Distributor-EUN"
                  onChange={handleDistchange}
                  size='large'>
                    {
                      distributorSelectData.length > 0?
                    distributorSelectData.map((dist, index)=> (
                      <Select.Option key={dist.distEun} value={dist.distEun}>{dist.distEun}</Select.Option>
                    )):
                    distributorData.map((dist, index)=> (
                      <Select.Option key={dist.distEun} value={dist.distEun}>{dist.distEun}</Select.Option>
                    ))
                    }
              </Select>
              </Form.Item>

              <Form.Item
              label={<span className='text-white'>Distributor Email</span>}
              className=" relative w-full"
              name= 'distributorDetails_distEmail'
              rules={[
                {
                  required: true,
                  message: 'Please input Distributor Email!',
                },
              ]}
              >
                <Select
                  allowClear
                  showSearch
                  placeholder="Distributor Email"
                  onChange={handleDistchange}
                  size='large'>
                     {
                      distributorSelectData.length > 0?
                     distributorSelectData.map((dist, index)=> (
                      <Select.Option key={dist.distEun} value={dist.distEmail}>{dist.distEmail}</Select.Option>
                    )):
                    distributorData.map((dist, index)=> (
                      <Select.Option key={dist.distEun} value={dist.distEmail}>{dist.distEmail}</Select.Option>
                    ))}
              </Select>
              </Form.Item>



              <Form.Item
              label={<span className='text-white'>Distributor Mobile</span>}
              className=" relative w-full"
              name= 'distributorDetails_distMobile'
              rules={[
                {
                  required: true,
                  message: 'Please input Distributor Mobile!',
                },
              ]}
              >
                <Select
                  allowClear
                  showSearch
                  placeholder="Distributor Mobile"
                  onChange={handleDistchange}
                  size='large'>
                    {
                    distributorSelectData.length > 0?
                    distributorSelectData.map((dist, index)=> (
                      <Select.Option key={dist.distEun} value={dist.distMobile}>{dist.distMobile}</Select.Option>
                    )):
                    distributorData.map((dist, index)=> (
                      <Select.Option key={dist.distEun} value={dist.distMobile}>{dist.distMobile}</Select.Option>
                    ))
                    }
              </Select>
              </Form.Item>

{/* ***************************************RM DETAILS***************************************************** */}


        <h1 className=' text-white'>{`RM Details`}</h1>

            <Form.Item
              label={<span className='text-white'>RM Name</span>}
              className=" relative w-full"
              name= 'rmDetails_rmName'
              rules={[
                {
                  required: true,
                  message: 'Please input RM Name!',
                },
              ]}
              >
                <Select
                  allowClear
                  showSearch
                  placeholder="RM Name"
                  onChange={handleRmchange}
                  size='large'>

                    {rmData.map((rm, index)=> (
                      <Select.Option key={rm.distID} value={rm.rmName}>{rm.rmName}</Select.Option>
                    ))}
                    
              </Select>
              </Form.Item>

              <Form.Item
              label={<span className='text-white'>RM EUIN</span>}
            name='rmDetails_rmEUIN'
            className='relative w-full'
            rules={[
              {
                required: true,
                message: 'Please input RM EUIN!',
              },
            ]}>
               <Select
                  allowClear
                  showSearch
                  placeholder="Select RM EUIN"
                  onChange={handleRmchange}
                  size='large'>
                    {rmData.map((rm, index)=> (
                      <Select.Option key={rm.distID} value={rm.rmEun}>{rm.rmEun}</Select.Option>
                    ))}
              </Select>
            </Form.Item>



              <Form.Item
              label={<span className='text-white'>RM Email</span>}
              className=" relative w-full"
              name= 'rmDetails_rmEmail'
              rules={[
                {
                  required: true,
                  message: 'Please input RM Email!',
                },
              ]}
              >
                <Select
                  allowClear
                  showSearch
                  placeholder="RM Email"
                  onChange={handleRmchange}
                  size='large'>
                    {rmData.map((rm, index)=> (
                      <Select.Option key={rm.distID} value={rm.rmEmail}>{rm.rmEmail}</Select.Option>
                    ))}
              </Select>
              </Form.Item>



              <Form.Item
              label={<span className='text-white'>RM Mobile</span>}

              className=" relative w-full"
              name= 'rmDetails_rmMobile'
              rules={[
                {
                  required: true,
                  message: 'Please input RM Mobile!',
                },
              ]}
              >
                <Select
                  allowClear
                  showSearch
                  placeholder="RM Mobile"
                  onChange={handleRmchange}
                  size='large'>
                    {rmData.map((rm, index)=> (
                      <Select.Option key={rm.distID} value={rm.rmMobile}>{rm.rmMobile}</Select.Option>
                    ))}
              </Select>
              </Form.Item>

              <Form.Item>
              <Button
              type='primary'
              htmlType='submit'
              >
                Next
              </Button>
            </Form.Item>  
          </Form>
    </>
  )
}

export default RmDistributorDetails