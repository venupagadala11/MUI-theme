import React from 'react';
import { Button,Container } from '@mui/material';
import './CustomButton.css';
import AndroidIcon from '@mui/icons-material/Android';

export default function CustomButton({name,style,icon}) {
  return (
    <div>
      <Button className={style} startIcon={icon}>{name}</Button>
    </div>
  )
}
