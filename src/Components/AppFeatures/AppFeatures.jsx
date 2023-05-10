import React from 'react';
import AppFeature from '../../common-components/AppFeature/AppFeature';
import featureData from '../../data';
import mobile2 from '../../images/new-features/mobile-2.svg';
import './AppFeatures.css';
import {Container,} from '@mui/material'

export default function AppFeatures() {
  return (
    <Container maxWidth='xl' >
    <div className='app-features'>
      <div className='align-features'>
        <div className='app-title'>App Features</div>
        <div className='app-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</div>
          <div className='feature-iterate'>
            {
                featureData.map((feature,index)=><AppFeature featureData={featureData} currentIndex={index}/>)
            }
          </div>
      </div>
      <div className='mobile-2'>
        <img className='mobile-img' src={mobile2} alt="mobile-2" />
      </div>
    </div>
    </Container>
  )
}
