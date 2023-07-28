import { Box, Grid, Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Cards = () => {
  const styles = {
    box1: css`
      background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/cult-transform-glass-green.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 60vh;
      margin-bottom: 5rem;
      border-radius: 30px;
      transition: all 0.3s;
      padding: 2rem 3rem;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `,
    box2: css`
      background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/glass-blog-multi-color.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 60vh;
      border-radius: 30px;
      transition: all 0.3s;
      padding: 2rem 3rem;
      margin-bottom: 5rem;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `,
    box3: css`
      background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/glass-workout-gear.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 60vh;
      border-radius: 30px;
      transition: all 0.3s;
      padding: 2rem 3rem;
      margin-bottom: 5rem;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `,
    box4: css`
      background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/sugar-fit-glass-purple.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 60vh;
      border-radius: 30px;
      transition: all 0.3s;
      padding: 2rem 3rem;
      margin-bottom: 5rem;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `,
    mainContainer: css`
      padding: 15vh 0;
      display: flex;
      justify-content: space-evenly;
    `,

    innerText: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    `,
    heading: css`
      font-size: 1.5rem;
      font-weight: bold;
    `,

    subHeading: css`
      font-size: 1.2rem;
      color: #cacaca;
    `
  };
  return (
    <Box>
      <Grid container maxWidth={"lg"} sx={styles.mainContainer}>
        <Grid item md={4.5} xs={10} sx={styles.box1}>
          <Stack>
            <Box sx={styles.innerText}>
              <Typography sx={styles.heading}>cult transform</Typography>
              <ArrowCircleRightIcon />
            </Box>
            <Typography sx={styles.subHeading}>Get coached to lose weight for good</Typography>
          </Stack>
        </Grid>
        <Grid item md={4.5} xs={10} sx={styles.box2}>
          <Stack>
            <Box sx={styles.innerText}>
              <Typography sx={styles.heading}>The .fit way</Typography>
              <ArrowCircleRightIcon />
            </Box>
            <Typography sx={styles.subHeading}>Making health easy, one at a time</Typography>
          </Stack>
        </Grid>
        <Grid item md={4.5} xs={10} sx={styles.box3}>
          <Stack>
            <Box sx={styles.innerText}>
              <Typography sx={styles.heading}>Workout Gear</Typography>
              <ArrowCircleRightIcon />
            </Box>
            <Typography sx={styles.subHeading}>Everything you need for your workout</Typography>
          </Stack>
        </Grid>
        <Grid item md={4.5} xs={10} sx={styles.box4}>
          <Stack>
            <Box sx={styles.innerText}>
              <Typography sx={styles.heading}>Sugar.fit</Typography>
              <ArrowCircleRightIcon />
            </Box>
            <Typography sx={styles.subHeading}>Reverse Type 2 Diabetes and Prediabetes</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cards;
