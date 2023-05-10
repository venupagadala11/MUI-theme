import React from 'react';
import {Container,Box,Button} from '@mui/material';
import mobile3 from '../../images/new-features/mobile-3.svg';
import './ProductAnalysis.css';
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ProductAnalysis() {
  return (
    <Container className='container'>
        <Box className="mobile-3">
            <img className='mobile-image' src={mobile3} alt="mobile-3" />
        </Box>
        <Box className='product-details'>
            <Box class='title'>Great Product Analytics</Box>
            <Box class='desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Box>
            <Box class='product-content'><DoneIcon sx={{color:'#3f51b5',padding:' 0px 20px 0px 0px'}}/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Box>
            <Box class='product-content'><DoneIcon sx={{color:'#3f51b5',padding:' 0px 20px 0px 0px'}}/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Box>
            <Box class='product-content'><DoneIcon sx={{color:'#3f51b5',padding:' 0px 20px 0px 0px'}}/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Box>
            <Button className='view-more'  endIcon={<KeyboardArrowRightIcon/>}>Click To Veiw More</Button>
        </Box>
        
    </Container>
    
  )
}
