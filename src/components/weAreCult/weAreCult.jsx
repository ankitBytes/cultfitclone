import { Grid, Box, Typography, Stack } from "@mui/material";
import { css } from "@emotion/react";

const WeAreCult = () => {

    const styles = {
        imageContainer: css`
            background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1000,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/we_are_cult_new.svg");
            // background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 80vh;
        `,
        mainContainer: css`
            display: flex;
            justify-content: center;
        `,
        textContainer: css`
            width: 33%;
            float: right;
            height: 100%;
            margin: 0 5vw 0 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
        `,
        text: css`
            font-size: 2rem;
            font-weight: bold;
            color: rgb(255 255 255 / 70%);
        `
    }


    return(
        <Box sx={styles.mainContainer}>
            <Grid container maxWidth={"xl"}>
                <Grid item sx={styles.imageContainer} md={12}>
                <Box sx={styles.textContainer}>
                    <Typography sx={styles.text}>At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.</Typography>
                    <Typography sx={styles.text}>#BeBetterEveryDay</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )

}

export default WeAreCult;