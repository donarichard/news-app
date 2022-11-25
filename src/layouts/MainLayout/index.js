import { Box } from '@mui/system'
import PropTypes from 'prop-types';
import React from 'react'
import HeaderComponent from '../../components/AppHeader';

export default function MainLayout({Children}) {
  return (
    <Box sx={{
        margin:0,
        height:"100%vh",
        width:"100%vh",

    }}>
      <HeaderComponent />
        <Children/>
    </Box>
  )
}

MainLayout.prototype={
    children:PropTypes.element.isRequired
}