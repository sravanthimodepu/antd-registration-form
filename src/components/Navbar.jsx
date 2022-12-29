import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {Tooltip } from 'antd';


import avatar from '../data/avatar.jpg'
import {Chat , Notifications , UserProfile} from '.'

import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const { activeMenu , setActiveMenu , isClicked ,handleClick , screenSize , setScreenSize} = useStateContext();

  useEffect(() => {
  const handleResize = () => setScreenSize(window.innerWidth)
  window.addEventListener('resize', handleResize);
  handleResize();

  return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  },[screenSize])


  const NavButton = ({title , customfunc, icon , color , dotColor}) => (
    <Tooltip title={title} placement='bottom'>
      <button type='button' onClick={customfunc}
      style={{color}}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span style={{background: dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
          {icon}
      </button>
    </Tooltip>
  )
  return (
    <div className='flex justify-between p-2
    md:mx-6 relative'>


      {/* Menu Button */}


      <NavButton title="Menu" 
      customfunc={()=>
        setActiveMenu(
          (prevActiveMenu) => !prevActiveMenu
          )
        }
      color='black' 
      icon={<AiOutlineMenu/>}/>
      <div className='flex'>
        

       {/* Chat Button */} 


      <NavButton 
      title="Chat" 
      dotColor= 'red'
      customfunc={()=> handleClick('chat')}
      color='black' 
      icon={<BsChatLeft/>}/>


      {/* Notification Button */}


      <NavButton 
      title="Notification"
      dotColor= 'red'
      customfunc={()=> handleClick('notification')}
      color='black' 
      icon={<RiNotification3Line/>}/>


      <Tooltip 
      title='Profile'
      placement='bottom'>
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
        onClick={()=>handleClick('userProfile')}>
          <img src={avatar} alt="user profile picture" className='rounded-full w-8 h-8'/>
          <p>
            <span className='text-gray-400 text-14'> Hi</span>{` `}
            <span className='text-gray-400 text-14 font-bold ml-1'>Sri</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>

      </Tooltip>
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notifications/>}
        {isClicked.userProfile && <UserProfile/>}
      
       </div>

    </div>

  )
}

export default Navbar