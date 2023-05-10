import React from 'react';
import {Box,Container,Divider,Button} from '@mui/material';
import ServiceCard from '../../common-components/ServiceCard.jsx/ServiceCard';
import './Service.css';
import p1 from '../../images/service/1.PNG';
import p2 from '../../images/service/starter.PNG';
import p3 from '../../images/service/3.PNG';
import p4 from '../../images/service/1.PNG';

export default function Service() {
  const services = [{title:'Free',price:0,src:p1},
                    {title:'Starer',price:19,src:p2},
                    {title:'Bussiness',price:39,src:p3},
                   {title:'Ultimate',price:59,src:p4},]
  return (
    <Container className='service-container' id='service'>
        <Box className='service-title'>Our Services</Box>
        <Box className="align-text">
            <Box className='service-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Box>
        </Box>
        
        <div className="service-cards">
        {
          services.map((service,index)=><ServiceCard service={service}/>)
        }
        </div>
    </Container>
  )
}
