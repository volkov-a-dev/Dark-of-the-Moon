import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const DescriptionCard: React.FC = () => (
  <Card sx={{ width: "100%", borderRadius: "12px" }}>
    <CardMedia
      component="img"
      height="200"
      image="https://media.istockphoto.com/id/639607852/photo/hairstylist-serving-client-at-barber-shop.jpg?s=612x612&w=0&k=20&c=-kBoMs26KIX1Hl6uh_VLRHCtLxnLYyq9a0n7X8iu5MQ="
      alt="barbershop"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Barbershop
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Barbershop description
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default DescriptionCard;
