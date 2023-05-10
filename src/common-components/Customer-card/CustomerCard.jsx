import React,{useState} from 'react';
import c1 from '../../images/customers/1.png';
import './CustomerCard.css';
import {Box} from '@mui/material';
import StartIcon from '@mui/icons-material/Start';
import twitter from '../../images/customers/twitter.png';


export default function CustomerCard({customer}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div >
      <fieldset className='customer-card' onMouseLeave={()=>setIsFocused(false)} onMouseOver={()=>setIsFocused(true)}>
        <legend className='cus-img'><img className={isFocused?'change-bg':'customer-img'} src={customer.src} alt="customer-image" /></legend>
        <Box className='customers-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Box>
        <Box className='customer-card-divider'></Box>
        <StartIcon className='start-icon'/><StartIcon className='start-icon'/><StartIcon className='start-icon'/><StartIcon className='start-icon'/><StartIcon className='start-icon'/>
        <Box className='name'>{customer.name}</Box>
        <Box className='position'>{customer.position} <img className={isFocused?'change-filter':'social-media'} src={twitter} alt="twittwe" /></Box>
    </fieldset>
    </div>
  )
}

