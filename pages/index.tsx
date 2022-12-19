import dynamic from "next/dynamic";
import MainContainer from "../components/MainContainer";
import {
  DescriptionCard,
  RatingCard,
  CommentCard,
} from "../components/homePage";
import { Grid } from "@mui/material";

const MapWithNoSSR = dynamic(() => import("../components/homePage/Map"), {
  ssr: false,
});

const Home = () => (
  <MainContainer>
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="start"
      my={4}
      maxWidth="xl"
    >
      <Grid item container xs={3} justifyContent="end">
        <DescriptionCard />
      </Grid>
      <Grid item xs={7}>
        <Grid
          container
          direction="column"
          justifyContent="start"
          alignItems="start"
        >
          <Grid container>
            <MapWithNoSSR />
          </Grid>
          <Grid container justifyContent="space-between" my={3}>
            <Grid>
              <CommentCard />
            </Grid>
            <Grid>
              <RatingCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </MainContainer>
);

export default Home;
