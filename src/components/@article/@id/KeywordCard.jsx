import React from 'react'
import { object, string, node } from 'prop-types'
import {
  withStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'

const styles = {
  root: {
    marginBottom: 15,
  },
}

const KeywordCard = ({ classes, title, avatar, description }) =>
  <Card className={classes.root}>
    {avatar &&
    <CardMedia
      className={classes.media}
      image={avatar}
      title={title}
    />}
    <CardContent>
      <Typography gutterBottom variant="subheading" component="h5" color="primary">
        {title}
      </Typography>
      <Typography component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>

KeywordCard.propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
  avatar: string.isRequired,
  description: node.isRequired,
}

export default withStyles(styles)(KeywordCard)
