import React from 'react';
import c1 from '../../images/customers/1.png';
import c2 from '../../images/customers/3.png';
import c3 from '../../images/customers/2.png';
import c4 from '../../images/customers/4.png';
import CustomerCard from '../../common-components/Customer-card/CustomerCard';
import {Box,Container} from '@mui/material';
import './Customers.css'

export default function Customers() {
  const customers= [{name:'Satya', position:'CEO',src:c1},
                    {name:'Alex', position:'Developer',src:c2},
                    {name:'James', position:'Designer',src:c3},
                    {name:'Mike', position:'QA',src:c4},]
  return (
    <Container className='customer-container' id='customers'>
        <Box className='service-title'>What our Customers Have to Say</Box>
        <Box className="align-text">
            <Box className='service-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Box>
        </Box>
       
        <div className="customer-cards">
            {
              customers.map((customer)=> <CustomerCard customer={customer}/>)
            }
        </div>
    </Container>
  )
}
