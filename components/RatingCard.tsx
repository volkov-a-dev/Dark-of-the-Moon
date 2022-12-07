import * as React from 'react'
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const RartingCard: React.FC = () => {
  const [value, setValue] = React.useState<number | null>(4)

  const handleRaitingChange = (event: React.SyntheticEvent<Element, Event>) => {
    setValue(Number((event.target as HTMLInputElement).value))
  }

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
  )
}

export default RartingCard
