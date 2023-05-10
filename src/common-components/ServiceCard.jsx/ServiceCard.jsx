import React,{useState} from 'react';
import {Box} from '@mui/material';
import './ServiceCard.css';

// import Divider from '@mui/joy/Divider';
import DoneIcon from '@mui/icons-material/Done';
import CustomButton from '../CustomButton/CustomButton';

export default function ServiceCard({service}) {
  const [isFocused,setIsFocused] = useState(false)
  return (
    <div className='card-container' onMouseLeave={()=>setIsFocused(false)} onMouseOver={()=>setIsFocused(true)}>
      <Box className='price-head'>
        <Box>
            <img className={isFocused?'price-img':'price-img-filter'} src={service.src} alt="price-img"/>
        </Box>
        <Box className='pricing'>
            <Box className='price-title'>{service.title}</Box>
            <Box className='price'>$<Box className='price-title'>{service.price}</Box>/mo</Box>
        </Box>
      </Box>
      <Box className='card-divider'/>
      <Box className='product-content'><DoneIcon sx={{color:'blue',padding:' 0px 20px 0px 0px'}}/>Full access</Box>
      <Box className='product-content'><DoneIcon sx={{color:'blue',padding:' 0px 20px 0px 0px'}}/>Resorce files</Box>
      <Box className='product-content'><DoneIcon sx={{color:'blue',padding:' 0px 20px 0px 0px'}}/>Code upload</Box>
      <Box className='product-content'><DoneIcon sx={{color:'blue',padding:' 0px 20px 0px 0px'}}/>Enhanced security</Box>
      <Box className='product-content'><DoneIcon sx={{color:'blue',padding:' 0px 20px 0px 0px'}}/>Free installment</Box>
      <CustomButton name='buy now' style='service' />
    </div>
  )
}
