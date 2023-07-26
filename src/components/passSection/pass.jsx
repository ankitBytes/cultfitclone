import { Grid, Box, Typography, Stack } from "@mui/material";
import { css } from "@emotion/react";

const PassHome = () => {
  const styles = {
    mainBox: css`
      display: flex;
      justify-content: center;
      padding: 10vh 0;
    `,
    passContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 3px solid black;
      padding: 3vh 2vw;
      color: rgb(255 255 255 / 60%);
      background: rgb(255 255 255 / 5%);
      border: 1px solid rgb(255 255 255 / 20%);
      border-radius: 1rem;

      &:hover {
        cursor: pointer;
        border-color: rgb(255 255 255 / 20%);
        background: rgb(255 255 255 / 10%);
      }
    `,
  };

  return (
    <Box sx={styles.mainBox}>
      <Grid
        container
        maxWidth={"lg"}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item md={3.5} sm={4} xs={12} sx={styles.passContainer}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
            alt=""
            style={{ paddingBottom: "0.5rem" }}
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
            alt=""
            style={{ paddingBottom: "0.5rem" }}
          />
          <Typography textAlign={"center"}>
            Unlimited access to group classes, all gyms and at-home workouts
          </Typography>
        </Grid>
        <Grid item md={3.5} sm={4} xs={12} sx={styles.passContainer}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
            alt=""
            style={{ paddingBottom: "0.5rem" }}
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
            alt=""
            style={{ paddingBottom: "0.5rem" }}
          />
          <Typography textAlign={"center"}>
            Unlimited access to all PRO gyms and at-home workouts
          </Typography>
        </Grid>
        <Grid item md={3.5} sm={4} xs={12} sx={styles.passContainer}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
            alt=""
            style={{ paddingBottom: "0.5rem" }}
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg"
            alt=""
            style={{ paddingBottom: "0.5rem" }}
          />
          <Typography textAlign={"center"}>
            Unlimited access to at-home workouts with calorie tracking
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PassHome;
