import React , {createContext , useContext , useState} from "react";

const StateContext = createContext();


//  This is state is to maintain the different options of the webapp
const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
}

// Initial Onboardingdata Blue print 
// if any automatic data filling is required then it should be done here
const initialOnboardingData = {
    rmDetails : {
        rmEun : '',
        name : '',
        email : '',
        mobile : '',
    },
    distributorDetails : {
        distributorEun : '',
        name : '',
        email : '',
        mobile : '',
    },
    firstHolder : {
        salutation : '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        pan: '',
        fatherOrHusbandName: '',
        dob: '',
        cKYC: '',
        address : {
            addressType : '',
            sameAsCorrespondence : '',
            addressLine1 : '',
            addressLine2 : '',
            pinCode : '',
            City : '',
            state : '',
            country : ''
        },
        contactDetails : {
            telephone : '',
            mobile : '',
            phone : '',
            email : '',
            alternateEmail : '',
            twitter : '',
            linkedIn : '',
            facebook : ''
        }

    },
    guardianDetails : {
        name : '',	
        pan : '',
        minorDob : '',
        dobAttached : '',
        guardianRelation : ''
    },
    secondHolder : {
        salutation : '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        pan: '',
        cKYC: '',
    },
    thirdHolder : {
        salutation : '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        pan: '',
        cKYC: '',
        Relationship : '',
        modeOfHolding : '',
    },
    capitalContributionCommitment : {
        commitment: '',
        contributionType : '',
        ifsc: '',
        bank: '',
        branch: '',
        accountType: '',
        accountNumber: '',
        chequeOrDDNumber: '',
        Amount: '',
    },
    nomination: {
        nominationPreference : '',
        nomineeName : '',
        dob : '',
        relationship : '',
        guardianName : '',
        guardianPan : '',
    },
    bankDetails : {
        accountNumber : '',
        accountType : '',
        ifscCode: '',
        bankName: '',
        branchName: '',
        micr: '',
        paymentMode: '',
    },
    otherDetails : {
        grossAnnualIncome : '',
        netWorth : '',
        occupation : '',
        politicallyExposed : '',
    }
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize , setScreenSize] = useState(undefined);
    const [formData , setFormData] = useState(initialOnboardingData);

    const handleClick = (clicked)=>{
        setIsClicked({
            ...initialState,
            [clicked]: !isClicked[clicked]
        })
    }
    return (
        <StateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            handleClick,
            screenSize,
            setScreenSize,
            formData,
            setFormData
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);