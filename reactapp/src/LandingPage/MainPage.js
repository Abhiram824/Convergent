import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { fontFamily } from '@mui/system';
import { Typography } from '@mui/material';

const StartedButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '8px 50px',
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
  

export default function Land() {
    return (
        <div className="App">
          {/* Setting the text to center with align prop */}
          <Typography align="left" variant="h2" sx={ {  margin: 10, fontFamily:"Open Sans"} }>
            Find Software For <br/> 
            Your Business
          </Typography>
          {/* Setting the text color to primary*/}
          <Typography align = "left" variant="body1" sx={ { margin: 10, fontFamily:"Open Sans", color: '#BABABA' } }>
          Centralized hub to find softwares you <br/>
          need, read real software reviews by similar <br/>
          businesses, access integration support.
          </Typography>
          {/* Setting the text type styling to be like a button */}
        <Typography align="left" sx={ { margin: 10 } }>
            <StartedButton variant="button" sx={ { borderRadius: 3, fontFamily:"Open Sans", color: 'white' } }>
                Get started for free
            </StartedButton>
        </Typography>
        </div>
      );
    }