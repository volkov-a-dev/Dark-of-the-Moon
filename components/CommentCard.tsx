import * as React from "react";
import styles from "../styles/Home.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CommentCard: React.FC = () => {
  return (
    <Card sx={{ minWidth: 400 }} className={styles.comment_card}>
      <CardContent>
        <Typography variant="h5" component="div">
          Comment content
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
