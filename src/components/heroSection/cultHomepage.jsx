import {Box, Stack, Grid, Typography, Button} from "@mui/material"
import { css } from "@emotion/react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Homepage = () => {


    const styles = {
        mainBox: css`
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 15vh;
            background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        `,
        img: css`
            height: 30vh;
            width: 30vw;
        `,
        container: css`
            
        `,

        button: css`
            padding: 0.5rem 1rem;
            background-color: white;
            color: orange;
            font-weight: bold;
            transition: color 0.5s;

            &:hover {
                color: black;
                background-color: white;
            }
        `,
        downArrowButton: css`
            color: white;
            font-weight: normal;
            padding: 1rem 0;
            
            &:hover {
                background-color: transparent;
            }
        `,

        downIcon: css`
            font-size: 2.5rem;
            transition: transform 0.4s;

            &:hover {
                transform: scale(1.1);
                font-size: 3rem;
                color: orange;
            }
        `
    }
    return(
        <Box>
            <Grid container maxWidth={"xl"} sx={styles.mainBox}>
            <Grid item md={4}>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png" alt="" style={{width: '35vw'}}/>
            </Grid>
            <Grid item sx={{padding: "2rem 0"}}>
                <Typography variant={"h4"} width={"40vw"} textAlign={"center"} sx={{color: "white"}}>A fitness movement that is worth breaking a sweat for</Typography>
            </Grid>
            <Grid item>
                <Button sx={styles.button}>EXPLORE CULTPASS</Button>
            </Grid>
            <Grid item>
                <Button sx={styles.downArrowButton} disableRipple><KeyboardArrowDownIcon sx={styles.downIcon}/></Button>
            </Grid>
            </Grid>
        </Box>
    )
}

export default Homepage;


