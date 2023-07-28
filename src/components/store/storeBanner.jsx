import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import { css } from "@emotion/react";

const Banner = () => {

    const styles = {
        mainImage: css`
            background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1200,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/download-app/download-app-variant-2.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 40vh;
            border-radius: 2rem;
        `,
        mainContainer: css`
            // display: flex;
            // justify-content: center;
            margin: 4rem;
            
        `,
        textContainer: css`
            width: 30vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 3rem;
        `,
        head: css`
            color: white;
            font-weight: bold;
        `
    }
    return(
        <Box >
            <Grid maxWidth={"lg"} sx={styles.mainContainer}>
            <Grid item xs={8}>
                <Box sx={styles.mainImage}>
                    <Box sx={styles.textContainer}>
                        <Typography variant="h5" sx={styles.head}>Download the most loved fitness app</Typography>
                        <Typography color={"rgb(255 255 255 / 80%)"}>Start your fitness journey with us. Join the cult!</Typography>
                        <Stack direction={"row"} spacing={1}>
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/appstore.svg" alt="" style={{width: '50%'}}/>
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/appstore.svg" alt="" style={{width: '50%'}}/>
                        </Stack>
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner;