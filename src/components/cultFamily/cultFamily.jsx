import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import { css } from "@emotion/react";

const Family = () => {
  const styles = {
    list1: css`
      background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_600,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/join-the-cult/career-at-cult.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 2.5rem;
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `,
    list2: css`
      background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_600,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/join-the-cult/cult-for-business.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 2.5rem;
      transition: all 0.3s;
      
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `,
    mainContainer: css`
      display: flex;
      justify-content: center;
      margin: 5vh 0;
      flex-direction: column;
      align-items: center;
    `,
    heading: css`
      text-align: center;
      padding: 4vh 0;
      color: white;
      font-size: 3rem;
      font-weight: bolder;
      font-family: Inter;
      word-spacing: 0.3rem;
    `,
    insideBox: css`
      background: url("https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_600,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/join-the-cult/career-icons-v2.png");
      height: 25vh;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    `,
    headText: css`
      display: flex;
      flex-direction: column;
      
      font-family: Inter;
      background-image: linear-gradient(115deg, #f8ba00 12%, #ef5fa7 80%);

      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    `,
    headTextDetail: css`
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        font-family: Inter;
    `,
    carrer: css`
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
        font-family: Inter;
        letter-spacing: 0.2rem;
    `
  };

  return (
    <Box sx={styles.mainContainer}>
      <Grid
        container
        maxWidth={"lg"}
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Grid item xs={12}>
          <Typography sx={styles.heading}>Join The Cult Family</Typography>
        </Grid>
        <Grid item md={5.5} sx={styles.list1}>
          <Typography sx={styles.carrer}>Careers At Cult</Typography>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_600,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/join-the-cult/career-icons-v2.png"
            alt=""
            style={{ width: "80%" }}
          />
          <Button>LEARN MORE</Button>
        </Grid>
        <Grid item md={5.5} sx={styles.list2}>
          <Box sx={styles.headText}>
            <Typography sx={styles.headTextDetail}>cult.fit franchise</Typography>
            <Typography sx={styles.headTextDetail}>opportunities</Typography>
          </Box>
          <Typography sx={{color: "white", fontSize: "1.8rem", textAlign: "center"}}>Partner with the largest fitness brand in India</Typography>
          <Button>LEARN MORE</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Family;
