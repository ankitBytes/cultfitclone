import React, {useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import '../../Styles/HeaderStyles.css';
const Header = () => {
  const[mobileOpen, setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>

     <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1, my:1.4}}>
          <FitnessCenterIcon />
          Fitness Cult
          </Typography>

         <Divider />
               <ul className="mobile-navigation">
               <li>
                  <Link to={"/"}>HOME</Link>
                </li>

                <li>
                  <Link to={"/care"}>CARE</Link>
                </li>

                <li>
                  <Link to={"/mind"}>MIND</Link>
                </li>

                <li>
                  <Link to={"/store"}>STORE</Link>
                </li>
                
               </ul>
    </Box>
  )

  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:" #15171C;", backgroundImage:"linear-gradient(to bottom, #171A26, rgba(23, 26, 38, 0.0001));"}}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2, display:{sm: "none"}}}
             onClick={handleDrawerToggle}>
         
            <MenuIcon /> 

          </IconButton>
        
        <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="vman-and-white-cult-text" class=" style-prefix-5blrfd efaomd31" loading="lazy" width="120" height="31.007751937984494"/>
          </Typography>

          <Box sx={{display:{xs:"none", sm:"block"} }}>
               <ul className="navigation-menu">
               <li>
                  <Link to={"/"}>HOME</Link>
                </li>

                <li>
                  <Link to={"/care"}>CARE</Link>
                </li>

                <li>
                  <Link to={"/mind"}>MIND</Link>
                </li>

                <li>
                  <Link to={"/store"}>STORE</Link>
                </li>
                
               </ul>
          </Box>
        
        </Toolbar>
        
      </AppBar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen} 
        onClose={handleDrawerToggle} sx={{display: {xs:"block", sm:"none"},
        "& .MuiDrawer-paper": 
        { boxSizing: "border-box",
          width: "240px" }}}>
          {drawer}
        </Drawer>

      </Box>
      <Box>
      <Toolbar/>
      </Box>
      
      </Box>
     
    </>
  );
};

export default Header;