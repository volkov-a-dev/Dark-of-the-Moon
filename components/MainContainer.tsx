import styles from "../styles/Home.module.css";
import Head from "next/head";
import Navbar from "./Navbar";
import { Box, Grid } from "@mui/material";

interface MainContainerProps {
  children: JSX.Element | JSX.Element[];
  keywords?: string;
}

const MainContainer = ({ children, keywords = "" }: MainContainerProps) => {
  return (
    <Box className={styles.main_container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="keywords"
          content={"relocation, work aboard, find clients" + keywords}
        />
      </Head>
      <Navbar />
      <Grid container justifyContent="center">
        {children}
      </Grid>
    </Box>
  );
};

export default MainContainer;
