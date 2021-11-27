import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { fontFamily } from '@mui/system';

const SignUp = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 32px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#3FC1BB',
  borderColor: '#3FC1BB',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    "Open Sans"
  ].join(','),
  '&:hover': {
    backgroundColor: '#2B7A78',
    borderColor: '#2B7A78',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#2B7A78',
    borderColor: '#2B7A78',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const LoginButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 32px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#2B7A78',
  borderColor: '#2B7A78',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    "Open Sans"
  ].join(','),
  '&:hover': {
    backgroundColor: '#2B7A78',
    borderColor: '#2B7A78',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#2B7A78',
    borderColor: '#2B7A78',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ServicesButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'white',
  borderColor: 'white',
  textColor: 'black',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    "Open Sans"
  ].join(','),
  '&:hover': {
    backgroundColor: 'white',
    borderColor: 'white',
    boxShadow: 'none',
    textColor: 'black',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'white',
    borderColor: 'white',
    textColor: 'black',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const AboutButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'white',
  borderColor: 'white',
  textColor: 'black',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    "Open Sans"
  ].join(','),
  '&:hover': {
    backgroundColor: 'white',
    borderColor: 'white',
    boxShadow: 'none',
    textColor: 'black',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'white',
    borderColor: 'white',
    textColor: 'black',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const LitButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'white',
  borderColor: 'white',
  textColor: '#2B7A78',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    "Open Sans"
  ].join(','),
  '&:hover': {
    backgroundColor: 'white',
    borderColor: 'white',
    boxShadow: 'none',
    textColor: '#2B7A78',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'white',
    borderColor: 'white',
    textColor: '#2B7A78',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export default function BasicButtons() {
  return (
    
    <Stack spacing={12} direction="row" justifyContent="flex-end"> 
      <LitButton  variant="text" sx ={{ mr: 105,color: '#2B7A78', fontFamily:"Open Sans"}}>greenlit</LitButton>
      <AboutButton variant="text" sx ={{color: 'black', fontFamily:"Open Sans"}}>About Us</AboutButton>
      <ServicesButton variant="text" sx ={{color: 'black', fontFamily:"Open Sans"}}>Services</ServicesButton>
      <LoginButton variant="contained" sx={ { borderRadius: 3, fontFamily:"Open Sans" } }>Login</LoginButton>
      <SignUp variant="contained" sx={ { borderRadius: 3, fontFamily:"Open Sans" } }>Sign up</SignUp>
    </Stack>
  );
}