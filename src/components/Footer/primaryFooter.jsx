import { Stack, Grid, Box, Typography } from "@mui/material";
import { css } from "@emotion/react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PrimaryFooter = () => {
  const styles = {
    mainContainer: css`
      background: #000;
      width: 100%;
      color: white;
      padding: 6vh 0;
    `,

    text:css`
        /* color: inherit; */
        color: rgb(255 255 255 / 70%);
    `
  };

  return (
    <Box sx={styles.mainContainer}>
      <Grid container maxWidth={"xl"} sx={{display: 'flex', justifyContent: "center", alignItems: 'center'}} maxHeight={"100%"} rowSpacing={{xs: 1}}>
        <Stack direction={{xs: 'column', md: 'row'}} width={"100%"} justifyContent={"center"}>
          <Grid item md={3} justifyContent={"center"} display={"flex"} direction={"column"} padding={"5vh 0"}>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" style={{width: '60%', paddingBottom: '2vh'}}/>
            <Typography textAlign={"center"} sx={styles.text}>At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay</Typography>
          </Grid>
          <Grid item md={2} justifyContent={"center"} display={{md:"flex", xs: 'none'}} xs={8}>
            <Stack justifyContent={"space-around"}>
                <Typography sx={styles.text}>cult.fit for business</Typography>
                <Typography sx={styles.text}>cult.fit franchise</Typography>
                <Typography sx={styles.text}>corporate partnerships</Typography>
                <Typography sx={styles.text}>cult pass network</Typography>
                <Typography sx={styles.text}>t&c for business</Typography>
            </Stack>
          </Grid>
          <Grid item md={2} justifyContent={"center"} display={{md:"flex", xs: 'none'}}>
            <Stack justifyContent={"space-around"}>
                <Typography sx={styles.text}>partner.fit</Typography>
                <Typography sx={styles.text}>blogs</Typography>
                <Typography sx={styles.text}>security</Typography>
                <Typography sx={styles.text}>carrers</Typography>
            </Stack>
          </Grid>
          <Grid item md={2} justifyContent={{md:"center", xs:'flex-start'}} display={"flex"}>
            <Stack justifyContent={"space-around"}>
                <Typography sx={styles.text}>contact us</Typography>
                <Typography sx={styles.text}>privacy policy</Typography>
                <Typography sx={styles.text}>cult bmi calculator</Typography>
                <Typography sx={styles.text}>terms & conditions</Typography>
            </Stack>
          </Grid>
          <Grid item md={2} justifyContent={"center"} display={{md:"flex", xs: 'none'}} xs={8}>
            <Stack justifyContent={"space-around"} alignItems={"flex-end"}>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/appstore.svg" alt="" width={"80%"}/>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/googleplay.svg" alt="" width={"80%"}/>
            <Stack direction={"row"} width={"100%"} justifyContent={"space-around"}>
                <YouTubeIcon />
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
            </Stack>
            </Stack>
          </Grid>
          
        </Stack>
      </Grid>
    </Box>
  );
};

export default PrimaryFooter;
