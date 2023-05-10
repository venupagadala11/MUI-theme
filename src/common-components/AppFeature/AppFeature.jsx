import React from 'react';
// import img from '../../images/new-features/device.jpg';
import './AppFeature.css'

export default function AppFeature({featureData,currentIndex}) {
  return (
    <div className='feature'>
      <div className='feature-logo'>
        <img className='logo' src={featureData[currentIndex].src} alt="image" />
      </div>
      <div className='feature-title'>{featureData[currentIndex].title}</div>
      <div className='feature-desc'>{featureData[currentIndex].desc}</div>
    </div>
  )
}
