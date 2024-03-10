import React from 'react';
import {Box} from '@mui/material';
import Navbar from '../component/Navbar';


const NotFound = () => {
  return (
    <>
      <Navbar/>
      <Box sx={{height:'81vh',display:'flex',alignItems:"center",justifyContent:"center"}}>

        <h1>Page Not found!</h1>
      </Box>
    </>
  );
}

export default NotFound;
