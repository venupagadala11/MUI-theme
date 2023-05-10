import React from 'react';
import {Box} from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import './Download.css';
import CustomButton from '../../common-components/CustomButton/CustomButton';
import AppleIcon from '@mui/icons-material/Apple';

export default function Download() {
  return (
    <div className='download-container'>
        <Box className='box1'></Box>
        <Box className='data'>
            <Box className='download-title'>Download Now !</Box>
            <Box className='download-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Box>
            <Box className="download-buttons">
            <CustomButton name='play store' style='icon' icon={<AndroidIcon/>} />
            <CustomButton name='apple store' style='icon' icon={<AppleIcon/>} />
            </Box>
        </Box>
        <Box className='box2'></Box>
    </div>
  )
}
