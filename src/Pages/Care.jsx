import {
    CardActionArea,
    Grid,
    Typography,
    CardMedia,
    Card,
    CardContent,
    Box
  } from "@mui/material";
  import React from "react";
import PrimaryFooter from "../Components/Footer/primaryFooter";
// import Header from "../Components/Layout/Header";
import Navbar from "../Components/navbar/secondaryNavbar";
  const Care = () => {
    return (
      <Box display={"flex"} flexDirection={"column"} width={"100%"} alignItems={"center"}>
        <Navbar />
        <h1>Mindfulness library</h1>
        <h2> THE MIND IS EVERYTHING WHAT YOU THINK YOU BECOME</h2>
        <p>Access our pre-recorded Meditation sessions at your convenience</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image="  https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/00504b6d-fa0d-47cf-8cae-8f1f61cdc171"
                    alt="9 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      One Rep at a time
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Join podcast host ,deepak in his quest to build a fitness
                      habit for life.tune in every weekday for health.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/00a5f2c0-5e37-45fb-b869-f880d17d5763"
                    alt="3 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Covid Recovery
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      it's time to say goodbye to the physical and mental stress
                      brought upon by this virus.this program focusses
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/8e929664-cd36-4b5d-8c6c-ca135c678a84"
                    alt="1 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Running Program
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      this is a combination of 3 different styles of running
                      making it fun a clear working workout to clear ur mind
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/94cf3985-f59e-48b3-88b3-fb1fef54d39a"
                    alt="1 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      30 Minutes yoga Nidra
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      it is an powerful practise which has a profound effect on
                      you body and mind to reduce stress and anxiety
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/83a5a31b-68f8-4acd-b6ff-d7bb8430ecd5"
                    alt="4 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Meditation for Kids
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      the language is simple and engaging and something thet would
                      captures a child's imagination journey.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/92999294-93a8-434d-af21-034185207cae.jpg"
                    alt="12 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Sleep Meditation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This series will help you relax to drift into a peaceful and
                      deep sleep,many stories are there for peaceful sleep
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/5964450b-e7d3-468a-8217-9dec24b0be93.jpg"
                    alt="4 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Music for Mindfullness
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Music for the mind ! stress ,sleep or focus ,let Music cover
                      it all with an ambient touch with sounds of nature
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/3778c07f-310c-4d01-8a4c-89f190351799"
                    alt="1 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Emotional health in a global crisis
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The world are facing an unprecedented situation and we all
                      are feeling the efforts pn our emotional health.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
  
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/b972e214-a48f-4272-a1cb-cf46b67b8ebc"
                    alt="9 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      guided meditation programs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The program helps one walk throgh the series of steps in a
                      comfortable posture with proper breathing
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
  
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/c4a9c1d1-4f01-42a5-8654-9b6155c04586"
                    alt="1 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Practice
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Continue your practice of meditation with less guidance and
                      more silence.the right way for practice
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
  
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/9122b134-13f2-4acd-b35b-ab3f3016b8c4.jpg"
                    alt="10 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Practice Gratitude
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      the mother of all emotions ! created by this series will
                      help you develop gratitude and thankfullness in life.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
  
            <Grid item xs={6} md={5}>
              <Card sx={{ maxWidth: "95%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/687e2fdb-5302-43d9-b63e-01bcf8655b79.jpg"
                    alt="12 packs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      meditation-Relationship
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      It will enhance and renew ur relation and help you heal from
                      a breakup by connecting with love ,sympathy.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
        <PrimaryFooter />
      </Box>
    );
  };
  
  export default Care;
  