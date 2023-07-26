import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { css } from "@emotion/react";
import CircleIcon from "@mui/icons-material/Circle";

const PassDetail = () => {
  const styles = {
    mainBox: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem 0;
    `,
    mainContainer: css`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    `,
    mainFont: css`
      color: white;
      font-weight: bold;
      padding: 1rem 0;
    `,
    secondary: css`
      color: rgb(255 255 255 / 70%);
      font-size: 1.2rem;
      padding: 0.5rem 0;
    `,
    free: css`
      color: white;
      border: 1px solid transparent;
      background: rgb(255 255 255 / 10%);
      border-radius: 5px;
      font-weight: bold;
      width: 100%;

      &:hover {
        background: rgb(255 255 255 / 20%);
      }
    `,

    more: css`
      width: 100%;
      color: orange;
      background: white;
      font-weight: bold;

      &:hover {
        color: black;
        background: white;
      }
    `,

    image: css`
      position: relative;
    `,
  };
  return (
    <Box sx={styles.mainBox}>
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_259,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
        alt=""
        style={{ width: "16.188rem" }}
      />
      <Button sx={{ margin: "3rem 0" }}>Learn More</Button>
      <Grid container maxWidth="md" sx={styles.mainContainer}>
        <Grid item md={3} sm={3} xs={12}>
          <Box sx={{postion: 'relative', transition: "transform 0.5s", "&:hover" : {
            "transform" : "scale(1.1)",
            "cursor" : "pointer"
          }}}>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png"
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
          <Typography variant="h5" sx={styles.mainFont}>
            Unlimited Access To
          </Typography>
          <Typography sx={styles.secondary}>At-center group classes</Typography>
          <Typography sx={styles.secondary}>All ELITE & PRO gyms</Typography>
          <Typography sx={styles.secondary}>At-home live workouts</Typography>
          <Stack direction={"row"} spacing={1} padding={"1rem 0"}>
            <Grid item md={6}>
              <Button sx={styles.free}>TRY FOR FREE</Button>
            </Grid>
            <Grid item md={6}>
              <Button sx={styles.more}>LEARN MORE</Button>
            </Grid>
          </Stack>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        
        <Box sx={{postion: 'relative', transition: "transform 0.5s", "&:hover" : {
            "transform" : "scale(1.1)",
            "cursor" : "pointer"
          }}}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png"
            alt=""
            style={{ width: "100%" }}
          />
          </Box>
          <Typography variant="h5" sx={styles.mainFont}>
            Unlimited Access To
          </Typography>
          <Typography sx={styles.secondary}>All PRO gyms</Typography>
          <Typography sx={styles.secondary}>
            2 Sessions/m at ELITE gyms & group classes
          </Typography>
          <Typography sx={styles.secondary}>At-home live workouts</Typography>
          <Stack direction={"row"} spacing={1}>
            <Grid item md={6}>
              <Button sx={styles.free}>TRY FOR FREE</Button>
            </Grid>
            <Grid item md={6}>
              <Button sx={styles.more}>LEARN MORE</Button>
            </Grid>
          </Stack>
        </Grid>
        <Grid item md={3} sm={3} xs={12}>
        <Box sx={{postion: 'relative', transition: "transform 0.5s", "&:hover" : {
          "transform" : "scale(1.1)",
          "cursor" : "pointer"
        }}}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png"
            alt=""
            style={{ width: "100%" }}
          />
          </Box>
          <Typography variant="h5" sx={styles.mainFont}>
            Unlimited Access To
          </Typography>
          <Typography sx={styles.secondary}>At home workouts</Typography>
          <Typography sx={styles.secondary}>Celebrity Workouts</Typography>
          <Typography sx={styles.secondary}>
            Goal-based Workouts and Meditation Sesssions
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Grid item md={6}>
              <Button sx={styles.free}>TRY FOR FREE</Button>
            </Grid>
            <Grid item md={6}>
              <Button sx={styles.more}>LEARN MORE</Button>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PassDetail;
