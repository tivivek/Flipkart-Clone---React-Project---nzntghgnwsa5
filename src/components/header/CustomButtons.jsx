import React, { useState } from 'react'

import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { style } from '@mui/system';
import { Link } from 'react-router-dom';
//components
import LoginDialog from '../login/LoginDialog';


const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  }
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
    marginRight: '40px !important',
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: 12,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      color: '#2874f0',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 10
    }
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  }
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #FFFFFF;
  text-transform: none;
  font-weight: 600;
  border-radius: 1;
  padding: 5px 40px;
  height: 32;
  box-shadow: none;
`
//function starts
const CustomButton = () => {

  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  }

  return (
    <Wrapper>
      <LoginButton variant='contained' onClick={openDialog}>Login</LoginButton>

      <Typography style={{ marginTop: 5, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 5 }}>More</Typography>

      <Container to='/cart'>
        <ShoppingCart />
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={ setOpen} />
    </Wrapper>
  )
}

export default CustomButton