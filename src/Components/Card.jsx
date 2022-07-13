import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: "2px solid black" 
  },
  content:{
    textAlign:"center",
    fontFamily: 'Montserrat'
  }
});

export default function CardInfo({bodyPart,equipment,gifUrl,name,target}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={gifUrl}
          title={name}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h6" component="h2">
            Exercise Name: {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Target Muscle: {target}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Body Part: {bodyPart}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Equipment Used: {equipment}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
