import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Box, Typography} from '@mui/material';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center", bgcolor:"black", color:"white",p:3 }}>

        <Box sx={{my: 3, "& svg" :{fontSize:"50px", cursor: "pointer", me: 2}, "& svg:hover":{ color: "goldenrod", transform: "translateX(5px)",
    transition:"all 400ms"}}}>
           {/*icons*/}

         <InstagramIcon/>
         <WhatsAppIcon/>
         <GitHubIcon/>
        </Box>

         <Typography variant="h5" sx={{"@media (max-width:600px)":{fontSize: "1rem"}}}>
            All rights reserved &copy; Ayush Chhetri
         </Typography>
    </Box>
    </>
  )
}

export default Footer