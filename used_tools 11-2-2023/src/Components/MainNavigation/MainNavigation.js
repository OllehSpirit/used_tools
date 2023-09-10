import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import QueryStatsIcon from '@mui/icons-material/QueryStats';

import classes from './MainNavigation.module.css'
// import ShoppingCardLoading from '../(x) Shopping Card Loading Animation/ShoppingCardLoadingAnimation'
function MainNavigation(){

    //cart
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
      const theme = createTheme({
        palette: {
          primary: {
            main: purple[500],
          },
          secondary: {
            main: '#f44336',
          },
          white:{
            main: '#ffffff',
          }
        },
      });


    return(
        <div className={classes.mainNav}>
            <img src='Images/Logo.png' alt='Logo' className={classes.img}/>
            <a href="#home" className={classes.nav}>H O M E</a>
            <a href="#features" className={classes.nav}>S T O R E S</a>
            <a href="#products" className={classes.nav}>C A T E G O R I E S</a>
            <a href="#products" className={classes.nav}>L A T E S T<span className={classes.num}>+20</span></a>
            {/* <a href="#contactUs" className={classes.nav}>C O N T A C T &nbsp; U S</a> */}

            <div className={classes.container}>
                <div className={classes.row}>
                    <input type='text' placeholder='Search'/>
                    <div className={classes.icon}>
                        <i class='fa fa-search'></i>
                        <i class='fa-solid fa-xmark'></i>
                    </div>
                </div>
            </div>
            
            <ThemeProvider theme={theme} >
                <QueryStatsIcon className={classes.advancedSearch} color='white'></QueryStatsIcon>
            </ThemeProvider>
            <span className={classes.adv}>Advanced</span>

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.advancedSearch} class="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                    <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                </svg>
            </svg> */}

            

            <ThemeProvider theme={theme} >
                <IconButton aria-label="cart" color="white" className={classes.cart}>
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </ThemeProvider>

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="bi bi-cart3" className={classes.cart} viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg> */}
        </div>
            
    );
}
export default MainNavigation; 