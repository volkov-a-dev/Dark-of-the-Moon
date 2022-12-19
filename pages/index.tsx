import styles from "../styles/Home.module.css";
import MainContainer from "../components/MainContainer";
import DescriptionCard from "../components/DescriptionCard";
import CommentCard from "../components/CommentCard";
import RartingCard from "../components/RatingCard";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
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
            <Grid item className={styles.map_container}>
              <MapWithNoSSR />
            </Grid>
            <Grid container justifyContent="space-between" my={3}>
              <Grid>
                <CommentCard />
              </Grid>
              <Grid>
                <RartingCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainContainer>
  );
}
