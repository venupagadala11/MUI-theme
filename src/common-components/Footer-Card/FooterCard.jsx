import React from 'react';
import {Box,Container,Button} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './FooterCard.css'
import CustomButton from '../CustomButton/CustomButton';

export default function FooterCard({title}) {
  const footerData = ['About Us','Team','Pricing', 'Boosting','Project']
  return (
    <Box className='footer-card'>
     
        <Box className='card-title'>{title}</Box>
        {
          footerData.map((data)=> <CustomButton name={data} style='footer' icon={<KeyboardArrowRightIcon/>}/>)
        }
    </Box>
  )
}
