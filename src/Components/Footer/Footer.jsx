import React,{useState} from 'react';
import {Box,Container,Button} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
import MailIcon from '@mui/icons-material/Mail';
import FooterCard from '../../common-components/Footer-Card/FooterCard';

export default function Footer() {
  const [isBoundryActive, setIsBoundryActive] = useState(true)
  return (
    <div className='footer-container' id='contact'>
        <Box className='footer-1'>
          <Box className="footer-title">About Us</Box>
          <Box className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing.</Box>
          <Box className="footer-imgs"><FacebookIcon className='footer-sm'/><TwitterIcon className='footer-sm'/><InstagramIcon className='footer-sm'/><LinkedInIcon className='footer-sm'/></Box>
        </Box>
        <FooterCard title='Company'/>
        <FooterCard title='Usefull Links'/>
        <Box className='footer-4'>
          <Box className="footer-title">About Us</Box>
          <Box className='footer-desc'>Sign Up for the latest news</Box>
          <Box className={isBoundryActive?'input-bar':'addBoundry'} onClick={()=>setIsBoundryActive(false)} onBlur={()=>setIsBoundryActive(true)}><span class='mail'><MailIcon/></span><input type='text' id='input'  placeholder='YOUR EMAIL'></input>
          </Box>
          <Button className='footer-button' variant="contained">Subscribe</Button>
        </Box>
    </div>
  )
}
