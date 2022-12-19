import * as React from "react";
import styles from "./HomePage.module.css";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const CommentCard: React.FC = () => (
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

export default CommentCard;
