import { Box, Grid, Stack, Typography } from "@mui/material"
import { css } from "@emotion/react"

const SecondaryFooter = () => {

    const styles = {
        mainContainer: css`
            background: #111213;
            
            display: flex;
            justify-content: center;
            padding: 5vh 5vw;
        `,
        text: css`
        color: rgb(255 255 255 / 30%);
            &:hover{
                cursor: pointer;
                color: rgb(255 255 255 / 50%);
            }
        `
    }

    return(
        <Box sx={styles.mainContainer}>
            <Grid container columns={12} direction={{md: "row", sm: "column"}}>
                <Grid item md={12} xs={12}>
                    <Typography sx={{color: "rgb(255 255 255 / 60%)"}}>Related Services</Typography>
                </Grid>
                <Grid item md={2} sm={6}>
                    <Stack>
                    <Typography sx={styles.text}>Gym Near Me</Typography>
                    <Typography sx={styles.text}>Yoga Postures for Beginners</Typography>
                    <Typography sx={styles.text}>Bedtime Stories for Kids</Typography>
                    <Typography sx={styles.text}>Gyms in Pune</Typography>
                    <Typography sx={styles.text}>Gyms in Chandigarh</Typography>
                    <Typography sx={styles.text}>Strength Training</Typography>
                    <Typography sx={styles.text}>Core Exercises</Typography>
                    <Typography sx={styles.text}>Fitness Glossary</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={6}>
                    <Stack>
                    <Typography sx={styles.text}>Face Yoga</Typography>
                    <Typography sx={styles.text}>Surya Namaskar for Beginners</Typography>
                    <Typography sx={styles.text}>Meditation in Hindi</Typography>
                    <Typography sx={styles.text}>Gyms in Hyderabad</Typography>
                    <Typography sx={styles.text}>Gyms in Indore</Typography>
                    <Typography sx={styles.text}>Mobility Exercises</Typography>
                    <Typography sx={styles.text}>Butt Exercises</Typography>
                    <Typography sx={styles.text}>Morning Exercises</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={6}>
                    <Stack>
                    <Typography sx={styles.text}>Healthy Recipes</Typography>
                    <Typography sx={styles.text}>Yoga For Stress Relief</Typography>
                    <Typography sx={styles.text}>Mindfulness Meditation</Typography>
                    <Typography sx={styles.text}>Gyms in Chennai</Typography>
                    <Typography sx={styles.text}>Gyms in Coimbatore</Typography>
                    <Typography sx={styles.text}>Kids Exercise</Typography>
                    <Typography sx={styles.text}>Arm Workout at Home</Typography>
                    <Typography sx={styles.text}>Home Workouts</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={6}>
                    <Stack>
                    <Typography sx={styles.text}>Chest Exercises</Typography>
                    <Typography sx={styles.text}>Yoga Asanas</Typography>
                    <Typography sx={styles.text}>Yoga Nidra</Typography>
                    <Typography sx={styles.text}>Gyms in Jaipur</Typography>
                    <Typography sx={styles.text}>Gyms in Bangalore</Typography>
                    <Typography sx={styles.text}>How to Lose Weight</Typography>
                    <Typography sx={styles.text}>Back Exercises at Home</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={6}>
                    <Stack>
                    <Typography sx={styles.text}>Exercise To Reduce Belly Fat</Typography>
                    <Typography sx={styles.text}>Meditation Music</Typography>
                    <Typography sx={styles.text}>Gyms in Mumbai</Typography>
                    <Typography sx={styles.text}>Gyms in Kolkata</Typography>
                    <Typography sx={styles.text}>Belly Fat Loss Exercise</Typography>
                    <Typography sx={styles.text}>HIIT Workout</Typography>
                    <Typography sx={styles.text}>Abs Workout at Home</Typography>
                    </Stack>
                </Grid>
                <Grid item md={2} sm={6}>
                    <Stack>
                    <Typography sx={styles.text}>Six Pack Workout</Typography>
                    <Typography sx={styles.text}>Pranayama</Typography>
                    <Typography sx={styles.text}>Gyms in Delhi</Typography>
                    <Typography sx={styles.text}>Gyms in Ahmedabad</Typography>
                    <Typography sx={styles.text}>Weight Loss Exercise</Typography>
                    <Typography sx={styles.text}>Exercises for Toned Body</Typography>
                    <Typography sx={styles.text}>Thigh Exercises</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SecondaryFooter;