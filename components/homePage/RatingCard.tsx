import * as React from "react";
import styles from "./HomePage.module.css";
import { Card, CardContent, Typography, Rating } from "@mui/material";

const RatingCard: React.FC = () => {
  const [value, setValue] = React.useState<number | null>(4);

  const handleRaitingChange = (event: React.SyntheticEvent<Element, Event>) => {
    setValue(Number((event.target as HTMLInputElement).value));
  };

  return (
    <Card sx={{ minWidth: 300 }} className={styles.rating_card}>
      <CardContent>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={handleRaitingChange}
        />
        <Typography variant="h5" component="div">
          Based on 100+ reviews
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RatingCard;
