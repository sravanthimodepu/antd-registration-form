import React , {useEffect, useState} from 'react'

import {AddressFirstHolder, BankDetails, CapitalContributionCommitment, 
    FirstHolder, GaurdianDetails, Nomination, OtherDetails, SecondHolder, 
    ContactFirstHolder, ThirdHolder, RmDistributorDetails, Success , FormButtons} from './formComponents'


import { useStateContext } from '../contexts/ContextProvider'

const OnboardingForm = () => {

    const {formData , setFormData} = useStateContext()
    const data = formData;
    const [step, setStep] = useState(1)


    const handleClick = (instruction) => {
        if (instruction === 'next' && step < 12 ) {
            setStep(step + 1)     
        }
        else if(instruction === 'back' && step > 1) {
            setStep(step - 1)
        }
        else {setStep(step)}
        }

        useEffect(() => {
            console.log(step)
        } , [step])

    

    

    const stepsArray = [
        "RM and Distributor Details",
        "First Holder",
        "Gaurdian Details ",
        "Second Holder",
        "Third Holder",
        "Address - First Holder",
        "Contact Details First Holder",
        "Capital / Contribution and commitment",
        "Nomination",
        "Bank Details",
        "Other Details",
        'Success'
    ]




    const displayStep = (currentStep) => {
        switch (currentStep) {
            case 1:
                return <RmDistributorDetails             
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 2:
                return <FirstHolder 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 3:
                return <GaurdianDetails 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 4:
                return <SecondHolder 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 5:
                return <ThirdHolder 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 6:
                return <AddressFirstHolder 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 7:
                return <ContactFirstHolder 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 8:
                return <CapitalContributionCommitment 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 9:
                return <Nomination 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 10:
                return <BankDetails 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 11:
                return <OtherDetails 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            case 12:
                return <Success 
                handleClick = {handleClick}
                step = {step}
                stepsArray = {stepsArray}/>
            default:
                return <div>Oops You are in a Wrong Place Go Back to Home</div>
        }
    }

  return (
   <div
   className=' border-1 border-red-500 flex flex-col text-center items-center'>       
            <h1
            style={{fontSize: '1.5vw'}}
            className='text-white'>
            {stepsArray[step-1]}</h1>
            {displayStep(step)}
            {/* <div
            className={`flex justify-between w-1/2 m-6    ${step === stepsArray.length ? 'hidden': ''}`}>
            <FormButtons
            handleClick = {handleClick}
            step = {step}
            stepsArray = {stepsArray}/>
            </div> */}
    </div>
  )
}

export default OnboardingForm