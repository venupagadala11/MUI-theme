import React from 'react';
import mobile1 from '../../images/mobile-1.svg';
import {Container,Button} from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import './MusicApp.css';
import CustomButton from '../../common-components/CustomButton/CustomButton';
import AppleIcon from '@mui/icons-material/Apple';

export default function MusicApp() {
  return (
    <Container id='home'>
    <div className='musci-app'>
      <div className='mobile'>
        <div>
            <img className='mobile-phone' src={mobile1} alt="mobile"/>
        </div>
      </div>
      <div className='app-data'>
        <div className='music'>Evelynn Music</div>
        <div className='app-popularity'>Best Music App 2022</div>
        <div className='app-description'>Lorem ipsum dolor sit amet, consetrtur sadipsling eltir, sed diam nounmy eirmod tempor invidont ut labore et dolore magna</div>
        <Button className='app-link' id='home' variant="outlined">Click to watch a video</Button>
        <div className="buttons">
            <CustomButton name='play store' style='icon' icon={<AndroidIcon/>} />
            <CustomButton name='apple store' style='icon' icon={<AppleIcon/>} />
        </div>
      </div>
    </div>
    <div id='demos'></div>
    </Container>
  )
}
