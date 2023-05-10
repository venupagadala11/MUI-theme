import React from 'react';
import { Container,Button,Box } from '@mui/material';
import './FeaturesAnalysis.css';
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import mobile4 from '../../images/new-features/mobile-4.svg'

export default function FeaturesAnalysis() {
  return (
    <Container maxWidth="lg" class='fearures-analysis' id='works'>
        <Box className='content' >
            <Box class='pa-title'>App Features</Box>
            <Box class='desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Box>
            <Box className="pa-buttons">
                <Button id='pa-b' variant="outlined" className='view-more' >Community</Button>
                <Button id='pa-b' variant="outlined" className='view-more' >Slef Work</Button>
                <Button id='pa-b' variant="outlined" className='view-more' >Teamwork</Button>
            </Box>
            <Box class='pa-title'>Great Product Analytics</Box>
            <Box class='pa-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</Box>
            <Box class='product-content'><DoneIcon sx={{color:'blue',padding:' 0px 20px 0px 0px'}}/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Box>
            <Box class='product-content'><DoneIcon sx={{color:'blue',padding:' 0px 20px 0px 0px'}}/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Box>
            <Box class='product-content'><DoneIcon sx={{color:'blue',padding:' 0px 20px 0px 0px'}}/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Box>
            <Button  className='view-more' endIcon={<KeyboardArrowRightIcon/>}>Click To Veiw More</Button>
        </Box>
        <Box className='mobile-4'>
            <img src={mobile4} alt="mobile-4" />
        </Box>
    </Container>
  )
}
